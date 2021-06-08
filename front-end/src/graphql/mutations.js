import { gql } from '@apollo/client'

export const ADD_PRODUCT = gql`
mutation addProduct(
    $id:ID!
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
            id:$id
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