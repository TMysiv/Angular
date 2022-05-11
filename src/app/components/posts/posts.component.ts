import { Component, OnInit } from '@angular/core';

import {IPost} from "../../interfaces/IPost";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:IPost[];

  constructor(private PostService:PostsService) { }

  ngOnInit(): void {
    this.PostService.getPosts().subscribe(value => this.posts = value)
  }

}
