import { gql } from '@apollo/client'

export const LOAD_PRODUCTS = gql`
    query{
        
        getProducts{
            id
            image
            name
            category {
              category,
              parent_category
            }
            quantity
            priceAchat,
            priceVender
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