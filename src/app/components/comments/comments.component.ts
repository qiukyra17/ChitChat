import { PostsService } from 'src/app/services/posts.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { comment } from 'src/app/model/comment';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  comment : comment = {
    commentId: 0,
    commentBody: " ",
    postId: 0
  }

  
  @Output()
  btnClicked : EventEmitter<any> = new EventEmitter<any>;
  
  constructor(private pservice: PostsService, private cservice: CommentsService) { }

  ngOnInit(): void {
  }

}
