import {gql} from '@apollo/client'

export const LOAD_PRODUCTS = gql`
    query{
        getProducts{
            name
        }
    }
`

export const COUNTERS = gql`
    query{
        productsCounter,
        coustumersCounter,
        ordersCounter,
        vendorsCounter,
        benifitsCounter,

    }
` 