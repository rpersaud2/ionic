import { Component } from '@angular/core';
import { ViewController } from '../../../../../..';
@Component({
  templateUrl: './modalChat.html'
})
export class ModalChat {

  constructor() { }

  ionViewDidLoad() {
    console.log('ModalChat, ionViewDidLoad');
  }

  ionViewWillUnload() {
    console.log('ModalChat, ionViewWillUnload');
  }
}