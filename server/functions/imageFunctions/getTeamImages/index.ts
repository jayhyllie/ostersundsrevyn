import { APIGatewayProxyResult } from "aws-lambda";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";
import { sendResponse } from "../../../responses/index";
import { HTTPResponse } from "../../../types";

module.exports.handler = async (event: any): Promise<APIGatewayProxyResult> => {
  try {
    const s3Client = new S3Client();
    const folders = ["Ensemble", "Orkester", "Produktion"];

    const images: string[] = [];

    for (const folder of folders) {
      const params = {
        Bucket: "ostersundsrevyn-images",
        Prefix: folder,
      };

      const response = await s3Client.send(new ListObjectsCommand(params));

      const folderImages = response.Contents?.map((object) =>
        object.Key?.startsWith(folder) ? object.Key : null
      ).filter((key) => key !== null) as string[];

      images.push(...folderImages);
    }

    return sendResponse(200, { success: true, images } as HTTPResponse);
  } catch (err) {
    console.error("Error fetching images:", err);
    return sendResponse(500, {
      success: false,
      error: "Error fetching images",
    });
  }
};
