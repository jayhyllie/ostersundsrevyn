import { sendResponse } from "../../../responses";
import { APIGatewayProxyResult } from "aws-lambda";
import { S3 } from "aws-sdk";
const multipart = require("lambda-multipart-parser");

const s3 = new S3();

module.exports.handler = async (event): Promise<APIGatewayProxyResult> => {
  try {
    const body = await multipart.parse(event);
    const file = body.files[0];

    // Check if image format is PNG
    if (!file.type.match("image/png")) {
      throw new Error("Invalid image format. Only PNG files are allowed.");
    }

    // Extract folder path from event (replace 'folderPath' with actual property name)
    const folder = event.folder || "";

    // Construct the object key with folder path
    const objectKey = `${folder}/${file.filename}`;

    const params = {
      Key: objectKey,
      Body: file.content,
      Bucket: "ostersundsrevyn-images",
    };

    await s3.putObject(params).promise();

    return sendResponse(200, {
      success: true,
      message: "Image uploaded successfully!",
    });
  } catch (error) {
    return sendResponse(500, { success: false, message: error.message });
  }
};
