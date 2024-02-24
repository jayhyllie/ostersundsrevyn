import { HTTPResponse } from "../types";

export function sendResponse(code: number, response: HTTPResponse) {
  return {
    statusCode: code,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(response),
  };
}
