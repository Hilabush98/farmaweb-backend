import { cProfiles } from "../../Modelsdb/index.js";

const typeDefs_c_Profiles = `
type cProfiles {
    profile_id: Int
    name: String
    description:String
    order_by: Int
    is_active: Int
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
    getAllProfiles: [cProfiles]
}

`;

const resolver_c_Profiles = {
  Query: {
    getAllProfiles: async () => {
      try {
        const data = await cProfiles.findAll();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export { resolver_c_Profiles, typeDefs_c_Profiles };
