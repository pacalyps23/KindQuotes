import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {HomeService} from './homeService';
import {Http} from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage {

  quotes: any;

  constructor(public navCtrl: NavController, public homeService: HomeService, public alertCtrl: AlertController) {
    this.getQuotes();
  }

  getQuotes() {
    this.homeService.getAllQuotes().subscribe(data => {
      this.quotes = data;
    })
  }

  postQuote() {
    this.homeService.postQuote(this.quote)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        this.getQuotes();
      });
  }

  deleteQuote(quote: any) {
    this.homeService.deleteQuote(quote)
    .map(res => res.toString())
    .subscribe(data => {
      console.log(data);
      this.getQuotes();
    })

  }

  editQuote(quote){

  let prompt = this.alertCtrl.create({
    title: 'Edit Note',
    inputs: [{
      name: 'title'
    }],
    buttons: [
      {
        text: 'Cancel'
      },
      {
        text: 'Save',
        handler: data => {
          
        }
      }
    ]
  });

  prompt.present();

}


  quote = {
    message: ''
  }
}
