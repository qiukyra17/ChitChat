import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) {
  }

  //GET ALL COMMENTS
  getComments(): Observable<Array<comment>> {
    return this.http.get<Array<comment>>("http://localhost:7070/comments/")}

  //GET ALL THE COMMENTS BY POST ID
  getCommentsByPostId(postId: number): Observable<Array<comment>> {
    return this.http.get<Array<comment>>("http://localhost:7070/comments/post/" + postId)
  }

  //POST COMMENT BY POST ID
  postComment(postId: number, commentBody: string) : void {
    this.http.post("http://localhost:7070/comments/post/" + postId, {
      postId:postId, commentBody:commentBody
    }).subscribe(response => console.log(response));
  }
}
