import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { APIGatewayProxyResult } from "aws-lambda";
import { sendResponse } from "../../../responses";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({});

module.exports.handler = async (): Promise<APIGatewayProxyResult> => {
  try {
    const response = await client.send(
      new ScanCommand({
        TableName: "historyDb",
      })
    );
    const unmashalled = response.Items?.map((item) => unmarshall(item));
    return sendResponse(200, { success: true, history: unmashalled });
  } catch (err) {
    return sendResponse(err.statusCode, { success: false, error: err.message });
  }
};
