import { PostsService } from 'src/app/services/posts.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  
  @Input()
  postId: number = 0;
  @Input()
  commentBody: string = " ";

  constructor(private pservice: PostsService) { }

  ngOnInit(): void {
    this.pservice.getPostsById(this.postId).subscribe(reponse => console.log(reponse))
  }

}
