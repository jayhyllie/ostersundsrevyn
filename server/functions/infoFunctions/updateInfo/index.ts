import { DynamoDB } from "aws-sdk";
import { Info } from "../../../types";
import { sendResponse } from "../../../responses";

module.exports.handler = async (event) => {
  const { id, title, subtitle, content, buttonLink, buttonText, text }: Info =
    JSON.parse(event.body);

  try {
    const getInfoParams = {
      TableName: "infoDb",
      Key: {
        id,
      },
    };
    const { Item } = await new DynamoDB.DocumentClient()
      .get(getInfoParams)
      .promise();

    if (!Item) {
      return sendResponse(404, {
        success: false,
        message: "Info not found",
      });
    }
  } catch (error) {
    return sendResponse(500, {
      success: false,
      error: error,
      message: "Error checking existing info",
    });
  }

  try {
    const updateInfoParams = {
      TableName: "infoDb",
      Key: {
        id,
      },
      UpdateExpression:
        "set #t = :t, #s = :s, #c = :c, #bl = :bl, #bt = :bt, #tx = :tx",
      ExpressionAttributeNames: {
        "#t": "title",
        "#s": "subtitle",
        "#c": "content",
        "#bl": "buttonLink",
        "#bt": "buttonText",
        "#tx": "text",
      },
      ExpressionAttributeValues: {
        ":t": title,
        ":s": subtitle || "",
        ":c": content,
        ":bl": buttonLink || "",
        ":bt": buttonText || "",
        ":tx": text || "",
      },
      ReturnValues: "ALL_NEW",
    };
    await new DynamoDB.DocumentClient().update(updateInfoParams).promise();

    return sendResponse(200, {
      success: true,
      message: "Info updated successfully",
    });
  } catch (error) {
    return sendResponse(500, {
      success: false,
      error: error,
      message: "Error updating info",
    });
  }
};
