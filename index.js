import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "./Objects/schema.js";
import { importSPKI, jwtVerify, decodeJwt } from "jose";
import { readFileSync } from "fs";

const server = new ApolloServer({
  schema,
});
const spki = readFileSync(
  "./certificateAPI/public_pem_api_sso.pem",
  "utf-8"
).toString();

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {
    const ePublicKey = await importSPKI(spki, "RS512");
    if (
      req.body.operationName === "Login" ||
      req.body.operationName === "IntrospectionQuery"
    ) {
      return { access: true };
    } else {
      const tokenBearer = req.headers.authorization || "";
      const token = tokenBearer.replace("Bearer ", "").replace(" ", "");

      if (token) {
        try {
          const user = await jwtVerify(token, ePublicKey);
          if (user) {
            const decode = decodeJwt(token);
            return decode;
          }
        } catch (error) {
          console.log(error);
          throw Error(error);
        }
      }
    }
  },
});

console.log(`🚀  Server ready at: ${url}`);
