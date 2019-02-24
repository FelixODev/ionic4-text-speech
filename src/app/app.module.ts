import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//import { AppProviders } from './app.providers';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { TextToSpeech, TTSOptions } from "@ionic-native/text-to-speech/ngx";
import { SpeechRecognition,SpeechRecognitionListeningOptions } from '@ionic-native/speech-recognition/ngx';
import { Observable, from, defer, of, throwError } from 'rxjs';





export class SpeechRecognitionMock extends SpeechRecognition {

  private SpeechRecognition:any = (<any>window).SpeechRecognition
  || (<any>window).webkitSpeechRecognition
  || (<any>window).mozSpeechRecognition
  || (<any>window).msSpeechRecognition;

  private sr:any = new this.SpeechRecognition();

  private transcript: any = 'hello';

  /*getResults():any {
    this.sr.onresult = async (event) => {
      this.transcript = await event.results[0][0].transcript;
      this.sr.stop();
    }
  }/**/

  startListening():any {
    //this.sr.start();
    //this.getResults();
    return of(this.transcript);
  }
}/**/





export class TextToSpeechMock extends TextToSpeech {

  private synth:SpeechSynthesis = window.speechSynthesis;

  speak(textOrOptions: TTSOptions): Promise<any>{
    let text:string = textOrOptions.text;
    let rate:number = textOrOptions.rate || 1;
    let locale:string = textOrOptions.locale || 'en_US';

    let utterThis:SpeechSynthesisUtterance = new SpeechSynthesisUtterance(text);

    if (rate){
      utterThis.rate = rate;
    }
    if (locale){
      utterThis.lang = locale;
    }

    this.synth.speak(utterThis);
    return Promise.resolve(true);
  }

  stop(): Promise<any>{
    this.synth.cancel();
    return Promise.resolve(true);
  }
}/**/





export let textToSpeechFactory = () => {
  return (window.hasOwnProperty('cordova'))? new TextToSpeech(): new TextToSpeechMock();
}





export let speechRecognitionFactory = () => {
  return (window.hasOwnProperty('cordova'))? new SpeechRecognition(): new SpeechRecognitionMock();
}





export let providers = [
  { provide: TextToSpeech, useFactory: textToSpeechFactory },
  { provide: SpeechRecognition, useFactory: speechRecognitionFactory },
]





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    ...providers,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
