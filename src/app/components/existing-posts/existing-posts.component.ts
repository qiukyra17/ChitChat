import { CommentsService } from './../../services/comments.service';
import { Component, Input, OnInit } from '@angular/core';
import { post } from 'src/app/model/post';
import { PostsService } from 'src/app/services/posts.service';
import { comment } from 'src/app/model/comment';

@Component({
  selector: 'app-existing-posts',
  templateUrl: './existing-posts.component.html',
  styleUrls: ['./existing-posts.component.css']
})
export class ExistingPostsComponent implements OnInit {
  @Input()
  postTitle: string = " ";

  @Input()
  postBody: string = " ";

  @Input()
  commentBody: string = " ";

  comments: Array<comment> = [];
  constructor(private pservice: PostsService, private cservice: CommentsService) { }

  ngOnInit(): void {
  }


}
