import { gql } from "@apollo/client";


export const ADD_FAVORITE = gql`
mutation MyMutation ($input: AddFavoriteInput!)  {
  addFavorite(input: $input) {
    clientMutationId
    string
  } 
}`

export const GET_FAVORITE = gql` 
mutation MyMutation($input:  GetFavoriteInput!) {
  getFavorite(input: $input) {
    strings
  }
}`


export const DELETE_FAVORITE = gql`
mutation MyMutation($input: RemoveLocationInput!) {
  removeLocation(input: $input) {
    string
  }
}
`