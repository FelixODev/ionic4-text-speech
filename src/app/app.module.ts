import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SpeechRecognition,SpeechRecognitionListeningOptions } from '@ionic-native/speech-recognition/ngx';
import { Observable, from, of, throwError } from 'rxjs';
import { TextToSpeech, TTSOptions } from "@ionic-native/text-to-speech/ngx";
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



/**/
export class SpeechRecognitionMock extends SpeechRecognition {



  startListening(): any/**/{
  }



}
/**/



/**/
export class TextToSpeechMock extends TextToSpeech {
  private synth:SpeechSynthesis = window.speechSynthesis;

  speak(textOrOptions: /*string | /**/TTSOptions): Promise<any>{
    let text:string;
    let rate:number;
    let locale:string;
    /*if (textOrOptions instanceof String){
      text = textOrOptions;
    }else{/**/
      text = textOrOptions.text;
      rate = textOrOptions.rate;
      locale = textOrOptions.locale;
    //}

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
}
/**/

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    StatusBar,
    SplashScreen,
    //SpeechRecognition,
    { provide: SpeechRecognition, useClass: SpeechRecognitionMock },
    //TextToSpeech,
    { provide: TextToSpeech, useClass: TextToSpeechMock },
    //TTSOptions,
    LocalNotifications,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
