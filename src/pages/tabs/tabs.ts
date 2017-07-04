import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { NavController } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  private myindex : string;

  constructor(public navCtrl: NavController) {
  	console.log("constructor");
    this.myindex="2";
  }

  ionViewDidEnter (){
  }
}