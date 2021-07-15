import { gql } from '@apollo/client'

export const ADD_PRODUCT = gql`
mutation createProduct(
    $file: Upload!
    ) {
        createProduct(
            file: $file
        ) {
            errors
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
                user{
                    type
                }
                success
                token
                refreshToken
            }
    }
`