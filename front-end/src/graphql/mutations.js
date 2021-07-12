import { gql } from '@apollo/client'

export const ADD_PRODUCT = gql`
mutation addProduct(
    $vendor: ID!
    $category: ID!
    $parentCategory: ID!
    $name: String!
    $priceVender: Int!
    $priceAchat: Int!
    $detail: String!
    $quantity: Int!
    ){
        updateProduct(
            vendor: $vendor
            category: $category
            parentCategory: $parentCategory
            name: $name
            priceVender: $priceVender
            priceAchat: $priceAchat
            detail: $detail
            quantity: $quantity
        ){
            product{
                id
            }
    }
}
`

export const ADD_CATEGORY = gql`
mutation addCategory( $category: String! ){
        createCategory( category: $category ){
            succes
            errors
        }
    } 
`

export const LOGIN = gql`
mutation tokenAuth(
    $username: String!
    $password: String!
    ){
        tokenAuth(
            username: $username
            password: $password
            ){
                success
                token
            }
    }
`