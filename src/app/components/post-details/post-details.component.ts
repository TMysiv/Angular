import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostService} from "../../services/post.service";
import {IPost} from "../../interfaces/post.interface";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails:IPost;

  constructor(private activatedRoute:ActivatedRoute, private postService:PostService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(value => {

      const {id} = value;
      const {state:{data}} = history;

      if (data){
        this.postDetails = data;
      }

      else {
        this.postService.getPost(id).subscribe(data =>{
          this.postDetails = data
        })
      }

    })
  }

}
