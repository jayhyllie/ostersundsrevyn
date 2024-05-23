import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { APIGatewayProxyResult } from "aws-lambda";
import { sendResponse } from "../../../responses";

const client = new DynamoDBClient({});

module.exports.handler = async (): Promise<APIGatewayProxyResult> => {
  try {
    const response = await client.send(
      new ScanCommand({
        TableName: "historyDb",
      })
    );

    return sendResponse(200, { success: true, history: response.Items });
  } catch (err) {
    return sendResponse(err.statusCode, { success: false, error: err.message });
  }
};
