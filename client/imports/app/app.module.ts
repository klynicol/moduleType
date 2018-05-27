import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//component
import { AppComponent } from "./app.component";



@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    /*
    RouterModule.forRoot([
        {path: 'signupModal', component:SignupModalComponent},
        {path: 'app', component:AppComponent},
        {path: 'pizzaSubmitModal', component:PizzaSubmitComponent}
    ]),*/
    CommonModule
  ],
  // Main Component
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule {
  constructor() {
  }
}
