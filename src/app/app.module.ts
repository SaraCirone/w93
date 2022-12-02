import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivePostComponent } from './components/active-post/active-post.component';
import { HomeComponent } from './components/home/home.component';
import { InactivePostComponent } from './components/inactive-post/inactive-post.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostCardComponent } from './components/post-card/post-card.component';

const routes: Route[] = [
  {
      path: "",
      component: HomeComponent
  },
  {
      path: "activePosts",
      component: ActivePostComponent
  },
  {
      path: "inactivePosts",
      component: InactivePostComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ActivePostComponent,
    HomeComponent,
    InactivePostComponent,
    NavbarComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
