import { CommentsService } from './../../services/comments.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { post } from 'src/app/model/post';
import { PostsService } from 'src/app/services/posts.service';
import { comment } from 'src/app/model/comment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-existing-posts',
  templateUrl: './existing-posts.component.html',
  styleUrls: ['./existing-posts.component.css']
})
export class ExistingPostsComponent implements OnInit {
  visible: boolean = false;

  @Input()
  post: post = {
    postId: 0,
    postTitle: "",
    postBody: "",
    comments: []
  }

  @Input()
  commentId: number = 0;

  @Input()
  commentBody: string = "";

  comments: Array<comment> = [];

  // @Output()
  // btnClicked : EventEmitter<any> = new EventEmitter<any>;

  constructor(private pservice: PostsService, private cservice: CommentsService, private router: Router) { }

  ngOnInit(): void {
    this.cservice.getCommentsByPostId(this.post.postId).subscribe(response => { this.comments = response; console.log(response) });
  }

  onClick(): void {
    this.visible = !this.visible;
    this.cservice.getCommentsByPostId(this.post.postId).subscribe(response => { this.comments = response; console.log(response) });
  }

  commentAdd(): void {
    this.cservice.getCommentsByPostId(this.post.postId).subscribe(response => { this.comments = response; console.log(response)});
  }


}
