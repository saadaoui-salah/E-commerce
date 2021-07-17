import { gql } from '@apollo/client'

export const ADD_PRODUCT = gql`
mutation createProduct(
    $name : String!
    $quantity: Int
    $priceVender: Float!
    $priceAchat: Float
    $detail: String
    $image : Upload!
    ) {
        createProduct(
            name: $name
            quantity: $quantity
            priceVender: $priceVender
            priceAchat: $priceAchat
            detail: $detail
            image: $image
        ) {
            success
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
                refreshToken
            }
    }
`