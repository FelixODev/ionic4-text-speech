import { TextToSpeech, TTSOptions } from "@ionic-native/text-to-speech/ngx";
import { SpeechRecognition,SpeechRecognitionListeningOptions } from '@ionic-native/speech-recognition/ngx';
import { Observable, from, defer, of, throwError } from 'rxjs';
//import { delay } from "rxjs/operators";





/*export class SpeechRecognitionMock extends SpeechRecognition {

  private SpeechRecognition:any = (<any>window).SpeechRecognition
  || (<any>window).webkitSpeechRecognition
  || (<any>window).mozSpeechRecognition
  || (<any>window).msSpeechRecognition;

  private sr:any = new this.SpeechRecognition();

  private transcript:Observable<any>;

  getResults():any {
    this.sr.onresult = (event) => {
      this.transcript = event.results[0][0].transcript;
      this.sr.stop();
      //return event.results[0][0].transcript;
    }
  }

  startListening():any {
    this.sr.start();
    this.getResults();
    return of(this.transcript);
  }
}/**/




/*
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




/*
export class AppProviders {
  public static getProviders() {
    let providers;
    if(document.URL.includes('https://') || document.URL.includes('http://')){
      // Use browser providers
      providers = [
        { provide: TextToSpeech, useClass: TextToSpeechMock },
        //{ provide: SpeechRecognition, useClass: SpeechRecognitionMock },
        //LocalNotifications,
      ];
    } else {/**/
      // Use device providers
      /*providers = [
        TextToSpeech,
        SpeechRecognition,
        LocalNotifications,
      ];
    }
    return providers;
  }
}
/**/
