import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { post } from 'src/app/model/post';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  @Input()
  postId: number = 0;
  
  @Input()
  commentBody: string = "";
  
  @Output()
  btnClicked : EventEmitter<any> = new EventEmitter<any>;
  
  constructor(private cservice: CommentsService) { }

  ngOnInit(): void {
  }

  addComment() : void {
    this.cservice.postComment(this.postId, this.commentBody);
    this.btnClicked.emit();
  }
}
