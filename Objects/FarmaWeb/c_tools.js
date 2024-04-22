import { cTools } from "../../Modelsdb/index.js";

const typeDefs_c_Tools = `
type cTools {
    tool_id: Int
    tool_id_father: Int
    tool_father:cTools
    name: String
    description:String
    order_by: Int
    is_active: Int
    configuration:String
    path:String
    created_by: String
    modified_by: String
    created_on: String
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
      }
    },
  },
  cTools: {
    tool_father: async ({ tool_id_father }) => cTools.findByPk(tool_id_father),
  },
};

export { resolver_c_Tools, typeDefs_c_Tools };
