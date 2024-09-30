const AWS = require("aws-sdk");
const middy = require("@middy/core");
const Joi = require("joi");
const {
  jsonBodyParser,
  httpErrorHandler,
  validator,
} = require("@middy/middlewares");

const cognito = new AWS.CognitoIdentityServiceProvider();

const schema = Joi.object({
  accessToken: Joi.string().required(),
});

const signOut = async (event) => {
  const { accessToken } = event.body;

  const params = {
    AccessToken: accessToken,
  };

  await cognito.globalSignOut(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "User signed out" }),
  };
};

module.exports.handler = middy(signOut)
  .use(jsonBodyParser())
  .use(validator({ inputSchema: schema }))
  .use(httpErrorHandler());
