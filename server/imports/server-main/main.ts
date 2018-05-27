import { Pizzas, ServerData } from "../../../both/collections/gaunt.collection";
import { PizzaModel, ServerModel } from "../../../both/models/gaunt.model";

import { Meteor } from 'meteor/meteor';



export class Main {


}


/*---------------------------------------
------ACCOUNT DATA STRUCTURE-------------
-----------------------------------------
-----------------------------------------
{
  _id: 'QwkSmTCZiw5KDx3L6',  // Meteor.userId()
  username: 'cool_kid_13', // Unique name
  emails: [
    // Each email address can only belong to one user.
    { address: 'cool@example.com', verified: true },
    { address: 'another@different.com', verified: false }
  ],
  createdAt: new Date('Wed Aug 21 2013 15:16:52 GMT-0700 (PDT)'),
  profile: {
    // The profile is writable by the user by default.
    name: 'Joe Schmoe'
  },
  services: {
    facebook: {
      id: '709050', // Facebook ID
      accessToken: 'AAACCgdX7G2...AbV9AZDZD'
    },
    resume: {
      loginTokens: [
        { token: '97e8c205-c7e4-47c9-9bea-8e2ccc0694cd',
          when: 1349761684048 }
      ]
    }
  }
}
--------------------------------------------
-----------------------------------------*/


