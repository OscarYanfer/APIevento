import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GREETING } from "./Queries/Greeting";
import { GET_ALL_EVENTS, GET_EVENT } from "./Queries/Event";
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./Mutations/Event";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greeting: GREETING,
    getAllUsers: GET_ALL_EVENTS,
    getUser: GET_EVENT,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createEvent: CREATE_EVENT,
    deleteEvent: DELETE_EVENT,
    updateEvent: UPDATE_EVENT,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
