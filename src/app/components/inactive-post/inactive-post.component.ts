import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.interface';
import { getPost, updatePost } from 'src/app/service/cards.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss']
})
export class InactivePostComponent implements OnInit {

  posts!: Card[]

    constructor() {
        getPost().then(posts => {
            console.log(posts)
            this.posts = posts
            this.inactivePosts()
            console.log(this.posts)
        })
    }

    ngOnInit(): void {
    }

    inactivePosts() {
        this.posts = this.posts.filter(post => !post.active)
    }

    onActivePost(id: number, i: number) {
        updatePost({ active: true }, id);
        this.posts.splice(i, 1);
    }
}
