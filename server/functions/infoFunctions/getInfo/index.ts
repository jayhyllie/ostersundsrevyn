import { ScanCommand } from "@aws-sdk/client-dynamodb";
import { APIGatewayProxyResult } from "aws-lambda";
import { docClient } from "../../../services/db";
import { sendResponse } from "../../../responses";

module.exports.handler = async (): Promise<APIGatewayProxyResult> => {
  try {
    const command = new ScanCommand({
      TableName: "infoDb",
    });

    const response = await docClient.send(command);
    return sendResponse(200, { success: true, info: response.Items });
  } catch (err) {
    return sendResponse(err.statusCode, { success: false, error: err.message });
  }
};
