import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  @Input()
  postTitle: string = " ";
 
  @Input()
  postBody: string = " ";
 
  @Output()
  btnClicked : EventEmitter<any> = new EventEmitter<any>;

  constructor(private pservice : PostsService) { }

  ngOnInit(): void {
  }

  createPost() : void {
    this.pservice.createPost(this.postTitle, this.postBody);
    this.btnClicked.emit();
  }

}
