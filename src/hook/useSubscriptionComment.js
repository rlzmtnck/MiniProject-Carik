import { useSubscription } from "@apollo/client"

import { SubsComment } from "../graphql/subs"

export default function useSubscriptionComment() {
    const {data, loading, error} = useSubscription(SubsComment)

      return {
          data,
          loading,
          error
      }
}