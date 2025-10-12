import { APIGatewayProxyResult } from "aws-lambda";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";
import { sendResponse } from "../../responses/index";
import { HTTPResponse } from "../../types";

export async function handler(event: any): Promise<APIGatewayProxyResult> {
  try {
    const s3Client = new S3Client();
    const params = {
      Bucket: "ostersundsrevyn-images",
      Prefix: "Posters/",
    };

    const response = await s3Client.send(new ListObjectsCommand(params));

    const posters = response.Contents?.map((object) => object.Key)
      .filter((key) => key && key !== "Posters/"); // Filter out the folder itself

    return sendResponse(200, { success: true, posters } as HTTPResponse);
  } catch (err) {
    console.error("Error fetching posters:", err);
    return sendResponse(500, {
      success: false,
      error: "Error fetching posters",
    });
  }
}

