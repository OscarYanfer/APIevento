import { GraphQLScalarType, Kind } from 'graphql';

const GraphQLDateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'A custom DateTime scalar',
  serialize(value) {
    if (value instanceof Date) {
      return value.toISOString();
    }
    throw new Error('DateTime cannot represent an invalid Date instance');
  },
  parseValue(value) {
    if (typeof value === 'string') {
      const date = new Date(value);
      if (isNaN(date.getTime())) {
        throw new Error('DateTime cannot represent an invalid date string');
      }
      return date;
    }
    throw new Error('DateTime cannot represent an invalid value');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      const date = new Date(ast.value);
      if (isNaN(date.getTime())) {
        throw new Error('DateTime cannot represent an invalid date string');
      }
      return date;
    }
    throw new Error('DateTime cannot represent an invalid AST kind');
  },
});

export { GraphQLDateTime };
