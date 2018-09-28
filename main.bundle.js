webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_material_module__ = __webpack_require__("../../../../../src/app/custom-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routing_module__ = __webpack_require__("../../../../../src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_registration_registration_component__ = __webpack_require__("../../../../../src/app/components/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__custom_material_module__["a" /* CustomMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\n    <mat-card class=\"home-card\">\n        <mat-card-header>\n            <mat-card-title class=\"title\">Your profile</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <mat-list>\n                <mat-list-item><span>First name:</span>{{authorizedUser?.firstName}} </mat-list-item>\n                <mat-list-item><span>Last name:</span>{{authorizedUser?.lastName}} </mat-list-item>\n                <mat-list-item><span>Email:</span>{{authorizedUser?.email}} </mat-list-item>\n            </mat-list>\n        </mat-card-content>\n        <mat-card-actions class=\"btns-container\">\n            <button mat-raised-button (click)=\"logout()\" color=\"warn\">Logout</button>\n        </mat-card-actions>\n    </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .home-container .home-card {\n    width: 400px;\n    position: absolute;\n    top: calc(50% - 119px); }\n  .home-container .home-card .title {\n      text-transform: uppercase;\n      font-weight: bold; }\n  .home-container .home-card .btns-container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: distribute;\n          justify-content: space-around; }\n  .home-container .home-card span {\n      font-weight: bold;\n      font-size: 16px;\n      margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_auth, router, snackBar) {
        this._auth = _auth;
        this.router = router;
        this.snackBar = snackBar;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    HomeComponent.prototype.getProfile = function () {
        var _this = this;
        this._auth.profile().subscribe(function (success) {
            _this.authorizedUser = success;
        });
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this._auth.logout().subscribe(function (success) {
            console.log(success);
            _this.snackBar.open('You successfully logged out', 'Close', {
                duration: 3000
            });
            localStorage.removeItem('token');
            _this.router.navigate(['/login']);
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBar */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <mat-card class=\"login-card\">\n    <mat-card-header>\n      <mat-card-title class=\"title\">Login</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form class=\"login-form\" [formGroup]=\"loginForm\">\n        <mat-form-field>\n          <input matInput placeholder=\"Email\" name=\"email\" formControlName=\"email\" autocomplete=\"email\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" formControlName=\"password\">\n        </mat-form-field>\n      </form>\n    </mat-card-content>\n    <mat-card-actions class=\"btns-container\">\n      <button mat-raised-button (click)=\"login()\" color=\"primary\" [disabled]=\"loginForm.invalid\">Login</button>\n      <button mat-raised-button (click)=\"registration()\" color=\"warn\">Registration</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .login-container .login-card {\n    width: 400px;\n    position: absolute;\n    top: calc(50% - 119px); }\n  .login-container .login-card .title {\n      text-transform: uppercase;\n      font-weight: bold; }\n  .login-container .login-card .login-form {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n  .login-container .login-card .btns-container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: distribute;\n          justify-content: space-around; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, _auth, snackBar) {
        this.router = router;
        this._auth = _auth;
        this.snackBar = snackBar;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required)
        });
        if (this._auth.isAuthorized()) {
            this.router.navigate(['/home']);
        }
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var user = this.loginForm.getRawValue();
        this._auth.login(user).subscribe(function (success) {
            _this.snackBar.open('You successfully logged in', 'Close', {
                duration: 3000
            });
            localStorage.setItem('token', success.token.access_token);
            _this.router.navigate(['home']);
        }, function (error) {
            var msg = error.error.errors[0].msg;
            _this.snackBar.open(msg, 'Close', {
                duration: 3000
            });
        });
    };
    LoginComponent.prototype.registration = function () {
        this.router.navigate(['/registration']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatSnackBar */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"registration-container\">\n    <mat-card class=\"registration-card\">\n        <mat-card-header>\n            <mat-card-title class=\"title\">Registration</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <form class=\"registration-form\" [formGroup]=registrationForm>\n                <mat-form-field>\n                    <input matInput placeholder=\"Email\" name=\"email\" formControlName=\"email\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"First Name\" name=\"first_name\" formControlName=\"firstName\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Last Name\" name=\"last_name\" formControlName=\"lastName\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" formControlName=\"password\">\n                </mat-form-field>\n            </form>\n        </mat-card-content>\n        <mat-card-actions class=\"btns-container\">\n            <button mat-raised-button (click)=\"submit()\" color=\"primary\" [disabled]=\"registrationForm.invalid\">Submit</button>\n            <button mat-raised-button (click)=\"back()\" color=\"primary\">Back</button>\n        </mat-card-actions>\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".registration-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .registration-container .registration-card {\n    width: 400px;\n    position: absolute;\n    top: calc(50% - 171px); }\n  .registration-container .registration-card .title {\n      font-weight: bold;\n      text-transform: uppercase; }\n  .registration-container .registration-card .registration-form {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n  .registration-container .registration-card .btns-container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: distribute;\n          justify-content: space-around; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, _auth, snackBar) {
        this.router = router;
        this._auth = _auth;
        this.snackBar = snackBar;
        this.registrationForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].email]),
            firstName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required)
        });
    }
    RegistrationComponent.prototype.submit = function () {
        var _this = this;
        var user = this.registrationForm.getRawValue();
        this._auth.registration(user).subscribe(function (success) {
            _this.snackBar.open('You successfully registered', 'Close', {
                duration: 3000
            });
            _this.router.navigate(['login']);
        }, function (error) {
            var msg = error.error.errors[0].msg;
            _this.snackBar.open(msg, 'Close', {
                duration: 3000
            });
        });
    };
    RegistrationComponent.prototype.back = function () {
        this.router.navigate(['']);
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/components/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/registration/registration.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatSnackBar */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/custom-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatSnackBarModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatSnackBarModule */]
            ]
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, _auth) {
        this.router = router;
        this._auth = _auth;
        this.auth = {};
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._auth.isAuthorized()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_registration_registration_component__ = __webpack_require__("../../../../../src/app/components/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_4__components_registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(_http) {
        this._http = _http;
        this.apiUrl = 'https://mysterious-basin-66905.herokuapp.com/api/v1/';
    }
    AuthService.prototype.isAuthorized = function () {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.login = function (user) {
        var credentials = user;
        return this._http.post(this.apiUrl + 'auth/login', credentials);
    };
    AuthService.prototype.logout = function () {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.token);
        this.token = null;
        return this._http.post(this.apiUrl + 'auth/logout', null, {
            headers: myHeaders
        });
    };
    AuthService.prototype.registration = function (user) {
        var credentials = user;
        return this._http.post(this.apiUrl + 'auth/signup', credentials);
    };
    AuthService.prototype.profile = function () {
        this.token = localStorage.getItem('token');
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', "Bearer " + this.token);
        return this._http.get(this.apiUrl + 'user/profile', {
            headers: myHeaders
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map