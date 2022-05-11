import {Component, Input, OnInit} from '@angular/core';

import {IComment} from "../../interfaces/IComment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment:IComment;

  ngOnInit(): void {
  }

}
