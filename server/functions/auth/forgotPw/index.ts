import middy from "@middy/core";
const AWS = require("aws-sdk");
const Joi = require("joi");
const {
  jsonBodyParser,
  httpErrorHandler,
  validator,
} = require("@middy/middlewares");

const cognito = new AWS.CognitoIdentityServiceProvider();

const schema = Joi.object({
  email: Joi.string().email().required(),
});

const forgotPassword = async (event) => {
  const { email } = event.body;

  const params = {
    ClientId: process.env.COGNITO_USER_POOL_CLIENT_ID,
    Username: email,
  };

  await cognito.forgotPassword(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Password reset initiated" }),
  };
};

module.exports.handler = middy(forgotPassword)
  .use(jsonBodyParser())
  .use(validator({ inputSchema: schema }))
  .use(httpErrorHandler());
