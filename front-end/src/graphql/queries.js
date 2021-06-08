import { gql } from '@apollo/client'

export const LOAD_PRODUCTS = gql`
    query{
        getProducts {
            id
            image
            name
            parentCategory{
                category
            }
            category {
              category,
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
        getCategories{
            id,
            category
        }
    }
`

export const LOAD_PARENT_CATEGORIES = gql`
    query ($id: ID!){
        getCategories(parentCategoryId:$id){
            id,
            category
        }
    }
`