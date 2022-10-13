import { comment } from "./comment";

export interface post {
    postId: number;
    postTitle: string;
    postBody: string;
    comments: Array<comment>;
}