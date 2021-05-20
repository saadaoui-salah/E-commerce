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
        productCounter,
        coustumersCounter,
        ordersCounter,
        vendorsCounter,
        benifitsCounter,

    }
` 