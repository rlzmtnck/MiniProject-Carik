import {gql} from '@apollo/client'
export const SubsComment = gql`
subscription MySubscription {
    Kampus_Merdeka_CommentList {
      id
      nama
      message
      created_at
      updated_at
    }
  }  
`