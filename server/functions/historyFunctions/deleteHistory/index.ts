import { DynamoDB } from "aws-sdk";
import { sendResponse } from "../../../responses";

module.exports.handler = async (event) => {
  const id = event.pathParameters.id;

  try {
    const params = {
      TableName: "historyDb",
      Key: {
        id: id,
      },
    };
    await new DynamoDB.DocumentClient().delete(params).promise();

    return sendResponse(200, {
      success: true,
      message: "History item deleted successfully",
    });
  } catch (error) {
    return sendResponse(500, {
      success: false,
      error: error,
      message: "Error deleting history item",
    });
  }
};
