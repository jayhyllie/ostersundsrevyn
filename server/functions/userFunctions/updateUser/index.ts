import { DynamoDB } from "aws-sdk";
import { sendResponse } from "../../../responses";

module.exports.handler = async (event) => {
  const {
    id,
    email,
    role,
    name,
    password,
    phone,
    bio,
    age,
    city,
    memberIn,
    sortPosition,
  } = JSON.parse(event.body);

  console.log(event.body);

  try {
    // Check if the user exists
    const getUserParams = {
      TableName: "Team",
      Key: {
        id,
      },
    };
    const { Item } = await new DynamoDB.DocumentClient()
      .get(getUserParams)
      .promise();

    // If user doesn't exist, return 404 error
    if (!Item) {
      return sendResponse(404, {
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    return sendResponse(500, {
      success: false,
      error: error,
      message: "Error checking existing user",
    });
  }

  try {
    // Update user details
    const updateUserParams = {
      TableName: "Team",
      Key: {
        id,
      },
      UpdateExpression:
        "set #r = :r, #n = :n, #p = :p, #pw = :pw, #e = :e, #b = :b, #a = :a, #c = :c, #m = :m, #s = :s",
      ExpressionAttributeNames: {
        "#r": "role",
        "#n": "name",
        "#p": "phone",
        "#pw": "password",
        "#e": "email",
        "#b": "bio",
        "#a": "age",
        "#c": "city",
        "#m": "memberIn",
        "#s": "sortPosition",
      },
      ExpressionAttributeValues: {
        ":r": role || "",
        ":n": name || "",
        ":p": phone || "",
        ":pw": password || "",
        ":e": email || "",
        ":b": bio || "",
        ":a": age || 0,
        ":c": city || "",
        ":m": memberIn || "",
        ":s": sortPosition || 100,
      },
      ReturnValues: "ALL_NEW",
    };

    await new DynamoDB.DocumentClient().update(updateUserParams).promise();

    return sendResponse(200, {
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    return sendResponse(500, {
      success: false,
      error: error,
      message: "Error updating user",
    });
  }
};
