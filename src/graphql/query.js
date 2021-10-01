import {gql} from '@apollo/client'

export const ShowComment = gql`
query MyQuery {
    Kampus_Merdeka_CommentList {
      created_at
      id
      message
      nama
      updated_at
    }
  }
`