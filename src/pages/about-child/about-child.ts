import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/*
  Generated class for the AboutChild page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-about-child',
  templateUrl: 'about-child.html'
})
export class AboutChild {
  name:string;
  constructor(public navCtrl: NavController,public navParams:NavParams) {}
  ngOnInit(){
    this.name=this.navParams.get("name");
  }
  ionViewDidLoad() {
    console.log('Hello AboutChild Page');
  }

}
