import { useMutation } from "@apollo/client";
import { ShowComment } from '../graphql/query';
import { SubmitComment } from "../graphql/mutation";

export default function useSubmitComment() {
    const [submitComment, {loading: loadingSubmit}] = useMutation(SubmitComment, {
        refetchQueries: [ShowComment]
    });
    return {
        submitComment,
        loadingSubmit
    }
}