import {gql} from '@apollo/client'

export const LOAD_PRODUCTS = gql`
    query{
        getProducts{
            image,
            name,
            category,
            quantity,
        }
    }
`

export const HOME_COUNTERS = gql`
    query{
        productsCounter,
        consumersCounter,
        ordersCounter,
        vendorsCounter,
        benifitsCounter,

    }
` 