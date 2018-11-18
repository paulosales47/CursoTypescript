import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void {

    let config = 
    {
      apiKey: "AIzaSyCgdp8zjEzeyElXWGHIocDX3xTlUP7Btc8",
      authDomain: "app-angular-instaclone.firebaseapp.com",
      databaseURL: "https://app-angular-instaclone.firebaseio.com",
      projectId: "app-angular-instaclone",
      storageBucket: "app-angular-instaclone.appspot.com",
      messagingSenderId: "230695324120"
    };

    firebase.initializeApp(config)
  }

  title = 'InstaClone';
}
