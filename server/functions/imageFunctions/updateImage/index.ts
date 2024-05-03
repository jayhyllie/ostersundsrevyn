import { APIGatewayProxyResult } from "aws-lambda";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { sendResponse } from "../../../responses/index";
import { HTTPResponse } from "../../../types";

module.exports.handler = async (event: any): Promise<APIGatewayProxyResult> => {
  try {
    const { imageName, imageData } = JSON.parse(event.body);

    const s3Client = new S3Client();
    const bucketName = "ostersundsrevyn-images";

    const params = {
      Bucket: bucketName,
      Key: imageName,
      Body: imageData,
      ContentType: "image/png",
    };

    console.log(params);

    await s3Client.send(new PutObjectCommand(params));

    return sendResponse(200, {
      success: true,
      message: "Image updated successfully",
    } as HTTPResponse);
  } catch (err) {
    console.error("Error updating image:", err);
    return sendResponse(500, {
      success: false,
      error: "Error updating image",
    });
  }
};
