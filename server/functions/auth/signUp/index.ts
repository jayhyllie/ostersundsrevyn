import middy from "@middy/core";
const Joi = require("joi");
const AWS = require("aws-sdk");
const {
  jsonBodyParser,
  httpErrorHandler,
  validator,
} = require("@middy/middlewares");

const cognito = new AWS.CognitoIdentityServiceProvider();

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: Joi.string().required(),
});

const signUp = async (event) => {
  const { name, email, password, role } = event.body;

  const params = {
    ClientId: process.env.COGNITO_USER_POOL_CLIENT_ID,
    Username: email,
    Password: password,
    UserAttributes: [
      { Name: "email", Value: email },
      { Name: "name", Value: name },
      { Name: "custom:role", Value: role },
    ],
  };

  await cognito.signUp(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "User signed up" }),
  };
};

module.exports.handler = middy(signUp)
  .use(jsonBodyParser())
  .use(validator({ inputSchema: schema }))
  .use(httpErrorHandler());
