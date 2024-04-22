import {cUsers, cProfiles} from '../../Modelsdb/index.js';

const typeDefs_c_Users=`
    type cUsers {
        user_id: Int
        profile_id: Int
        profile:cProfiles
        user_name: String
        is_active: Int
    }
    type Response {
        code:Int
        status:String
        error:String
    }
    
    type Query {
        getAllUsers: [cUsers]
    }

`

const resolver_c_Users={
    Query:{
        getAllUsers: async () => {
            try {
              const data=  await cUsers.findAll();
                return data;
            } catch (error) {
                console.log(error);
            }

        },
        
    },
    cUsers:{
        profile:async ({profile_id})=> await cProfiles.findByPk(profile_id)
    }
}

export {resolver_c_Users,typeDefs_c_Users } 