import { cGroups, cProfiles } from "../../Modelsdb/index.js";

const typeDefs_c_Groups = `
type cGroups {
    group_id: Int
    profile_id: Int
    profile:cProfiles
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
    getAllGroups: [cGroups]
}

`;

const resolver_c_Groups = {
  Query: {
    getAllGroups: async () => {
      try {
        const data = await cGroups.findAll();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  cGroups: {
    profile: async ({ profile_id }) => await cProfiles.findByPk(profile_id),
  },
};

export { resolver_c_Groups, typeDefs_c_Groups };
