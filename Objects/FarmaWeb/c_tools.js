import { cTools } from "../../Modelsdb/index.js";

const typeDefs_c_Tools = `
scalar JSON
scalar Date
type cTools {
    tool_id: Int
    tool_id_father: Int
    tool_father:cTools
    name: String
    description:String
    order_by: Int
    is_active: Int
    configuration:JSON
    path:String
    created_by: String
    modified_by: String
    created_on: Date
    modified_on: String
}
type Response {
    code:Int
    status:String
    error:String
}

type Query {
    getAllTools: [cTools]
}

`;

const resolver_c_Tools = {
  Query: {
    getAllTools: async () => {
      try {
        const data = await cTools.findAll();
        return data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  },
  cTools: {
    tool_father: async ({ tool_id_father }) => cTools.findByPk(tool_id_father),
  },
};

export { resolver_c_Tools, typeDefs_c_Tools };
