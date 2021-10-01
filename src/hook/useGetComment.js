import { useQuery } from "@apollo/client";
import { ShowComment } from "../graphql/query";
import { SubsComment } from "../graphql/subs";

export default function useGetComment() {
    const {data, loading, error, subscribeToMore} = useQuery(ShowComment);
    const SubscribeComment = () => {
        subscribeToMore({
            document: SubsComment,
            updateQuery: (prev, {subscriptionData: {data}}) => {
                console.log(data)
                return data
            }
        })
    }
    return {
        data,
        loading,
        error,
        SubscribeComment
    }
}