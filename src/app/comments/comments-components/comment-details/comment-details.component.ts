import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IComment} from "../../../interfaces";
import {CommentsService} from "../../comments-services/comments.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: IComment;

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentsService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['comment'];

      if (state) {
        this.commentDetails = state;
      }

      else {
        this.commentService.getComment(id).subscribe(value => this.commentDetails = value)
      };

    })
  }

}
