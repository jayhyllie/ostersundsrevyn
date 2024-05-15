import { DynamoDB } from "aws-sdk";
import { sendResponse } from "../../../responses";
import { Info } from "../../../types";
import { randomUUID } from "crypto";

module.exports.handler = async (event: any) => {
  const {
    id,
    title,
    subtitle,
    content,
    buttonLink,
    buttonText,
    text,
    area,
  }: Info = JSON.parse(event.body);

  try {
    const params = {
      TableName: "infoDb",
      Item: {
        id,
        title,
        subtitle: subtitle || "",
        content,
        buttonLink: buttonLink || "",
        buttonText: buttonText || "",
        text: text || "",
        area: area || "",
      },
    };
    await new DynamoDB.DocumentClient().put(params).promise();

    return sendResponse(200, {
      success: true,
      message: "Info added successfully",
    });
  } catch (error) {
    console.error("Error adding info:", error);
    return sendResponse(500, {
      success: false,
      error: "Error adding info",
    });
  }
};
