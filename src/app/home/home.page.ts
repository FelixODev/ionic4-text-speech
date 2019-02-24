import { Component, ViewChild } from '@angular/core';

import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  speechText: any;
  language: string;
  talkSpeed: number;

  constructor(
  private tts: TextToSpeech,
  private sr: SpeechRecognition,
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
  }



  listen2(){
    this.sr.startListening().subscribe((speech:any) => {
      this.speechText = speech;
    }, (onerror) => {
      console.log('error:', onerror)
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

      sr.onresult = async (event) => {
        this.speechText = await event.results[0][0].transcript;
        //console.log(sr.onresult());
        //return of()
        sr.stop();
      }

    }
    catch(e) {
      console.error(e);
    }
  }



}
