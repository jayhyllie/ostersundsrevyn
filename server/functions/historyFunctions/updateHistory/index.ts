import { DynamoDB } from "aws-sdk";
import { HistoryItem } from "../../../types";
import { sendResponse } from "../../../responses";

module.exports.handler = async (event) => {
  const { id, title, content }: HistoryItem = JSON.parse(event.body);

  try {
    const getHistoryParams = {
      TableName: "historyDb",
      Key: {
        id,
      },
    };
    const { Item } = await new DynamoDB.DocumentClient()
      .get(getHistoryParams)
      .promise();

    if (!Item) {
      return sendResponse(404, {
        success: false,
        message: "History item not found",
      });
    }
  } catch (error) {
    return sendResponse(500, {
      success: false,
      error: error,
      message: "Error checking existing history item",
    });
  }

  try {
    const updateInfoParams = {
      TableName: "historyDb",
      Key: {
        id,
      },
      UpdateExpression: "set #t = :t, #c = :c",
      ExpressionAttributeNames: {
        "#t": "title",
        "#c": "content",
      },
      ExpressionAttributeValues: {
        ":t": title,
        ":c": content,
      },
      ReturnValues: "ALL_NEW",
    };
    await new DynamoDB.DocumentClient().update(updateInfoParams).promise();

    return sendResponse(200, {
      success: true,
      message: "History item updated successfully",
    });
  } catch (error) {
    return sendResponse(500, {
      success: false,
      error: "Error updating history item",
    });
  }
};
