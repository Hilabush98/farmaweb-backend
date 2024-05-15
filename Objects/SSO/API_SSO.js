import CryptoJS from "crypto-js";
import * as dotenv from "dotenv";

dotenv.config();

function decrypt(text) {
  const decipher = crypto.createDecipher("aes-256-cbc", process.env.SECRET_KEY);
  let decrypted = decipher.update(text, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
const typeDefs_SSO_API = `
type SSO_API_Response {
    access_token:String
    refresh_token:String
    expires_in:Int
    token_type:String
    error_description:String
    error:String
}
input loginInput{
    user:String!
    pass:String!

}
type Query {
    Login(credentials:loginInput): SSO_API_Response
}

`;

const resolver_SSO_API = {
  Query: {
    Login: async (_, { credentials }, context) => {
      console.log("contex", context);
      console.log(credentials);
      const { user, pass } = credentials;
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          grant_type: "client_credentials",
          client_id: user,
          client_secret: pass,
          scope: "*",
        }),
      };
      try {
        let res = {};
        await fetch(
          "https://api-oauth2-fda.apps.cloud-ocp-stg.fahorro.com.mx/oauth2/ldap/jwt",
          requestOptions
        )
          .then((response) => response.json())
          .then((data) => (res = data))
          .catch((error) => (res = error));
        return res;
      } catch (error) {
        return error;
      }
    },
  },
};

export { resolver_SSO_API, typeDefs_SSO_API };
