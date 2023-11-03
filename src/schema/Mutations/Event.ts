import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  graphqlSync,
} from "graphql";
import { evento } from "../../Entities/evento";
import { hashPassword, comparePassword } from "../../libs/bcrypt";
import { MessageType } from "../TypeDefs/Message";
import { EventType } from "../TypeDefs/event";
//import { GraphQLDateTime } from '../TypeDefs/datetime'; // Asegúrate de importar correctamente

export const CREATE_EVENT = {
  type: EventType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    registered: {  type: GraphQLString  },
    updated: {  type: GraphQLString  },
    status: { type: new GraphQLNonNull(GraphQLInt) },
  },
  async resolve(parent: any, args: any) {
    const { name, description, status } = args;
    const registered = new Date().toISOString();
    
    const result = await evento.insert({
        name, description, registered, status
    });
    
    return { ...args, id: result.identifiers[0].id, registered};
  },
};

export const DELETE_EVENT = {
  type: GraphQLBoolean,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(_: any, { id }: any) {
    const result = await evento.delete({ id });
    if (result.affected! > 0) return true;
    return false;
  },
};

export const UPDATE_EVENT = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    input: {
      type: new GraphQLInputObjectType({
        name: "EventInput",
        fields: () => ({
          name: { type: new GraphQLNonNull(GraphQLString) },
          description: { type: new GraphQLNonNull(GraphQLString) },
          registered: { type: new GraphQLNonNull(GraphQLString) },
          updated: { type: new GraphQLNonNull(GraphQLString) },
          status: { type: new GraphQLNonNull(GraphQLInt) },
        }),
      }),
    },
  },
  async resolve(_: any, { id, input }: any) {
    const userFound = await evento.findOneBy({ id });
    if (!userFound) throw new Error("User not found");
    return {
      success: true,
      message: "Update User successfully",
    };
  },
};
