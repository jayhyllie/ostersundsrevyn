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
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const signIn = async (event) => {
  const { email, password } = event.body;

  const params = {
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: process.env.COGNITO_USER_POOL_CLIENT_ID,
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
    },
  };

  const response = await cognito.initiateAuth(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      idToken: response.AuthenticationResult.IdToken,
      accessToken: response.AuthenticationResult.AccessToken,
      refreshToken: response.AuthenticationResult.RefreshToken,
    }),
  };
};

module.exports.handler = middy(signIn)
  .use(jsonBodyParser())
  .use(validator({ inputSchema: schema }))
  .use(httpErrorHandler());
