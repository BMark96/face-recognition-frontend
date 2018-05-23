(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _components_image_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/image/image.component */ "./src/app/components/image/image.component.ts");
/* harmony import */ var _components_images_images_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/images/images.component */ "./src/app/components/images/images.component.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _services_comparator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/comparator.service */ "./src/app/services/comparator.service.ts");
/* harmony import */ var _services_face_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/face.service */ "./src/app/services/face.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_image_image_component__WEBPACK_IMPORTED_MODULE_5__["ImageComponent"],
                _components_images_images_component__WEBPACK_IMPORTED_MODULE_6__["ImagesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_services_image_service__WEBPACK_IMPORTED_MODULE_7__["ImageService"], _services_face_service__WEBPACK_IMPORTED_MODULE_9__["FaceService"], _services_comparator_service__WEBPACK_IMPORTED_MODULE_8__["ComparatorService"]],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/app/app.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".face-icon {\n    padding: 0 14px;\n    vertical-align: middle;\n}\n\n.app-toolbar {\n    margin-bottom: 1%;\n}\n\n.comparator {\n    /*background-color: rgb(4, 0, 53);*/\n    background-color: rgb(48, 47, 47);\n}\n\n.page-header {\n    background-color: rgb(0, 128, 121);\n}\n\n.result {\n    flex: 1 1 auto;\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/components/app/app.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"app-toolbar\" color=\"primary\">\n    <mat-toolbar-row class=\"page-header\">\n        <mat-icon class=\"face-icon\">face</mat-icon>\n        Face Recognition\n    </mat-toolbar-row>\n    <mat-toolbar-row class=\"comparator\">\n        <span class=\"result\">\n            {{getMessage()}}\n        </span>\n    </mat-toolbar-row>\n</mat-toolbar>\n<app-images></app-images>"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_comparator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/comparator.service */ "./src/app/services/comparator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(comparatorService) {
        this.comparatorService = comparatorService;
    }
    AppComponent.prototype.getMessage = function () {
        return this.comparatorService.getMessage();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_comparator_service__WEBPACK_IMPORTED_MODULE_1__["ComparatorService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/image/image.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/image/image.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-card {\n    margin: 10px;\n    background-color: rgb(236, 234, 234);\n}\n\n.image-button {\n    margin: 5px;\n}\n\n.image-button-upload {\n    background-color: rgb(0, 128, 121)\n}\n\n.image-text {\n    font-size: 150%;\n}\n\n.image-container {\n    position: relative;\n    top: 0;\n    left: 0;\n}\n\n.image-photo {\n    position: relative;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.rectangles {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n}\n\n"

/***/ }),

/***/ "./src/app/components/image/image.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/image/image.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input #fileInput type='file' (change)=\"onFileUploaded($event)\" hidden/>\n<mat-card class=\"image-card\">\n  <mat-card-header>\n    <mat-card-title class=\"image-text\">{{header}}</mat-card-title>\n  </mat-card-header>\n  \n  <div class=\"image-container\">\n    <img #image class=\"image-photo\" [src]=\"getImageSrc()\">\n    <!--svg class=\"rectangles\" *ngFor='let rectangle of getBoundingBoxes();'>\n      <rect  \n        [attr.x]=\"rectangle.left\"\n        [attr.y]=\"rectangle.top\"\n        [attr.width]=\"rectangle.width\"\n        [attr.height]=\"rectangle.height\"/>\n    </svg-->\n  </div>\n\n  <span fxLayoutAlign=\"center\">\n    <button class=\"image-button image-button-upload\" (click)=\"fileInput.click()\" mat-fab color=\"primary\">\n        <mat-icon aria-label=\"Upload image\">add</mat-icon>\n    </button>\n    <button class=\"image-button\" (click)=\"onImageDeleted()\" mat-fab color=\"warn\" [disabled]=\"!isImageLoaded\">\n        <mat-icon aria-label=\"Delete image\">clear</mat-icon>\n    </button>\n  </span>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/image/image.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/image/image.component.ts ***!
  \*****************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _models_image_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/image.type */ "./src/app/models/image.type.ts");
/* harmony import */ var _services_face_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/face.service */ "./src/app/services/face.service.ts");
/* harmony import */ var _services_comparator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/comparator.service */ "./src/app/services/comparator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageComponent = /** @class */ (function () {
    function ImageComponent(imageService, faceService, comparatorService) {
        this.imageService = imageService;
        this.faceService = faceService;
        this.comparatorService = comparatorService;
        this.header = "No image with face";
    }
    ImageComponent.prototype.getHeader = function () {
        return this.faces.length == 0 ? "No image with face" : this.faces[0].faceAttributes.age + " year old " + this.faces[0].faceAttributes.gender;
    };
    // getBoundingBoxes() {
    //   let boundingBoxes = new Array<BoundingBox>();
    //   for(let i = 0; i < this.faces.length; i++) {
    //     boundingBoxes.push(this.faces[i].faceRectangle);
    //   }
    //   return boundingBoxes;
    // }
    ImageComponent.prototype.ngOnInit = function () {
        this.image = new _models_image_type__WEBPACK_IMPORTED_MODULE_2__["Image"];
        this.faces = [];
        this.id = this.comparatorService.getNextId();
    };
    ImageComponent.prototype.onFileUploaded = function (event) {
        this.comparatorService.setImageContainsFace(this.id, false);
        this.header = "No image with face";
        var data = event.target.files[0];
        this.imageService.readImageAsBase64(data, this.onImageLoaded.bind(this));
    };
    ImageComponent.prototype.onImageLoaded = function (imageEncoded) {
        this.image.imageBase64 = imageEncoded;
        this.isImageLoaded = true;
        this.getFaces();
    };
    ImageComponent.prototype.getFaces = function () {
        var _this = this;
        this.faceService.getFaces(this.image.imageBase64).subscribe(function (faces) {
            _this.faces = faces;
            if (_this.faces.length > 0) {
                _this.comparatorService.setFaceId(_this.id, _this.faces[0].faceId);
            }
            (_this.faces.length > 0) ? _this.comparatorService.setImageContainsFace(_this.id, true) : _this.comparatorService.setImageContainsFace(_this.id, false);
            (_this.faces.length == 0) ? _this.header = "No image with face" : _this.header = _this.faces[0].faceAttributes.age + " year old " + _this.faces[0].faceAttributes.gender;
        });
    };
    ImageComponent.prototype.onImageDeleted = function () {
        this.image.imageBase64 = "";
        this.isImageLoaded = false;
        this.comparatorService.setImageContainsFace(this.id, false);
        this.header = "No image with face";
    };
    ImageComponent.prototype.getImageSrc = function () {
        return this.isImageLoaded ? this.imageService.getImageSrc(this.image) : "";
    };
    ImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(/*! ./image.component.html */ "./src/app/components/image/image.component.html"),
            styles: [__webpack_require__(/*! ./image.component.css */ "./src/app/components/image/image.component.css")]
        }),
        __metadata("design:paramtypes", [_services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"], _services_face_service__WEBPACK_IMPORTED_MODULE_3__["FaceService"], _services_comparator_service__WEBPACK_IMPORTED_MODULE_4__["ComparatorService"]])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/components/images/images.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/images/images.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/images/images.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/images/images.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"5%\" fxLayoutAlign=\"center\">\n    <div fxFlex=\"28%\" fxFlex.md=\"35%\" fxFlex.sm=\"45%\">\n        <app-image></app-image>\n    </div>\n    <div fxFlex=\"28\" fxFlex.md=\"35%\" fxFlex.sm=\"45%\">\n        <app-image></app-image>\n    </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/images/images.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/images/images.component.ts ***!
  \*******************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImagesComponent = /** @class */ (function () {
    function ImagesComponent() {
    }
    ImagesComponent.prototype.ngOnInit = function () { };
    ImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/components/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.css */ "./src/app/components/images/images.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/models/image.type.ts":
/*!**************************************!*\
  !*** ./src/app/models/image.type.ts ***!
  \**************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
var Image = /** @class */ (function () {
    function Image() {
        this.prefixBase64 = "data:image/png;base64,";
    }
    return Image;
}());



/***/ }),

/***/ "./src/app/services/comparator.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/comparator.service.ts ***!
  \************************************************/
/*! exports provided: ComparatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparatorService", function() { return ComparatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _face_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./face.service */ "./src/app/services/face.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComparatorService = /** @class */ (function () {
    function ComparatorService(faceService) {
        this.faceService = faceService;
        this.firstImageContainsFace = false;
        this.secondImageContainsFace = false;
        this.nextId = 1;
        this.confidence = 0;
    }
    ComparatorService.prototype.setFaceId = function (id, faceId) {
        id == 1 ? this.firstFaceId = faceId : this.secondFaceId = faceId;
    };
    ComparatorService.prototype.getNextId = function () {
        var id = this.nextId;
        this.nextId += 1;
        return id;
    };
    ComparatorService.prototype.getNImagesWithFaces = function () {
        return (this.firstImageContainsFace ? 1 : 0) + (this.secondImageContainsFace ? 1 : 0);
    };
    ComparatorService.prototype.setImageContainsFace = function (id, value) {
        id == 1 ? this.firstImageContainsFace = value : this.secondImageContainsFace = value;
        if (this.getNImagesWithFaces() == 2) {
            this.compare();
        }
        else {
            this.confidence = 0;
        }
    };
    ComparatorService.prototype.compare = function () {
        var _this = this;
        this.faceService.getSimilarity(this.firstFaceId, this.secondFaceId).subscribe(function (result) {
            _this.confidence = result[0].confidence;
        });
    };
    ComparatorService.prototype.getConfidence = function () {
        return this.confidence;
    };
    ComparatorService.prototype.getMessage = function () {
        var message = "";
        switch (this.getNImagesWithFaces()) {
            case 0:
                message = "Upload 2 more images containing a face";
                break;
            case 1:
                message = "Upload 1 more image containing a face";
                break;
            case 2:
                message = "Similarity: " + (this.confidence * 100).toFixed(2) + "%";
                break;
            default:
                break;
        }
        return message;
    };
    ComparatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_face_service__WEBPACK_IMPORTED_MODULE_1__["FaceService"]])
    ], ComparatorService);
    return ComparatorService;
}());



/***/ }),

/***/ "./src/app/services/face.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/face.service.ts ***!
  \******************************************/
/*! exports provided: FaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaceService", function() { return FaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaceService = /** @class */ (function () {
    function FaceService(http) {
        this.http = http;
        //private subscriptionKey: string = "5b777f9876f749e198bd4bb52ef7eeef";
        this.subscriptionKey = "ad22a1edffd6416fafa7725a7ce11513";
        this.endpoint = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/";
    }
    FaceService.prototype.createBlob = function (imageBase64, contentType) {
        if (contentType === void 0) { contentType = ''; }
        var byteCharacters = atob(imageBase64);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        var blob = new Blob([byteArray], { type: contentType });
        return blob;
    };
    FaceService.prototype.getHeaders = function (contentType) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', contentType)
            .set('Ocp-Apim-Subscription-Key', this.subscriptionKey);
        return headers;
    };
    FaceService.prototype.getParams = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('returnFaceId', 'true')
            .set('returnFaceLandmarks', 'false')
            .set('returnFaceAttributes', 'age,gender');
        return params;
    };
    FaceService.prototype.getFaces = function (base64Image) {
        var headers = this.getHeaders('application/octet-stream');
        var params = this.getParams();
        var blob = this.createBlob(base64Image);
        return this.http.post(this.endpoint + "detect", blob, {
            params: params,
            headers: headers
        });
    };
    FaceService.prototype.getSimilarity = function (faceId1, faceId2) {
        var headers = this.getHeaders('application/json');
        return this.http.post(this.endpoint + "findsimilars", {
            "faceId": faceId1,
            "faceIds": [faceId2],
            "maxNumOfCandidatesReturned": 1,
            "mode": "matchFace"
        }, {
            headers: headers
        });
    };
    FaceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FaceService);
    return FaceService;
}());



/***/ }),

/***/ "./src/app/services/image.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageService = /** @class */ (function () {
    function ImageService() {
    }
    ImageService.prototype.getImageSrc = function (image) {
        return image.prefixBase64 + image.imageBase64;
    };
    ImageService.prototype.readImageAsBase64 = function (data, callback) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var binaryString = e.target.result;
            var imageEncoded = btoa(binaryString);
            callback(imageEncoded);
        };
        reader.readAsBinaryString(data);
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mark/Desktop/kliens-hf/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map