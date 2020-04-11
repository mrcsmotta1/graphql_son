import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export default new GraphQLObjectType({
  name: "person",
  description: "Define a person object",
  fields() {
    return {
      id: {
        type: GraphQLID,
        description: "Unique ID",
        resolve: () => "2",
      },
      name: {
        type: GraphQLString,
        description: "Person name",
        resolve: () => "Marcos",
      },
    };
  },
});
