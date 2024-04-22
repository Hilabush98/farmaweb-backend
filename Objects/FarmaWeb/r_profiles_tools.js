import { rProfilesTools, cTools, cProfiles } from "../../Modelsdb/index.js";

const typeDefs_r_Profiles_Tools = `
type rProfilesTools {
    profile_id: Int
    profile:cProfiles
    tool_id: Int
    tool:cTools
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
  getAllProfilesTools: [rProfilesTools]
  getAllToolByProfile (profile_id:Int!) : [rProfilesTools]
}

`;

const resolver_r_Profiles_Tools = {
  Query: {
    getAllProfilesTools: async () => {
      try {
        const data = await rProfilesTools.findAll();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    getAllToolByProfile: async (_, { profile_id }) => {
      const data = await rProfilesTools.findAll({
        where: {
          profile_id: profile_id,
        },
      });
      return data;
    },
  },
  rProfilesTools: {
    tool: async ({ tool_id }) => await cTools.findByPk(tool_id),
    profile: async ({ profile_id }) => await cProfiles.findByPk(profile_id),
  },
};

export { resolver_r_Profiles_Tools, typeDefs_r_Profiles_Tools };
