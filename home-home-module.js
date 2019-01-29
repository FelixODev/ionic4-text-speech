(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border padding>\n  <ion-toolbar padding>\n    <ion-title text-center>\n      AFFIRM-O-MATIC\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\n\n  <ion-list>\n    <!--SpeechText-->\n    <ion-item>\n      <ion-label position=\"floating\">Your message...</ion-label>\n      <ion-input [(ngModel)]=\"speechText\"></ion-input>\n    </ion-item>\n    <!--Language>\n    <ion-item>\n      <ion-label>Language</ion-label>\n      <ion-select [(ngModel)]=\"language\">\n        <ion-select-option value=\"en-US\">English</ion-select-option>\n        <ion-select-option value=\"ru-RU\">Russian</ion-select-option>\n      </ion-select>\n    </ion-item-->\n    <ion-item>\n      <ion-range min=\"0\" max=\"10\" step=\"1\" [(ngModel)]=\"talkSpeed\">\n        <ion-icon small range-left name=\"remove\"></ion-icon>\n        <ion-icon small range-right name=\"add\"></ion-icon>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n\n\n\n</ion-content>\n\n<ion-footer no-border padding-horizontal>\n  <ion-toolbar>\n  <!--ion-input type=\"number\">\n  </ion-input-->\n\n\n\n  <ion-buttons slot=\"end\" margin-horizontal>\n  <ion-button shape=\"round\">\n    <ion-icon name=\"remove\">\n    </ion-icon>\n  </ion-button>\n\n\n\n  <ion-button shape=\"round\" (click)=\"speakText()\">\n    <ion-icon name=\"add\">\n    </ion-icon>\n  </ion-button>\n  </ion-buttons>\n\n\n\n  <ion-button slot=\"end\" shape=\"round\" (click)=\"listen()\">\n    <ion-icon name=\"mic\">\n    </ion-icon>\n  </ion-button>\n\n\n\n  <ion-button slot=\"end\" shape=\"round\" (click)=\"speakText()\">\n    <ion-icon name=\"play\">\n    </ion-icon>\n  </ion-button>\n\n\n</ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ "./node_modules/@ionic-native/speech-recognition/ngx/index.js");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    /**/
    function HomePage(speechRecognition, tts, localNotifications) {
        this.speechRecognition = speechRecognition;
        this.tts = tts;
        this.localNotifications = localNotifications;
        /**/
        this.speechText = '';
        this.language = 'en-US';
        this.talkSpeed = 1;
        /**/
    }
    HomePage.prototype.ionViewDidLoad = function () {
        // Check feature available
        //this.speechRecognition.isRecognitionAvailable()
        //.then((available: boolean) => console.log(available));
    };
    /**/
    HomePage.prototype.speakText = function () {
        var talkRate = 1 + this.talkSpeed / 10;
        /**/
        this.tts.speak({
            text: this.speechText,
            locale: this.language,
            rate: talkRate
        })
            .then(function () { return console.log('Success'); })
            .catch(function (reason) { return console.log(reason); });
        /**/
        /**/
        this.localNotifications.schedule({
            text: 'Delayed ILocalNotification',
            trigger: { at: new Date(new Date().getTime() + 3600) },
            led: 'FF0000',
            sound: null
        });
        /**/
    };
    /**/
    HomePage.prototype.listen = function () {
        // Check permission
        //this.speechRecognition.hasPermission()
        //.then((hasPermission: boolean) => {
        //console.log(hasPermission)
        //this.speakText = await
        /**this.speechRecognition.startListening(/*options/)
          .subscribe(
            (matches: any/*string[]/) => console.log(matches),
            (onerror) => console.log('error:', onerror)
          );/**/
        // Stop the recognition process (iOS only)
        //this.speechRecognition.stopListening()
        //});
        //console.log(this.speakText);
        /*
        try {
          const SpeechRecognition = window.SpeechRecognition
          || window.webkitSpeechRecognition
          || window.mozSpeechRecognition
          || window.msSpeechRecognition;
          const recognition = new webkitSpeechRecognition();
        }
        catch(e) {
          console.error(e);
        }
        recognition.start();
        recognition.onresult = (event) => {
          this.speechText = event.results[0][0].transcript;
          console.log(this.speechText);
          recognition.stop();
        }/**/
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_1__["SpeechRecognition"],
            _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_2__["TextToSpeech"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["LocalNotifications"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map