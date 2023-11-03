import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from "graphql";
import { GraphQLDateTime } from './datetime'; // Asegúrate de importar correctamente


export const EventType = new GraphQLObjectType({
  name: "event",
  description: "event Type Definition",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    registered: { type: GraphQLDateTime },
    updated: { type: GraphQLDateTime },
    status: { type: GraphQLInt },
  }),
});
