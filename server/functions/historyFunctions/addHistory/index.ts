import { DynamoDB } from "aws-sdk";
import { HistoryItem } from "../../../types";
import { sendResponse } from "../../../responses";

module.exports.handler = async (event: any) => {
  const { id, title, content }: HistoryItem = JSON.parse(event.body);

  const params = {
    TableName: "historyDb",
    Item: {
      id,
      title,
      content,
    },
  };

  try {
    await new DynamoDB.DocumentClient().put(params).promise();
    return sendResponse(200, {
      success: true,
      message: "History item added successfully",
    });
  } catch (error) {
    return sendResponse(500, {
      success: false,
      error: "Error adding history item",
    });
  }
};
