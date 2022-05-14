import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CommentService} from "../../services/comment.service";
import {IComment} from "../../interfaces/comment.interface";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: IComment;

  constructor(private activatedRoute:ActivatedRoute, private commentService:CommentService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(value => {

      const {id} = value;
      const {state:{data}} = history;

      if (data){
        this.commentDetails = data;
      }

      else {
        this.commentService.getComment(id).subscribe(data => {
          this.commentDetails = data;
        })
      }

    })
  }

}
