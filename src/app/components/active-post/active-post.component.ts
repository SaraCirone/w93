import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.interface';
import { getPost, updatePost } from 'src/app/service/cards.service';

@Component({
    selector: 'app-active-post',
    templateUrl: './active-post.component.html',
    styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent implements OnInit {

    posts!: Card[]

    constructor() {
        getPost().then(posts => {
            console.log(posts)
            this.posts = posts
            this.activePosts()
            console.log(this.posts)
        })
    }

    ngOnInit(): void {
    }

    activePosts() {
        this.posts = this.posts.filter(post => post.active)
    }

    onInactivePost(id: number, i: number) {
        updatePost({ active: false }, id);
        this.posts.splice(i, 1);
    }
}
