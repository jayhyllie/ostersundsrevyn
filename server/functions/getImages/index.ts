import { APIGatewayProxyResult } from "aws-lambda";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";
import { sendResponse } from "../../responses/index";
import { HTTPResponse } from "../../types";

export async function handler(event: any): Promise<APIGatewayProxyResult> {
  try {
    const year = event?.queryStringParameters?.year;
    const s3Client = new S3Client();
    const params = {
      Bucket: "ostersundsrevyn-images",
      Prefix: year ? `Galleri/${year}` : "",
    };

    const response = await s3Client.send(new ListObjectsCommand(params));

    const images = response.Contents?.map((object) =>
      object.Key?.replace(`${year}/`, "")
    );

    return sendResponse(200, { success: true, images } as HTTPResponse);
  } catch (err) {
    console.error("Error fetching images:", err);
    return sendResponse(500, {
      success: false,
      error: "Error fetching images",
    });
  }
}
