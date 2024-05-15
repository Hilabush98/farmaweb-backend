import { cProfiles, cTools } from "../../Modelsdb/index.js";

const typeDefs_c_Profiles = `
type cProfiles {
    profile_id: Int
    profileTools:[rProfilesTools]
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
  cProfiles: {
    profileTools: async ({ profile_id }) =>
      cTools.findAll({ where: { profile_id } }),
  },
};

export { resolver_c_Profiles, typeDefs_c_Profiles };
