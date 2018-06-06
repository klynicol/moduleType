import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./imports/app";

enableProdMode();
//starting point for the app.. bootstrapping what we need
Meteor.startup(() => {
   platformBrowserDynamic().bootstrapModule(AppModule);
});
