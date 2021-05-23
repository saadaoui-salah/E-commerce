import { gql } from '@apollo/client'

export const LOAD_PRODUCTS = gql`
    query{
        getProducts {
            id
            image
            name
            category {
              category,
              parentCategory {
                category
              }
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
export const LOAD_CATEGORIES = gql`
    query{
        getCategory{
            id,
            parentCategory{
                id
            }
        }
    }
` 

export const LOAD_PARENT_CATEGORIES = gql`
    query{
        getCategory{
            id,
            parentCategory{
                id
            }
        }
    }
` 