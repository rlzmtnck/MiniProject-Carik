import {gql} from '@apollo/client'
export const SubsComment = gql`
subscription MySubscription {
  Kampus_Merdeka_CommentList(limit: 4, order_by: {created_at: desc}) {
    created_at
    id
    message
    nama
    updated_at
  }
}
`