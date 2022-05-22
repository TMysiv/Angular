import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IPost} from "../../interfaces";
import {PostsService} from "../../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post:IPost

  constructor(private postsService:PostsService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['post'];

      if (state){
        this.post = state;
      }

      else {
        this.postsService.getPost(id).subscribe(value => this.post = value)
      }
    })
  }

}
