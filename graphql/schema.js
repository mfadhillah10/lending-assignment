const { gql } = require('apollo-server-express');
const dao = require('../dao/dao');
const { date } = require('./custom-scalar');

const typeDefs = gql`
    scalar Date

    input inputCustomer {
        name: String
        pob: String
        dob: Date
        nik: String
        mmn: String
        mob: String
        npwp: String
    }
    
    type Customer {
        dataId: Int
        name: String
        pob: String
        dob: Date
        nik: String
        mmn: String
        mob: String
        npwp: String
        customerGroup: String
        isActive: Int
    }

    type Query {
        customers: [Customer]
        customer(dataId: Int): Customer
    }

    type Mutation {
        createCustomer(customer: inputCustomer) : Customer
    }
`

const resolvers = {
    Date: () => date,
    Query: {
        customers: async () => await dao.selectAll(),
        customer: (_,{dataId}) => dao.selectId(dataId)
    },
    Mutation: {
        createCustomer: (_,{customer}) => dao.insert(customer)
    }
}

module.exports = {
    typeDefs,
    resolvers
}