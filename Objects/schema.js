import { makeExecutableSchema } from '@graphql-tools/schema'

import {resolverLinesInterface,typeDefsLinesInterface, resolverNominaSupport, typeDefsNominaSupport } from './Nomina/index.js';
import {resolver_r_Profiles_Tools,typeDefs_r_Profiles_Tools,  resolver_c_Profiles, typeDefs_c_Profiles,
    resolver_c_Users,typeDefs_c_Users, resolver_c_Tools, typeDefs_c_Tools,  resolver_c_Groups, typeDefs_c_Groups} from './FarmaWeb/index.js'

const typeDefs=[typeDefsLinesInterface, typeDefsNominaSupport, typeDefs_r_Profiles_Tools,typeDefs_c_Users, typeDefs_c_Tools,typeDefs_c_Profiles, typeDefs_c_Groups ];
const resolvers=[resolverLinesInterface, resolverNominaSupport, resolver_r_Profiles_Tools, resolver_c_Profiles, resolver_c_Tools, resolver_c_Users, resolver_c_Groups];


export default makeExecutableSchema({typeDefs,resolvers});