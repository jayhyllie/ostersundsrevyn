import { APIGatewayProxyResult } from "aws-lambda";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { docClient } from "../../services/db";
import { sendResponse } from "../../responses/index";

export async function handler(): Promise<APIGatewayProxyResult> {
  try {
    // Fetch team members from DynamoDB
    const command = new ScanCommand({
      TableName: "Team",
    });
    const response = await docClient.send(command);
    const teamMembers = response.Items || [];

    // Fetch images from S3
    const s3Client = new S3Client();
    const folders = ["Ensemble", "Orkester", "Produktion"];
    const imageMap = new Map<string, string>();

    // Fetch images from each folder
    for (const folder of folders) {
      const params = {
        Bucket: "ostersundsrevyn-images",
        Prefix: `${folder}/`,
      };

      const s3Response = await s3Client.send(new ListObjectsV2Command(params));

      // Map images by ID (extract ID from filename)
      s3Response.Contents?.forEach((object) => {
        if (object.Key) {
          // Extract filename without extension
          // e.g., "Ensemble/abc123.jpg" -> "abc123"
          const match = object.Key.match(/[^\/]+\/([^\.]+)/);
          if (match) {
            const id = match[1];
            const imageUrl = `https://ostersundsrevyn-images.s3.amazonaws.com/${object.Key}`;
            imageMap.set(id, imageUrl);
          }
        }
      });
    }

    // Attach images to team members
    const teamWithImages = teamMembers.map((member) => ({
      ...member,
      image: imageMap.get(member.id) || member.image || null,
    }));

    return sendResponse(200, { success: true, team: teamWithImages });
  } catch (err) {
    return sendResponse(err.statusCode || 500, { 
      success: false,
      error: err.message || "Error fetching team data",
    });
  }
}
