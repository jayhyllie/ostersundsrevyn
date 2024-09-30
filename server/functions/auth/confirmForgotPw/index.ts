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
  code: Joi.string().required(),
  newPassword: Joi.string().required(),
});

const confirmForgotPassword = async (event) => {
  const { email, code, newPassword } = event.body;

  const params = {
    ClientId: process.env.COGNITO_USER_POOL_CLIENT_ID,
    Username: email,
    ConfirmationCode: code,
    Password: newPassword,
  };

  await cognito.confirmForgotPassword(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Password reset confirmed" }),
  };
};

module.exports.handler = middy(confirmForgotPassword)
  .use(jsonBodyParser())
  .use(validator({ inputSchema: schema }))
  .use(httpErrorHandler());
