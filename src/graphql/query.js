import {gql} from '@apollo/client'

export const ShowComment = gql`
query MyQuery {
  Kampus_Merdeka_CommentList(order_by: {created_at: desc}, limit: 4) {
    created_at
    id
    message
    nama
    updated_at
  }
}
`