import { Component } from '@angular/core';

import { NavController,ActionSheetController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public actionSheetCtrl: ActionSheetController,
              ) {

              }
  openMenu(){
    console.log((new Date).getSeconds());
    let actionSheet = this.actionSheetCtrl.create({
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
    actionSheet.present();
  }

}
