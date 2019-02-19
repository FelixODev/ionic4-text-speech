import { Component, ViewChild } from '@angular/core';

import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  speechText: any;
  language: string;
  talkSpeed: number;

  @ViewChild('btn') btn;

  constructor(
    private sr: SpeechRecognition,
    private tts: TextToSpeech,
    private localNotifications: LocalNotifications
  ) {
      this.speechText = '';
      this.language = 'en-US';
      this.talkSpeed = 1;
  }



  ionViewDidLoad(){
    // Check feature available
    //this.sr.isRecognitionAvailable()
      //.then((available: boolean) => console.log(available));
  }



  speakText(){
    let talkRate = 1 + this.talkSpeed/10;

    this.tts.speak({
      text: this.speechText,
      locale: this.language,
      rate: talkRate
    })
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));

    /* this.localNotifications.schedule({
       text: 'Delayed ILocalNotification',
       trigger: {at: new Date(new Date().getTime() + 3600)},
       led: 'FF0000',
       sound: null
    });/**/
  }



  listenTest(){
    this.sr.startListening().subscribe((speech:any) => {
      console.log(speech);
    });/**/
  }



  listen(){
    try {
      const SpeechRecognition = (<any>window).SpeechRecognition
      || (<any>window).webkitSpeechRecognition
      || (<any>window).mozSpeechRecognition
      || (<any>window).msSpeechRecognition;

      const sr = new SpeechRecognition();

      sr.start();

      sr.onresult = (event) => {
        this.speechText = event.results[0][0].transcript;
        sr.stop();
      }
      this.speechText = this.speechText;
    }
    catch(e) {
      console.error(e);
    }
  }



  /* reFocus() {
    setTimeout(() => {
      this.btn.setFocus();
    },150);
  }/**/



}
