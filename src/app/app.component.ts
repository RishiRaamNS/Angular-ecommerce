import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  post = {
    title: "Title",
    isFavorite: false
  }

  onFavoriteChanged() {
    console.log("Favorite changed");
  }
}
