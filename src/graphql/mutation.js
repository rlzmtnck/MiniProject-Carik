import {gql} from '@apollo/client'

export const SubmitComment = gql`
mutation MyMutation($object: Kampus_Merdeka_CommentList_insert_input!) {
    insert_Kampus_Merdeka_CommentList_one(object: $object) {
      id
    }
  }

`
export const DeleteComment = gql`
  mutation MyMutation($id: Int!) {
    delete_Kampus_Merdeka_CommentList_by_pk(id: $id) {
      id
    }
  }
`