import { Component, OnInit, ViewChild, NgZone, ElementRef, Inject } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { MeteorObservable } from 'meteor-rxjs';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';


/********************
----ERROR 802---------
*********************/

interface LoginCredentials {
  email: string;
  password: string;
}

@Component({
  selector: "app",
  templateUrl: './app.component.html',
  styleUrls: []
})

export class AppComponent{ //implements AfterViewInit {

  constructor(private zone: NgZone) {

  }


}

