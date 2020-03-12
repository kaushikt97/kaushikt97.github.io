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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
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

var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _worker_worker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./worker/worker.component */ "./src/app/worker/worker.component.ts");
/* harmony import */ var _list_workers_list_workers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-workers/list-workers.component */ "./src/app/list-workers/list-workers.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-form/order-form.component */ "./src/app/order-form/order-form.component.ts");
/* harmony import */ var _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-order/list-order.component */ "./src/app/list-order/list-order.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"] },
    { path: 'worker/:id', component: _worker_worker_component__WEBPACK_IMPORTED_MODULE_3__["WorkerComponent"] },
    { path: 'workers/:orderId', component: _list_workers_list_workers_component__WEBPACK_IMPORTED_MODULE_4__["ListWorkersComponent"] },
    { path: 'workers', component: _list_workers_list_workers_component__WEBPACK_IMPORTED_MODULE_4__["ListWorkersComponent"] },
    { path: 'order/:id', component: _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_6__["OrderFormComponent"] },
    { path: 'orders/:id', component: _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_7__["ListOrderComponent"] },
    { path: 'userDashboard/:id', component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["UserDashboardComponent"] },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n\n<div class=\"container\">\n<router-outlet></router-outlet></div>\n\n<app-footer> </app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tiffincenter';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_workers_list_workers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-workers/list-workers.component */ "./src/app/list-workers/list-workers.component.ts");
/* harmony import */ var _worker_worker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./worker/worker.component */ "./src/app/worker/worker.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order-form/order-form.component */ "./src/app/order-form/order-form.component.ts");
/* harmony import */ var _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list-order/list-order.component */ "./src/app/list-order/list-order.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _list_workers_list_workers_component__WEBPACK_IMPORTED_MODULE_5__["ListWorkersComponent"],
                _worker_worker_component__WEBPACK_IMPORTED_MODULE_6__["WorkerComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
                _order_form_order_form_component__WEBPACK_IMPORTED_MODULE_13__["OrderFormComponent"],
                _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_14__["ListOrderComponent"],
                _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["UserDashboardComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"],
                _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["AdminDashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{errorMessage}} \n </p>\n "

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
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

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        this.errorMessage = 'an error occured';
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    position: absolute;\r\n    bottom: 0;\r\n    width:100%;\r\n    height:60px;\r\n    background-color:darkgrey;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLDBCQUEwQjtDQUM3QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmRhcmtncmV5O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=footer>\n\n  <div class=\"container\">\n  <span class=\"text-muted\">All Rights Reserved 2020@Tavant</span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/list-order/list-order.component.css":
/*!*****************************************************!*\
  !*** ./src/app/list-order/list-order.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Qtb3JkZXIvbGlzdC1vcmRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/list-order/list-order.component.html":
/*!******************************************************!*\
  !*** ./src/app/list-order/list-order.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Orders List</h1>\n\n<Br>\n<BR>\n<BR>\n\n<div class=\"container\">\n  <table class=\"table\">\n    <caption></caption>\n    <thead>\n      <tr>\n        <th>id</th>\n        <th>Name</th>\n        <th>MobileNumber</th>\n        <th>PickUpPointArea</th>\n        <th>PickPointAddress</th>\n        <th>DropPointArea</th>\n        <th>DropPointAddress</th>\n        <th>Status</th>\n        <div *ngIf=\"this.id==-1\">\n          <th>Action</th>\n        </div>\n      </tr>\n    </thead>\n    <tbody>\n\n\n      <tr *ngFor=\"let tiffinOrder of tiffinOrders\">\n        <td>{{tiffinOrder.id}}</td>\n        <td>{{tiffinOrder.name}}</td>\n        <td>{{tiffinOrder.mobileNumber}}</td>\n        <td>{{tiffinOrder.pickUpPointArea}}</td>\n        <td>{{tiffinOrder.pickPointAddressLine1}}</td>\n        <td>{{tiffinOrder.dropPointArea}}</td>\n        <td>{{tiffinOrder.dropPointAddressLine1}}</td>\n        <td>{{tiffinOrder.status}}</td>\n        <div *ngIf=\"this.id==-1\">\n          <td>\n            <button (click)=\"assignTask(tiffinOrder.id)\" class=\"btn btn-success\"> Assign</button>\n          </td>\n        </div>\n      </tr>\n\n    </tbody>\n  </table>\n\n\n  <div *ngIf=\"this.id!=-1\">\n    <div class=\"form-group\">\n      <button (click)=back() class=\"btn btn-primary\">Back</button>\n    </div>\n  </div>\n\n  <div *ngIf=\"this.id==-1\">\n    <div class=\"form-group\">\n      <button (click)=workerList() class=\"btn btn-success\">Workers</button>\n      &nbsp;&nbsp;&nbsp;\n      <button (click)=exit() class=\"btn btn-danger\">Exit&nbsp;&nbsp;&nbsp;</button>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/list-order/list-order.component.ts":
/*!****************************************************!*\
  !*** ./src/app/list-order/list-order.component.ts ***!
  \****************************************************/
/*! exports provided: TiffinOrder, ListOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiffinOrder", function() { return TiffinOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOrderComponent", function() { return ListOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_tiffin_center_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data/tiffin-center-data.service */ "./src/app/service/data/tiffin-center-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TiffinOrder = /** @class */ (function () {
    function TiffinOrder(id, name, mobileNumber, pickUpPointArea, pickPointAddressLine1, pickPointAddressLine2, dropPointArea, dropPointAddressLine1, dropPointAddressLine2) {
        this.id = id;
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.pickUpPointArea = pickUpPointArea;
        this.pickPointAddressLine1 = pickPointAddressLine1;
        this.pickPointAddressLine2 = pickPointAddressLine2;
        this.dropPointArea = dropPointArea;
        this.dropPointAddressLine1 = dropPointAddressLine1;
        this.dropPointAddressLine2 = dropPointAddressLine2;
    }
    return TiffinOrder;
}());

var ListOrderComponent = /** @class */ (function () {
    function ListOrderComponent(tiffinService, route, router) {
        this.tiffinService = tiffinService;
        this.route = route;
        this.router = router;
    }
    ListOrderComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        if (this.id == -1)
            this.refreshOrders();
        else
            this.refreshUserOrder();
    };
    ListOrderComponent.prototype.refreshOrders = function () {
        var _this = this;
        this.tiffinService.retrieveAllOrders().subscribe(function (response) {
            return _this.tiffinOrders = response;
        });
    };
    ListOrderComponent.prototype.refreshUserOrder = function () {
        var _this = this;
        this.tiffinService.retrieveUserOrders(this.id).subscribe(function (response) {
            return _this.tiffinOrders = response;
        });
    };
    ListOrderComponent.prototype.assignTask = function (orderId) {
        this.router.navigate(['workers', orderId]);
    };
    ListOrderComponent.prototype.workerList = function () {
        this.router.navigate(['workers', -1]);
    };
    ListOrderComponent.prototype.exit = function () {
        this.router.navigate(['login']);
    };
    ListOrderComponent.prototype.back = function () {
        this.router.navigate(['userDashboard', this.id]);
    };
    ListOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-order',
            template: __webpack_require__(/*! ./list-order.component.html */ "./src/app/list-order/list-order.component.html"),
            styles: [__webpack_require__(/*! ./list-order.component.css */ "./src/app/list-order/list-order.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data_tiffin_center_data_service__WEBPACK_IMPORTED_MODULE_1__["TiffinCenterDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListOrderComponent);
    return ListOrderComponent;
}());



/***/ }),

/***/ "./src/app/list-workers/list-workers.component.css":
/*!*********************************************************!*\
  !*** ./src/app/list-workers/list-workers.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Qtd29ya2Vycy9saXN0LXdvcmtlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/list-workers/list-workers.component.html":
/*!**********************************************************!*\
  !*** ./src/app/list-workers/list-workers.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>My Workers's</h1>\n\n<Br>\n<BR>\n<BR>\n<div class=\"alert alert-success\" *ngIf='message'>{{message}}</div>\n\n<div class=\"container\">\n  <table class=\"table\">\n    <caption> My Workers</caption>\n    <thead>\n      <tr>\n        <th>id</th>\n        <th>Name</th>\n        <th>MobileNumber</th>\n        <th>Area</th>\n        <th>Active </th>\n        <th> </th>\n\n\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n\n      <!-- for(Todo todo: todos){-->\n\n      <tr *ngFor=\"let worker of workers\">\n        <td>{{worker.id}}</td>\n        <td>{{worker.name}}</td>\n        <td>{{worker.mobileNumber}}</td>\n        <td>{{worker.area}}</td>\n        <td>{{worker.active}}</td>\n\n        <td>\n          <button (click)=\"assignTask(worker.id)\" class=\"btn btn-success\"> Assign</button>\n        </td>\n        <td>\n          <button (click)=\"updateWorker(worker.id)\" class=\"btn btn-warning\">Update</button>\n        </td>\n        <td>\n          <button (click)=\"deleteWorker(worker.id,worker.name)\" class=\"btn btn-danger\">Delete</button>\n        </td>\n\n      </tr>\n\n    </tbody>\n  </table>\n\n\n  <div class=\"row\">\n    <button (click)=\"addWorker()\" class=\"btn btn-success\">Add</button>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/list-workers/list-workers.component.ts":
/*!********************************************************!*\
  !*** ./src/app/list-workers/list-workers.component.ts ***!
  \********************************************************/
/*! exports provided: Worker, ListWorkersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Worker", function() { return Worker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListWorkersComponent", function() { return ListWorkersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_data_tiffin_center_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data/tiffin-center-data.service */ "./src/app/service/data/tiffin-center-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Worker = /** @class */ (function () {
    function Worker(id, name, mobileNumber, area, active) {
        this.id = id;
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.area = area;
        this.active = active;
    }
    return Worker;
}());

var ListWorkersComponent = /** @class */ (function () {
    function ListWorkersComponent(tiffinService, router, route) {
        this.tiffinService = tiffinService;
        this.router = router;
        this.route = route;
        this.message = '';
    }
    ListWorkersComponent.prototype.ngOnInit = function () {
        this.orderId = this.route.snapshot.params['orderId'];
        this.refreshWorkers();
    };
    ListWorkersComponent.prototype.refreshWorkers = function () {
        var _this = this;
        this.tiffinService.retrieveAllWorkers().subscribe(function (response) {
            return _this.workers = response;
        });
    };
    ListWorkersComponent.prototype.deleteWorker = function (id, name) {
        var _this = this;
        this.tiffinService.deleteWorker(id).subscribe(function (response) {
            //console.log(response);
            _this.message = "Delete of worker " + name + " is Successful!";
            _this.refreshWorkers();
        });
    };
    ListWorkersComponent.prototype.updateWorker = function (id) {
        this.router.navigate(['worker', id]);
        console.log(id);
    };
    ListWorkersComponent.prototype.addWorker = function () {
        this.router.navigate(['worker', -1]);
    };
    ListWorkersComponent.prototype.assignTask = function (workerId) {
        var _this = this;
        this.tiffinService.retrieveWorker(workerId).subscribe(function (response) {
            _this.worker = response;
            //console.log(this.worker);
            _this.tiffinService.assignWorker(_this.orderId, _this.worker).subscribe(function (response) {
                // console.log(response)
                _this.router.navigate(['orders', -1]);
            });
        });
    };
    ListWorkersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-workers',
            template: __webpack_require__(/*! ./list-workers.component.html */ "./src/app/list-workers/list-workers.component.html"),
            styles: [__webpack_require__(/*! ./list-workers.component.css */ "./src/app/list-workers/list-workers.component.css")]
        }),
        __metadata("design:paramtypes", [_service_data_tiffin_center_data_service__WEBPACK_IMPORTED_MODULE_2__["TiffinCenterDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ListWorkersComponent);
    return ListWorkersComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"Container\">\n  <!--<div class=\"alert alert-warning\" *ngIf='invalidLogin'>{{errorMessage}}</div>-->\n\n  <!-- <div class=\"card-body\">\n  <input type=\"text\" name=\"username\" [(ngModel)]=\"username\" placeholder=\"Username\" size=\"30px\"><br><br>\n  <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" size=\"30px\">\n\n  \n  <br><br><br>\n    <button (click)=handleLogin() class=\"btn btn-success\">Login</button> &nbsp;&nbsp;&nbsp;\n    <button (click)=createUser() class=\"btn btn-info\">Signup</button> \n\n  </div> -->\n\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-4 m-auto\">\n      <div class=\"card mt-5\">\n        <h5 class=\"card-header text-center\">Login</h5>\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n            <input type=\"text\" name=\"username\" class=\"form-control\" [(ngModel)]=\"credential.username\" placeholder=\"Username\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" name=\"password\" [(ngModel)]=\"credential.password\" placeholder=\"Password\" class=\"form-control\">\n          </div>\n\n          <div class=\"form-group\">\n            <button (click)=handleLogin() class=\"btn btn-success btn-sm form-control\">Login</button>\n          </div>\n\n          <div class=\"form-group\">\n            <button (click)=createUser() class=\"btn btn-info btn-sm form-control\">Signup</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_data_tiffin_center_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data/tiffin-center-data.service */ "./src/app/service/data/tiffin-center-data.service.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, tiffinService) {
        this.router = router;
        this.tiffinService = tiffinService;
        // username = ''
        // password = ''
        this.errorMessage = 'Invalid Credentials';
        this.invalidLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.credential = new _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["Credential"](1, "", "");
    };
    LoginComponent.prototype.handleLogin = function () {
        /*
            this.tiffinService.handleLogin(this.username, this.password).subscribe(
              response => {
                this.id = response
                if (this.id == 138) {
                  this.router.navigate(['orders', -1])
                }
                else if (this.id != null) {
                  sessionStorage.setItem('authenticaterUser', this.username);
                  console.log(this.id);
        
                  this.router.navigate(['userDashboard', this.id]);
                }
                else
                  this.router.navigate(['login'])
        
              });
        */
        var _this = this;
        //console.log(this.credential.username);
        //console.log(this.credential.password);
        this.tiffinService.handleLogin(this.credential).subscribe(function (response) {
            _this.id = response;
            if (_this.id == 138) {
                _this.router.navigate(['orders', -1]);
            }
            else if (_this.id != null) {
                sessionStorage.setItem('authenticaterUser', _this.credential.username);
                //console.log(this.id);
                _this.router.navigate(['userDashboard', _this.id]);
            }
            else
                _this.router.navigate(['login']);
        });
    };
    LoginComponent.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem('authenticaterUser');
        return !(user == null);
    };
    LoginComponent.prototype.createUser = function () {
        this.router.navigate(['signup']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_data_tiffin_center_data_service__WEBPACK_IMPORTED_MODULE_2__["TiffinCenterDataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    Thank You For Using Our Service.\n</p>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(route) {
        this.route = route;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        sessionStorage.removeItem('authenticaterUser');
        this.route.navigate(['login']);
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <div>\n      <a href=\"\" class=\"navbar-brand\">Bunzo</a>\n    </div>\n\n    <ul class=\"navbar-nav\">\n      <li>\n        <a *ngIf=\"this.isUserLoggedIn\" routerLink=\"/login\" class=\"nav-link\">Home</a>\n      </li>\n\n    </ul>\n\n    <ul class=\"navbar-nav navbar-collapse justify-content-end\">\n      <li>\n        <a *ngIf=\"this.isUserLoggedIn\" routerLink=\"#\" class=\"nav-link\">MyOrders</a>\n      </li>\n      <li>\n        <a *ngIf=\"!this.isUserLoggedIn\" routerLink=\"/login\" class=\"nav-link\">Login</a>\n      </li>\n      <li>\n        <a *ngIf=\"this.isUserLoggedIn\" routerLink=\"/logout\" class=\"nav-link\">Logout</a>\n      </li>\n    </ul>\n\n  </nav>\n</header>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
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

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.isUserLoggedIn = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
        // this.isUserLoggedIn= this.authenticationService.isUserLoggedIn();
        var user = sessionStorage.getItem('authenticaterUser');
        if (user != null)
            this.isUserLoggedIn = true;
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/order-form/order-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/order-form/order-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWZvcm0vb3JkZXItZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/order-form/order-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/order-form/order-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <form>\n\n\n    <fieldset class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)]=\"tiffinOrder.name\" class=\"form-control\" name=\"name\" required=\"required\" minlength=\"10\" maxlength=\"10\">\n    </fieldset>\n\n\n    <fieldset class=\"form-group\">\n      <label>Mobile Number</label>\n      <input type=\"text\" [(ngModel)]=\"tiffinOrder.mobileNumber\" class=\"form-control\" name=\"mobileNumber\" required=\"required\" minlength=\"10\"\n        maxlength=\"10\">\n    </fieldset>\n\n\n    <fieldset class=\"form-group\">\n      <label>PickUpPoint Area</label>\n      <input type=\"text\" [(ngModel)]=\"tiffinOrder.pickUpPointArea\" class=\"form-control\" name=\"area\" required=\"required\" minlength=\"5\">\n    </fieldset>\n\n    <fieldset class=\"form-group\">\n      <label>PickUpPoint AddressLine1</label>\n      <input type=\"text\" [(ngModel)]=\"tiffinOrder.pickPointAddressLine1\" class=\"form-control\" name=\"active\" required=\"required\"\n        minlength=\"5\">\n    </fieldset>\n\n    <fieldset class=\"form-group\">\n      <label>PickUpPoint AddressLine2</label>\n      <input type=\"text\" [(ngModel)]=\"tiffinOrder.pickPointAddressLine2\" class=\"form-control\" name=\"active\" required=\"required\"\n        minlength=\"5\">\n    </fieldset>\n\n\n    <fieldset class=\"form-group\">\n      <label>DropPoint Area</label>\n      <input type=\"text\" [(ngModel)]=\"tiffinOrder.dropPointArea\" class=\"form-control\" name=\"area\" required=\"required\" minlength=\"5\">\n    </fieldset>\n\n\n    <fieldset class=\"form-group\">\n      <label>DropPoint AddressLine1</label>\n      <input type=\"text\" [(ngModel)]=\"tiffinOrder.dropPointAddressLine1\" class=\"form-control\" name=\"active\" required=\"required\"\n        minlength=\"5\">\n    </fieldset>\n\n    <fieldset class=\"form-group\">\n      <label>DropPoint AddressLine2</label>\n      <input type=\"text\" [(ngModel)]=\"tiffinOrder.dropPointAddressLine2\" class=\"form-control\" name=\"active\" required=\"required\"\n        minlength=\"5\">\n    </fieldset>\n\n    <button (click)=createOrder() type=\"submit\" class=\"btn btn-success\">Submit</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/order-form/order-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/order-form/order-form.component.ts ***!
  \****************************************************/
/*! exports provided: OrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function() { return OrderFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_tiffin_center_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/data/tiffin-center-data.service */ "./src/app/service/data/tiffin-center-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-order/list-order.component */ "./src/app/list-order/list-order.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderFormComponent = /** @class */ (function () {
    function OrderFormComponent(router, route, tiffinService) {
        this.router = router;
        this.route = route;
        this.tiffinService = tiffinService;
    }
    OrderFormComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.tiffinOrder = new _list_order_list_order_component__WEBPACK_IMPORTED_MODULE_3__["TiffinOrder"](this.id, "", "", "", "", "", "", "", "");
    };
    OrderFormComponent.prototype.createOrder = function () {
        var _this = this;
        this.tiffinService.createOrder(this.id, this.tiffinOrder).subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['userDashboard', _this.id]);
        });
    };
    OrderFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-form',
            template: __webpack_require__(/*! ./order-form.component.html */ "./src/app/order-form/order-form.component.html"),
            styles: [__webpack_require__(/*! ./order-form.component.css */ "./src/app/order-form/order-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_data_tiffin_center_data_service__WEBPACK_IMPORTED_MODULE_1__["TiffinCenterDataService"]])
    ], OrderFormComponent);
    return OrderFormComponent;
}());



/***/ }),

/***/ "./src/app/service/data/tiffin-center-data.service.ts":
/*!************************************************************!*\
  !*** ./src/app/service/data/tiffin-center-data.service.ts ***!
  \************************************************************/
/*! exports provided: TiffinCenterDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiffinCenterDataService", function() { return TiffinCenterDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TiffinCenterDataService = /** @class */ (function () {
    function TiffinCenterDataService(http) {
        this.http = http;
    }
    TiffinCenterDataService.prototype.retrieveAllWorkers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationUrl + "/bunzo/workers");
    };
    TiffinCenterDataService.prototype.deleteWorker = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationUrl + "/bunzo/workers/" + id);
    };
    TiffinCenterDataService.prototype.retrieveWorker = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationUrl + "/bunzo/workers/" + id);
    };
    TiffinCenterDataService.prototype.updateWorker = function (id, worker) {
        if (id != -1)
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationUrl + "/bunzo/workers/" + id, worker);
        else
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationUrl + "/bunzo/workers", worker);
    };
    TiffinCenterDataService.prototype.createOrder = function (id, tiffinOrder) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationUrl + "/bunzo/orders/" + id, tiffinOrder);
    };
    TiffinCenterDataService.prototype.retrieveAllOrders = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationUrl + "/bunzo/orders");
    };
    TiffinCenterDataService.prototype.handleLogin = function (credential) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationUrl + "/bunzo/login", credential);
    };
    TiffinCenterDataService.prototype.retrieveUserOrders = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationUrl + "/bunzo/orders/users/" + id);
    };
    TiffinCenterDataService.prototype.assignWorker = function (orderId, worker) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationUrl + "/bunzo/orders/" + orderId, worker);
    };
    TiffinCenterDataService.prototype.createUser = function (user, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].applicationUrl + "/bunzo/signup/" + password, user);
    };
    TiffinCenterDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TiffinCenterDataService);
    return TiffinCenterDataService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <br>\n  <br>\n  <form>\n\n    <fieldset class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)]=\"user.name\" class=\"form-control\" name=\"name\" required=\"required\">\n    </fieldset>\n\n    <fieldset class=\"form-group\">\n      <label>Email</label>\n      <input type=\"text\" [(ngModel)]=\"user.email\" class=\"form-control\" name=\"email\" required=\"required\">\n    </fieldset>\n\n    <fieldset class=\"form-group\">\n      <label>Role</label>\n      <input type=\"text\" [(ngModel)]=\"user.role\" class=\"form-control\" name=\"role\" required=\"required\" maxlength=\"5\">\n    </fieldset>\n\n    <fieldset class=\"form-group\">\n      <label>Password</label>\n      <input type=\"text\" [(ngModel)]=\"credential.password\" class=\"form-control\" name=\"password\" required=\"required\">\n    </fieldset>\n    <br>\n    <br>\n    <br>\n    <div style=\"text-align: center\">\n      <button (click)=createUser() type=\"submit\" class=\"btn btn-success\">Submit</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: User, Credential, SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credential", function() { return Credential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_data_tiffin_center_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data/tiffin-center-data.service */ "./src/app/service/data/tiffin-center-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    return User;
}());

var Credential = /** @class */ (function () {
    function Credential(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
    return Credential;
}());

var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, tiffinService) {
        this.router = router;
        this.tiffinService = tiffinService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.user = new User("", "", "user");
        this.credential = new Credential(1, "", "");
    };
    SignupComponent.prototype.createUser = function () {
        var _this = this;
        this.tiffinService.createUser(this.user, this.credential.password).subscribe(function (response) {
            _this.router.navigate(['login']);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_data_tiffin_center_data_service__WEBPACK_IMPORTED_MODULE_2__["TiffinCenterDataService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-4 col-md-4 m-auto\">\n    <div class=\"card mt-5\">\n      <h5 class=\"card-header text-center\">BUNZO</h5>\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <button (click)=createOrder() class=\"btn btn-success btn-sm form-control\">Create Order</button>\n        </div>\n\n        <div class=\"form-group\">\n          <button (click)=readPreviousOrders() class=\"btn btn-info btn-sm form-control\">My Orders</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
    };
    UserDashboardComponent.prototype.createOrder = function () {
        this.router.navigate(['order', this.id]);
    };
    UserDashboardComponent.prototype.readPreviousOrders = function () {
        this.router.navigate(['orders', this.id]);
    };
    UserDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__(/*! ./user-dashboard.component.html */ "./src/app/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.css */ "./src/app/user-dashboard/user-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/worker/worker.component.css":
/*!*********************************************!*\
  !*** ./src/app/worker/worker.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmtlci93b3JrZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/worker/worker.component.html":
/*!**********************************************!*\
  !*** ./src/app/worker/worker.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Worker</h1>\n<div class=\"container\">\n\n    <form>\n\n\n        <fieldset class=\"form-group\">\n\n            <label>Name</label>\n            <input type=\"text\" [(ngModel)]=\"worker.name\" class=\"form-control\" name=\"name\" required=\"required\" minlength=\"10\" maxlength=\"10\">\n        </fieldset>\n\n\n        <fieldset class=\"form-group\">\n            <label>Mobile Number</label>\n            <input type=\"text\" [(ngModel)]=\"worker.mobileNumber\" class=\"form-control\" name=\"mobileNumber\" required=\"required\" minlength=\"10\"\n                maxlength=\"10\">\n        </fieldset>\n\n\n        <fieldset class=\"form-group\">\n            <label>Area</label>\n            <input type=\"text\" [(ngModel)]=\"worker.area\" class=\"form-control\" name=\"area\" required=\"required\" minlength=\"5\">\n        </fieldset>\n\n        <fieldset class=\"form-group\">\n            <label>Active</label>\n            <input type=\"text\" [(ngModel)]=\"worker.active\" class=\"form-control\" name=\"active\" required=\"required\" minlength=\"5\">\n        </fieldset>\n\n        <button (click)=updateWorker() type=\"submit\" class=\"btn btn-success\"> Save</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/worker/worker.component.ts":
/*!********************************************!*\
  !*** ./src/app/worker/worker.component.ts ***!
  \********************************************/
/*! exports provided: WorkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerComponent", function() { return WorkerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_data_tiffin_center_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data/tiffin-center-data.service */ "./src/app/service/data/tiffin-center-data.service.ts");
/* harmony import */ var _list_workers_list_workers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-workers/list-workers.component */ "./src/app/list-workers/list-workers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkerComponent = /** @class */ (function () {
    function WorkerComponent(router, route, tiffinService) {
        this.router = router;
        this.route = route;
        this.tiffinService = tiffinService;
    }
    WorkerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.worker = new _list_workers_list_workers_component__WEBPACK_IMPORTED_MODULE_3__["Worker"](this.id, "", "", "", 0);
        if (this.id != -1) {
            //console.log(this.id)  
            this.tiffinService.retrieveWorker(this.id).subscribe(function (data) {
                _this.worker = data;
                //console.log(this.worker)
            });
        }
    };
    WorkerComponent.prototype.updateWorker = function () {
        var _this = this;
        this.tiffinService.updateWorker(this.id, this.worker).subscribe(function (response) {
            //console.log(response)
            _this.router.navigate(['workers']);
        });
    };
    WorkerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-worker',
            template: __webpack_require__(/*! ./worker.component.html */ "./src/app/worker/worker.component.html"),
            styles: [__webpack_require__(/*! ./worker.component.css */ "./src/app/worker/worker.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_data_tiffin_center_data_service__WEBPACK_IMPORTED_MODULE_2__["TiffinCenterDataService"]])
    ], WorkerComponent);
    return WorkerComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    applicationUrl: "http://localhost:8080"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\PT0933\Gitlab\Project\AngularWorkspace\tiffincenter\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map