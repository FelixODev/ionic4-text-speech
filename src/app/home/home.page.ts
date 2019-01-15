import { Component } from '@angular/core';

import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /**/
  speechText: string;
  language: string;
  talkSpeed: number;
  /**/

  constructor(
    private speechRecognition: SpeechRecognition,
    private tts: TextToSpeech,
    private localNotifications: LocalNotifications,
    //public navCtrl: NavController,
  ) {
      /**/
      this.speechText = '';
      this.language = 'en-US';
      this.talkSpeed = 1;
      /**/
  }



  ionViewDidLoad(){
    // Check feature available
    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => console.log(available));
  }



  /**/
  speakText(){
    let talkRate = 1 + this.talkSpeed/10;
    /**/
    this.tts.speak({
      text: this.speechText,
      locale: this.language,
      rate: talkRate
    })
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
    /**/
    /**/
    this.localNotifications.schedule({
       text: 'Delayed ILocalNotification',
       trigger: {at: new Date(new Date().getTime() + 3600)},
       led: 'FF0000',
       sound: null
    });
    /**/
  }
  /**/



  listen(){
    // Check permission
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        console.log(hasPermission)

        this.speechRecognition.startListening(options)
        .subscribe(
          (matches: string[]) => console.log(matches),
          (onerror) => console.log('error:', onerror)
        );
      });

  }

}
