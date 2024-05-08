import { DynamoDB } from "aws-sdk";
import { sendResponse } from "../../../responses";
import { User } from "../../../types";

module.exports.handler = async (event: any) => {
  const {
    id,
    age,
    bio,
    city,
    email,
    memberIn,
    name,
    password,
    phone,
    role,
    sortPosition,
    years,
    images,
  }: User = JSON.parse(event.body);

  try {
    const params: DynamoDB.DocumentClient.GetItemInput = {
      TableName: "Team",
      Key: {
        id,
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

  const params = {
    TableName: "Team",
    Item: {
      id: id,
      age: age || 0,
      bio: bio || "",
      city: city || "",
      email: email || "",
      memberIn: memberIn || "",
      name: name,
      password: password || "",
      phone: phone || "",
      role: role || "",
      sortPosition: sortPosition || 100,
      years: years || 0,
      images: images || {},
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
