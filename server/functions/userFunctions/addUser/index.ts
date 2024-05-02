import { DynamoDB } from "aws-sdk";
import { sendResponse } from "../../../responses";
const { bcrypt } = require("bcryptjs");
const { nanoid } = require("nanoid");

module.exports.handler = async (event: any) => {
  const { email, role, name, password, phone, memberIn } = JSON.parse(
    event.body
  );
  try {
    const params: DynamoDB.DocumentClient.GetItemInput = {
      TableName: "Team",
      Key: {
        email: email,
      },
    };
    const { Item } = await new DynamoDB.DocumentClient().get(params).promise();

    // If user exists, return 400 error
    if (Item) {
      return sendResponse(400, {
        success: false,
        message: "User already exists",
      });
    }
  } catch (error) {
    return sendResponse(500, {
      success: false,
      error: error,
      message: "Error checking existing user",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const id = nanoid();

  const params = {
    TableName: "userDb",
    Item: {
      id,
      email,
      role,
      name,
      password: hashedPassword,
      phone,
      memberIn,
    },
  };
  try {
    await new DynamoDB.DocumentClient().put(params).promise();
    return sendResponse(200, { success: true, message: "User created" });
  } catch (error) {
    return sendResponse(500, {
      success: false,
      error: error,
      message: "Error creating user",
    });
  }
};
