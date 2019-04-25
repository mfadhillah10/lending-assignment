const {GraphQLScalarType, Kind} = require('graphql');

const date = new GraphQLScalarType({
    name: 'Date',
    description: 'Date data type',
    parseValue(value) {
        return new Date(value);
    },
    serialize(value) {
        return value.getTime();
    },
    parseLiteral(ast) {
        if(ast.kind === Kind.INT) {
            return parseInt(ast.value, 10);
        }
        return null
    }
})

module.exports = date;