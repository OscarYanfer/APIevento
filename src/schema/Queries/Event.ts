import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { evento } from "../../Entities/evento";
import { EventType } from "../TypeDefs/event";

export const GET_ALL_EVENTS = {
  type: new GraphQLList(EventType),
  resolve() {
    return evento.find();
  },
};

export const GET_EVENT = {
  type: EventType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(_: any, args: any) {
    const result = await evento.findOneBy({ id: args.id });
    return result;
  },
};
