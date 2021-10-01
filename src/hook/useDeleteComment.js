import { useMutation } from "@apollo/client";
import { ShowComment } from '../graphql/query';
import { DeleteComment } from "../graphql/mutation";

export default function useDeleteComment() {
    const [deleteComment, {loading: loadingDelete}] = useMutation(DeleteComment, {
        refetchQueries: [ShowComment]
      });
      return {
          deleteComment,
          loadingDelete
      }
}
