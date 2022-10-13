import { CommentsService } from './../../services/comments.service';
import { Component, Input, OnInit } from '@angular/core';
import { comment } from 'src/app/model/comment';
import { post } from 'src/app/model/post';
import { PostsService } from 'src/app/services/posts.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-overall-posts',
  templateUrl: './overall-posts.component.html',
  styleUrls: ['./overall-posts.component.css']
})

export class OverallPostsComponent implements OnInit {
  
  postId: number = 0;
  posts: Array<post> = [];
  comments: Array<comment> = [];

  constructor(private pservice: PostsService, private cservice: CommentsService) { }

  ngOnInit(): void {
    //SHOWS ALL THE POSTS - WORKS
    this.pservice.getPosts().subscribe(response =>
      {this.posts = response; console.log(response)});

    //SHOWS COMMENTS BY POST ID - DOESNT REALLY WORK
    this.cservice.getCommentsByPostId(this.postId).subscribe(response => this.comments = response);
  }

  //REFRESHES COMPONENT - WORKS
  postAdd(): void {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].postId != this.postId) {
        this.pservice.getPosts().subscribe(response => {
          this.posts = response;
        })
      }
    }
  }
}
