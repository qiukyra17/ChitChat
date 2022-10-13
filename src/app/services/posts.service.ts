import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}

  //GET ALL THE POSTS
  getPosts() : Observable<Array<post>> {
    return this.http.get<Array<post>>(
      "http://localhost:7070/posts"
    )
  }

  //GET POSTS BY POST ID
  getPostsById(postId: number) : Observable<Array<post>> {
    return this.http.get<Array<post>>(
      "http://localhost:7070/posts/" + postId 
    )
  }

  //POST A NEW POST
  createPost(postTitle: string, postBody: string) :  void {
    this.http.post("http://localhost:7070/posts",{ postTitle:postTitle, postBody:postBody}).subscribe(response => console.log(response));
  }
}
