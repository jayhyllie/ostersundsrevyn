import { APIGatewayProxyResult } from "aws-lambda";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "../../services/db";
import { sendResponse } from "../../responses/index";

export async function handler(): Promise<APIGatewayProxyResult> {
  try {
    const command = new ScanCommand({
      TableName: "Team",
    });
    const response = await docClient.send(command);
    return sendResponse(200, { success: true, team: response.Items });
  } catch (err) {
    return sendResponse(err.statusCode, { success: false, error: err.message });
  }
}
