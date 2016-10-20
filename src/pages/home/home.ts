import { Component } from '@angular/core';

import { NavController,ActionSheetController} from 'ionic-angular';
import {AboutPage} from '../about/about';
import {AboutChild} from '../about-child/about-child'; //虽然这里导入了 但是在ngmodule里面还是要重新设置和导入的
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  aboutPage:any;
  aboutChildPage:any;
  constructor(  public actionSheetCtrl: ActionSheetController,
                public navCtrl:NavController
              ) {}
  ngOnInit(){
    this.aboutPage=AboutPage;
    this.aboutChildPage=AboutChild;
    console.log(this.aboutPage);
  }
  openMenu(){
    console.log((new Date).getSeconds());
    //this.navCtrl.setRoot(this.aboutPage);//区别是当前这个页面被其它的替换了，而且没有返回按钮
    this.navCtrl.push(this.aboutChildPage,{
      name:"zhang",
      sex:"male"
    });
    //前提引入依赖注入  和<button ion-button color="secondary" [navPush]="aboutPage">Secondary</button>
    // 作用一样
    /*let actionSheet = this.actionSheetCtrl.create({
      title: '操作',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon:  'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        },{
          text: 'Archive',
          icon:  'share',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          // role: 'cancel',
          icon:  'arrow-dropright-circle',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();*/
  }

}
