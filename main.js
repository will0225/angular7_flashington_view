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

/***/ "./src/app/app-global.ts":
/*!*******************************!*\
  !*** ./src/app/app-global.ts ***!
  \*******************************/
/*! exports provided: AppGlobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGlobal", function() { return AppGlobal; });
/**
 * Global Variable Set
 */
var AppGlobal = /** @class */ (function () {
    function AppGlobal() {
    }
    AppGlobal.appBase = 'https://www.flashington.com/';
    //public static apiBase = 'https://admin.sassyflix.com/';
    // public static apiBase = 'http://localhost:83/';
    AppGlobal.apiBase = 'https://admin.flashington.com/';
    return AppGlobal;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _components_profiles_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profiles/view-profile/view-profile.component */ "./src/app/components/profiles/view-profile/view-profile.component.ts");
/* harmony import */ var _components_profiles_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profiles/manage-profile/manage-profile.component */ "./src/app/components/profiles/manage-profile/manage-profile.component.ts");
/* harmony import */ var _components_profiles_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profiles/edit-profile/edit-profile.component */ "./src/app/components/profiles/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_profiles_add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profiles/add-profile/add-profile.component */ "./src/app/components/profiles/add-profile/add-profile.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_browse_browse_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/browse/browse.component */ "./src/app/components/browse/browse.component.ts");
/* harmony import */ var _components_channels_channels_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/channels/channels.component */ "./src/app/components/channels/channels.component.ts");
/* harmony import */ var _components_sing_channel_sing_channel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sing-channel/sing-channel.component */ "./src/app/components/sing-channel/sing-channel.component.ts");
/* harmony import */ var _components_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/detail-page/detail-page.component */ "./src/app/components/detail-page/detail-page.component.ts");
/* harmony import */ var _components_payment_option_payment_option_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/payment-option/payment-option.component */ "./src/app/components/payment-option/payment-option.component.ts");
/* harmony import */ var _components_pay_per_view_pay_per_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pay-per-view/pay-per-view.component */ "./src/app/components/pay-per-view/pay-per-view.component.ts");
/* harmony import */ var _components_easy_video_easy_video_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/easy-video/easy-video.component */ "./src/app/components/easy-video/easy-video.component.ts");
/* harmony import */ var _components_search_video_search_video_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/search-video/search-video.component */ "./src/app/components/search-video/search-video.component.ts");
/* harmony import */ var _components_trailer_video_trailer_video_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/trailer-video/trailer-video.component */ "./src/app/components/trailer-video/trailer-video.component.ts");
/* harmony import */ var _components_account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/account-setting/account-setting.component */ "./src/app/components/account-setting/account-setting.component.ts");
/* harmony import */ var _components_edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/edit-account/edit-account.component */ "./src/app/components/edit-account/edit-account.component.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/app/components/change-password/change-password.component.ts");
/* harmony import */ var _components_delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/delete-account/delete-account.component */ "./src/app/components/delete-account/delete-account.component.ts");
/* harmony import */ var _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/subscription/subscription.component */ "./src/app/components/subscription/subscription.component.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/components/invoice/invoice.component.ts");
/* harmony import */ var _components_billing_details_billing_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/billing-details/billing-details.component */ "./src/app/components/billing-details/billing-details.component.ts");
/* harmony import */ var _components_paid_video_paid_video_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/paid-video/paid-video.component */ "./src/app/components/paid-video/paid-video.component.ts");
/* harmony import */ var _components_cast_and_crew_cast_and_crew_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/cast-and-crew/cast-and-crew.component */ "./src/app/components/cast-and-crew/cast-and-crew.component.ts");
/* harmony import */ var _components_genre_video_genre_video_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/genre-video/genre-video.component */ "./src/app/components/genre-video/genre-video.component.ts");
/* harmony import */ var _components_subscription_success_subscription_success_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/subscription-success/subscription-success.component */ "./src/app/components/subscription-success/subscription-success.component.ts");
/* harmony import */ var _components_static_static_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/static/static.component */ "./src/app/components/static/static.component.ts");
/* harmony import */ var _components_pop_up_video_pop_up_video_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/pop-up-video/pop-up-video.component */ "./src/app/components/pop-up-video/pop-up-video.component.ts");

































var routes = [
    { path: '', component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: 'signin', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'view-profiles', component: _components_profiles_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_6__["ViewProfileComponent"] },
    { path: 'manage-profiles', component: _components_profiles_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_7__["ManageProfileComponent"] },
    { path: 'edit-profile/:id', component: _components_profiles_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__["EditProfileComponent"] },
    { path: 'add-profile', component: _components_profiles_add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_9__["AddProfileComponent"] },
    { path: 'home/:id', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'browse/:id', component: _components_browse_browse_component__WEBPACK_IMPORTED_MODULE_11__["BrowseComponent"] },
    { path: 'channels', component: _components_channels_channels_component__WEBPACK_IMPORTED_MODULE_12__["ChannelsComponent"] },
    { path: 'channel/:id', component: _components_sing_channel_sing_channel_component__WEBPACK_IMPORTED_MODULE_13__["SingChannelComponent"] },
    { path: 'title/:title/:id', component: _components_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_14__["DetailPageComponent"] },
    { path: 'title/:title', component: _components_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_14__["DetailPageComponent"] },
    { path: 'payment-option/:id', component: _components_payment_option_payment_option_component__WEBPACK_IMPORTED_MODULE_15__["PaymentOptionComponent"] },
    { path: 'pay-per-view/:id', component: _components_pay_per_view_pay_per_view_component__WEBPACK_IMPORTED_MODULE_16__["PayPerViewComponent"] },
    { path: 'video/:id', component: _components_easy_video_easy_video_component__WEBPACK_IMPORTED_MODULE_17__["EasyVideoComponent"] },
    { path: 'search/:id', component: _components_search_video_search_video_component__WEBPACK_IMPORTED_MODULE_18__["SearchVideoComponent"] },
    { path: 'trailer_video/:id', component: _components_trailer_video_trailer_video_component__WEBPACK_IMPORTED_MODULE_19__["TrailerVideoComponent"] },
    { path: 'account-setting/:id', component: _components_account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_20__["AccountSettingComponent"] },
    { path: 'edit-account/:id', component: _components_edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_21__["EditAccountComponent"] },
    { path: 'change-password/:id', component: _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_22__["ChangePasswordComponent"] },
    { path: 'delete-account/:id', component: _components_delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_23__["DeleteAccountComponent"] },
    { path: 'subscriptions/:id', component: _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_24__["SubscriptionComponent"] },
    { path: 'invoice/:id', component: _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_25__["InvoiceComponent"] },
    { path: 'billing-details/:id', component: _components_billing_details_billing_details_component__WEBPACK_IMPORTED_MODULE_26__["BillingDetailsComponent"] },
    { path: 'payment-details', component: _components_paid_video_paid_video_component__WEBPACK_IMPORTED_MODULE_27__["PaidVideoComponent"] },
    { path: 'writer/:id', component: _components_cast_and_crew_cast_and_crew_component__WEBPACK_IMPORTED_MODULE_28__["CastAndCrewComponent"] },
    { path: 'actor/:id', component: _components_cast_and_crew_cast_and_crew_component__WEBPACK_IMPORTED_MODULE_28__["CastAndCrewComponent"] },
    { path: 'director/:id', component: _components_cast_and_crew_cast_and_crew_component__WEBPACK_IMPORTED_MODULE_28__["CastAndCrewComponent"] },
    { path: 'genre_video/:id', component: _components_genre_video_genre_video_component__WEBPACK_IMPORTED_MODULE_29__["GenreVideoComponent"] },
    { path: 'subscription-success', component: _components_subscription_success_subscription_success_component__WEBPACK_IMPORTED_MODULE_30__["SubscriptionSuccessComponent"] },
    { path: 'page/:id', component: _components_static_static_component__WEBPACK_IMPORTED_MODULE_31__["StaticComponent"] },
    { path: 'popupVideo/:id', component: _components_pop_up_video_pop_up_video_component__WEBPACK_IMPORTED_MODULE_32__["PopUpVideoComponent"] },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-settings.ts":
/*!*********************************!*\
  !*** ./src/app/app-settings.ts ***!
  \*********************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/**
 * Site Setting information from server
 */
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.settings = {};
    return AppSettings;
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

module.exports = "<div id=page_preloader class=\"page-loading\" style=\"display: none\">\n    <img src=\"./assets/img/page_preloader.svg\" alt=Loader title=Loader width=48 height=48 />\n</div>\n<div *ngIf=\"appSettingLoaded\">\n    <app-header *ngIf=\"layoutStatus\"></app-header>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-settings */ "./src/app/app-settings.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(apiService, router) {
        var _this = this;
        this.apiService = apiService;
        this.router = router;
        this.appSettingLoaded = false; // App init setting information
        this.loading = true; // Loading spinner
        this.appSettingLoaded = false;
        router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAppSettingInfo().subscribe(function (data) {
            var middleData = [];
            data.map(function (value, key) {
                middleData[value.key] = value.value;
            });
            _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].settings = middleData;
            _this.appSettingLoaded = true;
        });
    };
    // Shows and hides the loading spinner during RouterEvent changes
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            this.loading = true;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            this.layoutStatus = true;
            console.log(this.router.url);
            var URL_1 = this.router.url;
            if (URL_1.includes('view-profiles')) {
                this.layoutStatus = false;
            }
            if (URL_1.includes('manage-profiles')) {
                this.layoutStatus = false;
            }
            if (URL_1.includes('edit-profile')) {
                this.layoutStatus = false;
            }
            if (URL_1.includes('signin')) {
                this.layoutStatus = false;
            }
            if (URL_1.includes('register')) {
                this.layoutStatus = false;
            }
            if (this.router.url === '/') {
                this.layoutStatus = false;
            }
            this.loading = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
            this.loading = false;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            this.loading = false;
        }
    };
    AppComponent.prototype.checkAuth = function () {
        console.log(localStorage);
        if (localStorage.getItem('logged_in') && localStorage.getItem('logged_in') === 'true') {
            this.router.navigateByUrl('/view-profiles');
        }
        else {
            this.router.navigateByUrl('/');
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        console.log('App Loaded');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_loader_intercepter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/loader.intercepter */ "./src/app/services/loader.intercepter.ts");
/* harmony import */ var _services_router_ext_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/router-ext.service */ "./src/app/services/router-ext.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _components_profiles_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/profiles/view-profile/view-profile.component */ "./src/app/components/profiles/view-profile/view-profile.component.ts");
/* harmony import */ var _components_profiles_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/profiles/manage-profile/manage-profile.component */ "./src/app/components/profiles/manage-profile/manage-profile.component.ts");
/* harmony import */ var _components_profiles_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/profiles/edit-profile/edit-profile.component */ "./src/app/components/profiles/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_profiles_add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/profiles/add-profile/add-profile.component */ "./src/app/components/profiles/add-profile/add-profile.component.ts");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _components_browse_browse_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/browse/browse.component */ "./src/app/components/browse/browse.component.ts");
/* harmony import */ var _components_channels_channels_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/channels/channels.component */ "./src/app/components/channels/channels.component.ts");
/* harmony import */ var _components_sing_channel_sing_channel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/sing-channel/sing-channel.component */ "./src/app/components/sing-channel/sing-channel.component.ts");
/* harmony import */ var _components_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/detail-page/detail-page.component */ "./src/app/components/detail-page/detail-page.component.ts");
/* harmony import */ var _components_payment_option_payment_option_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/payment-option/payment-option.component */ "./src/app/components/payment-option/payment-option.component.ts");
/* harmony import */ var _components_pay_per_view_pay_per_view_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/pay-per-view/pay-per-view.component */ "./src/app/components/pay-per-view/pay-per-view.component.ts");
/* harmony import */ var _components_easy_video_easy_video_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/easy-video/easy-video.component */ "./src/app/components/easy-video/easy-video.component.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/components/invoice/invoice.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_paid_video_paid_video_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/paid-video/paid-video.component */ "./src/app/components/paid-video/paid-video.component.ts");
/* harmony import */ var _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/subscription/subscription.component */ "./src/app/components/subscription/subscription.component.ts");
/* harmony import */ var _components_cast_crews_cast_crews_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/cast-crews/cast-crews.component */ "./src/app/components/cast-crews/cast-crews.component.ts");
/* harmony import */ var _components_cast_and_crew_cast_and_crew_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/cast-and-crew/cast-and-crew.component */ "./src/app/components/cast-and-crew/cast-and-crew.component.ts");
/* harmony import */ var _components_spam_videos_spam_videos_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/spam-videos/spam-videos.component */ "./src/app/components/spam-videos/spam-videos.component.ts");
/* harmony import */ var _components_search_video_search_video_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/search-video/search-video.component */ "./src/app/components/search-video/search-video.component.ts");
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/player/player.component */ "./src/app/components/player/player.component.ts");
/* harmony import */ var _components_trailer_video_trailer_video_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/trailer-video/trailer-video.component */ "./src/app/components/trailer-video/trailer-video.component.ts");
/* harmony import */ var _components_account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/account-setting/account-setting.component */ "./src/app/components/account-setting/account-setting.component.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/app/components/change-password/change-password.component.ts");
/* harmony import */ var _components_edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/edit-account/edit-account.component */ "./src/app/components/edit-account/edit-account.component.ts");
/* harmony import */ var _components_delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/delete-account/delete-account.component */ "./src/app/components/delete-account/delete-account.component.ts");
/* harmony import */ var _components_billing_details_billing_details_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/billing-details/billing-details.component */ "./src/app/components/billing-details/billing-details.component.ts");
/* harmony import */ var _components_genre_video_genre_video_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/genre-video/genre-video.component */ "./src/app/components/genre-video/genre-video.component.ts");
/* harmony import */ var _components_subscription_success_subscription_success_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/subscription-success/subscription-success.component */ "./src/app/components/subscription-success/subscription-success.component.ts");
/* harmony import */ var _components_static_static_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/static/static.component */ "./src/app/components/static/static.component.ts");
/* harmony import */ var _components_pop_up_video_pop_up_video_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/pop-up-video/pop-up-video.component */ "./src/app/components/pop-up-video/pop-up-video.component.ts");








/** Services */




/** Components */







































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_16__["LandingComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _components_profiles_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_18__["ViewProfileComponent"],
                _components_profiles_manage_profile_manage_profile_component__WEBPACK_IMPORTED_MODULE_19__["ManageProfileComponent"],
                _components_profiles_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_20__["EditProfileComponent"],
                _components_profiles_add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_21__["AddProfileComponent"],
                _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__["LoaderComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
                _auth_register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"],
                _components_browse_browse_component__WEBPACK_IMPORTED_MODULE_25__["BrowseComponent"],
                _components_channels_channels_component__WEBPACK_IMPORTED_MODULE_26__["ChannelsComponent"],
                _components_sing_channel_sing_channel_component__WEBPACK_IMPORTED_MODULE_27__["SingChannelComponent"],
                _components_detail_page_detail_page_component__WEBPACK_IMPORTED_MODULE_28__["DetailPageComponent"],
                _components_payment_option_payment_option_component__WEBPACK_IMPORTED_MODULE_29__["PaymentOptionComponent"],
                _components_pay_per_view_pay_per_view_component__WEBPACK_IMPORTED_MODULE_30__["PayPerViewComponent"],
                _components_easy_video_easy_video_component__WEBPACK_IMPORTED_MODULE_31__["EasyVideoComponent"],
                _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_32__["InvoiceComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_33__["CardComponent"],
                _components_paid_video_paid_video_component__WEBPACK_IMPORTED_MODULE_34__["PaidVideoComponent"],
                _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_35__["SubscriptionComponent"],
                _components_cast_crews_cast_crews_component__WEBPACK_IMPORTED_MODULE_36__["CastCrewsComponent"],
                _components_cast_and_crew_cast_and_crew_component__WEBPACK_IMPORTED_MODULE_37__["CastAndCrewComponent"],
                _components_spam_videos_spam_videos_component__WEBPACK_IMPORTED_MODULE_38__["SpamVideosComponent"],
                _components_search_video_search_video_component__WEBPACK_IMPORTED_MODULE_39__["SearchVideoComponent"],
                _components_player_player_component__WEBPACK_IMPORTED_MODULE_40__["Player"],
                _components_trailer_video_trailer_video_component__WEBPACK_IMPORTED_MODULE_41__["TrailerVideoComponent"],
                _components_account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_42__["AccountSettingComponent"],
                _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_43__["ChangePasswordComponent"],
                _components_edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_44__["EditAccountComponent"],
                _components_delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_45__["DeleteAccountComponent"],
                _components_billing_details_billing_details_component__WEBPACK_IMPORTED_MODULE_46__["BillingDetailsComponent"],
                _components_static_static_component__WEBPACK_IMPORTED_MODULE_49__["StaticComponent"],
                _components_genre_video_genre_video_component__WEBPACK_IMPORTED_MODULE_47__["GenreVideoComponent"],
                _components_subscription_success_subscription_success_component__WEBPACK_IMPORTED_MODULE_48__["SubscriptionSuccessComponent"],
                _components_pop_up_video_pop_up_video_component__WEBPACK_IMPORTED_MODULE_50__["PopUpVideoComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"]
            ],
            providers: [
                _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
                _services_loader_service__WEBPACK_IMPORTED_MODULE_9__["LoaderService"],
                _services_router_ext_service__WEBPACK_IMPORTED_MODULE_11__["RouterExtService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _services_loader_intercepter__WEBPACK_IMPORTED_MODULE_10__["LoaderInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" *ngIf=\"loadStatus\" style=\"background-image: url(assets/img/login-bg.jpg)\">\n  <nav class=\"navbar navbar-default form-navbar\" role=\"navigation\">\n    <div class=\"banner-spacing\">\n      <div class=\"navbar-header form-header\">\n        <a class=\"navbar-brand\" href=\"/\">\n          <img src=\"{{AppSettings.site_logo}}\" class=\"hidden-xs\">\n        </a>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"content-panel\">\n\n    <!-- Login Form -->\n    <div class=\"login-form\">\n      <div class=\"\">\n        <div class=\"login-form-inner grey-bg\">\n          <h3 class=\"login-tit\">Sign In</h3>\n          <form #signForm=\"ngForm\" (ngSubmit)=\"signin(signForm)\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Email address</label>\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\" required\n                ngModel name=\"email\">\n            </div>\n\n            <div class=\"form-group\">\n              <label>Password</label>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password\" required ngModel name=\"password\">\n            </div>\n            <input type=\"hidden\" name=\"login_by\" ng-model=\"login_by\">\n            <input type=\"hidden\" name=\"device_type\" ng-model=\"device_type\">\n            <input type=\"hidden\" name=\"device_token\" ng-model=\"device_token\">\n\n            <div>\n              <button type=\"submit\" class=\"btn form-btn\" id=\"sign_in_button\">Sign In</button>\n            </div>\n          </form>\n          <!-- <div class=\"social-login\" ng-show=\"fb_status || google_status\">\n            <form method=\"POST\" action=\"{{AppSettings.socialUrl}}\" ng-show=\"google_status\">\n              <input value=\"google\" name=\"provider\" id=\"provider\" type=\"hidden\">\n              <div class=\"form-signup-google\"> <button type=\"submit\" class=\"btn\"><i class=\"fa fa-google\"></i>Sign in with Google</button> </div>\n            </form>\n            <form method=\"POST\" action=\"{{AppSettings.socialUrl}}\" ng-show=\"fb_status\">\n              <input value=\"facebook\" name=\"provider\" id=\"provider\" type=\"hidden\">\n              <div class=\"form-signup-facebook\"> <button type=\"submit\" class=\"btn\"><i class=\"fa fa-facebook\"></i>Sign in with facebook</button> </div>\n            </form>\n          </div> -->\n          <div class=\"clearfix\"></div>\n          <div class=\"pull-left1\">\n            <div class=\"form-txt-block\">\n              <p class=\"form-txt\">New to {{AppSettings.site_name}}? <a ui-sref=\"static.signup\" class=\"form-link\" routerLink=\"/register\">Sign up now.</a></p>\n            </div>\n          </div>\n          <div class=\"pull-right1\">\n\n            <div class=\"forgot form-txt-block\">\n              <a ui-sref=\"static.forgot\" class=\"form-link\">Forgot Password?</a>\n            </div>\n          </div>\n\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n    </div>\n    <!-- LOGIN FORM -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiService, router, titleService) {
        this.apiService = apiService;
        this.router = router;
        this.titleService = titleService;
        this.loginBy = 'manual';
        this.deviceType = 'web';
        this.deviceToken = '123456';
        this.email = '';
        this.password = '';
        this.sendData = {};
        this.localSessionData = {};
        this.titleService.setTitle('Flashington | Login');
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadStatus = false;
        this.AppSettings = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].settings;
        this.apiService.getAppSettingInfo().subscribe(function (data) {
            //this.AppSettings = data;
            _this.loadStatus = true;
        });
    };
    LoginComponent.prototype.signin = function (formData) {
        var _this = this;
        this.email = formData.value.email;
        this.password = formData.value.password;
        this.sendData = {
            email: this.email,
            password: this.password,
            login_by: this.loginBy,
            device_type: this.deviceType,
            device_token: this.deviceToken
        };
        this.apiService.signIn(this.sendData).subscribe(function (res) {
            if (res.success) {
                _this.localSessionData = {
                    access_token: res.token,
                    user_id: res.id,
                    login_by: res.login_by,
                    user_picture: res.picture,
                    user_name: res.name,
                    user_type: res.user_type,
                    one_time_subscription: res.one_time_subscription,
                    sub_profile_id: res.sub_profile_id
                };
                localStorage.setItem('logged_in', 'true');
                localStorage.setItem('sessionStorage', JSON.stringify(_this.localSessionData));
                console.log(JSON.stringify(localStorage.sessionStorage));
                UIkit.notify({ message: 'Your account has been successfully LoggedIn', timeout: 3000, pos: 'top-center', status: 'success' });
                _this.router.navigateByUrl('/view-profiles');
            }
            else {
                UIkit.notify({ message: res.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main-content form-content bg-img\" style=\"background-image:url({{login_bg}})\"> -->\n  <div class=\"main-content\">\n    <nav class=\"navbar navbar-default form-navbar\" role=\"navigation\">\n    <div class=\"banner-spacing\">\n      <div class=\"navbar-header form-header\">\n        <a class=\"navbar-brand\" ui-sref=\"static.index\" routerLink=\"/\">\n          <img src=\"{{AppSettings.site_logo}}\" class=\"hidden-xs\">\n          <img src=\"{{AppSettings.site_icon}}\" class=\"visible-xs\">\n        </a>\n      </div>\n    </div>\n  </nav>\n\n\n  <div class=\"content-panel\"> \n\n    \n     <div class=\"login-form\">\n      <div class=\"\">\n        <div class=\"login-form-inner grey-bg\">\t\n          <h3 class=\"login-tit\">Sign Up</h3>\n          <form method=\"post\" #signForm=\"ngForm\" (ngSubmit)=\"signup(signForm)\">\n            <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Full Name</label>\n                <input type=\"name\" class=\"form-control\" placeholder=\"Enter Your Name\" required ngModel name=\"name\">\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Email address</label>\n                <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\" name='email' required ngModel>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password\" min=\"6\" required ngModel name=\"password\">\n            </div>\n\n            <!-- <input type=\"text\" name=\"login_by\" ng-model=\"login_by\" ng-hide=\"true\">\n\n            <input type=\"text\" name=\"device_type\" ng-model=\"device_type\" ng-hide=\"true\">\n\n            <input type=\"text\" name=\"device_token\" ng-model=\"device_token\" ng-hide=\"true\"> -->\n\n            <div>\n              <button type=\"submit\" class=\"btn form-btn\" id=\"sign_up_button\">Sign Up</button>\n            </div>\n          </form>\n\n          <!-- <div class=\"social-login\" ng-show=\"fb_status || google_status\">\n                        <form method=\"POST\" action=\"{{socialUrl}}\" ng-show=\"google_status\">\n                          <input value=\"google\" name=\"provider\" id=\"provider\" type=\"hidden\">\n                            <div class=\"form-signup-google\"> <button type=\"submit\" class=\"btn\"><i class=\"fa fa-google\"></i>Sign in with Google</button> </div>\n                        </form>\n                        <form method=\"POST\" action=\"{{socialUrl}}\" ng-show=\"fb_status\">\n                          <input value=\"facebook\" name=\"provider\" id=\"provider\" type=\"hidden\">\n                            <div class=\"form-signup-facebook\"> <button type=\"submit\" class=\"btn\"><i class=\"fa fa-facebook\"></i>Sign in with facebook</button> </div>\n                        </form>  \n                    </div>\n\n                    <div class=\"clearfix\"></div>  </div>-->\n\n            <div class=\"form-txt-block\">\n              <p class=\"form-txt\">Already have an Account? <a ui-sref=\"static.signin\" class=\"form-link\" routerLink=\"/signin\"> Sign In.</a></p>\n            </div>\n       \t\t\t\t\t\n      </div>\n    </div>\n\n\n   </div>\n  </div>"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(apiService, router, titleService) {
        this.apiService = apiService;
        this.router = router;
        this.titleService = titleService;
        this.loginBy = 'manual';
        this.deviceType = 'web';
        this.deviceToken = '123456';
        this.email = '';
        this.password = '';
        this.name = '';
        this.sendData = {};
        this.localSessionData = {};
        this.titleService.setTitle('Flashington | Register');
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.AppSettings = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].settings;
    };
    RegisterComponent.prototype.signup = function (formData) {
        var _this = this;
        this.email = formData.value.email;
        this.password = formData.value.password;
        this.name = formData.value.name;
        this.sendData = {
            email: this.email,
            password: this.password,
            name: this.name,
            login_by: this.loginBy,
            device_type: this.deviceType,
            device_token: this.deviceToken
        };
        this.apiService.signUp(this.sendData).subscribe(function (res) {
            if (res.success) {
                if (res.verification_control == 1) {
                    UIkit.notify({ message: 'Your account has been successfully Registered, Please Verify your email and Sign In', timeout: 3000, pos: 'top-center', status: 'success' });
                    _this.router.navigateByUrl('/signin');
                }
                else {
                    _this.localSessionData = {
                        access_token: res.token,
                        user_id: res.id,
                        login_by: res.login_by,
                        user_picture: res.picture,
                        user_name: res.name,
                        user_type: res.user_type,
                        one_time_subscription: res.one_time_subscription,
                        sub_profile_id: res.sub_profile_id
                    };
                    localStorage.setItem('logged_in', 'true');
                    localStorage.setItem('sessionStorage', JSON.stringify(_this.localSessionData));
                    UIkit.notify({ message: 'Your account has been successfully Registered', timeout: 3000, pos: 'top-center', status: 'success' });
                    _this.router.navigateByUrl('/view-profiles');
                }
            }
            else {
                if (res.error_code != 3001) {
                    UIkit.notify({ message: res.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    _this.router.navigateByUrl('/signin');
                }
                else {
                    UIkit.notify({ message: "Your account has been successfully Registered, Please Verify your email and Sign In", timeout: 3000, pos: 'top-center', status: 'danger' });
                    _this.router.navigateByUrl('/signin');
                }
            }
        });
    };
    ;
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/account-setting/account-setting.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/account-setting/account-setting.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC1zZXR0aW5nL2FjY291bnQtc2V0dGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/account-setting/account-setting.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/account-setting/account-setting.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper gray-background\" style=\"padding-top:57px;\">\n\n    <div class=\"account-layout row\">\n      <div class=\"banner-spacing col-lg-10 col-lg-offset-1\">\n        \n        <div class=\"account-layout-inner\" style=\"padding-top: 15px;padding-bottom: 15px;\">\n          <div class=\"pull-left\"><h1 class=\"account-header\">My Account</h1></div>\n  \n          <div class=\"pull-right\">\n            <span class=\"noti-txt\">notification</span>\n            <label class=\"switch\" *ngIf=\"profile?.email_notification\" title=\"Disable Email Notifications\">\n              <input type=\"checkbox\" name=\"email_notification\" checked  (change)=\"emailNotification(this.id)\" id=\"disable_notify\">\n              <span class=\"switch-btn round\"></span>\n            </label>\n            <label class=\"switch\" *ngIf=\"!profile?.email_notification\" title=\"Enable Email Notifications\">\n              <input type=\"checkbox\" name=\"email_notification\" change=\"emailNotification(this.id)\" id=\"enable_notify\">\n              <span class=\"switch-btn round\"></span>\n            </label>\n          </div>\n  \n          <div class=\"clearfix\"></div>\n  \n          <div class=\"account-content\">\n            <!-- Account Section -->\n            <div class=\"account-section row no-margin\">\n  \n              <!-- Accound section header -->\n              <div class=\"col-lg-4 col-md-3 col-sm-3 col-xs-12\">\n                <div class=\"account-section-header\">\n                  <h3 class=\"account-section-title\">Profile</h3>\n                </div>\n              </div>\n  \n              <!-- Account section content -->\n              <div class=\"col-lg-8 col-md-9 col-sm-9 col-xs-12\">\n                <!-- Account Section Content -->\n                <div class=\"account-section-content row no-margin\">\n  \n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 no-pad\">\n                    <div class=\"account-section-content-block\">\n                      <p class=\"account-section-text\" *ngIf=\"profile?.login_by == 'manual'\">{{profile?.email}}</p>\n                      <p class=\"account-section-text account-gray-text\">\n                      Password <span>********</span>\n                      </p>\n                      <p class=\"account-section-text account-gray-text\">\n                      Phone <span>{{profile?.mobile}}</span>\n                      </p>\n                    </div>\n                  </div>\n  \n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 no-pad\">\n                    <div class=\"account-section-content-block text-right\">\n                      <div>\n                        <a href=\"/edit-account/{{id}}\" class=\"account-section-link\">Edit Profile</a>\n                      </div>\n                      \n                      <div *ngIf=\"login_by == 'manual'\">\n                        <a href=\"/change-password/{{id}}\" class=\"account-section-link\">Change Password</a>\n                      </div>\n  \n                      <div>\n                        <a href=\"/delete-account/{{id}}\" class=\"account-section-link\">Delete Account</a>\n                      </div>\t\t\t\t\t\t\t\t\t\t\t\n                    </div>\n                  </div>\n  \n                </div>\n                <!-- Account Section Content -->\n  \n              </div>\n  \n            </div>\n            <!-- Account Section End -->\n  \n            <!-- Account Section -->\n            <div class=\"account-section row no-margin\">\n  \n              <!-- Accound section header -->\n              <div class=\"col-lg-4 col-md-3 col-sm-3 col-xs-12\">\n                <div class=\"account-section-header\">\n                  <h3 class=\"account-section-title\">Plan Details</h3>\n                </div>\n              </div>\n  \n              <!-- Account section content -->\n              <div class=\"col-lg-8 col-md-9 col-sm-9 col-xs-12\">\n  \n                <div class=\"account-section-content row no-margin\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 no-pad\">\n                    <div class=\"account-section-content-block\">\n                      <p class=\"account-section-text\">{{active_plan?.title ? active_plan?.title : '-'}}</p>\n                    </div>\n                  </div>\n  \n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 no-pad\">\n                    <div class=\"account-section-content-block text-right\">\n                      <div>\n                        <a href=\"/subscriptions/{{sub_profile_id}}\" class=\"account-section-link\">Change Plan</a>\n                      </div>\t\t\t\t\t\t\t\t\t\t\t\n                    </div>\n  \n                    <div class=\"account-section-content-block text-right\">\n                      <div>\n                        <a href=\"/billing-details/{{sub_profile_id}}\" class=\"account-section-link\">Billing Details</a>\n                      </div>\t\t\t\t\t\t\t\t\t\t\t\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- Account section content -->\n            </div>\n            <!-- Account Section End -->\n  \n            <!-- Account Section -->\n            <div class=\"account-section row no-margin\">\n  \n              <!-- Accound section header -->\n              <div class=\"col-lg-4 col-md-3 col-sm-3 col-xs-12\">\n                <div class=\"account-section-header\">\n                  <h3 class=\"account-section-title\">Manage Profile</h3>\n                </div>\n              </div>\n  \n              <!-- Account section content -->\n              <div class=\"col-lg-8 col-md-9 col-sm-9 col-xs-12\">\n  \n                <div class=\"account-section-content row no-margin\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 no-pad\">\n                    <div class=\"\">\n                      <a class=\"account-profile\">\n                        <img src=\"{{subprofile?.picture}}\">\n                        {{subprofile?.name}}\n                      </a>\n                    </div>\n                  </div>\n  \n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 no-pad\">\n                    <div class=\"account-section-content-block text-right\">\n                      <div>\n                        <a href=\"/view-profiles\" class=\"account-section-link\">Manage Profile</a>\n                      </div>\t\t\t\t\t\t\t\t\t\t\t\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- Account section content -->\n            </div>\n            <!-- Account Section End -->\n            <!-- Account Section -->\n            <div class=\"account-section row no-margin\">\n  \n              <!-- Accound section header -->\n              <div class=\"col-lg-4 col-md-3 col-sm-3 col-xs-12\">\n                <div class=\"account-section-header\">\n                  <h3 class=\"account-section-title\">Card Details</h3>\n                </div>\n              </div>\n  \n              <!-- Account section content -->\n              <div class=\"col-lg-8 col-md-9 col-sm-9 col-xs-12\">\n  \n                <div class=\"account-section-content row no-margin\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 no-pad\">\n                    <div class=\"account-section-content-block\">\n                      <p class=\"account-section-text\" *ngIf=\"profile?.card_last_four_number != ''\">xxxx-xxxx-xxxx-{{profile?.card_last_four_number}}</p>\n                      <p class=\"account-section-text\" *ngIf=\"profile?.card_last_four_number == ''\">-</p>\n                    </div>\n                  </div>\n  \n                  <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 no-pad\">\n                    <div class=\"account-section-content-block text-right\">\n                      <div>\n                        <a href=\"/add-card/{{sub_profile_id}}\" class=\"account-section-link\">Add Card</a>\n                      </div>\t\t\t\t\t\t\t\t\t\t\t\n                    </div>\n  \n                    <div class=\"account-section-content-block text-right\">\n                      <div>\n                        <a href=\"card-list/{{ sub_profile_id}}\" class=\"account-section-link\">Card Details</a>\n                      </div>\t\t\t\t\t\t\t\t\t\t\t\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- Account section content -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/components/account-setting/account-setting.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/account-setting/account-setting.component.ts ***!
  \*************************************************************************/
/*! exports provided: AccountSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingComponent", function() { return AccountSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var AccountSettingComponent = /** @class */ (function () {
    function AccountSettingComponent(apiService, router, route, titleService) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.emailNotification = function (id) {
            var notification = $("#" + id).is(':checked');
            notification = notification ? 1 : 0;
            this.apiService.EmailNotification({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token })
                .subscribe(function (data) {
                if (data.success) {
                    UIkit.notify({ message: data.message, timeout: 3000, position: 'top-center', status: 'success' });
                    return false;
                }
                else {
                    return false;
                }
            });
        };
        this.titleService.setTitle('Flashington | Account');
    }
    AccountSettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.user_id = (this.sessionStorage.user_id != '' && this.sessionStorage.user_id != undefined) ? this.sessionStorage.user_id : false;
        this.access_token = (this.sessionStorage.access_token != undefined && this.sessionStorage.access_token != '') ? this.sessionStorage.access_token : '';
        this.site_settings = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].settings;
        if (this.user_id && this.access_token) {
            var login_bg = $.grep(this.site_settings, function (e) { return e.key == 'common_bg_image'; });
            var bg_image = "";
            if (login_bg.length == 0) {
                console.log("not found");
            }
            else if (login_bg.length == 1) {
                bg_image = login_bg[0].value;
                if (bg_image != '' || bg_image != null || bg_image != undefined) {
                }
                else {
                    bg_image = '';
                }
            }
            else {
                bg_image = "";
            }
            this.login_bg = bg_image;
            this.id = this.sessionStorage.user_id;
            this.sub_profile_id = this.route.snapshot.paramMap['params'].id;
            this.login_by = this.sessionStorage.login_by;
            $("#before_loader").show();
            this.apiService.getUserDetail({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token })
                .subscribe(function (data) {
                if (data.success) {
                    _this.profile = data;
                    console.log(_this.profile);
                    $("#before_loader").hide();
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
            this.apiService.AcitvePlan({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token })
                .subscribe(function (data) {
                if (data.success) {
                    _this.active_plan = data.subscription;
                    console.log(_this.active_plan);
                }
                else {
                    return false;
                }
            });
            $("#before_loader").fadeIn();
            this.apiService.getSingleSubscription({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, sub_profile_id: this.sub_profile_id })
                .subscribe(function (data) {
                if (data.success) {
                    _this.subprofile = data.data;
                    $("#before_loader").fadeOut();
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
            console.log(this.profile);
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    AccountSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-setting',
            template: __webpack_require__(/*! ./account-setting.component.html */ "./src/app/components/account-setting/account-setting.component.html"),
            styles: [__webpack_require__(/*! ./account-setting.component.css */ "./src/app/components/account-setting/account-setting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], AccountSettingComponent);
    return AccountSettingComponent;
}());



/***/ }),

/***/ "./src/app/components/billing-details/billing-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/billing-details/billing-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmlsbGluZy1kZXRhaWxzL2JpbGxpbmctZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/billing-details/billing-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/billing-details/billing-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main-content form-content bg-img\" style=\"background-image:url({{login_bg}})\"> -->\n  <div class=\"main-content\">\n\n    <div class=\"login-form\" style=\"padding-top: 100px;padding-bottom: 40px;\">\n\n        <div class=\"row\">\n        \t<div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 billing-white-bg\" *ngIf=\"subscribed_plans?.plans.length > 0\">\n\t        \t<div class=\"row\">\n\t        \t\t<div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5 zero-padding billing-bg-img\" style=\"background-image: url(assets/img/billing-back.jpg);\">\n\t        \t\t\t<div class=\"billing-bg\">\n\t\t        \t\t\t<h3 class=\"billing-head txt-overflow\"><i class=\"fa fa-calendar\"></i> &nbsp;Billing Details</h3>\n\t\t        \t\t\t<p class=\"bill-line\"></p>\n\n\t\t        \t\t\t<h4 class=\"billing-sub-head txt-overflow\"><i class=\"fa fa-hand-o-right\"></i><span style=\"margin-left:19px;\">Next Billing Date</span></h4>\n\t\t        \t\t\t<p class=\"billing-para\">{{active_plan?.data.expiry_date}}</p>\n\t\t        \t\t\t<p class=\"bill-line\"></p>\n\n\t\t        \t\t\t<h4 class=\"billing-sub-head txt-overflow\"><i class=\"fa fa-tags  fa-rotate-90\"></i><span style=\"margin-left:17px;\">{{active_plan?.subscription.title}}</span></h4>\n\t\t        \t\t\t<p class=\"billing-para\">{{active_plan?.data.currency}}{{active_plan?.data.amount}} / {{active_plan?.subscription.plan}} Months</p>\n\n\t\t        \t\t\t<p class=\"bill-line\"></p>\n\n\t\t        \t\t\t<a href=\"subscriptions/{{sub_profile_id}}\" class=\"text-right white-clr\"><h4><i class=\"fa fa-angle-double-right\"></i>&nbsp; View Plan Details</h4></a>\n\n\t\t        \t\t\t<div *ngIf=\"active_plan?.data.is_cancelled == 0 && active_plan?.data.subscription_amount > 0\">\n\n\t\t        \t\t\t<p class=\"bill-line\"></p>\n\n\t\t        \t\t\t<p>Pause your subscription autorenewal to take a break on the payment</p>\n\n\t\t        \t\t\t<button  class=\"paynow-btn1\" data-toggle=\"modal\" data-target=\"#cancel_subscription_form\"><i class=\"fa fa-times\"></i>&nbsp;Pause Autorenewal</button>\n\t\t        \t\t\t</div>\n\n\t\t        \t\t\t<div class=\"modal fade\" id=\"cancel_subscription_form\" role=\"dialog\">\n\t\t\t\t\t\t\t    <div class=\"modal-dialog\">\n\t\t\t\t\t\t\t      \t<!-- Modal content-->\n\t\t\t\t\t\t\t      \t<div class=\"modal-content\" style=\"background-color: #333;\">\n\t\t\t\t\t\t\t        \t<div class=\"modal-header spam\">\n\t\t\t\t\t\t\t          \t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t\t\t          \t\t<h4 class=\"modal-title bold\">Enter reason for cancellation</h4>\n\t\t\t\t\t\t\t        \t</div>\n\t\t\t\t\t\t\t        \t<div class=\"modal-body\">\n\t\t\t\t\t\t\t        \t\t<form (ngSubmit)=\"cancel_subscription(cancel_reason)\">\n\t\t\t\t\t\t\t\t          \t\t<div class=\"form-data\">\n\t\t\t\t\t\t\t\t          \t\t\t<textarea class=\"form-control\" [ngModel]=\"cancel_reason\" name=\"cancel_reason\" required style=\"resize: none\"></textarea>\n\t\t\t\t\t\t\t\t          \t\t</div>\n\t\t\t\t\t\t\t\t                <div class=\"text-right\">\n\t\t\t\t\t\t\t\t                \t<button type=\"submit\" class=\"payment-submit\">Submit</button>\n\t\t\t\t\t\t\t\t                </div>\n\t\t\t\t\t\t\t                </form>\n\t\t\t\t\t\t\t        \t</div>\n\t\t\t\t\t\t\t      \t</div>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</div>\n\n\t\t        \t\t\t<div *ngIf=\"active_plan?.data.is_cancelled == 1 && active_plan?.data.subscription_amount > 0\">\n\n\t\t        \t\t\t<p class=\"bill-line\"></p>\n\n\t\t        \t\t\t<p>Your subscription autorenewal is paused. Please activate autorenewal and enjoy your videos</p>\n\n\t\t        \t\t\t<button (click)=\"enable_subscription()\" class=\"paynow-btn1\"><i class=\"fa fa-check\"></i>&nbsp;Enable Autorenewal</button>\n\n\n\t\t        \t\t\t</div>\n\n\t\t        \t\t\t<!-- <div *ngIf=\"active_plan.data.is_cancelled == 1 && active_plan.data.subscription_amount > 0\">\n\n\t\t        \t\t\t<p class=\"bill-line\"></p>\n\n\n\t\t        \t\t\t<button disabled class=\"paynow-btn1\"><i class=\"fa fa-ban\"></i>&nbsp; Subscription Paused</button>\n\t\t        \t\t\t</center>\n\n\t\t        \t\t\t</div> -->\n\n\t        \t\t\t</div>\n\t        \t\t</div>\n\n\t        \t\t<div class=\"col-xs-12 col-sm-7 col-md-7 col-lg-7 billing-history\">\n\t        \t\t\t<h3 class=\"billing-head1\"><i class=\"fa fa-clock-o\"></i> &nbsp;Billing History</h3>\n\t        \t\t\t<p class=\"bill-line\"></p>\n\n\t        \t\t\t<div class=\"billing-card\" *ngFor=\"let plan of subscribed_plans?.plans\">\n\t        \t\t\t\t<div class=\"card-head txt-overflow\">\n\t        \t\t\t\t\t<h3>{{plan.plan_name}}</h3>\n\t        \t\t\t\t</div>\n\t        \t\t\t\t<div class=\"card-white-bg\">\n\t        \t\t\t\t\t<div class=\"table-responsive\">\n  \t\t\t\t\t\t\t\t\t<table class=\"table table-bordered\">\n  \t\t\t\t\t\t\t\t\t\t<tbody>\n  \t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>Payment Id</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{plan.payment_id}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>Subscribed Date</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{plan.date}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>Expiry Date</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{plan.expiry_date}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>No Of Account</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{plan.no_of_account}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>No Of Month</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{plan.no_of_month}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngIf='plan?.coupon_amount > 0'>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>Total Amount</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{plan.currency}}{{plan.total_amount}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"video?.coupon_amount > 0\">\n\t\t\t\t\t\t\t\t\t       \t\t<td>Coupon Code</td>\n\t\t\t\t\t\t\t\t\t       \t \t<td>{{plan.coupon_code}}</td>\t\n\t\t\t\t\t\t\t\t\t     \t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngIf='plan?.coupon_amount > 0'>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>Coupon Amount</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{plan.currency}}{{plan.coupon_amount}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>Paid Amount</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{plan.currency}}{{plan.amount}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>Payment Mode</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{plan.payment_mode}}</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n  \t\t\t\t\t\t\t\t\t</table>\n  \t\t\t\t\t\t\t\t</div>\n\t        \t\t\t\t</div>\n\t        \t\t\t</div>\n\t        \t\t\t\n\t        \t\t\t<div class=\"billing-total text-right\">\n\t        \t\t\t\t<h3>Total - {{subscribed_plans.currency}}{{subscribed_plans.amount}}</h3>\n\t        \t\t\t</div>\n\t        \t\t</div>\n        \t\t</div>\n        \t</div>\n        \t<div class=\"text-center\"  style=\"margin-top:40px !important\"  *ngIf=\"subscribed_plans?.plans.length <= 0\"> \n\t\t\t\t<img src=\"assets/img/no-results.png\" class=\"img-responsive auto-margin\">\n\t\t\t</div>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/billing-details/billing-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/billing-details/billing-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: BillingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingDetailsComponent", function() { return BillingDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");






var BillingDetailsComponent = /** @class */ (function () {
    function BillingDetailsComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.cancel_subscription = function (cancel_reason) {
            if (confirm('If you are cancelled your subscription, automatic renewal wont happen. Do you want to cancel your subscription ?')) {
                this.apiService.CancelSubscription({ id: this.user_id, token: this.access_token, cancel_reason: cancel_reason })
                    .subscribe(function (data) {
                    if (data.success) {
                        UIkit.notify({ message: data.message, timeout: 3000, pos: 'top-center', status: 'success' });
                        setTimeout(function () { window.location.reload(); }, 1000);
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                });
            }
        };
        this.enable_subscription = function () {
            if (confirm('Do you want to enable Auto subscription ?')) {
                this.apiService.AutoRenewalEnable({ id: this.user_id, token: this.access_token })
                    .subscribe(function (data) {
                    if (data.success) {
                        UIkit.notify({ message: data.message, timeout: 3000, pos: 'top-center', status: 'success' });
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                });
            }
        };
    }
    BillingDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.site_settings = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].settings;
        this.sub_profile_id = this.route.snapshot.paramMap['params'].id;
        this.user_id = (this.sessionStorage['user_id'] != '' && this.sessionStorage['user_id'] != undefined) ? this.sessionStorage['user_id'] : false;
        this.access_token = (this.sessionStorage['access_token'] != undefined && this.sessionStorage['access_token'] != '') ? this.sessionStorage['access_token'] : '';
        if (this.user_id && this.access_token) {
            var login_bg = $.grep(this.site_settings, function (e) { return e.key == 'common_bg_image'; });
            var bg_image = "";
            if (login_bg.length == 0) {
                console.log("not found");
            }
            else if (login_bg.length == 1) {
                // access the foo property using result[0].foo
                bg_image = login_bg[0].value;
                if (bg_image != '' || bg_image != null || bg_image != undefined) {
                }
                else {
                    bg_image = '';
                }
            }
            else {
                // multiple items found
                bg_image = "";
            }
            this.login_bg = bg_image;
            this.apiService.AcitvePlan({ id: this.user_id, token: this.access_token })
                .subscribe(function (data) {
                if (data.success) {
                    _this.active_plan = data;
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
            this.apiService.SubscribedPlans({ id: this.user_id, token: this.access_token })
                .subscribe(function (data) {
                if (data.success) {
                    _this.subscribed_plans = data;
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    BillingDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-billing-details',
            template: __webpack_require__(/*! ./billing-details.component.html */ "./src/app/components/billing-details/billing-details.component.html"),
            styles: [__webpack_require__(/*! ./billing-details.component.css */ "./src/app/components/billing-details/billing-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BillingDetailsComponent);
    return BillingDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/browse/browse.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/browse/browse.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-head h3 {\r\n\tfont-size: 18px;\r\n\tcolor: #e5e5e5;\r\n\tfont-weight: 700;\r\n\ttext-decoration: none;\r\n\tdisplay: inline-block;\r\n\tmargin: 0;\r\n\tpadding: 4px 0px;\r\n}\r\n\r\n.video-box-row {\r\n\tfont-size: 14px;\r\n\twhite-space: normal;\r\n}\r\n\r\n.tile {\r\n\theight: auto !important;\r\n\twidth: 100%;\r\n}\r\n\r\n.tile-img {\r\n\tmax-height: 420px;\r\n\t-o-object-fit: fill;\r\n\t   object-fit: fill;\r\n}\r\n\r\n.tile-media {\r\n\t/*border: 2px solid #141414;*/\r\n\theight: auto !important;\r\n\ttext-align: center;\r\n}\r\n\r\n.slick-initialized .slick-slide {\r\n\tdisplay: inline-block !important;\r\n\theight: 100% !important;\r\n\tpadding: 0;\r\n}\r\n\r\n.tab-overlay {\r\n\tbackground: rgba(0, 0, 0, .90);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9icm93c2UvYnJvd3NlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLFNBQVM7Q0FDVCxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixtQkFBZ0I7SUFBaEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCLHVCQUF1QjtDQUN2QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMsdUJBQXVCO0NBQ3ZCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLDhCQUE4QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnJvd3NlL2Jyb3dzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1oZWFkIGgzIHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Y29sb3I6ICNlNWU1ZTU7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiA0cHggMHB4O1xyXG59XHJcblxyXG4udmlkZW8tYm94LXJvdyB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuXHJcbi50aWxlIHtcclxuXHRoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRpbGUtaW1nIHtcclxuXHRtYXgtaGVpZ2h0OiA0MjBweDtcclxuXHRvYmplY3QtZml0OiBmaWxsO1xyXG59XHJcblxyXG4udGlsZS1tZWRpYSB7XHJcblx0Lypib3JkZXI6IDJweCBzb2xpZCAjMTQxNDE0OyovXHJcblx0aGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2xpY2staW5pdGlhbGl6ZWQgLnNsaWNrLXNsaWRlIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuXHRoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udGFiLW92ZXJsYXkge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjkwKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/browse/browse.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/browse/browse.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content\" id=\"page_content\">\n\t<div style=\"margin-top:80px !important; margin:5%; padding: 10px;\">\n\t\t<div class=\"box-head\" style=\"margin-bottom: 2%;\">\n\t\t\t<h3>{{datas.title}}</h3>\n\t\t\t<span *ngIf=\"datas.title == 'Movies'\" style=\"position:relative;\">\n\t\t\t\t<span class=\"secondary-menu custom-menu\" (click)=\"ShowGeners()\">Genres: <i class=\"glyphicon glyphicon-triangle-bottom arrow-down\"></i>\n\t\t\t\t\t<div id=\"geners_menu\" class=\"secondary-dropdown\">\n\t\t\t\t\t\t<ul class=\"sub-drop list-unstyled\" *ngFor=\"let cols of datas.sub_category\">\n\t\t\t\t\t\t\t<li *ngFor=\"let col of cols|keyvalue\">\n\t\t\t\t\t\t\t\t<a href=\"/title/{{col.key}}/{{col.value}}\">{{col.key}}</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</span>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"box video-box-row\" *ngIf=\"datas.length == 0\">\n\t\t\t<p>No videos found</p>\n\t\t</div>\n\t\t<div class=\"video-full-box\" *ngFor=\"let category of datas.data|keyvalue\">\n\t\t\t<div class=\"box-title\" *ngIf=\"category.value.videos?.length > 0\">\n\t\t\t\t<div class=\"box-head row no-margin\">\n\t\t\t\t\t<h3 class=\"main-title pull-left\">{{category.key}}</h3>\n\t\t\t\t\t<a class=\"see-all pull-right\" href=\"/title/{{category.key}}/{{category.value.id}}\" style=\"color: #fff\">See All </a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- <div class=\"box video-box-row\" *ngIf=\"category.value.videos?.length < 1\">\n\t\t\t\tNo videos found\n\t\t\t</div> -->\n\t\t\t<div class=\"box video-box-row\">\n\t\t\t\t<!-- <slick slides-to-show=\"{{slide_to_show}}\" slides-to-scroll=\"{{slide_to_scroll}}\" init-onload=true data=\"subcategory.videos\" class=\"slider multiple-items\"> -->\n        <ngx-slick-carousel class=\"carousel episode-slider\"  #slickModal=\"slick-carousel\" [config]=\"slideConfig\" >\n          <div ngxSlickItem id=\"{{category.key.split(' ').join('')}}_{{parentindex}}_{{parentindex}}\" (mouseover)=\"hoverIn(this, category.key.split(' ').join(''), parentindex, parentindex, category.value.videos.length)\" (mouseleave)=\"hoverOut(this,category.key.split(' ').join(''), parentindex, parentindex,category.value.videos.length)\" class=\"slide-box tile video-box\" *ngFor=\"let video of category.value.videos; let parentindex = index\">\n\t\t\t\t\t\t<div class=\"video-box-outer\">\n\t\t\t\t\t\t\t<div class=\"tile-media\" id=\"{{category.key.split(' ').join('')}}_{{parentindex}}_{{parentindex}}_img\">\n\t\t\t\t\t\t\t\t<img class=\"tile-img\" src=\"{{video.default_image}}\" alt=\"\" [ngStyle]=\"media_height\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"tile-details\">\n\t\t\t\t\t\t\t\t<div class=\"video_amount\" *ngIf=\"video.amount > 0 && !video.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t<!-- <span *ngIf=\"video.pay_per_view_status\">PAID</span> -->\n\t\t\t\t\t\t\t\t\t<span>PAY- {{video.currency}} {{video.amount}}</span>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<!-- <a ui-sref=\"single_video({id : video.admin_video_id})\">\n\t\t\t\t\t\t\t\t\t<div class=\"hover-icon\" id=\"{{parentindex}}_{{parentindex}}_div\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a> -->\n\n\t\t\t\t\t\t\t\t<span *ngIf=\"video.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t<a href=\"/video/{{video.admin_video_id}}\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hover-icon\" id=\"{{parentindex}}_{{parentindex}}_div\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"!video.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t<!-- <a ui-sref=\"profile.payment-option({id : video.admin_video_id})\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a> -->\n\t\t\t\t\t\t\t\t\t<a href=\"/payment-option/{{video.admin_video_id}}\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"hover-icon\" id=\"{{parentindex}}_{{parentindex}}_div\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t<div class=\"tile-content\" id=\"{{category.key.split(' ').join('')}}_{{parentindex}}_{{parentindex}}_desc\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"tile-tit\">{{video.title}}</h3>\n\n\t\t\t\t\t\t\t\t\t<div class=\"row no-margin hidden-cls\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 1), 'glyphicon-star' : (video.ratings >= 1)}\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 2), 'glyphicon-star' : (video.ratings >= 2)}\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 3), 'glyphicon-star' : (video.ratings >= 3)}\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 4), 'glyphicon-star' : (video.ratings >= 4)}\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 5), 'glyphicon-star' : (video.ratings >= 5)}\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"video-season\">\n\t\t\t\t\t\t\t\t\t\t\t<span>{{video.release_date && video.release_date !=\"0000-00-00\" ? video.release_date:'' }}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"video-epi-count\">{{video.age}} /<i class=\"fa fa-eye\"></i>&nbsp;{{video.watch_count}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span>{{video.duration}}</span>\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"row no-margin\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"video-des col-xs-12 no-pad\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"video-des-inner\">{{video.description}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"showVideoDrop(this, category.key.split(' ').join(''), parentindex, parentindex,video.length)\" class=\"arrow\"><img src=\"assets/img/down-arrow-red.png\" class=\"arrow_down\" /></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ngx-slick-carousel>\n\t\t\t</div>\n\t\t\t<div class=\"clearfix\"></div>\n\t\t\t<div class=\"video-drop\" *ngFor=\"let video of category.value.videos; let parentindex = index\" id=\"{{category.key.split(' ').join('')}}_{{parentindex}}_{{parentindex}}_video_drop\">\n\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t<!-- OVERVIEW SECTION  -->\n\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane active\" id=\"{{category.key.split(' ').join('')}}_{{parentindex}}_{{parentindex}}_overview\">\n\t\t\t\t\t\t<div class=\"overview tab-section relative\">\n\t\t\t\t\t\t\t<div class=\"close-tab\">\n\t\t\t\t\t\t\t\t<a style=\"cursor: pointer;\" (click)=\"closeDiv(category.key, parentindex,parentindex)\" class=\"close-btn\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-times\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"tab-section-content row no-margin\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-5 no-pad overview-details\">\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7 no-pad\">\n\t\t\t\t\t\t\t\t\t<div class=\"linear-outer\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"linear\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"rotate-img-outer\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rotate-img highlight-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + video.default_image + ')'}\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"rotate-img highlight-img bg-img\" style=\"background-image: url({{video.video_gif_image}});\"></div> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"play-icon-outer\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- <a ui-sref=\"single_video({id : video.admin_video_id})\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a> -->\n\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"video.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/video/{{video.admin_video_id}}\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!video.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/payment-option/{{video.admin_video_id}}\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"home-new-deatils\">\n\t\t\t\t\t\t\t\t\t<div class=\"overview-details\" style=\"background-color: unset;\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{video.title}}</h3>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"row no-margin hidden-xs\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 1), 'glyphicon-star' : (video.ratings >= 1)}\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 2), 'glyphicon-star' : (video.ratings >= 2)}\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 3), 'glyphicon-star' : (video.ratings >= 3)}\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 4), 'glyphicon-star' : (video.ratings >= 4)}\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 5), 'glyphicon-star' : (video.ratings >= 5)}\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"green-clr\">{{video.release_date && video.release_date !=\"0000-00-00\" ? video.release_date:'' }}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"epi-count\">{{video.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{video.watch_count}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>{{video.duration}}</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pull-left\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"white-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-thumbs-up\"></i><span id=\"like_count_{{category.key}}_{{parentindex}}_{{parentindex}}\">{{video.like_count}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"white-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-thumbs-down\"></i><span id=\"dis_like_count_{{category.key}}_{{parentindex}}_{{parentindex}}\">{{video.dis_like_count}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pull-left\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"display_amount\" *ngIf=\"video.amount > 0 && !video.pay_per_view_status\" style=\"margin-left: 5px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span *ngIf=\"recent_video.pay_per_view_status\">PAID</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>PAY - {{video.currency}} {{video.amount}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt overview-des\">{{video.description}}</p>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- <p class=\"content-txt awards\"><i class=\"fa fa-trophy\"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div id=\"my-list-txt_{{category.key}}_{{parentindex}}_{{parentindex}}\" class=\"pull-left\">\n\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"addWishlist(video.admin_video_id, category.key, parentindex, parentindex)\" class=\"bold\" *ngIf=\"!video.wishlist_status\"\n\t\t\t\t\t\t\t\t\t\t\t style=\"cursor: pointer;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"my-list \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-plus my-list-icon\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"my-list-txt\">My List</span> \n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"removeWishlist(video.wishlist_status, video.admin_video_id,category.key, parentindex, parentindex)\" class=\"bold\" *ngIf=\"video.wishlist_status\"\n\t\t\t\t\t\t\t\t\t\t\t style=\"cursor: pointer;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"my-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-check my-list-icon\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"my-list-txt\">My List</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</button> \n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"banner-icon-sec hidden-xs\">\n\t\t\t\t\t\t\t\t\t\t\t<a id=\"like_{{category.key}}_{{parentindex}}_{{parentindex}}\" style=\"cursor: pointer;\" *ngIf=\"video.is_liked == 1 || video.is_liked == 0\"\n\t\t\t\t\t\t\t\t\t\t\t (click)=\"likeVideo(video.admin_video_id, category.key, parentindex, parentindex)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"banner-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-thumbs-up\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t<a id=\"dis_like_{{category.key}}_{{parentindex}}_{{parentindex}}\" style=\"cursor: pointer;\" *ngIf=\"video.is_liked == -1 || video.is_liked == 0\"\n\t\t\t\t\t\t\t\t\t\t\t (click)=\"dislikeVideo(video.admin_video_id, category.key, parentindex, parentindex)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"banner-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-thumbs-down\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#myModal_{{category.key}}_{{parentindex}}_{{parentindex}}\" title=\"Report as Spam\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"banner-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-exclamation\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"modal fade\" id=\"myModal_{{category.key}}_{{parentindex}}_{{parentindex}}\" role=\"dialog\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-dialog\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Modal content-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-content\" style=\"background-color: #333;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"modal-title bold\">Report This Video</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"spamVideo(video.admin_video_id, category.key, parentindex, parentindex)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"radio radio-danger\" *ngFor=\"let spam_reason of spam_reasons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"reason\" id=\"reason_{{category.key}}_{{parentindex}}_{{parentindex}}\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"reason_{{category.key}}_{{parentindex}}_{{parentindex}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{spam_reason.video}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{spam_reason_video}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small bold text-center\">If you report this video, you won't see again the same video in anywhere in your account except \"Spam Videos\".\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIf you want to continue to report this video as same. Click continue and proceed the same.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"payment-submit\">Submit</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- OVERVIEW SECTION END -->\n\n\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"{{category.key.split(' ').join('')}}_{{parentindex}}_{{parentindex}}_episodes\" *ngIf=\"video.is_genre\">\n\t\t\t\t\t\t<div class=\"episodes-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + video.default_image + ')'}\">\n\t\t\t\t\t\t\t<div class=\"tab-overlay\">\n\n\t\t\t\t\t\t\t\t<div class=\"episodes-section-inner tab-section-content tab-sec-inner contain-width\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{video.sub_category_name}}</h3>\n\t\t\t\t\t\t\t\t\t<form class=\"season-select\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"exampleSelect1\" [ngModel]=\"genres_name\" (ngModelChange)=\"getSeasons(genres_name, category.key.split(' ').join(''),parentindex,parentindex,'_sessions', '_loader_seasons', video.genre_id);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option video=\"\">Select Seasons</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option  *ngFor=\"let genrename of video.genre_names\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{genrename.genre_name}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\n\t\t\t\t\t\t\t\t\t<div class=\"episodes-list row\">\n\n\t\t\t\t\t\t\t\t\t\t<div id=\"{{category.key.split(' ').join('')}}{{parentindex}}{{parentindex}}_loader_seasons\" style=\"margin-top: 10px;text-align: center;display: none\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/ellipsis.svg\" style=\"width: 40px;\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div id=\"{{category.key.split(' ').join('')}}{{parentindex}}{{parentindex}}_sessions\">\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- episode list box -->\n\t\t\t\t\t\t\t\t\t\t\t<!-- <slick slides-to-show=\"{{epdisode_slide_to_show}}\" slides-to-scroll=\"{{epdisode_slide_to_scroll}}\" dots=\"false\" class=\"episode-slider\"> -->\n                      <ngx-slick-carousel class=\"carousel slider multiple-items\" #slickModal=\"slick-carousel\" [config]=\"slideConfig1\" data=\"item.value.videos\">  \n                        <div ngxSlickItem *ngFor=\"let genre_list of video.first_part\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-box\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + genre_list.default_image + ')'}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"epi-count\">{{genre_list.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{genre_list.watch_count}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"epi-play-icon-outer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a ui-sref=\"single_video({id : genre_list.admin_video_id})\" class=\"epi-play-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"genre_list.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/video/{{genre_list.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!genre_list.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/payment-option/{{genre_list.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-margin\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"epi-tit gray-color1 txt-overflow\">{{genre_list.title}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 text-right hidden-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"bold gray-color1 epi-tit txt-overflow\">{{genre_list.duration}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\" gray-color1 overview-des more-link mt-0\">{{genre_list.description}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ngx-slick-carousel>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- episode-list-box end -->\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- EPISODES-SECTION END-->\n\n\t\t\t\t\t<!-- TRAILERS SECTION -->\n\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"{{category.key.split(' ').join('')}}_{{parentindex}}_{{parentindex}}_trailers\" *ngIf=\"video.is_genre || video.trailer_video\">\n\t\t\t\t\t\t<div class=\"trailers-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + video.default_image + ')'}\">\n\t\t\t\t\t\t\t<div class=\"tab-overlay\">\n\n\t\t\t\t\t\t\t\t<div class=\"trailers-section-inner tab-section-content tab-sec-inner contain-width\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{video.sub_category_name}}</h3>\n\n\t\t\t\t\t\t\t\t\t<div class=\"trailers-list row\">\n\n\t\t\t\t\t\t\t\t\t\t<!-- episode list box -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 top\" *ngFor=\"let trailer of video.genres\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-box\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + trailer.genre_image + ')'}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-overlay\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"epi-play-icon-outer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/genre_video/{{trailer.genre_id}}\" class=\"epi-play-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-margin\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"epi-tit gray-color1\">{{trailer.genre_name}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 top\" *ngIf=\"video.trailer_video\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-box\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + video.default_image + ')'}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-overlay\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"epi-play-icon-outer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/trailer_video/{{video.admin_video_id}}\" class=\"epi-play-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-margin\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"epi-tit gray-color1\">{{video.title}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- MORE LIKE SECTION  -->\n\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"{{category.key.split(' ').join('')}}_{{parentindex}}_{{parentindex}}_more-like\">\n\t\t\t\t\t\t<div class=\"morelike-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + video.default_image + ')'}\">\n\t\t\t\t\t\t\t<div class=\"tab-overlay\">\n\n\t\t\t\t\t\t\t\t<div class=\"morelike-section-inner tab-section-content tab-sec-inner contain-width\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{video.sub_category_name}}</h3>\n\n\t\t\t\t\t\t\t\t\t<div class=\"morelike-list row\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\" *ngFor=\"let sub_video of video.sub_videos\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-box\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + sub_video.default_image + ')'}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"new-epi\">{{sub_video.title}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"epi-play-icon-outer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a ui-sref=\"single_video({id : sub_video.admin_video_id})\" class=\"epi-play-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"sub_video.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/video/{{sub_video.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!sub_video.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/payment-option/{{sub_video.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"duration_more\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{sub_video.duration}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-margin\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 1), 'glyphicon-star' : (sub_video.ratings >= 1)}\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 2), 'glyphicon-star' : (sub_video.ratings >= 2)}\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 3), 'glyphicon-star' : (sub_video.ratings >= 3)}\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 4), 'glyphicon-star' : (sub_video.ratings >= 4)}\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 5), 'glyphicon-star' : (sub_video.ratings >= 5)}\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"green-clr hidden-sm\">{{sub_video.publish_time}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"epi-count hidden-sm hidden-md\">{{sub_video.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{sub_video.watch_count}}</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt overview-des more-link\">{{sub_video.description}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- MORE LIKE SECTION END -->\n\n\t\t\t\t\t<!-- DETAILS-SECTION -->\n\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"{{category.key.split(' ').join('')}}_{{parentindex}}_{{parentindex}}_details\">\n\t\t\t\t\t\t<div class=\"details-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + video.default_image + ')'}\">\n\t\t\t\t\t\t\t<div class=\"tab-overlay\">\n\t\t\t\t\t\t\t\t<div class=\"details-section-inner tab-section-content tab-sec-inner contain-width details_section_tab\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{video.title}}</h3>\n\t\t\t\t\t\t\t\t\t<div class=\"row col-sm-12 col-sm-12 col-lg-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"detailsItem detailsMedia col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t<h4>Directors</h4>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let director of video.directors\" class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/director/{{director.id}}\">{{director.name}}</a></li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<h4>Writers</h4>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let writer of video.writers\" class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/writer/{{writer.id}}\">{{writer.name}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"detailsItem detailsMedia col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t<h4>Actors</h4>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let actor of video.actors\" class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/actor/{{actor.id}}\">{{actor.name}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"detailsItem detailsMedia col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t<h4>Category</h4>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a>{{video.sub_category_name}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"clear-fix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<h4>Publish Date</h4>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"green-clr hidden-sm\">{{video.release_date  && video.release_date !=\"0000-00-00\" ? video.release_date:''}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<h4>Duration</h4>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{video.duration}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"detailsItem detailsMedia col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t<h4>Ratings</h4>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"mt-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 1), 'glyphicon-star' : (video.ratings >= 1)}\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 2), 'glyphicon-star' : (video.ratings >= 2)}\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 3), 'glyphicon-star' : (video.ratings >= 3)}\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 4), 'glyphicon-star' : (video.ratings >= 4)}\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 5), 'glyphicon-star' : (video.ratings >= 5)}\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<h4>Age</h4>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tRecommended for ages {{video.age}} and up\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- DETAILS-SECTION END -->\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"drop-tab hidden-xs\">\n\n\t\t\t\t\t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t\t\t\t\t\t<li role=\"presentation\" class=\"active\">\n\t\t\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"dynamicContent(category.key.split(' ').join(''), parentindex, parentindex,'overview')\" aria-controls=\"overview\" role=\"tab\"\n\t\t\t\t\t\t\t data-toggle=\"tab\">Overview</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li role=\"presentation\" *ngIf=\"video.is_genre\">\n\t\t\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"dynamicContent(category.key.split(' ').join(''), parentindex,parentindex,'episodes')\" aria-controls=\"episodes\" role=\"tab\"\n\t\t\t\t\t\t\t data-toggle=\"tab\">Episodes</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li role=\"presentation\" *ngIf=\"video.is_genre || video.trailer_video\">\n\t\t\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"dynamicContent(category.key.split(' ').join(''), parentindex, parentindex,'trailers')\" aria-controls=\"trailers\" role=\"tab\"\n\t\t\t\t\t\t\t data-toggle=\"tab\">Trailers &amp; More</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li role=\"presentation\">\n\t\t\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"dynamicContent(category.key.split(' ').join(''), parentindex,parentindex,'more-like')\" aria-controls=\"more-like\" role=\"tab\"\n\t\t\t\t\t\t\t data-toggle=\"tab\">More Like This</a>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li role=\"presentation\">\n\t\t\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"dynamicContent(category.key.split(' ').join(''), parentindex,parentindex,'details')\" aria-controls=\"details\" role=\"tab\"\n\t\t\t\t\t\t\t data-toggle=\"tab\">Details</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"clearfix\"></div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/browse/browse.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/browse/browse.component.ts ***!
  \*******************************************************/
/*! exports provided: BrowseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseComponent", function() { return BrowseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_app_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-global */ "./src/app/app-global.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var BrowseComponent = /** @class */ (function () {
    function BrowseComponent(apiService, router, route, titleService) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.slide_to_show = 6;
        this.slide_to_scroll = 2;
        this.sessionStorage = {};
        this.datas = {};
        this.epdisode_slide_to_show = 6;
        this.epdisode_slide_to_scroll = 2;
        this.showVideoDrop = function (event, sub, idx, key) {
            $("#" + sub + '_' + idx + "_" + key + "_video_drop").fadeIn();
            $('#' + sub + '_' + idx + "_" + key).removeClass('transition-class');
            $('#' + sub + '_' + idx + "_" + key + "_img").addClass('active_img');
            $('#' + sub + '_' + idx + "_" + key + "_desc").hide();
            $('#' + sub + '_' + idx + "_" + key + "_div").addClass('play_icon_div');
        };
        this.ShowGeners = function () {
            if (!$("#geners_menu").hasClass("active")) {
                $("#geners_menu").css('display', 'block');
                $("#geners_menu").addClass("active");
            }
            else {
                $("#geners_menu").css('display', 'none');
                $("#geners_menu").removeClass("active");
            }
        };
        this.hoverIn = function (event, sub, id, key, length) {
            console.log('browse check', sub, id, key, length);
            var video_drop = $(".video-drop").is(":visible");
            if (!video_drop) {
                $('#' + sub + '_' + id + "_" + key).addClass('transition-class');
                $('#' + sub + '_' + id + "_" + key + "_desc").show();
                $('#' + sub + '_' + id + "_" + key + "_desc").css('bottom', '30px');
                $('#' + sub + '_' + id + "_" + key).css('padding', '0');
                var n_w = $('#' + sub + '_' + id + "_" + key).width();
                var added_w = n_w * 0.4 / 2;
                // $('#'+sub+'_'+id+"_"+key).parent().css('width', $('#'+sub+'_'+id+"_"+key).parent().width() + added_w + 100 + 'px');
                // if($('#'+sub+'_'+id+"_"+key).prev().length > 0){
                //   $('#'+sub+'_'+id+"_"+key).prev().css('margin-right', added_w + 'px');
                //   $('#'+sub+'_'+id+"_"+key).css('margin-left', '-' + added_w + 'px');
                // }
                // if($('#'+sub+'_'+id+"_"+key).next().length > 0){
                //   $('#'+sub+'_'+id+"_"+key).next().css('margin-left', added_w + 'px');
                //   $('#'+sub+'_'+id+"_"+key).css('margin-right', added_w + 'px');
                // }
            }
            else {
                for (var i = 0; i < length; i++) {
                    $("#" + sub + '_' + i + "_" + i + "_video_drop").hide();
                    $('#' + sub + '_' + i + "_" + i + "_img").removeClass('active_img');
                    $('#' + sub + '_' + i + "_" + i + "_div").removeClass('play_icon_div');
                    $('#' + sub + '_' + i + "_" + i + "_desc").show();
                }
                $('#' + sub + '_' + id + "_" + key).removeClass('transition-class');
                $('#' + sub + '_' + id + "_" + key + "_img").addClass('active_img');
                $('#' + sub + '_' + id + "_" + key + "_desc").hide();
                $('#' + sub + '_' + id + "_" + key + "_div").addClass('play_icon_div');
                $("#" + sub + '_' + id + "_" + key + "_video_drop").show();
            }
        };
        this.hoverOut = function (event, sub, id, key, length) {
            $('.slick-slide').css('margin', '0px');
            var video_drop = $(".video-drop").is(":visible");
            if (video_drop) {
                for (var i = 0; i < length; i++) {
                    $("#" + sub + '_' + i + "_" + i + "_video_drop").hide();
                    $('#' + sub + '_' + i + "_" + i + "_img").removeClass('active_img');
                    $('#' + sub + '_' + i + "_" + i + "_desc").show();
                    $('#' + sub + '_' + i + "_" + i + "_div").removeClass('play_icon_div');
                }
                $("#" + sub + '_' + i + "_" + key + "_video_drop").hide();
                $('#' + sub + '_' + id + "_" + key + "_img").addClass('active_img');
                $("#" + sub + '_' + id + "_" + key + "_video_drop").show();
                $('#' + sub + '_' + id + "_" + key + "_desc").hide();
                $('#' + sub + '_' + id + "_" + key + "_div").addClass('play_icon_div');
            }
            $('#' + sub + '_' + id + "_" + key).removeClass('transition-class');
        };
        this.addWishlist = function (id, subkey, $index, key) {
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/addWishlist",
                data: { id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: id, sub_profile_id: this.sessionStorage.sub_profile_id },
                async: false,
                beforeSend: function () {
                    $("#my-list-txt_" + subkey + "_" + $index + "_" + key).html('<a class="my-list bold"><i class="fa fa-check my-list-icon"></i><span class="my-list-txt">Adding</span></a>');
                },
                success: function (data) {
                    if (data.success) {
                        setTimeout(function () {
                            $("#my-list-txt_" + subkey + "_" + $index + "_" + key).html('<a onclick="angular.element(this).scope().removeWishlist(' + data.wishlist_id + ', ' + id + ', ' + subkey + ', ' + $index + ', ' + "'" + key + "'" + ')" class="my-list bold" id="remove-my-list-txt" style="cursor: pointer;">' +
                                '<i class="fa fa-check my-list-icon"></i>' +
                                '<span class="my-list-txt">My List</span>' +
                                '</a>');
                        }, 2000);
                    }
                    else {
                        if (data.error_code == 101 || data.error_code == 103 || data.error_code == 104) {
                            window.localStorage.setItem('logged_in', 'false');
                            var memoryStorage = {};
                            localStorage.removeItem("sessionStorage");
                            localStorage.clear();
                            this.router.navigateByUrl('/');
                        }
                        else {
                            UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                            return false;
                        }
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
            });
        };
        this.closeDiv = function (sub, index, key) {
            $("#" + sub + '_' + index + "_" + key + "_video_drop").fadeOut();
            $('#' + sub + '_' + index + "_" + key + "_img").removeClass('active_img');
            $('#' + sub + '_' + index + "_" + key + "_desc").show();
            $('#' + sub + '_' + index + "_" + key + "_div").removeClass('play_icon_div');
        };
        this.removeWishlist = function (id, admin_video_id, sub, $index, key) {
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/deleteWishlist",
                data: { id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, wishlist_id: admin_video_id, sub_profile_id: this.sessionStorage.sub_profile_id },
                async: false,
                beforeSend: function () {
                    console.log("#my-list-txt_" + sub + "_" + $index + "_" + key);
                    $("#my-list-txt_" + sub + "_" + $index + "_" + key)
                        .html('<a class="my-list bold"><i class="fa fa-plus my-list-icon"></i><span class="my-list-txt">Removing</span></a>');
                },
                success: function (data) {
                    if (data.success) {
                        setTimeout(function () {
                            $("#my-list-txt_" + sub + "_" + $index + "_" + key).html('<a onclick="angular.element(this).scope().addWishlist(' + admin_video_id + ', ' + sub + ', ' + $index + ', ' + "'" + key + "'" + ')" class="my-list bold" style="cursor: pointer;">' +
                                '<i class="fa fa-plus my-list-icon"></i>' +
                                '<span class="my-list-txt">My List</span>' +
                                '</a>');
                        }, 2000);
                    }
                    else {
                        if (data.error_code == 101 || data.error_code == 103 || data.error_code == 104) {
                            window.localStorage.setItem('logged_in', 'false');
                            var memoryStorage = {};
                            localStorage.removeItem("sessionStorage");
                            localStorage.clear();
                            this.router.navigateByUrl('/');
                        }
                        else {
                            UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                            return false;
                        }
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
            });
        };
        this.likeVideo = function (admin_video_id, subkey, $index, key) {
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/like_video",
                data: { id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sessionStorage.sub_profile_id },
                async: false,
                beforeSend: function () {
                    $("#like_" + subkey + "_" + $index + "_" + key).addClass('disabled_class');
                },
                success: function (data) {
                    $("#like_" + subkey + "_" + $index + "_" + key).removeClass('disabled_class');
                    if (data.success) {
                        $("#like_count_" + subkey + "_" + $index + "_" + key).html(data.like_count);
                        $("#dis_like_count_" + subkey + "_" + $index + "_" + key).html(data.dislike_count);
                        // setTimeout(function(){
                        if (data.delete) {
                            // UIkit.notify({message : "We are very sorry you removed the video from like", timeout : 3000, pos : 'top-center', status : 'success'});
                            $("#dis_like_" + subkey + "_" + $index + "_" + key).show();
                            $("#dis_like_" + subkey + "_" + $index + "_" + key).removeClass('ng-hide');
                            $("#dis_like_" + subkey + "_" + $index + "_" + key).css('display', 'inline !important');
                        }
                        else {
                            // UIkit.notify({message : "I'm glad you liked the video", timeout : 3000, pos : 'top-center', status : 'success'});
                            $("#dis_like_" + subkey + "_" + $index + "_" + key).fadeOut(500);
                        }
                        // }, 2000);
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
            });
        };
        this.dislikeVideo = function (admin_video_id, subkey, $index, key) {
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/dis_like_video",
                data: { id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sessionStorage.sub_profile_id },
                async: false,
                beforeSend: function () {
                    //$("#my-list-txt_"+$index+"_"+key).html('<a class="my-list bold"><i class="fa fa-plus my-list-icon"></i><span class="my-list-txt">Removing</span></a>');
                    $("#dis_like_" + subkey + "_" + $index + "_" + key).addClass('disabled_class');
                },
                success: function (data) {
                    $("#dis_like_" + subkey + "_" + $index + "_" + key).removeClass('disabled_class');
                    if (data.success) {
                        $("#like_count_" + subkey + "_" + $index + "_" + key).html(data.like_count);
                        $("#dis_like_count_" + subkey + "_" + $index + "_" + key).html(data.dislike_count);
                        // setTimeout(function(){
                        if (data.delete) {
                            // UIkit.notify({message : "I'm glad you removed the video from dislike", timeout : 3000, pos : 'top-center', status : 'success'});
                            $("#like_" + subkey + "_" + $index + "_" + key).show(500);
                            $("#like_" + subkey + "_" + $index + "_" + key).removeClass('ng-hide');
                            $("#like_" + subkey + "_" + $index + "_" + key).css('display', 'inline !important');
                        }
                        else {
                            // UIkit.notify({message : "You disliked the video", timeout : 3000, pos : 'top-center', status : 'warning'});
                            $("#like_" + subkey + "_" + $index + "_" + key).fadeOut(500);
                        }
                        // }, 2000);
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
            });
        };
        this.getSeasons = function (genre_id, sub, idx, key, divid, loader, main_id) {
            if (genre_id == '' || genre_id == undefined) {
                genre_id = main_id;
            }
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/genre-list",
                data: { id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, genre_id: genre_id, sub_profile_id: this.sessionStorage.sub_profile_id },
                async: false,
                beforeSend: function () {
                    $("#" + sub + idx + key + divid).html("");
                    $("#" + sub + idx + key + loader).show();
                },
                success: function (data) {
                    if (data.success) {
                        // $("#"+divid).html(data.view);
                        console.log($("#" + sub + idx + key + divid));
                        $("#" + sub + idx + key + divid).html(data.data);
                        $(".episode-slider").not('.slick-initialized').slick({
                            slidesToShow: this.epdisode_slide_to_show,
                            slidesToScroll: this.epdisode_slide_to_scroll,
                        });
                        $(".episode-slider").slick('setPosition');
                        $('.slick-carousel-responsive').resize();
                    }
                    else {
                        if (data.error_code == 101 || data.error_code == 103 || data.error_code == 104) {
                            window.localStorage.setItem('logged_in', 'false');
                            this.sessionStorage = {};
                            localStorage.removeItem("sessionStorage");
                            localStorage.clear();
                            this.router.navigateByUrl('/');
                        }
                        else {
                            UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                            return false;
                        }
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
                complete: function (data) {
                    $("#" + sub + idx + key + loader).hide();
                },
            });
        };
        this.spamVideo = function (admin_video_id, index, key) {
            if (confirm('Are you sure want to spam the video ?')) {
                var reason = $('input[name=reason]:checked').val();
                $.ajax({
                    type: "post",
                    url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/add_spam",
                    data: { id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sessionStorage.sub_profile_id, reason: reason },
                    async: false,
                    beforeSend: function () {
                        //$("#my-list-txt_"+$index+"_"+key).html('<a class="my-list bold"><i class="fa fa-plus my-list-icon"></i><span class="my-list-txt">Removing</span></a>');
                    },
                    success: function (data) {
                        if (data.success) {
                            UIkit.notify({ message: "You have marked the video as spam, the video won't appear anywhere except spam videos section", timeout: 3000, pos: 'top-center', status: 'success' });
                            // window.setTimeout(function() {
                            window.location.reload();
                            // }, 1000);
                        }
                        else {
                            UIkit.notify({ message: data.error_messages, timeout: 5000, pos: 'top-center', status: 'danger' });
                            return false;
                        }
                    },
                    error: function (data) {
                        UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                    },
                });
            }
        };
        this.dynamicContent = function (sub, index, key, id) {
            $("#" + sub + "_" + index + "_" + key + "_overview").removeClass('active');
            $("#" + sub + "_" + index + "_" + key + "_episodes").removeClass('active');
            $("#" + sub + "_" + index + "_" + key + "_trailers").removeClass('active');
            $("#" + sub + "_" + index + "_" + key + "_more-like").removeClass('active');
            $("#" + sub + "_" + index + "_" + key + "_details").removeClass('active');
            if (id == "overview") {
                $("#" + sub + "_" + index + "_" + key + "_overview").addClass('active');
            }
            else if (id == "episodes") {
                $("#" + sub + "_" + index + "_" + key + "_episodes").addClass('active');
            }
            else if (id == "trailers") {
                $("#" + sub + "_" + index + "_" + key + "_trailers").addClass('active');
            }
            else if (id == "more-like") {
                $("#" + sub + "_" + index + "_" + key + "_more-like").addClass('active');
            }
            else {
                $("#" + sub + "_" + index + "_" + key + "_details").addClass('active');
            }
            $(".episode-slider").not('.slick-initialized').slick({
                slidesToShow: this.epdisode_slide_to_show,
                slidesToScroll: this.epdisode_slide_to_scroll,
            });
            $(".episode-slider").slick('setPosition');
        };
        this.titleService.setTitle('Flashington | Browse');
    }
    BrowseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        $("#page_preloader").show();
        this.window_width = $(window).width();
        var slideShowCount = 6;
        if (this.window_width > 1024) {
            this.media_height = {
                "height": Math.round((this.window_width - 200)) / 6 * 1.5 + "px"
            };
            slideShowCount = 6;
        }
        if (this.window_width > 768 && this.window_width < 1024) {
            this.media_height = {
                "height": Math.round((this.window_width - 100)) / 5 * 1.5 + "px"
            };
            slideShowCount = 5;
        }
        if (this.window_width > 479 && this.window_width < 768) {
            this.media_height = {
                "height": Math.round((this.window_width - 50)) / 4 * 1.5 + "px"
            };
            slideShowCount = 4;
        }
        if (this.window_width < 480) {
            this.media_height = {
                "height": Math.round((this.window_width - 50)) / 2 * 1.5 + "px"
            };
            slideShowCount = 2;
        }
        this.slide_to_show = slideShowCount;
        this.slide_to_scroll = 2;
        $(window).bind('resize', function () {
            this.window_width = $(window).innerWidth;
            slideShowCount = 6;
            if (this.window_width > 1000) {
                this.media_height = {
                    "height": Math.round((this.window_width - 200)) / 6 * 1.5 + "px"
                };
                slideShowCount = 6;
            }
            if (this.window_width > 768 && this.window_width < 1000) {
                this.media_height = {
                    "height": Math.round((this.window_width - 100)) / 5 * 1.5 + "px"
                };
                slideShowCount = 5;
            }
            if (this.window_width > 479 && this.window_width < 768) {
                this.media_height = {
                    "height": Math.round((this.window_width - 50)) / 4 * 1.5 + "px"
                };
                slideShowCount = 4;
            }
            if (this.window_width < 480) {
                this.media_height = {
                    "height": Math.round((this.window_width - 50)) / 2 * 1.5 + "px"
                };
                slideShowCount = 2;
            }
            this.slide_to_show = slideShowCount;
            this.slide_to_scroll = 2;
            $(".slider.multiple-items").slick({
                slidesToShow: slideShowCount,
                slidesToScroll: 2,
            });
        });
        this.slideConfig = {
            "slidesToShow": this.slide_to_show,
            "slidesToScroll": this.slide_to_scroll,
            // "nextArrow":"<div class='nav-btn next-slide'></div>",
            // "prevArrow":"<div class='nav-btn prev-slide'></div>",
            "dots": false,
            "infinite": true
        };
        this.user_id = (this.sessionStorage['user_id'] != '' && this.sessionStorage['user_id'] != undefined) ? this.sessionStorage['user_id'] : false;
        this.access_token = (this.sessionStorage['access_token'] != undefined && this.sessionStorage['access_token'] != '') ? this.sessionStorage['access_token'] : '';
        if (this.user_id && this.access_token) {
            console.log(this.user_id, this.access_token);
            $("#page_preloader").show();
            this.user_type = (this.sessionStorage['user_type'] == undefined || this.sessionStorage['user_type'] == 0) ? true : false;
            var key = this.route.snapshot.paramMap['params'].id;
            this.apiService.getVideoData({ id: this.sessionStorage['user_id'], token: this.sessionStorage['access_token'], key: key, sub_profile_id: this.sessionStorage['sub_profile_id'] }).subscribe(function (data) {
                if (data.success) {
                    _this.datas = data;
                    console.log(_this.datas);
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
                $("#page_preloader").hide();
            });
            console.log(this.slideConfig);
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    BrowseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-browse',
            template: __webpack_require__(/*! ./browse.component.html */ "./src/app/components/browse/browse.component.html"),
            styles: [__webpack_require__(/*! ./browse.component.css */ "./src/app/components/browse/browse.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], BrowseComponent);
    return BrowseComponent;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/card/card.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/card/card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  card works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");






var CardComponent = /** @class */ (function () {
    function CardComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
    }
    CardComponent.prototype.ngOnInit = function () {
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.site_settings = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].settings;
        this.sub_profile_id = this.route.snapshot.paramMap['params'].id;
        this.user_id = (this.sessionStorage['user_id'] != '' && this.sessionStorage['user_id'] != undefined) ? this.sessionStorage['user_id'] : false;
        this.access_token = (this.sessionStorage['access_token'] != undefined && this.sessionStorage['access_token'] != '') ? this.sessionStorage['access_token'] : '';
        if (this.user_id && this.access_token) {
            var stripe_publishable_key = $.grep(this.site_settings, function (e) { return e.key == 'stripe_publishable_key'; });
            var stripe_publish_key = "";
            if (stripe_publishable_key.length == 0) {
                console.log("not found");
            }
            else if (stripe_publishable_key.length == 1) {
                stripe_publish_key = stripe_publishable_key[0].value;
                if (stripe_publish_key != '' || stripe_publish_key != null || stripe_publish_key != undefined) {
                }
                else {
                    stripe_publish_key = '';
                }
            }
            else {
                stripe_publish_key = "";
            }
            this.stripe_publishable_key = stripe_publish_key;
            if (this.stripe_publishable_key) {
                //	Stripe.setPublishableKey(this.stripe_publishable_key);
                $('#payment-form').submit(function (e) {
                    if ($('#stripeToken').length == 0) {
                        var $form = $(this);
                        // Disable the submit button to prevent repeated clicks
                        $('#save_card_btn').attr('disabled', true);
                        console.log($form);
                        //  Stripe.card.createToken($form, stripeResponseHandler);
                        // Prevent the form from submitting with the default action
                        return false;
                    }
                });
            }
        }
    };
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/components/card/card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/cast-and-crew/cast-and-crew.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/cast-and-crew/cast-and-crew.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .box-head h3{\r\n  \r\n    font-size: 18px;\r\n  color: #e5e5e5;\r\n  font-weight: 700;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n\r\n  margin:0;\r\n\r\n}\r\n\r\n.video-box-row {\r\n\r\n  font-size : 14px;\r\n\r\n  white-space: normal;\r\n}\r\n\r\n.tile-img {\r\n  max-height: 420px;\r\n  -o-object-fit: fill;\r\n     object-fit: fill;\r\n}\r\n\r\n.tile-media {\r\n  /*border: 2px solid #141414;*/\r\n  height: auto !important;\r\n  text-align: center;\r\n}\r\n\r\n.slick-initialized .slick-slide {\r\n  display: inline-block !important;\r\n  height: 100% !important;\r\n  padding: 0;\r\n}\r\n\r\n.tab-overlay {\r\n  background: rgba(0, 0, 0, .90);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXN0LWFuZC1jcmV3L2Nhc3QtYW5kLWNyZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7O0lBRUUsZUFBZTtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixxQkFBcUI7O0VBRXJCLFFBQVE7O0FBRVY7O0FBRUE7O0VBRUUsZ0JBQWdCOztFQUVoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQWdCO0tBQWhCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nhc3QtYW5kLWNyZXcvY2FzdC1hbmQtY3Jldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLmJveC1oZWFkIGgze1xyXG4gIFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjZTVlNWU1O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgbWFyZ2luOjA7XHJcblxyXG59XHJcblxyXG4udmlkZW8tYm94LXJvdyB7XHJcblxyXG4gIGZvbnQtc2l6ZSA6IDE0cHg7XHJcblxyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuXHJcbi50aWxlLWltZyB7XHJcbiAgbWF4LWhlaWdodDogNDIwcHg7XHJcbiAgb2JqZWN0LWZpdDogZmlsbDtcclxufVxyXG5cclxuLnRpbGUtbWVkaWEge1xyXG4gIC8qYm9yZGVyOiAycHggc29saWQgIzE0MTQxNDsqL1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWNrLWluaXRpYWxpemVkIC5zbGljay1zbGlkZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnRhYi1vdmVybGF5IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC45MCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/cast-and-crew/cast-and-crew.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/cast-and-crew/cast-and-crew.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" id=\"page_content\">\n\n  <div style=\"margin-top:80px !important;margin:5%; padding: 10px;\">\n  \n  <div class=\"box-head\" style=\"margin-bottom: 2%;\">\n     <h3>{{recent_video?.name}}</h3>\n  </div>\n  \n  <!-- <p>{{no_results_found}}</p>\n   -->\n  \n  <div class=\"text-center\"  style=\"margin-top:40px !important\"  *ngIf=\"no_results_found\"> \n    <img src=\"{{no_results_found}}\" class=\"img-responsive auto-margin height-250\">\n  </div>\n  \n  <div class=\"box video-box-row\" *ngFor=\"let video of recent_video?.videos; let parentindex = index\">\n  \n    <div id=\"{{childindex}}_{{parentindex}}\" (mouseover)=\"hoverIn(this,childindex, parentindex, video.length)\" (mouseleave)=\"hoverOut(this, childindex, parentindex, recent_video.videos.length)\" class=\"tile col-lg-2 col-md-2 col-sm-2 col-xs-6 slide-box video-box\" *ngFor=\"let value of video; let childindex = index\">\n        <div class=\"video-box-outer\">\n        \n            <div class=\"tile-media\" id=\"{{childindex}}_{{parentindex}}_img\">\n                <img class=\"tile-img\" src=\"{{value.default_image}}\" alt=\"\" [ngStyle]=\"media_height\"/><!-- 3rd image-->\n                <!-- <img class=\"tile-img first\" ng-src=\"{{value.default_image}}\" alt=\"\"/>\n                <img class=\"tile-img first\" ng-src=\"{{value.default_image}}\" alt=\"\"/> -->\n            </div>\n  \n            <div class=\"tile-details\">\n  \n              <div class=\"video_amount\" *ngIf=\"value.amount > 0 && !value.pay_per_view_status\">\n                <!-- <span *ngIf=\"value.pay_per_view_status\">PAID</span> -->\n                <span>PAY- {{value.currency}} {{value.amount}}</span>\n  \n              </div>\n              <!-- <a ui-sref=\"single_video({id : value.admin_video_id})\">\n                <div class=\"hover-icon\" id=\"{{childindex}}_{{parentindex}}_div\">\n                  <i class=\"fa fa-play\"></i>\n                </div>\n              </a> -->\n              <span *ngIf=\"value.pay_per_view_status\">\n            <a href=\"/video/{{value.admin_video_id}}\">\n                  <div class=\"hover-icon\" id=\"{{childindex}}_{{parentindex}}_div\">\n                    <i class=\"fa fa-play\" id=\"{{childindex}}_{{parentindex}}_icon\"></i>\n                  </div>\n                </a>\n          </span>\n          <span *ngIf=\"!value.pay_per_view_status\">\n            <a href=\"/payment-option/{{value.admin_video_id}}\">\n                  <div class=\"hover-icon\" id=\"{{childindex}}_{{parentindex}}_div\">\n                    <i class=\"fa fa-play\" id=\"{{childinndex}}_{{parentindex}}_icon\"></i>\n                  </div>\n                </a>\n          </span>\n  \n          <div class=\"tile-content\" id=\"{{childindex}}_{{parentindex}}_desc\">\n                  <h3 class=\"tile-tit\">{{value.title}}</h3>\n  \n                  <div class=\"row no-margin hidden-cls\">\n              <div class=\"pull-left\">\n                <div>\n                  <div class=\"rating-symbol glyphicon\"\n                  [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 1), 'glyphicon-star' : (value.ratings >= 1)}\">\n                    \n                  </div>\n                  <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 2), 'glyphicon-star' : (value.ratings >= 2)}\">\n                    \n                  </div>\n                  <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 3), 'glyphicon-star' : (value.ratings >= 3)}\">\n                    \n                  </div>\n                  <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 4), 'glyphicon-star' : (value.ratings >= 4)}\">\n                    \n                  </div>\n                  <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 5), 'glyphicon-star' : (value.ratings >= 5)}\">\n                    \n                  </div>\n                </div>\n              </div>\n              <p class=\"video-season\">\n                <span>{{value.release_date && value.release_date !=\"0000-00-00\" ? value.release_date:'' }}</span>\n                <span class=\"video-epi-count\">{{value.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{value.watch_count}}</span>\n                <span>{{value.duration}}</span>\n              </p>\n            </div>\n  \n            <div class=\"\">\n              <div class=\"video-des\">\n                <p class=\"video-des-inner\">{{value.description}}</p>\n              </div>\n            </div>\n  \n            <div class=\"text-center\">\n              <a (click)=\"showVideoDrop(this, childindex, parentindex,recent_video.videos.length)\" class=\"arrow\"><img src=\"assets/img/down-arrow-red.png\" class=\"arrow_down\" /></a>\n            </div>\n          </div>\n  \n            </div>\n        </div>\n        \n      </div>\n   \n     <div class=\"clearfix\"></div>\n  \n     <div class=\"video-drop\" style=\"margin-top: 1% !important;\" id=\"{{lastindex}}_{{parentindex}}_video_drop\" *ngFor=\"let value of video; let lastindex = index\">\n      <div class=\"tab-content\">\n  \n        <!-- OVERVIEW SECTION  -->\n          <div role=\"tabpanel\" class=\"tab-pane active\" id=\"{{lastindex}}_{{parentindex}}_overview\">\n            <div class=\"overview tab-section relative\">\n              <div class=\"close-tab\">\n              <a style=\"cursor: pointer;\" (click)=\"closeDiv(lastindex,parentindex)\" class=\"close-btn\">\n                <i class=\"fa fa-times\"></i>\n              </a>\n            </div>\n              \n              <div class=\"tab-section-content row no-margin\">\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-5 no-pad overview-details\">\n                  \n                </div>\n  \n                <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7 no-pad\">\n                  <div class=\"linear-outer\">\n                    \n                    <div class=\"linear\">\n                    </div>\n                    <div class=\"rotate-img-outer\">\t\n                      <div class=\"rotate-img highlight-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\" ></div>\n                      <!-- <div class=\"rotate-img highlight-img bg-img\" style=\"background-image: url({{value.video_gif_image}});\"></div> -->\n                    </div>\n  \n                    <div class=\"play-icon-outer\">\n                      <!-- <a ui-sref=\"single_video({id : value.admin_video_id})\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a> -->\n  \n                      <span *ngIf=\"value.pay_per_view_status\">\n                        <a href=\"/video/{{value.admin_video_id}}\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a>\n                      </span>\n                      <span *ngIf=\"!value.pay_per_view_status\">\n                        <a href=\"/payment-option/{{value.admin_video_id}}\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n  \n              <div class=\"home-new-deatils\">\n                <div class=\"overview-details\" style=\"background-color: unset;\">\n                    <h3 class=\"content-tit\">{{value.title}}</h3>\n  \n                    <div class=\"row no-margin hidden-xs\">\n                      <div class=\"pull-left\">\n                        <div>\n                          <div class=\"rating-symbol glyphicon\"\n                          [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 1), 'glyphicon-star' : (value.ratings >= 1)}\">\n                            \n                          </div>\n                          <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 2), 'glyphicon-star' : (value.ratings >= 2)}\">\n                            \n                          </div>\n                          <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 3), 'glyphicon-star' : (value.ratings >= 3)}\">\n                            \n                          </div>\n                          <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 4), 'glyphicon-star' : (value.ratings >= 4)}\">\n                            \n                          </div>\n                          <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 5), 'glyphicon-star' : (value.ratings >= 5)}\">\n                            \n                          </div>\n                        </div>\n                      </div>\n                      <p class=\"content-txt bold seasons\">\n                        <span class=\"green-clr\">{{value.release_date && value.release_date !=\"0000-00-00\" ? value.release_date:'' }}</span>\n                        <span class=\"epi-count\">{{value.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{value.watch_count}}</span>\n                        <span>{{value.duration}}</span>\n                      </p>\n                    </div>\n  \n  \n                      <div class=\"\">\n  \n                      <div class=\"pull-left\">\n  \n                        <a class=\"white-icon\">\n                          <i class=\"fa fa-thumbs-up\"></i><span id=\"like_count_{{lastindex}}_{{parentindex}}\">{{value.like_count}}</span>\n                        </a>\n                        <a class=\"white-icon\">\n                          <i class=\"fa fa-thumbs-down\"></i><span id=\"dis_like_count_{{lastindex}}_{{parentindex}}\">{{value.dis_like_count}}</span>\n                        </a>\n  \n                      </div>\n  \n  \n                      <div class=\"pull-left\">\n  \n                        <div class=\"display_amount\" *ngIf=\"value.amount > 0 && !value.pay_per_view_status\" style=\"margin-left: 5px;\">\n                            <!-- <span *ngIf=\"recent_video.pay_per_view_status\">PAID</span> -->\n                            <span>PAY - {{value.currency}} {{value.amount}}</span>\n                          </div>\n  \n                        </div>\n  \n                        <div class=\"clearfix\"></div>\n                    </div>\n  \n                    <div>\n                      <p class=\"content-txt overview-des\">{{value.description}}</p>\n  \n                      <!-- <p class=\"content-txt awards\"><i class=\"fa fa-trophy\"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p> -->\n                    </div>\n  \n                    <div id=\"my-list-txt_{{lastindex}}_{{parentindex}}\" class=\"pull-left\">\n                    \n                      <a (click)=\"addWishlist(value.admin_video_id, lastindex, parentindex)\" class=\"bold\" id=\"\" *ngIf=\"!value.wishlist_status\" style=\"cursor: pointer;\">\n                        <button class=\"my-list\">\n                          <i class=\"fa fa-plus my-list-icon\"></i>\n                          <span class=\"my-list-txt\">My List</span>\n                        </button> \n                      </a>\n                      <a (click)=\"removeWishlist(value.wishlist_status, value.admin_video_id,lastindex, parentindex)\" class=\"bold\" *ngIf=\"value.wishlist_status\" style=\"cursor: pointer;\">\n                        <button class=\"my-list\">\n                          <i class=\"fa fa-check my-list-icon\"></i>\n                          <span class=\"my-list-txt\">My List</span> \n                        </button>\n                      </a>\n                    </div>\n                    <div class=\"banner-icon-sec hidden-xs\">\n                      <a id=\"like_{{lastindex}}_{{parentindex}}\" style=\"cursor: pointer;\"  *ngIf=\"value.is_liked == 1 || value.is_liked == 0\" (click)=\"likeVideo(value.admin_video_id, lastindex, parentindex)\">\n                        <button class=\"banner-icon\">\n                          <i class=\"fa fa-thumbs-up\"></i>\n                        </button>\n                      </a>\n                      <a id=\"dis_like_{{lastindex}}_{{parentindex}}\" style=\"cursor: pointer;\" *ngIf=\"value.is_liked == -1 || value.is_liked == 0\" (click)=\"dislikeVideo(value.admin_video_id, lastindex, parentindex)\">\n                        <button class=\"banner-icon\">\n                          <i class=\"fa fa-thumbs-down\"></i>\n                        </button>\n                      </a>\n                      <a data-toggle=\"modal\" data-target=\"#myModal_{{lastindex}}_{{parentindex}}\" title=\"Report as Spam\" style=\"cursor: pointer;\">\n                        <button class=\"banner-icon\">\n                          <i class=\"fa fa-exclamation \"></i>\n                        </button>\n                      </a>\n                    </div>\n  \n                    <div class=\"modal fade\" id=\"myModal_{{lastindex}}_{{parentindex}}\" role=\"dialog\">\n                      <div class=\"modal-dialog\">\n                          <!-- Modal content-->\n                          <div class=\"modal-content\" style=\"background-color: #333;\">\n                            <div class=\"modal-header\">\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                <h4 class=\"modal-title bold\">Report This Video</h4>\n                            </div>\n                            <div class=\"modal-body\">\n                              <form (ngSubmit)=\"spamVideo(value.admin_video_id, lastindex, parentindex)\">\n                                  <div class=\"radio radio-danger\" *ngFor=\"let spam_reason of spam_reasons\">\n                                        <input type=\"radio\" name=\"reason\" id=\"reason_{{value.admin_video_id}}_{{lastindex}}_{{parentindex}}\" value=\"{{spam_reason.value}}\">\n                                        <label for=\"reason_{{value.admin_video_id}}_{{lastindex}}_{{parentindex}}\">\n                                            {{spam_reason.value}}\n                                        </label>\n                                    </div>\n  \n                                    {{spam_reason_value}}\n                                    <p class=\"small bold text-center\">If you report this video, you won't see again the same video in anywhere in your account except \"Spam Videos\". If you want to continue to report this video as same. Click continue and proceed the same.</p>\n                                    <div class=\"text-right\">\n                                      <button type=\"submit\" class=\"payment-submit\">Submit</button>\n                                    </div>\n                                  </form>\n                            </div>\n                            \n                          </div>\n                      </div>\n                  </div>\n                  </div>\n              </div>\n                            \n            </div>\n        </div>\n        <!-- OVERVIEW SECTION END -->\n  \n  \n  \n        <!-- EPISODES-SECTION\n                ======================================== -->\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"{{lastindex}}_{{parentindex}}_episodes\" *ngIf=\"value.is_genre\">\n          <div class=\"episodes-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\n            <div class=\"tab-overlay\">\n  \n              <div class=\"episodes-section-inner tab-section-content tab-sec-inner contain-width\">\n                <h3 class=\"content-tit\">{{value.sub_category_name}}</h3>\n                <form class=\"season-select\">\n                  <div class=\"form-group styled-select black rounde\">\n                       <select id=\"exampleSelect1\" [ngModel]=\"genres_name\" (ngModelChange)=\"getSeasons(genres_name, childindex,parentindex,'_sessions', '_loader_seasons', value.genre_id);\" name=\"genres_name\">\n                        <option value=\"\">Select Seasons</option>\n                        <option value=\"{{genrename.genre_id}}\" *ngFor=\"let genrename of value.genre_names\">\n                        {{genrename.genre_name}}\n                        </option>\n                      </select>\n                  </div>\n                </form>\n  \n                <div class=\"episodes-list\">\n  \n                <div id=\"{{childindex}}{{parentindex}}_loader_seasons\" style=\"margin-top: 10px;text-align: center;display: none\">\n                    <img src=\"assets/img/ellipsis.svg\" style=\"width: 40px;\">\n                  </div>\n  \n                  <div id=\"{{childindex}}{{parentindex}}_sessions\" class=\"row\">\n  \n                    <!-- <slick slides-to-show=\"{{epdisode_slide_to_show}}\" slides-to-scroll=\"{{epdisode_slide_to_scroll}}\" dots=\"false\" class=\"episode-slider\"> -->\n                    <ngx-slick-carousel class=\"carousel slider multiple-items\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\" >   \n                      <div *ngFor=\"let genre_list of value.first_part\" ngxSlickItem>\n  \n                        <div class=\"episode-list-box\">\n  \n                          <div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + genre_list.default_image + ')'}\">\n                            <div class=\"episode-img-overlay\">\n                              <div class=\"episode-img-inner\">\n                                <span class=\"epi-count\">{{genre_list.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{genre_list.watch_count}}</span>\n                              </div>\n  \n                              <div class=\"epi-play-icon-outer\">\n  \n                                <span *ngIf=\"genre_list.pay_per_view_status\">\n                                    <a href=\"/video/{{ genre_list.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n                                  </span>\n                                  <span *ngIf=\"!genre_list.pay_per_view_status\">\n                                    <a href=\"/payment-option/{{genre_list.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n                                  </span>\n                              </div>\n                            </div>\n                          </div>\n  \n                          <div class=\"episode-list-content\">\n                            <div class=\"row\">\n                              <div class=\"col-md-8 col-sm-12\">\n                                <h4 class=\"epi-tit gray-color1 txt-overflow\">{{genre_list.title}}</h4>\n                              </div>\n  \n                              <div class=\"col-md-4 text-right hidden-sm\">\n                                <p class=\"bold gray-color1 epi-tit txt-overflow\">{{genre_list.duration}}</p>\n                              </div>\n                            </div>\n  \n                            <div class=\"\">\n                              <p class=\" gray-color1 overview-des more-link mt-0\">{{genre_list.description}}</p>\n                            </div>\n                          </div>\n  \n                        </div>\n                      \n                      </div>\n  \n                    </ngx-slick-carousel>\n  \n                  </div>\n  \n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- EPISODES-SECTION END-->\n  \n  \n  \n        <!-- TRAILERS SECTION -->\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"{{lastindex}}_{{parentindex}}_trailers\" *ngIf=\"value.is_genre || value.trailer_video\">\n          <div class=\"trailers-section tab-section tab-bg bg-img\"  [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\n            <div class=\"tab-overlay\">\n  \n              <div class=\"trailers-section-inner tab-section-content tab-sec-inner contain-width\">\n                <h3 class=\"content-tit\">{{value.sub_category_name}}</h3>\n  \n                <div class=\"trailers-list row\">\n  \n                  <!-- episode list box -->\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 top\" *ngFor=\"let trailer of value.genres\" >\n                    <div class=\"episode-list-box\">\n  \n                      <div class=\"episode-img bg-img\"  [ngStyle]=\"{ 'background-image': 'url(' + trailer.genre_image + ')'}\" >\n                        <div class=\"episode-img-overlay\">\n  \n                          <div class=\"epi-play-icon-outer\">\n                            <a href=\"/genre_video/{{trailer.genre_id}}\" class=\"epi-play-icon\">\n                              <i class=\"fa fa-play\"></i>\n                            </a>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"episode-list-content\">\n                        <div class=\"row no-margin\">\n                          <div class=\"\">\n                            <h4 class=\"epi-tit gray-color1\">{{trailer.genre_name}}</h4>\n                          </div>\n                        </div>\n                      </div>\n  \n                    </div>\n                  </div>\n  \n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 top\" *ngIf=\"value.trailer_video\">\n                    <div class=\"episode-list-box\">\n  \n                      <div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\n                        <div class=\"episode-img-overlay\">\n  \n                          <div class=\"epi-play-icon-outer\">\n                            <a href=\"/trailer_video/{{value.admin_video_id}}\" class=\"epi-play-icon\">\n                              <i class=\"fa fa-play\"></i>\n                            </a>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"episode-list-content\">\n                        <div class=\"row no-margin\">\n                          <div class=\"\">\n                            <h4 class=\"epi-tit gray-color1\">{{value.title}}</h4>\n                          </div>\n                        </div>\n                      </div>\n  \n                    </div>\n                  </div>\n  \n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n  \n  \n  \n        <!-- MORE LIKE SECTION  -->\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"{{lastindex}}_{{parentindex}}_more-like\">\n          <div class=\"morelike-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\n            <div class=\"tab-overlay\">\n  \n              <div class=\"morelike-section-inner tab-section-content tab-sec-inner contain-width\">\n                <h3 class=\"content-tit\">{{value.sub_category_name}}</h3>\n  \n                <div class=\"morelike-list row\">\n  \n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\" *ngFor=\"let sub_video of value.sub_videos\">\n                    <div class=\"episode-list-box\">\n  \n                      <div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + sub_video.default_image + ')'}\">\n                        <div class=\"episode-img-overlay\">\n                          <div class=\"episode-img-inner\">\n                            <p class=\"new-epi\">{{sub_video.title}}</p>\n                          </div>\n  \n                          <div class=\"epi-play-icon-outer\">\n                            <!-- <a ui-sref=\"single_video({id : sub_video.admin_video_id})\" class=\"epi-play-icon\">\n                              <i class=\"fa fa-play\"></i>\n                            </a> -->\n  \n                            <span *ngIf=\"sub_video.pay_per_view_status\">\n                                <a href=\"/video/{{sub_video.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n                              </span>\n                              <span *ngIf=\"!sub_video.pay_per_view_status\">\n                                <a href=\"/payment-option/{{sub_video.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n                              </span>\n                          </div>\n  \n                          <div class=\"duration_more\">\n                            <span>{{sub_video.duration}}</span>\t\t\n                          </div>\n                        </div>\n                      </div>\n  \n                      <div class=\"episode-list-content\">\n                        <div class=\"row no-margin\">\n                            <div class=\"pull-left\">\n                              <div>\n                                <div class=\"rating-symbol glyphicon\"\n                            [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 1), 'glyphicon-star' : (sub_video.ratings >= 1)}\">\n                              \n                            </div>\n                            <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 2), 'glyphicon-star' : (sub_video.ratings >= 2)}\">\n                              \n                            </div>\n                            <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 3), 'glyphicon-star' : (sub_video.ratings >= 3)}\">\n                              \n                            </div>\n                            <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 4), 'glyphicon-star' : (sub_video.ratings >= 4)}\">\n                              \n                            </div>\n                            <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 5), 'glyphicon-star' : (sub_video.ratings >= 5)}\">\n                              \n                            </div>\n                              </div>\n                            </div>\n                            <p class=\"content-txt bold seasons\">\n                              <span class=\"green-clr hidden-sm\">{{value.release_date && value.release_date !=\"0000-00-00\" ? value.release_date:'' }}</span>\n                              <span class=\"epi-count hidden-sm hidden-md\">{{sub_video.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{sub_video.watch_count}}</span>\n                              <!-- <span>{{sub_video.duration}}</span> -->\n                            </p>\n                          </div>\n  \n                          <div>\n                            <p class=\"content-txt overview-des more-link\">{{sub_video.description}}</p>\n                          </div>\n                      </div>\n  \n                    </div>\n                  </div>\n                  \n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- MORE LIKE SECTION END -->\n  \n  \n  \n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"{{lastindex}}_{{parentindex}}_details\">\n            <div class=\"details-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\n              <div class=\"tab-overlay\">\n                <div class=\"details-section-inner tab-section-content tab-sec-inner contain-width details_section_tab\">\n                  <h3 class=\"content-tit\">{{value.title}}</h3>\n                  <div class=\"row col-sm-12 col-sm-12 col-lg-12 col-md-12\">\n                    <div class=\"detailsItem detailsMedia col-md-2\">\n                      <h4>Directors</h4>\n                      <ul class=\"list-unstyled\">\n                        <li *ngFor=\"let director of value.directors\" class=\"listLabel\">\n                          <a href=\"/director/{{director.id}}\">{{director.name}}</a></li>\n                      </ul>\n                      <h4>Writers</h4>\n                      <ul class=\"list-unstyled\">\n                        <li *ngFor=\"let writer of value.writers\" class=\"listLabel\">\n                          <a href=\"/writer/{{writer.id}}\">{{writer.name}}</a>\n                        </li>\n                      </ul>\n                    </div>\n                    <div class=\"detailsItem detailsMedia col-md-2\">\n                      <h4>Actors</h4>\n                      <ul class=\"list-unstyled\">\n                        <li *ngFor=\"let actor of value.actors\" class=\"listLabel\">\n                          <a href=\"/actor/{{actor.id}}\">{{actor.name}}</a>\n                        </li>\n                      </ul>\n                    </div>\n                    <div class=\"detailsItem detailsMedia col-md-2\">\n                      <h4>Category</h4>\n                      <ul class=\"list-unstyled\">\n                        <li class=\"listLabel\">\n                          <a>{{value.sub_category_name}}</a>\n                        </li>\n                      </ul>\n                      <div class=\"clear-fix\"></div>\n                      <h4>Publish Date</h4>\n                      <ul class=\"list-unstyled\">\n                        <li class=\"listLabel\">\n                          <p class=\"content-txt bold seasons\">\n                            <span class=\"green-clr hidden-sm\">{{value.release_date  && value.release_date !=\"0000-00-00\" ? value.release_date:''}}</span>\n                          </p>\n                        </li>\n                      </ul>\n                      <h4>Duration</h4>\n                      <ul class=\"list-unstyled\">\n                        <li class=\"listLabel\">\n                          <p class=\"content-txt bold seasons\">\n                            <span>{{value.duration}}</span>\n                          </p>\n                        </li>\n                      </ul>\n                    </div>\n                    <div class=\"detailsItem detailsMedia col-md-2\">\n                      <h4>Ratings</h4>\n                      <div class=\"mt-3\">\n                        <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 1), 'glyphicon-star' : (value.ratings >= 1)}\"></div>\n                        <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 2), 'glyphicon-star' : (value.ratings >= 2)}\"></div>\n                        <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 3), 'glyphicon-star' : (value.ratings >= 3)}\"></div>\n                        <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 4), 'glyphicon-star' : (value.ratings >= 4)}\"></div>\n                        <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 5), 'glyphicon-star' : (value.ratings >= 5)}\"></div>\n                      </div>\n                      <h4>Age</h4>\n                      <ul class=\"list-unstyled\">\n                        <li class=\"listLabel\">\n                          <p class=\"content-txt bold seasons\">\n                            Recommended for ages {{value.age}} and up\n                          </p>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"clearfix\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n      </div>\n  \n      <div class=\"drop-tab hidden-xs\">\n  \n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n            <li role=\"presentation\" class=\"active\">\n              <a style=\"cursor:pointer\" (click)=\"dynamicContent(lastindex, parentindex,'overview')\" aria-controls=\"overview\" role=\"tab\" data-toggle=\"tab\">Overview</a>\n            </li>\n  \n            <li role=\"presentation\" *ngIf=\"value.is_genre\">\n              <a style=\"cursor:pointer\" (click)=\"dynamicContent(lastindex,parentindex,'episodes')\" aria-controls=\"episodes\" role=\"tab\" data-toggle=\"tab\">Episodes</a>\n            </li>\n  \n            <li role=\"presentation\" *ngIf=\"value.is_genre || value.trailer_video\">\n              <a style=\"cursor:pointer\" (click)=\"dynamicContent(lastindex,parentindex,'trailers')\" aria-controls=\"trailers\" role=\"tab\" data-toggle=\"tab\">Trailers &amp; More</a>\n            </li>\n  \n            <li role=\"presentation\">\n              <a style=\"cursor:pointer\" (click)=\"dynamicContent(lastindex,parentindex,'more-like')\" aria-controls=\"more-like\" role=\"tab\" data-toggle=\"tab\">More Like This</a>\n            </li>\n  \n            <li role=\"presentation\" >\n              <a style=\"cursor:pointer\" (click)=\"dynamicContent(lastindex,parentindex,'details')\" aria-controls=\"details\" role=\"tab\" data-toggle=\"tab\">Details</a>\n            </li>\n          </ul>\t\t\n        \n      </div>\n    </div>\n  \n  </div>\n  \n  <div id=\"data_loader\" style=\"margin-top: 5px;text-align: center;display: none\">\n    <img src=\"assets/img/ellipsis.svg\" style=\"width: 40px;\">\n  </div>\n  \n  <div class=\"clearfix\"></div>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/components/cast-and-crew/cast-and-crew.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/cast-and-crew/cast-and-crew.component.ts ***!
  \*********************************************************************/
/*! exports provided: CastAndCrewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastAndCrewComponent", function() { return CastAndCrewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_app_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-global */ "./src/app/app-global.ts");






var CastAndCrewComponent = /** @class */ (function () {
    function CastAndCrewComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.addWishlist = function (id, subkey, $index, key) {
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/addWishlist",
                data: { id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: id, sub_profile_id: this.sessionStorage.sub_profile_id },
                async: false,
                beforeSend: function () {
                    $("#my-list-txt_" + subkey + "_" + $index + "_" + key).html('<a class="my-list bold"><i class="fa fa-check my-list-icon"></i><span class="my-list-txt">Adding</span></a>');
                },
                success: function (data) {
                    if (data.success) {
                        setTimeout(function () {
                            $("#my-list-txt_" + subkey + "_" + $index + "_" + key).html('<a onclick="removeWishlist(' + data.wishlist_id + ', ' + id + ', ' + subkey + ', ' + $index + ', ' + "'" + key + "'" + ')" class="my-list bold" id="remove-my-list-txt" style="cursor: pointer;">' +
                                '<i class="fa fa-check my-list-icon"></i>' +
                                '<span class="my-list-txt">My List</span>' +
                                '</a>');
                        }, 2000);
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
            });
        };
        this.closeDiv = function (index, key) {
            $("#" + index + "_" + key + "_video_drop").fadeOut();
            $('#' + index + "_" + key + "_img").removeClass('active_img');
            $('#' + index + "_" + key + "_desc").show();
            $('#' + index + "_" + key + "_div").removeClass('play_icon_div');
        };
        this.removeWishlist = function (id, admin_video_id, $index, key) {
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/deleteWishlist",
                data: { id: this.user_id, token: this.access_token, wishlist_id: admin_video_id, sub_profile_id: this.sub_profile_id },
                async: false,
                beforeSend: function () {
                    $("#my-list-txt_" + $index + "_" + key)
                        .html('<a class="my-list bold"><i class="fa fa-plus my-list-icon"></i><span class="my-list-txt">Removing</span></a>');
                },
                success: function (data) {
                    if (data.success) {
                        setTimeout(function () {
                            $("#my-list-txt_" + $index + "_" + key).html('<a onclick="addWishlist(' + admin_video_id + ', ' + $index + ', ' + "'" + key + "'" + ')" class="my-list bold" style="cursor: pointer;">' +
                                '<i class="fa fa-plus fa-stack-1x my-list-icon"></i>' +
                                '<span class="my-list-txt">My List</span>' +
                                '</a>');
                        }, 2000);
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
            });
        };
        this.likeVideo = function (admin_video_id, $index, key) {
            console.log(admin_video_id, $index, key);
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/like_video",
                data: { id: this.user_id, token: this.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sub_profile_id },
                async: false,
                beforeSend: function () {
                    $("#like_" + $index + "_" + key).addClass('disabled_class');
                },
                success: function (data) {
                    $("#like_" + $index + "_" + key).removeClass('disabled_class');
                    if (data.success) {
                        $("#like_count_" + $index + "_" + key).html(data.like_count);
                        $("#dis_like_count_" + $index + "_" + key).html(data.dislike_count);
                        // setTimeout(function(){
                        if (data.delete) {
                            // UIkit.notify({message : "We are very sorry you removed the video from like", timeout : 3000, pos : 'top-center', status : 'success'});
                            $("#dis_like_" + $index + "_" + key).show();
                            $("#dis_like_" + $index + "_" + key).removeClass('ng-hide');
                            $("#dis_like_" + $index + "_" + key).css('display', 'inline !important');
                        }
                        else {
                            // UIkit.notify({message : "I'm glad you liked the video", timeout : 3000, pos : 'top-center', status : 'success'});
                            $("#dis_like_" + $index + "_" + key).fadeOut(500);
                        }
                        // }, 2000);
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
            });
        };
        this.dislikeVideo = function (admin_video_id, $index, key) {
            console.log(admin_video_id, $index, key);
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/dis_like_video",
                data: { id: this.user_id, token: this.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sub_profile_id },
                async: false,
                beforeSend: function () {
                    //$("#my-list-txt_"+$index+"_"+key).html('<a class="my-list bold"><i class="fa fa-plus my-list-icon"></i><span class="my-list-txt">Removing</span></a>');
                    $("#dis_like_" + $index + "_" + key).addClass('disabled_class');
                },
                success: function (data) {
                    $("#dis_like_" + $index + "_" + key).removeClass('disabled_class');
                    if (data.success) {
                        $("#like_count_" + $index + "_" + key).html(data.like_count);
                        $("#dis_like_count_" + $index + "_" + key).html(data.dislike_count);
                        // setTimeout(function(){
                        if (data.delete) {
                            UIkit.notify({ message: "I'm glad you removed the video from dislike", timeout: 3000, pos: 'top-center', status: 'success' });
                            $("#like_" + $index + "_" + key).show(500);
                            $("#like_" + $index + "_" + key).removeClass('ng-hide');
                            $("#like_" + $index + "_" + key).css('display', 'inline !important');
                        }
                        else {
                            UIkit.notify({ message: "You disliked the video", timeout: 3000, pos: 'top-center', status: 'warning' });
                            $("#like_" + $index + "_" + key).fadeOut(500);
                        }
                        // }, 2000);
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
            });
        };
        this.spamVideo = function (admin_video_id, index, key) {
            if (confirm('Are you sure want to spam the video ?')) {
                var reason = $('input[name=reason]:checked').val();
                $.ajax({
                    type: "post",
                    url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/add_spam",
                    data: { id: this.user_id, token: this.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sub_profile_id, reason: reason },
                    async: false,
                    beforeSend: function () {
                        //$("#my-list-txt_"+$index+"_"+key).html('<a class="my-list bold"><i class="fa fa-plus my-list-icon"></i><span class="my-list-txt">Removing</span></a>');
                    },
                    success: function (data) {
                        if (data.success) {
                            UIkit.notify({ message: "You have marked the video as spam, the video won't appear anywhere except spam videos section", timeout: 3000, pos: 'top-center', status: 'success' });
                            // window.setTimeout(function() {
                            window.location.reload();
                            // }, 1000);
                        }
                        else {
                            UIkit.notify({ message: data.error_messages, timeout: 5000, pos: 'top-center', status: 'danger' });
                            return false;
                        }
                    },
                    error: function (data) {
                        UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                    },
                });
            }
        };
        this.showVideoDrop = function (event, idx, key) {
            $("#" + idx + "_" + key + "_video_drop").show();
            $('#' + idx + "_" + key).removeClass('transition-class');
            $('#' + idx + "_" + key + "_img").addClass('active_img');
            $('#' + idx + "_" + key + "_desc").hide();
            $('#' + idx + "_" + key + "_div").addClass('play_icon_div');
        };
        this.hoverIn = function (event, id, key, length) {
            $('#' + id + "_" + key).css('padding', '0');
            $('#' + id + "_" + key + "_desc").css('bottom', '20px');
            var video_drop = $(".video-drop").is(":visible");
            if (!video_drop) {
                $('#' + id + "_" + key).addClass('transition-class');
            }
            else {
                for (var i = 0; i < length; i++) {
                    $("#" + i + "_" + key + "_video_drop").hide();
                    $('#' + i + "_" + key + "_img").removeClass('active_img');
                    $('#' + i + "_" + key + "_desc").show();
                    $('#' + i + "_" + key + "_div").removeClass('play_icon_div');
                }
                $('#' + id + "_" + key + "_img").addClass('active_img');
                $('#' + id + "_" + key + "_desc").hide();
                $('#' + id + "_" + key + "_div").addClass('play_icon_div');
                $("#" + id + "_" + key + "_video_drop").show();
            }
        };
        this.hoverOut = function (event, id, key, length) {
            var video_drop = $(".video-drop").is(":visible");
            if (video_drop) {
                for (var i = 0; i < length; i++) {
                    $("#" + i + "_" + key + "_video_drop").hide();
                    $('#' + i + "_" + key + "_img").removeClass('active_img');
                    $('#' + i + "_" + key + "_desc").show();
                    $('#' + i + "_" + key + "_div").removeClass('play_icon_div');
                }
                $('#' + id + "_" + key + "_img").addClass('active_img');
                $("#" + id + "_" + key + "_video_drop").show();
                $('#' + id + "_" + key + "_desc").hide();
                $('#' + id + "_" + key + "_div").addClass('play_icon_div');
            }
            $('#' + id + "_" + key).removeClass('transition-class');
        };
        this.dynamicContent = function (index, key, id) {
            $("#" + index + "_" + key + "_overview").removeClass('active');
            $("#" + index + "_" + key + "_episodes").removeClass('active');
            $("#" + index + "_" + key + "_trailers").removeClass('active');
            $("#" + index + "_" + key + "_more-like").removeClass('active');
            $("#" + index + "_" + key + "_details").removeClass('active');
            if (id == "overview") {
                $("#" + index + "_" + key + "_overview").addClass('active');
            }
            else if (id == "episodes") {
                $("#" + index + "_" + key + "_episodes").addClass('active');
            }
            else if (id == "trailers") {
                $("#" + index + "_" + key + "_trailers").addClass('active');
            }
            else if (id == "more-like") {
                $("#" + index + "_" + key + "_more-like").addClass('active');
            }
            else {
                $("#" + index + "_" + key + "_details").addClass('active');
            }
            $(".episode-slider").not('.slick-initialized').slick({
                slidesToShow: this.epdisode_slide_to_show,
                slidesToScroll: this.epdisode_slide_to_scroll,
            });
            $(".episode-slider").slick('setPosition');
        };
        this.getSeasons = function (genre_id, idx, key, divid, loader, main_id) {
            if (genre_id == '' || genre_id == undefined) {
                genre_id = main_id;
            }
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/genre-list",
                data: { id: this.user_id, token: this.access_token, genre_id: genre_id },
                async: false,
                beforeSend: function () {
                    $("#" + idx + key + divid).html("");
                    $("#" + idx + key + loader).show();
                },
                success: function (data) {
                    if (data.success) {
                        // $("#"+divid).html(data.view);
                        console.log($("#" + idx + key + divid));
                        $("#" + idx + key + divid).html(data.data);
                        $(".episode-slider").not('.slick-initialized').slick({
                            slidesToShow: this.epdisode_slide_to_show,
                            slidesToScroll: this.epdisode_slide_to_scroll,
                        });
                        $(".episode-slider").slick('setPosition');
                        $('.slick-carousel-responsive').resize();
                    }
                    else {
                        UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
                complete: function (data) {
                    $("#" + idx + key + loader).hide();
                },
            });
        };
    }
    CastAndCrewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.user_id = (this.sessionStorage['user_id'] != '' && this.sessionStorage['user_id'] != undefined) ? this.sessionStorage['user_id'] : false;
        this.access_token = (this.sessionStorage['access_token'] != undefined && this.sessionStorage['access_token'] != '') ? this.sessionStorage['access_token'] : '';
        this.sub_profile_id = this.sessionStorage['sub_profile_id'];
        this.window_width = $(window).width();
        if (this.window_width > 991) {
            this.slide_to_show = 6;
            this.slide_to_scroll = 6;
            this.media_height = {
                "height": Math.round((this.window_width - 200)) / 6 * 1.5 + "px"
            };
        }
        if (this.window_width > 767 && this.window_width < 992) {
            this.slide_to_show = 4;
            this.slide_to_scroll = 4;
            this.media_height = {
                "height": Math.round((this.window_width - 100)) / 5 * 1.5 + "px"
            };
        }
        if (this.window_width > 479 && this.window_width < 768) {
            this.slide_to_show = 2;
            this.slide_to_scroll = 2;
            this.media_height = {
                "height": Math.round((this.window_width - 50)) / 2 * 1.5 + "px"
            };
        }
        if (this.window_width < 480) {
            this.slide_to_show = 1;
            this.slide_to_scroll = 1;
            this.media_height = {
                "height": (this.window_width - 100) * 1.5 + "px"
            };
        }
        $(window).bind('resize', function () {
            this.window_width = $(window).innerWidth;
            if (this.window_width > 991) {
                this.epdisode_slide_to_show = 4;
                this.epdisode_slide_to_scroll = 4;
            }
            if (this.window_width > 767 && this.window_width < 992) {
                this.epdisode_slide_to_show = 3;
                this.epdisode_slide_to_scroll = 3;
            }
            if (this.window_width > 479 && this.window_width < 768) {
                this.epdisode_slide_to_show = 2;
                this.epdisode_slide_to_scroll = 2;
            }
            if (this.window_width < 480) {
                this.epdisode_slide_to_show = 1;
                this.epdisode_slide_to_scroll = 1;
            }
            //	this.$apply();
        });
        this.slideConfig = {
            "slidesToShow": this.epdisode_slide_to_show,
            "slidesToScroll": this.epdisode_slide_to_scroll,
            // "nextArrow":"<div class='nav-btn next-slide'></div>",
            // "prevArrow":"<div class='nav-btn prev-slide'></div>",
            "dots": false,
            "infinite": true
        };
        this.slideConfig = {
            "slidesToShow": this.slide_to_show,
            "slidesToScroll": this.slide_to_scroll,
            "dots": false,
            "infinite": true
        };
        if (this.user_id && this.access_token) {
            this.user_type = (this.sessionStorage.user_type == undefined || this.sessionStorage.user_type == 0) ? true : false;
            this.title = this.route.snapshot.paramMap['params'].id;
            var key = this.route.snapshot.routeConfig.path;
            var param = key.split('/:id');
            this.apiService.spamReasons().subscribe(function (data) {
                if (data.success) {
                    _this.spam_reasons = data.data;
                }
                else {
                    return false;
                }
            });
            $("#data_loader").show();
            this.apiService.CastAndCrewVideos({ ignore: true, id: this.title, field: param[0] + 's', })
                .subscribe(function (data) {
                if (data.success) {
                    _this.recent_video = data.data;
                    _this.no_results_found = '';
                }
                else {
                    _this.no_results_found = "assets/img/no-results.png";
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
                $("#data_loader").hide();
            });
        }
        else {
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    CastAndCrewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cast-and-crew',
            template: __webpack_require__(/*! ./cast-and-crew.component.html */ "./src/app/components/cast-and-crew/cast-and-crew.component.html"),
            styles: [__webpack_require__(/*! ./cast-and-crew.component.css */ "./src/app/components/cast-and-crew/cast-and-crew.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CastAndCrewComponent);
    return CastAndCrewComponent;
}());



/***/ }),

/***/ "./src/app/components/cast-crews/cast-crews.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/cast-crews/cast-crews.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FzdC1jcmV3cy9jYXN0LWNyZXdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/cast-crews/cast-crews.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/cast-crews/cast-crews.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cast-crews works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/cast-crews/cast-crews.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/cast-crews/cast-crews.component.ts ***!
  \***************************************************************/
/*! exports provided: CastCrewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastCrewsComponent", function() { return CastCrewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_app_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-global */ "./src/app/app-global.ts");






var CastCrewsComponent = /** @class */ (function () {
    function CastCrewsComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.detailsFn = function (skip, take) {
            var _this = this;
            var data = new FormData;
            data.append('id', this.user_id);
            data.append('token', this.access_token);
            data.append('sub_profile_id', this.sub_profile_id);
            data.append('cast_crew_id', this.cast_id);
            data.append('device_type', 'web');
            data.append('skip', skip);
            data.append('take', take);
            $("#data_loader").show();
            this.apiService.CastCrewVideos(data).subscribe(function (data) {
                if (data.success) {
                    _this.cast_details = data.cast;
                    if (data.data.length > 0) {
                        _this.title = data.title;
                        if (_this.datas.length > 0) {
                            _this.datas = $.merge(_this.datas, data.data);
                        }
                        else {
                            _this.datas = data.data;
                        }
                    }
                }
                else {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                }
                $("#data_loader").hide();
            });
        };
        this.addWishlist = function (id, $index, key) {
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/addWishlist",
                data: { id: this.user_id, token: this.access_token, admin_video_id: id,
                    sub_profile_id: this.sub_profile_id },
                async: false,
                beforeSend: function () {
                    $("#my-list-txt_" + $index + "_" + key).html('<a class="my-list bold"><i class="fa fa-check fa-stack-1x my-list-icon"></i><span class="my-list-txt">Adding</span></a>');
                },
                success: function (data) {
                    if (data.success) {
                        setTimeout(function () {
                            $("#my-list-txt_" + $index + "_" + key).html('<a onclick="removeWishlist(' + data.wishlist_id + ', ' + id + ', ' + $index + ', ' + "'" + key + "'" + ')" class="my-list bold" id="remove-my-list-txt" style="cursor: pointer;">' +
                                '<i class="fa fa-check my-list-icon"></i>' +
                                '<span class="my-list-txt">My List</span>' +
                                '</a>');
                        }, 2000);
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
            });
        };
        this.closeDiv = function (index, key) {
            $("#" + index + "_" + key + "_video_drop").fadeOut();
            $('#' + index + "_" + key + "_img").removeClass('active_img');
            $('#' + index + "_" + key + "_desc").show();
            $('#' + index + "_" + key + "_div").removeClass('play_icon_div');
        };
        this.removeWishlist = function (id, admin_video_id, $index, key) {
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/deleteWishlist",
                data: { id: this.user_id, token: this.access_token, wishlist_id: admin_video_id, sub_profile_id: this.sub_profile_id },
                async: false,
                beforeSend: function () {
                    $("#my-list-txt_" + $index + "_" + key)
                        .html('<a class="my-list bold"><i class="fa fa-plus fa-stack-1x fa-inverse padding2"></i><span class="my-list-txt">Removing</span></a>');
                },
                success: function (data) {
                    if (data.success) {
                        setTimeout(function () {
                            $("#my-list-txt_" + $index + "_" + key).html('<a onclick="addWishlist(' + admin_video_id + ', ' + $index + ', ' + "'" + key + "'" + ')" class="my-list bold" style="cursor: pointer;">' +
                                '<i class="fa fa-plus my-list-icon"></i>' +
                                '<span class="my-list-txt">My List</span>' +
                                '</a>');
                        }, 2000);
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
            });
        };
        this.likeVideo = function (admin_video_id, $index, key) {
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/like_video",
                data: { id: this.user_id, token: this.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sub_profile_id },
                async: false,
                beforeSend: function () {
                    $("#like_" + $index + "_" + key).addClass('disabled_class');
                },
                success: function (data) {
                    $("#like_" + $index + "_" + key).removeClass('disabled_class');
                    if (data.success) {
                        $("#like_count_" + $index + "_" + key).html(data.like_count);
                        $("#dis_like_count_" + $index + "_" + key).html(data.dislike_count);
                        // setTimeout(function(){
                        if (data.delete) {
                            // UIkit.notify({message : "We are very sorry you removed the video from like", timeout : 3000, pos : 'top-center', status : 'success'});
                            $("#dis_like_" + $index + "_" + key).show();
                            $("#dis_like_" + $index + "_" + key).removeClass('ng-hide');
                            $("#dis_like_" + $index + "_" + key).css('display', 'inline !important');
                        }
                        else {
                            // UIkit.notify({message : "I'm glad you liked the video", timeout : 3000, pos : 'top-center', status : 'success'});
                            $("#dis_like_" + $index + "_" + key).fadeOut(500);
                        }
                        // }, 2000);
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
            });
        };
        this.dislikeVideo = function (admin_video_id, $index, key) {
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"] + "userApi/dis_like_video",
                data: { id: this.user_id, token: this.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sub_profile_id },
                async: false,
                beforeSend: function () {
                    //$("#my-list-txt_"+$index+"_"+key).html('<a class="my-list bold"><i class="fa fa-plus my-list-icon"></i><span class="my-list-txt">Removing</span></a>');
                    $("#dis_like_" + $index + "_" + key).addClass('disabled_class');
                },
                success: function (data) {
                    $("#dis_like_" + $index + "_" + key).removeClass('disabled_class');
                    if (data.success) {
                        $("#like_count_" + $index + "_" + key).html(data.like_count);
                        $("#dis_like_count_" + $index + "_" + key).html(data.dislike_count);
                        // setTimeout(function(){
                        if (data.delete) {
                            // UIkit.notify({message : "I'm glad you removed the video from dislike", timeout : 3000, pos : 'top-center', status : 'success'});
                            $("#like_" + $index + "_" + key).show(500);
                            $("#like_" + $index + "_" + key).removeClass('ng-hide');
                            $("#like_" + $index + "_" + key).css('display', 'inline !important');
                        }
                        else {
                            // UIkit.notify({message : "You disliked the video", timeout : 3000, pos : 'top-center', status : 'warning'});
                            $("#like_" + $index + "_" + key).fadeOut(500);
                        }
                        // }, 2000);
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
            });
        };
        this.spamVideo = function (admin_video_id, index, key) {
            if (confirm('Are you sure want to spam the video ?')) {
                var reason = $('input[name=reason]:checked').val();
                $.ajax({
                    type: "post",
                    url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/add_spam",
                    data: { id: this.user_id, token: this.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sub_profile_id, reason: reason },
                    async: false,
                    beforeSend: function () {
                        //$("#my-list-txt_"+$index+"_"+key).html('<a class="my-list bold"><i class="fa fa-plus my-list-icon"></i><span class="my-list-txt">Removing</span></a>');
                    },
                    success: function (data) {
                        if (data.success) {
                            UIkit.notify({ message: "You have marked the video as spam, the video won't appear anywhere except spam videos section", timeout: 3000, pos: 'top-center', status: 'success' });
                            // window.setTimeout(function() {
                            window.location.reload();
                            // }, 1000);
                        }
                        else {
                            UIkit.notify({ message: data.error_messages, timeout: 5000, pos: 'top-center', status: 'danger' });
                            return false;
                        }
                    },
                    error: function (data) {
                        UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                    },
                });
            }
        };
        this.showVideoDrop = function (event, idx, key) {
            $("#" + idx + "_" + key + "_video_drop").show();
            $('#' + idx + "_" + key).removeClass('transition-class');
            $('#' + idx + "_" + key + "_img").addClass('active_img');
            $('#' + idx + "_" + key + "_desc").hide();
            $('#' + idx + "_" + key + "_div").addClass('play_icon_div');
        };
        this.hoverIn = function (event, id, key, length) {
            //$(".video-drop").hide();
            var video_drop = $(".video-drop").is(":visible");
            if (!video_drop) {
                $('#' + id + "_" + key).addClass('transition-class');
            }
            else {
                for (var i = 0; i < length; i++) {
                    $("#" + i + "_" + key + "_video_drop").hide();
                    $('#' + i + "_" + key + "_img").removeClass('active_img');
                    $('#' + i + "_" + key + "_desc").show();
                    $('#' + i + "_" + key + "_div").removeClass('play_icon_div');
                }
                $('#' + id + "_" + key + "_img").addClass('active_img');
                $("#" + id + "_" + key + "_video_drop").show();
                $('#' + id + "_" + key + "_desc").hide();
                $('#' + id + "_" + key + "_div").addClass('play_icon_div');
            }
        };
        this.hoverOut = function (event, id, key, length) {
            var video_drop = $(".video-drop").is(":visible");
            if (video_drop) {
                for (var i = 0; i < length; i++) {
                    $("#" + i + "_" + key + "_video_drop").hide();
                    $('#' + i + "_" + key + "_img").removeClass('active_img');
                    $('#' + i + "_" + key + "_desc").show();
                    $('#' + i + "_" + key + "_div").removeClass('play_icon_div');
                }
                $('#' + id + "_" + key + "_img").addClass('active_img');
                $("#" + id + "_" + key + "_video_drop").show();
                $('#' + id + "_" + key + "_desc").hide();
                $('#' + id + "_" + key + "_div").addClass('play_icon_div');
            }
            $('#' + id + "_" + key).removeClass('transition-class');
        };
        this.dynamicContent = function (index, key, id) {
            $("#" + index + "_" + key + "_overview").removeClass('active');
            $("#" + index + "_" + key + "_episodes").removeClass('active');
            $("#" + index + "_" + key + "_trailers").removeClass('active');
            $("#" + index + "_" + key + "_more-like").removeClass('active');
            $("#" + index + "_" + key + "_details").removeClass('active');
            if (id == "overview") {
                $("#" + index + "_" + key + "_overview").addClass('active');
            }
            else if (id == "episodes") {
                $("#" + index + "_" + key + "_episodes").addClass('active');
            }
            else if (id == "trailers") {
                $("#" + index + "_" + key + "_trailers").addClass('active');
            }
            else if (id == "more-like") {
                $("#" + index + "_" + key + "_more-like").addClass('active');
            }
            else {
                $("#" + index + "_" + key + "_details").addClass('active');
            }
            $(".episode-slider").not('.slick-initialized').slick({
                slidesToShow: this.epdisode_slide_to_show,
                slidesToScroll: this.epdisode_slide_to_scroll,
            });
            $(".episode-slider").slick('setPosition');
        };
        this.getSeasons = function (genre_id, idx, key, divid, loader, main_id) {
            if (genre_id == '' || genre_id == undefined) {
                genre_id = main_id;
            }
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/genre-list",
                data: { id: this.user_id, token: this.access_token, genre_id: genre_id, sub_profile_id: this.sub_profile_id },
                async: false,
                beforeSend: function () {
                    $("#" + idx + key + divid).html("");
                    $("#" + idx + key + loader).show();
                    $(".episode-slider").not('.slick-initialized').slick({
                        slidesToShow: this.epdisode_slide_to_show,
                        slidesToScroll: this.epdisode_slide_to_scroll,
                    });
                    $(".episode-slider").slick('setPosition');
                    $('.slick-carousel-responsive').resize();
                },
                success: function (data) {
                    if (data.success) {
                        // $("#"+divid).html(data.view);
                        console.log($("#" + idx + key + divid));
                        $("#" + idx + key + divid).html(data.data);
                    }
                    else {
                        UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
                complete: function (data) {
                    $("#" + idx + key + loader).hide();
                },
            });
        };
        this.loadMoreDetails = function () {
            var dataLength = this.datas.length;
            length = 0;
            for (var i = 0; i < dataLength; i++) {
                length += this.datas[i].length;
            }
            var total = length;
            this.detailsFn(total, 12);
        };
    }
    CastCrewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.window_width = $(window).width();
        if (this.window_width > 991) {
            this.epdisode_slide_to_show = 4;
            this.epdisode_slide_to_scroll = 4;
        }
        if (this.window_width > 767 && this.window_width < 992) {
            this.epdisode_slide_to_show = 3;
            this.epdisode_slide_to_scroll = 3;
        }
        if (this.window_width > 479 && this.window_width < 768) {
            this.epdisode_slide_to_show = 2;
            this.epdisode_slide_to_scroll = 2;
        }
        if (this.window_width < 480) {
            this.epdisode_slide_to_show = 1;
            this.epdisode_slide_to_scroll = 1;
        }
        this.slideConfig = {
            "slidesToShow": this.epdisode_slide_to_show,
            "slidesToScroll": this.epdisode_slide_to_scroll,
            // "nextArrow":"<div class='nav-btn next-slide'></div>",
            // "prevArrow":"<div class='nav-btn prev-slide'></div>",
            "dots": false,
            "infinite": true
        };
        this.slideConfig = {
            "slidesToShow": this.slide_to_show,
            "slidesToScroll": this.slide_to_scroll,
            "dots": false,
            "infinite": true
        };
        this.user_id = (this.sessionStorage['user_id'] != '' && this.sessionStorage['user_id'] != undefined) ? this.sessionStorage['user_id'] : false;
        this.access_token = (this.sessionStorage['access_token'] != undefined && this.sessionStorage['access_token'] != '') ? this.sessionStorage['access_token'] : '';
        if (this.user_id && this.access_token) {
            this.title = this.route.snapshot.paramMap['params'].id;
            var key = this.route.snapshot.routeConfig.path;
            this.user_type = (this.sessionStorage.user_type == undefined || this.sessionStorage.user_type == 0) ? true : false;
            this.apiService.spamReasons().subscribe(function (data) {
                if (data.success) {
                    _this.spam_reasons = data.data;
                }
                else {
                    return false;
                }
            });
            $(window).scroll(function () {
                console.log('dfdfdfdfdfdfd');
                if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                    // ajax call get data from server and append to the div
                    $("#load_more_details").click();
                }
            });
            this.detailsFn(0, 12);
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    CastCrewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cast-crews',
            template: __webpack_require__(/*! ./cast-crews.component.html */ "./src/app/components/cast-crews/cast-crews.component.html"),
            styles: [__webpack_require__(/*! ./cast-crews.component.css */ "./src/app/components/cast-crews/cast-crews.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CastCrewsComponent);
    return CastCrewsComponent;
}());



/***/ }),

/***/ "./src/app/components/change-password/change-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/change-password/change-password.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main-content form-content bg-img\" style=\"background-image:url({{login_bg}})\"> -->\n    <div class=\"main-content\">\n\n        <div class=\"content-panel\" style=\"padding-top:100px;padding-bottom: 40px;\">\n      \n          <!-- LOGIN FORM \n          ===================================================-->\n          <div class=\"login-form\">\n            <div class=\"container\">\n              <div class=\"login-form-inner grey-bg\">  \n                <h3 class=\"login-tit\">Change Password</h3>\n                <form method=\"post\" (ngSubmit)=\"changePassword()\">\n                  <div class=\"form-group\">\n                      <label>Old Password</label>\n                      <input type=\"password\" class=\"form-control\" placeholder=\"Enter Old Password\" required [ngModel]=\"old_password\" name = \"old_password\" (ngModelChange)=\"handleChangeOldPassword($event)\">\n                  </div>\n      \n                  <div class=\"form-group\">\n                      <label>Password</label>\n                      <input type=\"password\" class=\"form-control\" placeholder=\"Enter Current Password\" required [ngModel]=\"password\" name=\"password\" (ngModelChange)=\"handleChangePassword($event)\">\n                  </div>\n      \n                  <div class=\"form-group\">\n                      <label>Confirm Password</label>\n                      <input type=\"password\" class=\"form-control\" placeholder=\"Enter Confirmation Password\" required [ngModel]=\"password_confirmation\" name=\"password_confirmation\" (ngModelChange)=\"handleChangeConfirmationPassword($event)\">\n                  </div>\n      \n                  \n                  <div>\n                    <button type=\"submit\" class=\"btn btn-primary form-btn\">Change Password</button>\n                  </div>\n      \n                 \n      \n                \n      \n                  <div class=\"clearfix\"></div>\n      \n                </form>\n              </div>          \n            </div>\n          </div>\n          <!-- LOGIN FORM -->\n      \n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/components/change-password/change-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");






var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.changePassword = function () {
            var _this = this;
            $("#before_loader").fadeIn();
            this.apiService.ChangePassword({ id: this.user_id, token: this.access_token, old_password: this.old_password, password: this.password, password_confirmation: this.password_confirmation })
                .subscribe(function (data) {
                if (data.success) {
                    UIkit.notify({ message: data.message + "Please login and continue your account details.", timeout: 3000, pos: 'top-center', status: 'success' });
                    _this.apiService.Logout({ id: _this.user_id, token: _this.access_token })
                        .subscribe(function (data) {
                        if (data.success) {
                            window.localStorage.setItem('logged_in', 'false');
                            _this.sessionStorage = {};
                            localStorage.removeItem("sessionStorage");
                            localStorage.clear();
                            _this.router.navigateByUrl('/');
                        }
                        else {
                            UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                            return false;
                        }
                    });
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
                $("#before_loader").fadeOut();
            });
        };
        this.handleChangeOldPassword = function (input) {
            this.old_password = input;
            console.log(this.old_password);
        };
        this.handleChangePassword = function (input) {
            this.password = input;
            console.log(this.password);
        };
        this.handleChangeConfirmationPassword = function (input) {
            this.confirmation_password = input;
            console.log(this.confirmation_password);
        };
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.site_settings = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].settings;
        this.user_id = (this.sessionStorage.user_id != '' && this.sessionStorage.user_id != undefined) ? this.sessionStorage.user_id : false;
        this.access_token = (this.sessionStorage.access_token != undefined && this.sessionStorage.access_token != '') ? this.sessionStorage.access_token : '';
        if (this.user_id && this.access_token) {
            var login_bg = $.grep(this.site_settings, function (e) { return e.key == 'common_bg_image'; });
            var bg_image = "";
            if (login_bg.length == 0) {
                console.log("not found");
            }
            else if (login_bg.length == 1) {
                bg_image = login_bg[0].value;
                if (bg_image != '' || bg_image != null || bg_image != undefined) {
                }
                else {
                    bg_image = '';
                }
            }
            else {
                bg_image = "";
            }
            this.login_bg = bg_image;
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/components/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/components/change-password/change-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/channels/channels.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/channels/channels.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhbm5lbHMvY2hhbm5lbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/channels/channels.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/channels/channels.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" style=\"padding-top: 8%;\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <h1 class=\"text-center\">{{title}}</h1>\n                <h3 style=\"line-height: 1.5;\">Premium channels are curated collections of movies which let you play all titles in that channel for a single\n                    monthly subscription price.</h3>\n            </div>\n        </div>\n    </div>\n    <div class=\"row mt-4\" style=\"margin-top:80px !important; margin:5%; padding: 10px;\">\n        <div class=\"col-md-3\" *ngFor=\"let item of items\">\n            <div class=\"card hovercard\">\n                <img src=\"http://localhost/img/billing-back.jpg\" alt=\"\" />\n                <div class=\"avatar\">\n                    <img src=\"{{item.picture}}\" alt=\"\" />\n                </div>\n                <div class=\"info mt-2\">\n                    <div class=\"title mb-2\">\n                        {{item.name}}\n                    </div>\n                    <div class=\"desc\">{{item.description}}</div>\n                </div>\n                <div class=\"bottom\">\n                    <a href=\"/channel/{{item.id}}\" class=\"btn form-btn\">View Details</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/channels/channels.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/channels/channels.component.ts ***!
  \***********************************************************/
/*! exports provided: ChannelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsComponent", function() { return ChannelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var ChannelsComponent = /** @class */ (function () {
    function ChannelsComponent(apiService, router, route, titleService) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.sessionStorage = {};
        this.items = [];
        this.titleService.setTitle('Flashington | Channel');
    }
    ChannelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.user_id = (this.sessionStorage['user_id'] != '' && this.sessionStorage['user_id'] != undefined) ? this.sessionStorage['user_id'] : false;
        this.access_token = (this.sessionStorage['access_token'] != undefined && this.sessionStorage['access_token'] != '') ? this.sessionStorage['access_token'] : '';
        this.title = 'What are Premium Channels';
        if (this.user_id && this.access_token) {
            this.apiService.getAllChannels({ id: this.sessionStorage['user_id'], token: this.sessionStorage['access_token'] }).subscribe(function (data) {
                if (data.success) {
                    _this.items = data.channels;
                    console.log(_this.items);
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    ChannelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-channels',
            template: __webpack_require__(/*! ./channels.component.html */ "./src/app/components/channels/channels.component.html"),
            styles: [__webpack_require__(/*! ./channels.component.css */ "./src/app/components/channels/channels.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], ChannelsComponent);
    return ChannelsComponent;
}());



/***/ }),

/***/ "./src/app/components/delete-account/delete-account.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/delete-account/delete-account.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVsZXRlLWFjY291bnQvZGVsZXRlLWFjY291bnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/delete-account/delete-account.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/delete-account/delete-account.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n    <div class=\"content-panel\" style=\"padding-top: 57px;\">\n  \n      <!-- LOGIN FORM \n      ===================================================-->\n      <div class=\"login-form\">\n        <div class=\"container\">\n          <div class=\"login-form-inner grey-bg\">  \n            <h3 class=\"login-tit\">Hope, see you soon</h3>\n            <form method=\"post\" (ngSubmit)=\"deleteAccount()\">\n              <div class=\"form-group\">\n                  <label><b>Note:</b> Once you deleted account, you will lose your history and wishlist details. </label>\n                  <br>\n                  <div *ngIf=\"login_by == 'manual'\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password\" [ngModel]=\"password\" name=\"password\">\n                  </div>\n              </div>\n  \n             \n              <div>\n                <button type=\"submit\" class=\"btn btn-primary form-btn\">Delete Account</button>\n              </div>\n  \n              <div class=\"clearfix\"></div>\n  \n            </form>\n          </div>          \n        </div>\n      </div>\n      <!-- LOGIN FORM -->\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/delete-account/delete-account.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/delete-account/delete-account.component.ts ***!
  \***********************************************************************/
/*! exports provided: DeleteAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAccountComponent", function() { return DeleteAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");






var DeleteAccountComponent = /** @class */ (function () {
    function DeleteAccountComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.deleteAccount = function () {
            var _this = this;
            this.password = this.sessionStorage.login_by == 'manual' ? this.password : '';
            if (this.sessionStorage.login_by == 'manual') {
                if (this.password == '' || this.password == undefined) {
                    UIkit.notify({ message: "Please fill the password field", timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            }
            $("#before_loader").fadeIn();
            this.apiService.DeleteAccount({ id: this.user_id, token: this.access_token, password: this.password })
                .subscribe(function (data) {
                if (data.success) {
                    UIkit.notify({ message: data.message, timeout: 3000, pos: 'top-center', status: 'success' });
                    window.localStorage.setItem('logged_in', 'false');
                    _this.sessionStorage = {};
                    localStorage.removeItem("sessionStorage");
                    localStorage.clear();
                    _this.router.navigateByUrl('/');
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
                $("#before_loader").fadeOut();
            });
        };
    }
    DeleteAccountComponent.prototype.ngOnInit = function () {
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.site_settings = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].settings;
        this.user_id = (this.sessionStorage.user_id != '' && this.sessionStorage.user_id != undefined) ? this.sessionStorage.user_id : false;
        this.access_token = (this.sessionStorage.access_token != undefined && this.sessionStorage.access_token != '') ? this.sessionStorage.access_token : '';
        if (this.user_id && this.access_token) {
            this.login_by = this.sessionStorage.login_by;
            var login_bg = $.grep(this.site_settings, function (e) { return e.key == 'common_bg_image'; });
            var bg_image = "";
            if (login_bg.length == 0) {
                console.log("not found");
            }
            else if (login_bg.length == 1) {
                // access the foo property using result[0].foo
                bg_image = login_bg[0].value;
                if (bg_image != '' || bg_image != null || bg_image != undefined) {
                }
                else {
                    bg_image = '';
                }
            }
            else {
                // multiple items found
                bg_image = "";
            }
            this.login_bg = bg_image;
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    DeleteAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-account',
            template: __webpack_require__(/*! ./delete-account.component.html */ "./src/app/components/delete-account/delete-account.component.html"),
            styles: [__webpack_require__(/*! ./delete-account.component.css */ "./src/app/components/delete-account/delete-account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DeleteAccountComponent);
    return DeleteAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/detail-page/detail-page.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/detail-page/detail-page.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tile-img {\r\n    max-height: 420px;\r\n    -o-object-fit: fill;\r\n       object-fit: fill;\r\n}\r\n\r\n.tile-media {\r\n    /*border: 2px solid #141414;*/\r\n    height: auto !important;\r\n    text-align: center;\r\n}\r\n\r\n.tile {\r\n    height: auto !important;\r\n}\r\n\r\n.slick-initialized .slick-slide {\r\n    display: inline-block !important;\r\n    height: 100% !important;\r\n    padding: 0 10px;\r\n}\r\n\r\n.tab-overlay {\r\n    background: rgba(0, 0, 0, .90);\r\n}\r\n\r\n.box-head h3 {\r\n\r\n    font-size: 18px;\r\n    color: #e5e5e5;\r\n    font-weight: 700;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n\r\n    margin: 0;\r\n}\r\n\r\n.video-box-row {\r\n\r\n    font-size: 14px;\r\n\r\n    white-space: normal;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWwtcGFnZS9kZXRhaWwtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFnQjtPQUFoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIscUJBQXFCOztJQUVyQixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksZUFBZTs7SUFFZixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RldGFpbC1wYWdlL2RldGFpbC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlsZS1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogNDIwcHg7XHJcbiAgICBvYmplY3QtZml0OiBmaWxsO1xyXG59XHJcblxyXG4udGlsZS1tZWRpYSB7XHJcbiAgICAvKmJvcmRlcjogMnB4IHNvbGlkICMxNDE0MTQ7Ki9cclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGlsZSB7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNsaWNrLWluaXRpYWxpemVkIC5zbGljay1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4udGFiLW92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuOTApO1xyXG59XHJcbi5ib3gtaGVhZCBoMyB7XHJcblxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNlNWU1ZTU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnZpZGVvLWJveC1yb3cge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/detail-page/detail-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/detail-page/detail-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" id=\"page_content\">\r\n\t<div style=\"margin-top:80px !important; margin:5%; padding: 10px;\">\r\n\t\t<div class=\"box-head\" style=\"margin-bottom: 2%;\">\r\n\t\t\t<h3>{{title}}</h3>\r\n\t\t\t<span style=\"position:relative;\">\r\n\t\t\t\t<span class=\"secondary-menu custom-menu\" (click)=\"ShowGeners()\">Genres: <i class=\"glyphicon glyphicon-triangle-bottom arrow-down\"></i>\r\n\t\t\t\t\t<div id=\"geners_menu\" class=\"secondary-dropdown\">\r\n\t\t\t\t\t\t<ul class=\"sub-drop list-unstyled\" *ngFor=\"let col of geners\">\r\n\t\t\t\t\t\t\t<li *ngFor=\"let item of col|keyvalue\">\r\n\t\t\t\t\t\t\t\t<a href=\"/title/{{item.value.name}}/{{item.value.id}}\">{{item.value.name}}</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</span>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t\t<button (click)=\"loadMoreDetails()\" *ngIf=\"true\" id=\"load_more_details\" style=\"display:none\"></button>\r\n\t\t<div class=\"box video-box-row\" *ngIf=\"datas.length == 0\">\r\n\t\t\t<p *ngIf=\"title == 'wishlist'\">You have not added any video to wishlist Yet</p>\r\n\t\t\t<p *ngIf=\"title == 'watchlist'\"> You haven’t watched anything yet</p>\r\n\t\t\t<p *ngIf=\"title != 'watchlist' && title != 'wishlist'\">No videos found</p>\r\n\t\t</div>\r\n\t\t<div class=\"box video-box-row\" *ngFor=\"let video of datas; let parentindex = index\">\r\n\t\t\t<div class=\"box video-box-row\">\r\n\t\t\t\t<div id=\"{{childindex}}_{{parentindex}}\" \r\n\t\t\t\t(mouseover)=\"hoverIn(this, childindex, parentindex, video.length)\" \r\n\t\t\t\t(mouseleave)=\"hoverOut(this, childindex, parentindex, video.length)\" \r\n\t\t\t\tclass=\"tile col-lg-2 col-md-3 col-sm-4 col-xs-6 slide-box video-box\" \r\n\t\t\t\t*ngFor=\"let value of video; let childindex = index\">\r\n\t\t\t\t\t<div class=\"video-box-outer\">\r\n\t\t\t\t\t\t<div class=\"tile-media\" id=\"{{childindex}}_{{parentindex}}_img\">\r\n\t\t\t\t\t\t\t<img class=\"tile-img\" src=\"{{value.default_image}}\" alt=\"\" [ngStyle]=\"media_height\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"tile-details\">\r\n\t\t\t\t\t\t\t<div class=\"video_amount\" *ngIf=\"value.amount > 0 && !value.pay_per_view_status\">\r\n\t\t\t\t\t\t\t\t<!-- <span *ngIf=\"value.pay_per_view_status\">PAID</span> -->\r\n\t\t\t\t\t\t\t\t<span>PAY - {{value.currency}} {{value.amount}}</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span *ngIf=\"value.pay_per_view_status\">\r\n\t\t\t\t\t\t\t\t<a href=\"/video/{{value.admin_video_id}}\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"hover-icon\" id=\"{{childindex}}_{{parentindex}}_div\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span *ngIf=\"value.pay_per_view_status\">\r\n\t\t\t\t\t\t\t\t<a href=\"/payment-option/{{value.admin_video_id}}\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"hover-icon\" id=\"{{childindex}}_{{parentindex}}_div\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<div class=\"tile-content\" id=\"{{childindex}}_{{parentindex}}_desc\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"tile-tit\">{{value.title}}</h3>\r\n\t\t\t\t\t\t\t\t<div class=\"row no-margin hidden-cls\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"pull-left\">\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 1), 'glyphicon-star' : (value.ratings >= 1)}\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 2), 'glyphicon-star' : (value.ratings >= 2)}\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 3), 'glyphicon-star' : (value.ratings >= 3)}\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 4), 'glyphicon-star' : (value.ratings >= 4)}\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 5), 'glyphicon-star' : (value.ratings >= 5)}\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<p class=\"video-season\">\r\n\t\t\t\t\t\t\t\t\t\t<span>{{value.release_date && value.release_date !=\"0000-00-00\" ? value.release_date:'' }}</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"video-epi-count\">{{value.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{value.watch_count}}</span>\r\n\t\t\t\t\t\t\t\t\t\t<span>{{value.duration}}</span>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"video-des\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"video-des-inner\">{{value.description}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t<a (click)=\"showVideoDrop(this, childindex, parentindex,video.length)\" class=\"arrow\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/down-arrow-red.png\" class=\"arrow_down\" />\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t<div class=\"video-drop\" style=\"margin-top: 1% !important;\" id=\"{{childindex}}_{{parentindex}}_video_drop\" *ngFor=\"let value of video; let childindex = index\">\r\n\t\t\t\t<div class=\"tab-content\">\r\n\r\n\t\t\t\t\t<!-- OVERVIEW SECTION  -->\r\n\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane active\" id=\"{{childindex}}_{{parentindex}}_overview\">\r\n\t\t\t\t\t\t<div class=\"overview tab-section relative\">\r\n\t\t\t\t\t\t\t<div class=\"close-tab\">\r\n\t\t\t\t\t\t\t\t<a style=\"cursor: pointer;\" (click)=\"closeDiv(childindex,parentindex)\" class=\"close-btn\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-times\"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"tab-section-content row no-margin\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-5 no-pad overview-details\">\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7 no-pad\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"linear-outer\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"linear\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"rotate-img-outer\">            \r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rotate-img highlight-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"rotate-img highlight-img bg-img\" style=\"background-image: url({{value.video_gif_image}});\"></div> -->\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"play-icon-outer\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <a ui-sref=\"single_video({id : value.admin_video_id})\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a>-->\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"value.pay_per_view_status\">\r\n\t\t\t    \t\t\t\t\t\t<a href=\"/video/{{value.admin_video_id}}\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a>\r\n\t\t\t    \t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!value.pay_per_view_status\">\r\n\t\t\t    \t\t\t\t\t\t<a href=\"/payment-option/{{value.admin_video_id}}\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a>\r\n\t\t\t    \t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"home-new-deatils\">\r\n\t\t\t\t\t\t\t\t<div class=\"overview-details\" style=\"background-color: unset;\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{value.title}}</h3>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"row no-margin hidden-xs\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"pull-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 1), 'glyphicon-star' : (value.ratings >= 1)}\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 2), 'glyphicon-star' : (value.ratings >= 2)}\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 3), 'glyphicon-star' : (value.ratings >= 3)}\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 4), 'glyphicon-star' : (value.ratings >= 4)}\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 5), 'glyphicon-star' : (value.ratings >= 5)}\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"green-clr\">{{value.release_date && value.release_date !=\"0000-00-00\" ? value.release_date:'' }}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"epi-count\">{{value.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{value.watch_count}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span>{{value.duration}}</span>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"pull-left\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"white-icon\">\r\n\t\t    \t\t\t\t\t\t\t<i class=\"fa fa-thumbs-up\"></i><span id=\"like_count_{{childindex}}_{{parentindex}}\">{{value.like_count}}</span>\r\n\t\t    \t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"white-icon\">\r\n\t\t    \t\t\t\t\t\t\t<i class=\"fa fa-thumbs-down\"></i><span id=\"dis_like_count_{{childindex}}_{{parentindex}}\">{{value.dis_like_count}}</span>\r\n\t\t    \t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"pull-left\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"display_amount\" *ngIf=\"value.amount > 0 && !value.pay_per_view_status\" style=\"margin-left: 5px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span *ngIf=\"recent_video.pay_per_view_status\">PAID</span> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>PAY - ${{value.amount}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt overview-des\">{{value.description}}</p>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<!-- <p class=\"content-txt awards\"><i class=\"fa fa-trophy\"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p> -->\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div id=\"my-list-txt_{{childindex}}_{{parentindex}}\" class=\"pull-left\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"addWishlist(value.admin_video_id, childindex, parentindex)\" class=\" bold\" id=\"\" *ngIf=\"!value.wishlist_status\"\r\n\t\t\t\t\t\t\t\t\t\t style=\"cursor: pointer;\">\r\n\t    \t\t\t\t\t\t\t<button class=\"my-list\">\r\n\t\t    \t\t\t\t\t\t\t<i class=\"fa fa-plus my-list-icon\"></i>\r\n\t\t    \t\t\t\t\t\t\t<span class=\"my-list-txt\">My List</span> \r\n\t    \t\t\t\t\t\t\t</button>\r\n\t    \t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"removeWishlist(value.wishlist_status, value.admin_video_id,childindex, parentindex)\" class=\"bold\" *ngIf=\"value.wishlist_status\"\r\n\t\t\t\t\t\t\t\t\t\t style=\"cursor: pointer;\">\r\n\t    \t\t\t\t\t\t\t<button class=\"my-list\">\r\n\t\t    \t\t\t\t\t\t\t<i class=\"fa fa-check my-list-icon\"></i>\r\n\t\t    \t\t\t\t\t\t\t<span class=\"my-list-txt\">My List</span> \r\n\t\t    \t\t\t\t\t\t</button>\r\n\t    \t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"banner-icon-sec hidden-xs\">\r\n\t\t\t\t\t\t\t\t\t\t<a id=\"like_{{childindex}}_{{parentindex}}\" style=\"cursor: pointer;\" *ngIf=\"value.is_liked == 1 || value.is_liked == 0\" (click)=\"likeVideo(value.admin_video_id, childindex, parentindex)\">\r\n\t    \t\t\t\t\t\t\t<button class=\"banner-icon\">\r\n    \t\t\t\t\t\t\t\t\t<i class=\"fa fa-thumbs-up\"></i>\r\n    \t\t\t\t\t\t\t\t</button>\r\n\t    \t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t<a id=\"dis_like_{{childindex}}_{{parentindex}}\" style=\"cursor: pointer;\" *ngIf=\"value.is_liked == -1 || value.is_liked == 0\"\r\n\t\t\t\t\t\t\t\t\t\t (click)=\"dislikeVideo(value.admin_video_id, childindex, parentindex)\">\r\n\t    \t\t\t\t\t\t\t<button class=\"banner-icon\">\r\n\t    \t\t\t\t\t\t\t\t<i class=\"fa fa-thumbs-down\"></i>\r\n\t    \t\t\t\t\t\t\t</button>\r\n\t    \t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#myModal_{{childindex}}_{{parentindex}}\" title=\"Report as Spam\" style=\"cursor: pointer;\">\r\n\t    \t\t\t\t\t\t\t<button class=\"banner-icon\">\r\n\t    \t\t\t\t\t\t\t\t<i class=\"fa fa-exclamation \"></i>\r\n\t    \t\t\t\t\t\t\t</button>\r\n\t    \t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"modal fade\" id=\"myModal_{{childindex}}_{{parentindex}}\" role=\"dialog\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"modal-dialog\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- Modal content-->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-content\" style=\"background-color: #333;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"modal-title bold\">Report This Video</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"spamVideo(value.admin_video_id, childindex, parentindex)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"radio radio-danger\" *ngFor=\"let spam_reason of spam_reasons\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"reason\" id=\"reason_{{value.admin_video_id}}_{{childindex}}_{{parentindex}}\" value=\"{{spam_reason.value}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"reason_{{value.admin_video_id}}_{{childindex}}_{{parentindex}}\">\r\n\t\t\t\t\t\t\t\t                        {{spam_reason.value}}\r\n\t\t\t\t\t\t\t\t                    </label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{spam_reason_value}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small bold text-center\">If you report this video, you won't see again the same video in anywhere in your account except \"Spam Videos\".\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIf you want to continue to report this video as same. Click continue and proceed the same.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"payment-submit\">Submit</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- OVERVIEW SECTION END -->\r\n\r\n\t\t\t\t\t<!-- EPISODES-SECTION -->\r\n\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"{{childindex}}_{{parentindex}}_episodes\" *ngIf=\"value.is_genre\">\r\n\t\t\t\t\t\t<div class=\"episodes-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\r\n\t\t\t\t\t\t\t<div class=\"tab-overlay\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"episodes-section-inner tab-section-content tab-sec-inner contain-width\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{value.sub_category_name}}</h3>\r\n\t\t\t\t\t\t\t\t\t<form class=\"season-select\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group styled-select black\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <select id=\"exampleSelect1\" [(ngModel)]=\"genres_name\" [ngModelChange]=\"getSeasons(genres_name, {{parentindex}},{{parentindex}},'_sessions', '_loader_seasons', value.genre_id);\">\r\n                                                <option value=\"\">Select Seasons</option>\r\n                                                <option value=\"{{genrename.genre_id}}\" *ngFor=\"let genrename of value.genre_names\">\r\n                                                {{genrename.genre_name}}\r\n                                                </option>\r\n\t\t\t\t\t\t\t\t            </select> -->\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"episodes-list\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"{{parentindex}}{{parentindex}}_loader_seasons\" style=\"margin-top: 10px;text-align: center;display: none\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/ellipsis.svg\" style=\"width: 40px;\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"{{parentindex}}{{parentindex}}_sessions\" class=\"row\">\r\n                                            <!-- episode list box -->\r\n                                            <ngx-slick-carousel class=\"carousel episode-slider\"  #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <slick slides-to-show=\"{{epdisode_slide_to_show}}\" slides-to-scroll=\"{{epdisode_slide_to_scroll}}\" dots=\"false\" class=\"episode-slider\"> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let genre_list of value.first_part\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-box\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + genre_list.default_image + ')'}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-overlay\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-inner\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <p class=\"episode-count\">{{genre_list.watch_count}}</p> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"epi-count\">{{genre_list.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{genre_list.watch_count}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"epi-play-icon-outer\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a ui-sref=\"single_video({id : genre_list.admin_video_id})\" class=\"epi-play-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a> -->\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"genre_list.pay_per_view_status\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/video/{{genre_list.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!genre_list.pay_per_view_status\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/payment-option/{{genre_list.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"epi-tit gray-color1 txt-overflow\">{{genre_list.title}}</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 text-right hidden-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"bold epi-tit gray-color1 txt-overflow\">{{genre_list.duration}}</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"gray-color1 overview-des more-link mt-0\">{{genre_list.description}}</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</ngx-slick-carousel>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<!-- episode-list-box end -->\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- EPISODES-SECTION END-->\r\n\r\n\t\t\t\t\t<!-- TRAILERS SECTION -->\r\n\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"{{childindex}}_{{parentindex}}_trailers\" *ngIf=\"value.is_genre || value.trailer_video\">\r\n\t\t\t\t\t\t<div class=\"trailers-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\r\n\t\t\t\t\t\t\t<div class=\"tab-overlay\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"trailers-section-inner tab-section-content tab-sec-inner contain-width\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{value.sub_category_name}}</h3>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"trailers-list row\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<!-- episode list box -->\r\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 top\" *ngFor=\"let trailer of value.genres\" *ngIf=\"value.is_genre\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-box\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + trailer.default_image + ')'}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-overlay\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"epi-play-icon-outer\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/genre_video/{{trailer.genre_id}}\" class=\"epi-play-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-margin\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"epi-tit gray-color1\">{{trailer.genre_name}}</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 top\" *ngIf=\"value.trailer_video\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-box\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-overlay\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"epi-play-icon-outer\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/trailer_video/{{value.admin_video_id}}\" class=\"epi-play-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-margin\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"epi-tit gray-color1\">{{value.title}}</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- MORE LIKE SECTION  -->\r\n\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"{{childindex}}_{{parentindex}}_more-like\">\r\n\t\t\t\t\t\t<div class=\"morelike-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\r\n\t\t\t\t\t\t\t<div class=\"tab-overlay\">\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"morelike-section-inner tab-section-content tab-sec-inner contain-width\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{value.sub_category_name}}</h3>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"morelike-list row\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\" *ngFor=\"let sub_video of value.sub_videos\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-box\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + sub_video.default_image + ')'}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-overlay\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-inner\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"new-epi\">{{sub_video.title}}</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"epi-play-icon-outer\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a ui-sref=\"single_video({id : sub_video.admin_video_id})\" class=\"epi-play-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a> -->\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"sub_video.pay_per_view_status\">\r\n\t\t\t\t\t\t\t    \t\t\t\t\t\t<a href=\"/video/{{sub_video.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\r\n\t\t\t\t\t\t\t    \t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!sub_video.pay_per_view_status\">\r\n\t\t\t\t\t\t\t    \t\t\t\t\t\t<a href=\"/payment-option/{{sub_video.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\r\n\t\t\t\t\t\t\t    \t\t\t\t\t</span>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"duration_more\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{sub_video.duration}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-margin\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pull-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 1), 'glyphicon-star' : (sub_video.ratings >= 1)}\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 2), 'glyphicon-star' : (sub_video.ratings >= 2)}\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 3), 'glyphicon-star' : (sub_video.ratings >= 3)}\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 4), 'glyphicon-star' : (sub_video.ratings >= 4)}\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 5), 'glyphicon-star' : (sub_video.ratings >= 5)}\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"green-clr hidden-sm\">{{sub_video.release_date && sub_video.release_date !=\"0000-00-00\" ? sub_video.release_date:'' }}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"epi-count hidden-sm hidden-md\">{{sub_video.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{sub_video.watch_count}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span>{{sub_video.duration}}</span> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt overview-des more-link\">{{sub_video.description}}</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- MORE LIKE SECTION END -->\r\n\r\n\t\t\t\t\t<!-- DETAILS-SECTION -->\r\n\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"{{childindex}}_{{parentindex}}_details\">\r\n\t\t\t\t\t\t<div class=\"details-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\r\n\t\t\t\t\t\t\t<div class=\"tab-overlay\">\r\n\t\t\t\t\t\t\t\t<div class=\"details-section-inner tab-section-content tab-sec-inner contain-width details_section_tab\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{value.title}}</h3>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row col-sm-12 col-sm-12 col-lg-12 col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"detailsItem detailsMedia col-md-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Directors</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let director of value.directors\" class=\"listLabel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/director/{{director.id}}\">{{director.name}}</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Writers</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let writer of value.writers\" class=\"listLabel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/writer/{{writer.id}}\">{{writer.name}}</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"detailsItem detailsMedia col-md-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Actors</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let actor of value.actors\" class=\"listLabel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/actor/{{actor.id}}\">{{actor.name}}</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"detailsItem detailsMedia col-md-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Category</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"listLabel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a>{{value.sub_category_name}}</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"clear-fix\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Publish Date</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"listLabel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"green-clr hidden-sm\">{{value.release_date  && value.release_date !=\"0000-00-00\" ? value.release_date:''}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Duration</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"listLabel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{value.duration}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"detailsItem detailsMedia col-md-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Ratings</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"mt-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 1), 'glyphicon-star' : (value.ratings >= 1)}\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 2), 'glyphicon-star' : (value.ratings >= 2)}\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 3), 'glyphicon-star' : (value.ratings >= 3)}\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 4), 'glyphicon-star' : (value.ratings >= 4)}\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 5), 'glyphicon-star' : (value.ratings >= 5)}\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Age</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"listLabel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tRecommended for ages {{value.age}} and up\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"drop-tab hidden-xs\">\r\n\t\t\t\t\t<ul class=\"nav nav-tabs\" role=\"tablist\">\r\n\t\t\t\t\t\t<li role=\"presentation\" class=\"active\">\r\n\t\t\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"dynamicContent(childindex, parentindex,'overview')\" aria-controls=\"overview\" role=\"tab\"\r\n\t\t\t\t\t\t\t data-toggle=\"tab\">Overview</a>\r\n\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t<li role=\"presentation\" *ngIf=\"value.is_genre\">\r\n\t\t\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"dynamicContent(childindex,parentindex,'episodes')\" aria-controls=\"episodes\" role=\"tab\" data-toggle=\"tab\">Episodes</a>\r\n\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t<li role=\"presentation\" *ngIf=\"value.is_genre || value.trailer_video\">\r\n\t\t\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"dynamicContent(childindex,parentindex,'trailers')\" aria-controls=\"trailers\" role=\"tab\" data-toggle=\"tab\">Trailers &amp; More</a>\r\n\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t<li role=\"presentation\">\r\n\t\t\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"dynamicContent(childindex,parentindex,'more-like')\" aria-controls=\"more-like\" role=\"tab\"\r\n\t\t\t\t\t\t\t data-toggle=\"tab\">More Like This</a>\r\n\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t<li role=\"presentation\">\r\n\t\t\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"dynamicContent(childindex,parentindex,'details')\" aria-controls=\"details\" role=\"tab\" data-toggle=\"tab\">Details</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"clearfix\"></div>\r\n\r\n\t\t<div id=\"data_loader\" style=\"margin-top: 5px;text-align: center;display: none\">\r\n\t\t\t<img src=\"assets/img/ellipsis.svg\" style=\"width: 40px;\">\r\n\t\t</div>\r\n\r\n\t</div>"

/***/ }),

/***/ "./src/app/components/detail-page/detail-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/detail-page/detail-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: DetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageComponent", function() { return DetailPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





var DetailPageComponent = /** @class */ (function () {
    function DetailPageComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.sessionStorage = {};
        this.datas = [];
        this.geners = [];
        this.detailsFn = function (skip, take) {
            var _this = this;
            $("#data_loader").show();
            var data = new FormData;
            data.append('id', this.sessionStorage.user_id);
            data.append('token', this.sessionStorage.access_token);
            data.append('sub_profile_id', this.sessionStorage.sub_profile_id);
            data.append('key', this.title);
            data.append('skip', skip);
            data.append('take', take);
            if (this.id) {
                data.append('cate_id', this.id);
            }
            this.apiService.getDetails(data).subscribe(function (data) {
                if (data.success) {
                    console.log(data);
                    _this.geners = data.sub_category;
                    console.log(_this.geners);
                    var videos_all = [];
                    videos_all = data.data;
                    console.log(videos_all);
                    var videos_s = [];
                    var videos_item = [];
                    var count = 1;
                    videos_all[0] && videos_all[0].forEach(function (item) {
                        if (count % (this.show_count + 1) == 0) {
                            videos_s.push(videos_item);
                            videos_item = [];
                            videos_item.push(item);
                            count = 1;
                        }
                        else {
                            videos_item.push(item);
                        }
                        count++;
                    }, _this);
                    videos_s.push(videos_item);
                    if (Object.keys(data.data).length > 0) {
                        _this.title = data.title;
                        if (Object.keys(_this.datas).length > 0) {
                            _this.datas = $.merge(_this.datas, videos_s);
                            console.log('this is data!!!', _this.datas);
                        }
                        else {
                            _this.datas = videos_s;
                            console.log('this is le!!!', _this.datas);
                        }
                    }
                    $("#data_loader").hide();
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    _this.router.navigateByUrl('/');
                    return false;
                }
            });
        };
        this.addWishlist = function (id, index, key) {
            $("#my-list-txt_" + index + "_" + key).html('<a class="my-list bold"><i class="fa fa-check fa-stack-1x my-list-icon"></i><span class="my-list-txt">Adding</span></a>');
            this.apiService.AddWishList({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: id, sub_profile_id: this.sessionStorage.sub_profile_id })
                .subscribe(function (data) {
                if (data.success) {
                    setTimeout(function () {
                        $("#my-list-txt_" + index + "_" + key).html('<a (click)="removeWishlist(' + data.wishlist_id + ', ' + id + ', ' + index + ', ' + "'" + key + "'" + ')" class="my-list bold" id="remove-my-list-txt" style="cursor: pointer;">' +
                            '<i class="fa fa-check my-list-icon"></i>' +
                            '<span class="my-list-txt">My List</span>' +
                            '</a>');
                    }, 2000);
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        };
        this.closeDiv = function (index, key) {
            $("#" + index + "_" + key + "_video_drop").fadeOut();
            $('#' + index + "_" + key + "_img").removeClass('active_img');
            $('#' + index + "_" + key + "_desc").show();
            $('#' + index + "_" + key + "_div").removeClass('play_icon_div');
        };
        this.removeWishlist = function (id, admin_video_id, index, key) {
            $("#my-list-txt_" + index + "_" + key).html('<a class="my-list bold"><i class="fa fa-plus fa-stack-1x fa-inverse padding2"></i><span class="my-list-txt">Removing</span></a>');
            this.apiService.deleteWishlist({ id: this.sessionStorage.user_id, token: this.access_token, wishlist_id: admin_video_id, sub_profile_id: this.sessionStorage.sub_profile_id })
                .subscribe(function (data) {
                if (data.success) {
                    console.log('deleteWishlist', data);
                    setTimeout(function () {
                        $("#my-list-txt_" + index + "_" + key).html('<a (click)="addWishlist(' + admin_video_id + ', ' + index + ', ' + "'" + key + "'" + ')" class="my-list bold" style="cursor: pointer;">' +
                            '<i class="fa fa-plus my-list-icon"></i>' +
                            '<span class="my-list-txt">My List</span>' +
                            '</a>');
                    }, 2000);
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        };
        this.likeVideo = function (admin_video_id, index, key) {
            $("#like_" + index + "_" + key).addClass('disabled_class');
            this.apiService.likeVideo({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sessionStorage.sub_profile_id })
                .subscribe(function (data) {
                $("#like_" + index + "_" + key).removeClass('disabled_class');
                if (data.success) {
                    $("#like_count_" + index + "_" + key).html(data.like_count);
                    $("#dis_like_count_" + index + "_" + key).html(data.dislike_count);
                    // setTimeout(function(){
                    if (data.delete) {
                        // UIkit.notify({message : "We are very sorry you removed the video from like", timeout : 3000, pos : 'top-center', status : 'success'});
                        $("#dis_like_" + index + "_" + key).show();
                        $("#dis_like_" + index + "_" + key).removeClass('ng-hide');
                        $("#dis_like_" + index + "_" + key).css('display', 'inline !important');
                    }
                    else {
                        // UIkit.notify({message : "I'm glad you liked the video", timeout : 3000, pos : 'top-center', status : 'success'});
                        $("#dis_like_" + index + "_" + key).fadeOut(500);
                    }
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        };
        this.dislikeVideo = function (admin_video_id, index, key) {
            $("#dis_like_" + index + "_" + key).addClass('disabled_class');
            this.apiService.dislikeVideo({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sessionStorage.sub_profile_id })
                .subscribe(function (data) {
                $("#dis_like_" + index + "_" + key).removeClass('disabled_class');
                if (data.success) {
                    $("#like_count_" + index + "_" + key).html(data.like_count);
                    $("#dis_like_count_" + index + "_" + key).html(data.dislike_count);
                    // setTimeout(function(){
                    if (data.delete) {
                        // UIkit.notify({message : "I'm glad you removed the video from dislike", timeout : 3000, pos : 'top-center', status : 'success'});
                        $("#like_" + index + "_" + key).show(500);
                        $("#like_" + index + "_" + key).removeClass('ng-hide');
                        $("#like_" + index + "_" + key).css('display', 'inline !important');
                    }
                    else {
                        // UIkit.notify({message : "You disliked the video", timeout : 3000, pos : 'top-center', status : 'warning'});
                        $("#like_" + index + "_" + key).fadeOut(500);
                    }
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        };
        this.spamVideo = function (admin_video_id, index, key) {
            if (confirm('Are you sure want to spam the video ?')) {
                var reason = $('input[name=reason]:checked').val();
                this.apiService.AddSpam({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sessionStorage.sub_profile_id, reason: reason })
                    .subscribe(function (data) {
                    if (data.success) {
                        UIkit.notify({ message: "You have marked the video as spam, the video won't appear anywhere except spam videos section", timeout: 3000, pos: 'top-center', status: 'success' });
                        window.location.reload();
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 5000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                });
            }
        };
        this.showVideoDrop = function (event, idx, key) {
            $("#" + idx + "_" + key + "_video_drop").show();
            $('#' + idx + "_" + key).removeClass('transition-class');
            $('#' + idx + "_" + key + "_img").addClass('active_img');
            $('#' + idx + "_" + key + "_desc").hide();
            $('#' + idx + "_" + key + "_div").addClass('play_icon_div');
        };
        this.hoverIn = function (event, id, key, length) {
            //$(".video-drop").hide();
            var video_drop = $(".video-drop").is(":visible");
            if (!video_drop) {
                $('#' + id + "_" + key).addClass('transition-class');
                /*
                var n_w = $('#' + id + "_" + key).width();
                var added_w = n_w * 0.4 / 2;
                if($('#' + id + "_" + key).prev().length > 0){
                  $('#' + id + "_" + key).prev().css('margin-right', added_w + 'px');
                  $('#' + id + "_" + key).css('margin-left', '-' + added_w + 'px');
                }
                if($('#' + id + "_" + key).next().length > 0){
                  $('#' + id + "_" + key).next().css('margin-left', added_w + 'px');
                  $('#' + id + "_" + key).css('margin-right', added_w + 'px');
                }
                */
            }
            else {
                for (var i = 0; i < length; i++) {
                    $("#" + i + "_" + key + "_video_drop").hide();
                    $('#' + i + "_" + key + "_img").removeClass('active_img');
                    $('#' + i + "_" + key + "_desc").show();
                    $('#' + i + "_" + key + "_div").removeClass('play_icon_div');
                }
                $('#' + id + "_" + key + "_img").addClass('active_img');
                $("#" + id + "_" + key + "_video_drop").show();
                $('#' + id + "_" + key + "_desc").hide();
                $('#' + id + "_" + key + "_div").addClass('play_icon_div');
            }
        };
        this.hoverOut = function (event, id, key, length) {
            var video_drop = $(".video-drop").is(":visible");
            if (video_drop) {
                for (var i = 0; i < length; i++) {
                    $("#" + i + "_" + key + "_video_drop").hide();
                    $('#' + i + "_" + key + "_img").removeClass('active_img');
                    $('#' + i + "_" + key + "_desc").show();
                    $('#' + i + "_" + key + "_div").removeClass('play_icon_div');
                }
                $('#' + id + "_" + key + "_img").addClass('active_img');
                $("#" + id + "_" + key + "_video_drop").show();
                $('#' + id + "_" + key + "_desc").hide();
                $('#' + id + "_" + key + "_div").addClass('play_icon_div');
            }
            $('#' + id + "_" + key).removeClass('transition-class');
        };
        this.dynamicContent = function (index, key, id) {
            $("#" + index + "_" + key + "_overview").removeClass('active');
            $("#" + index + "_" + key + "_episodes").removeClass('active');
            $("#" + index + "_" + key + "_trailers").removeClass('active');
            $("#" + index + "_" + key + "_more-like").removeClass('active');
            $("#" + index + "_" + key + "_details").removeClass('active');
            if (id == "overview") {
                $("#" + index + "_" + key + "_overview").addClass('active');
            }
            else if (id == "episodes") {
                $("#" + index + "_" + key + "_episodes").addClass('active');
            }
            else if (id == "trailers") {
                $("#" + index + "_" + key + "_trailers").addClass('active');
            }
            else if (id == "more-like") {
                $("#" + index + "_" + key + "_more-like").addClass('active');
            }
            else {
                $("#" + index + "_" + key + "_details").addClass('active');
            }
            $(".episode-slider").not('.slick-initialized').slick({
                slidesToShow: this.epdisode_slide_to_show,
                slidesToScroll: this.epdisode_slide_to_scroll,
            });
            $(".episode-slider").slick('setPosition');
        };
        this.ShowGeners = function () {
            if (!$("#geners_menu").hasClass("active")) {
                $("#geners_menu").css('display', 'block');
                $("#geners_menu").addClass("active");
            }
            else {
                $("#geners_menu").css('display', 'none');
                $("#geners_menu").removeClass("active");
            }
        };
        this.getSeasons = function (genre_id, idx, key, divid, loader, main_id) {
            var _this = this;
            if (genre_id == '' || genre_id == undefined) {
                genre_id = main_id;
            }
            $("#" + idx + key + divid).html("");
            $("#" + idx + key + loader).show();
            this.apiService.GetGenreList({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, genre_id: genre_id, sub_profile_id: this.sessionStorage.sub_profile_id })
                .subscribe(function (data) {
                if (data.success) {
                    $("#" + idx + key + divid).html(data.data);
                    $(".episode-slider").not('.slick-initialized').slick({
                        slidesToShow: _this.epdisode_slide_to_show,
                        slidesToScroll: _this.epdisode_slide_to_scroll,
                    });
                    $(".episode-slider").slick('setPosition');
                    $('.slick-carousel-responsive').resize();
                }
                else {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        };
        this.loadMoreDetails = function () {
            var dataLength = Object.keys(this.datas).length;
            length = 0;
            for (var i = 0; i < dataLength; i++) {
                length += Object.keys(this.datas[i]).length;
            }
            var total = length;
            if (total == this.total) {
                return false;
            }
            this.total = total;
            console.log('total', total);
            this.detailsFn(total, 12);
        };
    }
    DetailPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.window_width = window.innerWidth;
        var show_count = 6;
        if (this.window_width > 1200) {
            this.media_height = {
                "height": Math.round((this.window_width - 200)) / 6 * 1.5 + "px"
            };
            show_count = 6;
        }
        if (this.window_width > 991 && this.window_width < 1200) {
            this.media_height = {
                "height": Math.round((this.window_width - 200)) / 4 * 1.5 + "px"
            };
            show_count = 4;
        }
        if (this.window_width > 768 && this.window_width < 991) {
            this.media_height = {
                "height": Math.round((this.window_width - 150)) / 3 * 1.5 + "px"
            };
            show_count = 3;
        }
        if (this.window_width < 768) {
            this.media_height = {
                "height": Math.round((this.window_width - 100)) / 2 * 1.5 + "px"
            };
            show_count = 2;
        }
        $(window).bind('resize', function () {
            this.window_width = window.innerWidth;
            if (this.window_width > 1200) {
                this.media_height = {
                    "height": Math.round((this.window_width - 200)) / 6 * 1.5 + "px"
                };
                show_count = 6;
            }
            if (this.window_width > 991 && this.window_width < 1200) {
                this.media_height = {
                    "height": Math.round((this.window_width - 250)) / 4 * 1.5 + "px"
                };
                show_count = 4;
            }
            if (this.window_width > 768 && this.window_width < 991) {
                this.media_height = {
                    "height": Math.round((this.window_width - 200)) / 3 * 1.5 + "px"
                };
                show_count = 3;
            }
            if (this.window_width < 768) {
                this.media_height = {
                    "height": Math.round((this.window_width - 150)) / 2 * 1.5 + "px"
                };
                show_count = 2;
            }
            this.show_count = show_count;
            //	this.$apply();
        });
        if (this.window_width > 991) {
            this.epdisode_slide_to_show = 4;
            this.epdisode_slide_to_scroll = 4;
        }
        if (this.window_width > 767 && this.window_width < 992) {
            this.epdisode_slide_to_show = 3;
            this.epdisode_slide_to_scroll = 3;
        }
        if (this.window_width > 479 && this.window_width < 768) {
            this.epdisode_slide_to_show = 2;
            this.epdisode_slide_to_scroll = 2;
        }
        if (this.window_width < 480) {
            this.epdisode_slide_to_show = 1;
            this.epdisode_slide_to_scroll = 1;
        }
        this.slideConfig = {
            "slidesToShow": this.epdisode_slide_to_show,
            "slidesToScroll": this.epdisode_slide_to_scroll,
            // "nextArrow":"<div class='nav-btn next-slide'></div>",
            // "prevArrow":"<div class='nav-btn prev-slide'></div>",
            "dots": false,
            "infinite": true
        };
        this.user_id = (this.sessionStorage['user_id'] != undefined && this.sessionStorage['user_id'] != '') ? this.sessionStorage['user_id'] : '';
        this.access_token = (this.sessionStorage['access_token'] != undefined && this.sessionStorage['access_token'] != '') ? this.sessionStorage['access_token'] : '';
        if (this.user_id && this.access_token) {
            //	$anchorScroll();
            this.title = this.route.snapshot.paramMap['params'].title;
            console.log('parameter', this.title);
            this.id = this.route.snapshot.paramMap['params'].id;
            console.log('parameter', this.id);
            this.user_type = (this.sessionStorage['user_type'] == undefined || this.sessionStorage['user_type'] == 0) ? true : false;
            console.log(this.user_type);
            this.apiService.spamReasons().subscribe(function (data) {
                if (data.success) {
                    _this.spam_reasons = data.data;
                    console.log('spamReasons', _this.spam_reasons);
                }
                else {
                    return false;
                }
            });
            $(window).scroll(function () {
                if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                    console.log('ddddd' + $(window).height());
                    // ajax call get data from server and append to the div
                    setTimeout(function () {
                        $("#load_more_details").click();
                    }, 5000);
                    console.log('click number');
                }
            });
            $("#page_preloader").show();
            this.detailsFn(0, 12);
            $("#page_preloader").hide();
            console.log('this is data!!!', this.datas);
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    DetailPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-page',
            template: __webpack_require__(/*! ./detail-page.component.html */ "./src/app/components/detail-page/detail-page.component.html"),
            styles: [__webpack_require__(/*! ./detail-page.component.css */ "./src/app/components/detail-page/detail-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailPageComponent);
    return DetailPageComponent;
}());



/***/ }),

/***/ "./src/app/components/easy-video/easy-video.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/easy-video/easy-video.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#video01{\r\n    background-color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lYXN5LXZpZGVvL2Vhc3ktdmlkZW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWFzeS12aWRlby9lYXN5LXZpZGVvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdmlkZW8wMXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/easy-video/easy-video.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/easy-video/easy-video.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" style=\"position: relative; height: 750px;\">\n    <div class=\"back_button\" style=\"z-index: 9999; top: 25%\">\n        <a style=\"background: transparent;border: none; cursor: pointer;\" onclick=\"javascript:history.go(-1)\" >\n            <i class=\"fa fa-arrow-circle-o-left\" title=\"Back To Home\"></i>\n        </a>\n        <button class=\"btn btn-success\" type=\"button\" (click)=\"openPopup(id, 960, 550)\" style=\"width: 250px; margin-left: 5%\">play</button>\n    </div>\n    <div style=\"width: 90% !important;margin: 0 auto;\">\n        <!-- <fwd *ngIf = \"videoFetched\" parentId=\"video01\" [opts] = \"opts\"></fwd> -->\n        <!-- <img src=\"{{videoData.video?.default_image}}\" /> -->\n    </div>\n    <div class=\"embed-link\">\n        <div class=\"embed_icon\">\n            <div class=\"modal fade embed-top\" id=\"embed-popup\" role=\"dialog\">\n                <div class=\"modal-dialog\">\n                    <div class=\"modal-content embed-bg\" style=\"background-image: url(img/img7.jpg);\">\n                        <div class=\"embed-overlay\">\n                            <div class=\"modal-header\">\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                <h4 class=\"modal-title\">Video Name</h4>\n                            </div>\n                            <div class=\"modal-body\">\n                                <textarea type=\"text\" row=\"\" name=\"embed_link\" [(ngModel)]=\"embed_link\" class=\"form-control\" id=\"embed_link\"></textarea>\n                            </div>\n                            <div class=\"modal-footer\">\n                                <div class=\"text-right\">\n                                    <button type=\"button\" class=\"payment-submit\" title=\"Copy Link\" (click)=\"copyFromTextBox()\">Copy</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/easy-video/easy-video.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/easy-video/easy-video.component.ts ***!
  \***************************************************************/
/*! exports provided: EasyVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasyVideoComponent", function() { return EasyVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_router_ext_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/router-ext.service */ "./src/app/services/router-ext.service.ts");
/* harmony import */ var src_app_app_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app-global */ "./src/app/app-global.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");









var EasyVideoComponent = /** @class */ (function () {
    function EasyVideoComponent(apiService, router, route, RouterExtService, titleService) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.RouterExtService = RouterExtService;
        this.titleService = titleService;
        this.videoFetched = false;
        this.videoData = {};
        this.title = "FWD";
        this.opts = {
            instanceName: 'first-video',
            mainFolderPath: "/assets/fwd-content",
            skinPath: "minimal_skin_dark",
            initializeOnlyWhenVisible: "no",
            displayType: "responsive",
            autoScale: "yes",
            fillEntireVideoScreen: "no",
            openDownloadLinkOnMobile: "no",
            useHEXColorsForSkin: "no",
            normalHEXButtonsColor: "#FF0000",
            selectedHEXButtonsColor: "#FFFFFF",
            privateVideoPassword: "428c841430ea18a70f7b06525d4b748a",
            startAtTime: "",
            stopAtTime: "",
            startAtVideoSource: 2,
            videoSource: [],
            posterPath: "/assets/fwd-content/posters/360.jpg",
            showErrorInfo: "yes",
            fillEntireScreenWithPoster: "yes",
            rightClickContextMenu: "default",
            disableDoubleClickFullscreen: "no",
            useChromeless: "no",
            showPreloader: "yes",
            addKeyboardSupport: "yes",
            autoPlay: "yes",
            loop: "no",
            maxWidth: 2500,
            maxHeight: 1500,
            volume: .8,
            greenScreenTolerance: 200,
            backgroundColor: "#000000",
            posterBackgroundColor: "#0099FF",
            //logo settings
            showLogo: "yes",
            hideLogoWithController: "yes",
            logoPosition: "topRight",
            logoLink: "http://www.webdesign-flash.ro",
            logoMargins: 5,
            //controller settings
            showController: "yes",
            showControllerWhenVideoIsStopped: "yes",
            showVolumeScrubber: "yes",
            showVolumeButton: "yes",
            showTime: "yes",
            showQualityButton: "yes",
            showShareButton: "yes",
            showEmbedButton: "yes",
            showDownloadButton: "yes",
            showFullScreenButton: "yes",
            repeatBackground: "yes",
            controllerHeight: 41,
            controllerHideDelay: 3,
            startSpaceBetweenButtons: 7,
            spaceBetweenButtons: 9,
            mainScrubberOffestTop: 14,
            scrubbersOffsetWidth: 4,
            timeOffsetLeftWidth: 5,
            timeOffsetRightWidth: 3,
            volumeScrubberWidth: 80,
            volumeScrubberOffsetRightWidth: 0,
            timeColor: "#888888",
            youtubeQualityButtonNormalColor: "#888888",
            youtubeQualityButtonSelectedColor: "#FFFFFF",
            //cuepoints
            executeCuepointsOnlyOnce: "no",
            //subtitles
            showSubtitleButton: "yes",
            subtitlesOffLabel: "Subtitle off",
            startAtSubtitle: 1,
            //audio visualizer
            audioVisualizerLinesColor: "#0099FF",
            audioVisualizerCircleColor: "#FFFFFF",
            //advertisement on pause window
            aopwTitle: "Advertisement",
            aopwSource: "",
            aopwWidth: 400,
            aopwHeight: 240,
            aopwBorderSize: 6,
            aopwTitleColor: "#FFFFFF",
            //playback rate / speed
            showPlaybackRateButton: "no",
            defaultPlaybackRate: "1",
            //embed window
            embedWindowCloseButtonMargins: 0,
            borderColor: "#333333",
            mainLabelsColor: "#FFFFFF",
            secondaryLabelsColor: "#a1a1a1",
            shareAndEmbedTextColor: "#5a5a5a",
            inputBackgroundColor: "#000000",
            inputColor: "#FFFFFF"
        };
        this.redirect = function () {
            $("html>div").remove();
            // window.location.replace('/video');
            this.router.navigateByUrl('/');
            location.reload();
        };
        this.openPopup = function (htmlPage, width, height) {
            // var left = parseInt(((window.innerWidth) - width)/2);
            // var top =  parseInt(((window.innerHeight) - height)/2);
            window.open(htmlPage, "", 'width=' + '1000px' + ', height=' + '650px' + ', top=' + '300px' + ', left=' + '700px');
        };
        this.titleService.setTitle("Flashington | Videos");
    }
    EasyVideoComponent.prototype.addVideoSource = function (videoLink) {
        this.opts.videoSource.push({ source: videoLink, label: "small version", is360: "yes" });
        this.videoFetched = true;
    };
    EasyVideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(window.history.back());
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.site_settings = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].settings;
        this.user_id = (this.sessionStorage['user_id'] != '' && this.sessionStorage['user_id'] != undefined) ? this.sessionStorage['user_id'] : false;
        this.access_token = (this.sessionStorage['access_token'] != undefined && this.sessionStorage['access_token'] != '') ? this.sessionStorage['access_token'] : '';
        if (this.user_id && this.access_token) {
            this.sub_profile_id = this.sessionStorage['sub_profile_id'];
            this.user_type = (this.sessionStorage['user_type'] == undefined || this.sessionStorage['user_type'] == 0) ? true : false;
            this.height = $(window).height();
            this.page_not_changed = true;
            var id = this.route.snapshot.paramMap['params'].id;
            this.id = 'https://flashington.com/popupVideo/' + id;
            this.apiService.getSingleVideo({ id: this.user_id, token: this.access_token, device_type: 'web', admin_video_id: id })
                .subscribe(function (data) {
                if (data.success) {
                    _this.videoData = data;
                    console.log(_this.videoData);
                    _this.embed_link = src_app_app_global__WEBPACK_IMPORTED_MODULE_6__["AppGlobal"].apiBase + "embed?v_t=2&u_id=" + data.video.unique_id;
                    _this.sessionStorage['saved_subscription_video_id'] = "";
                    localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
                    if (_this.videoData['pay_per_view_status']) {
                    }
                    else {
                        _this.page_not_changed = false;
                        _this.sessionStorage['saved_subscription_video_id'] = _this.route.snapshot.paramMap['params'].id;
                        localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
                        _this.router.navigateByUrl('pay_per_viedw/' + _this.videoData['video'].admin_video_id);
                    }
                    if (_this.videoData['pay_per_view_status'] && _this.videoData['video'].amount <= 0) {
                        if (_this.user_type) {
                            _this.page_not_changed = false;
                            _this.sessionStorage.saved_subscription_video_id = _this.route.snapshot.paramMap['params'].id;
                            localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
                            _this.router.navigateByUrl('/subscriptions/' + _this.sessionStorage.sub_profile_id);
                        }
                    }
                    if (_this.page_not_changed) {
                        _this.sessionStorage.continous_watch_video_id = _this.route.snapshot.paramMap['params'].id;
                        _this.sessionStorage.continous_sub_profile_id = _this.sessionStorage.sub_profile_id;
                        localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
                        _this.player_ins = "ins_" + _this.videoData['video'].admin_video_id;
                        _this.source = _this.videoData['video'].video;
                        _this.addVideoSource(_this.source);
                        $("html>div").css("z-index", 1000);
                    }
                    ;
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    EasyVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-easy-video',
            template: __webpack_require__(/*! ./easy-video.component.html */ "./src/app/components/easy-video/easy-video.component.html"),
            styles: [__webpack_require__(/*! ./easy-video.component.css */ "./src/app/components/easy-video/easy-video.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_router_ext_service__WEBPACK_IMPORTED_MODULE_5__["RouterExtService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]])
    ], EasyVideoComponent);
    return EasyVideoComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-account/edit-account.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/edit-account/edit-account.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1hY2NvdW50L2VkaXQtYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/edit-account/edit-account.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-account/edit-account.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main-content form-content bg-img\" style=\"background-image:url({{login_bg}})\"> -->\n    <div class=\"main-content\">\n\n        <!-- LOGIN FORM \n        ===================================================-->\n        <div class=\"login-form\" style=\"padding-top: 100px;padding-bottom: 40px;\">\n          <div class=\"container\">\n            <div class=\"login-form-inner grey-bg\">\t\n              <h3 class=\"login-tit\">Edit Profile</h3>\n              <form method=\"post\" (ngSubmit)=\"editProfile()\">\n                <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">Full Name</label>\n                    <input type=\"name\" class=\"form-control\" placeholder=\"Enter Your Name\" required [ngModel]=\"profile?.name\" name=\"name\" (ngModelChange)=\"onInputNameUpdate($event)\">\n                   \n                </div>\n      \n                <div class=\"form-group\" *ngIf=\"profile?.login_by == 'manual'\">\n                    <label for=\"exampleInputEmail1\">Email address</label>\n                    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\" required [ngModel]=\"profile?.email\" name=\"email\" (ngModelChange)=\"onInputEmailUpdate($event)\">\n                </div>\n      \n                <div class=\"form-group\">\n                    <label>Mobile Number</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Mobile Number\" required [ngModel]=\"profile?.mobile\" pattern=\"[0-9]{0,}\" maxlength=\"11\" name=\"mobile\" (ngModelChange)=\"onInputMobileUpdate($event)\">\n                </div>\n      \n      \n                <div>\n                  <button type=\"submit\" class=\"btn btn-primary form-btn\">Save</button>\n                </div>\n      \n                \n              </form>\n            </div>\t\t\t\t\t\n          </div>\n        </div>"

/***/ }),

/***/ "./src/app/components/edit-account/edit-account.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-account/edit-account.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountComponent", function() { return EditAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");






var EditAccountComponent = /** @class */ (function () {
    function EditAccountComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.editProfile = function () {
            var _this = this;
            $("#before_loader").fadeIn();
            console.log(this.user_id, this.access_token, this.profile);
            this.apiService.UpdateProfile({ id: this.user_id, token: this.access_token, email: this.profile.email, name: this.profile.name, mobile: this.profile.mobile, device_token: '123456' })
                .subscribe(function (data) {
                if (data.success) {
                    UIkit.notify({ message: "Your account has been successfully updated", timeout: 3000, pos: 'top-center', status: 'success' });
                    _this.router.navigateByUrl('/account-setting/' + _this.sessionStorage.sub_profile_id);
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        };
        this.onInputNameUpdate = function (input) {
            this.profile.name = input;
            console.log(input);
        };
        this.onInputEmailUpdate = function (input) {
            this.profile.email = input;
            console.log(input);
        };
        this.onInputMobileUpdate = function (input) {
            this.profile.mobile = input;
            console.log(input);
        };
    }
    EditAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.site_settings = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].settings;
        this.user_id = (this.sessionStorage.user_id != '' && this.sessionStorage.user_id != undefined) ? this.sessionStorage.user_id : false;
        this.access_token = (this.sessionStorage.access_token != undefined && this.sessionStorage.access_token != '') ? this.sessionStorage.access_token : '';
        if (this.user_id && this.access_token) {
            var login_bg = $.grep(this.site_settings, function (e) { return e.key == 'common_bg_image'; });
            var bg_image = "";
            if (login_bg.length == 0) {
                console.log('not found');
            }
            else if (login_bg.length == 1) {
                bg_image = login_bg[0].value;
                if (bg_image != '' || bg_image != null || bg_image != undefined) { }
                else {
                    bg_image = '';
                }
            }
            else {
                bg_image = "";
            }
            this.login_bg = bg_image;
            $("#before_loader").show();
            this.apiService.getUserDetail({ id: this.user_id, token: this.access_token })
                .subscribe(function (data) {
                if (data.success) {
                    _this.profile = data;
                    $("#before_loader").hide();
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    EditAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-account',
            template: __webpack_require__(/*! ./edit-account.component.html */ "./src/app/components/edit-account/edit-account.component.html"),
            styles: [__webpack_require__(/*! ./edit-account.component.css */ "./src/app/components/edit-account/edit-account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EditAccountComponent);
    return EditAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/genre-video/genre-video.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/genre-video/genre-video.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2VucmUtdmlkZW8vZ2VucmUtdmlkZW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/genre-video/genre-video.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/genre-video/genre-video.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  genre-video works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/genre-video/genre-video.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/genre-video/genre-video.component.ts ***!
  \*****************************************************************/
/*! exports provided: GenreVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreVideoComponent", function() { return GenreVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_app_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app-global */ "./src/app/app-global.ts");







var GenreVideoComponent = /** @class */ (function () {
    function GenreVideoComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.videoFetched = false;
        this.videoData = {};
        this.title = "FWD";
        this.opts = {
            instanceName: 'first-video',
            mainFolderPath: "/assets/fwd-content",
            skinPath: "minimal_skin_dark",
            initializeOnlyWhenVisible: "no",
            displayType: "responsive",
            autoScale: "yes",
            fillEntireVideoScreen: "no",
            openDownloadLinkOnMobile: "no",
            useHEXColorsForSkin: "no",
            normalHEXButtonsColor: "#FF0000",
            selectedHEXButtonsColor: "#FFFFFF",
            privateVideoPassword: "428c841430ea18a70f7b06525d4b748a",
            startAtTime: "",
            stopAtTime: "",
            startAtVideoSource: 2,
            videoSource: [],
            posterPath: "/assets/fwd-content/posters/360.jpg",
            showErrorInfo: "yes",
            fillEntireScreenWithPoster: "yes",
            rightClickContextMenu: "default",
            disableDoubleClickFullscreen: "no",
            useChromeless: "no",
            showPreloader: "yes",
            addKeyboardSupport: "yes",
            autoPlay: "no",
            loop: "no",
            maxWidth: 2500,
            maxHeight: 1500,
            volume: .8,
            greenScreenTolerance: 200,
            backgroundColor: "#000000",
            posterBackgroundColor: "#0099FF",
            //logo settings
            showLogo: "yes",
            hideLogoWithController: "yes",
            logoPosition: "topRight",
            logoLink: "http://www.webdesign-flash.ro",
            logoMargins: 5,
            //controller settings
            showController: "yes",
            showControllerWhenVideoIsStopped: "yes",
            showVolumeScrubber: "yes",
            showVolumeButton: "yes",
            showTime: "yes",
            showQualityButton: "yes",
            showShareButton: "yes",
            showEmbedButton: "yes",
            showDownloadButton: "yes",
            showFullScreenButton: "yes",
            repeatBackground: "yes",
            controllerHeight: 41,
            controllerHideDelay: 3,
            startSpaceBetweenButtons: 7,
            spaceBetweenButtons: 9,
            mainScrubberOffestTop: 14,
            scrubbersOffsetWidth: 4,
            timeOffsetLeftWidth: 5,
            timeOffsetRightWidth: 3,
            volumeScrubberWidth: 80,
            volumeScrubberOffsetRightWidth: 0,
            timeColor: "#888888",
            youtubeQualityButtonNormalColor: "#888888",
            youtubeQualityButtonSelectedColor: "#FFFFFF",
            //cuepoints
            executeCuepointsOnlyOnce: "no",
            //subtitles
            showSubtitleButton: "yes",
            subtitlesOffLabel: "Subtitle off",
            startAtSubtitle: 1,
            //audio visualizer
            audioVisualizerLinesColor: "#0099FF",
            audioVisualizerCircleColor: "#FFFFFF",
            //advertisement on pause window
            aopwTitle: "Advertisement",
            aopwSource: "",
            aopwWidth: 400,
            aopwHeight: 240,
            aopwBorderSize: 6,
            aopwTitleColor: "#FFFFFF",
            //playback rate / speed
            showPlaybackRateButton: "no",
            defaultPlaybackRate: "1",
            //embed window
            embedWindowCloseButtonMargins: 0,
            borderColor: "#333333",
            mainLabelsColor: "#FFFFFF",
            secondaryLabelsColor: "#a1a1a1",
            shareAndEmbedTextColor: "#5a5a5a",
            inputBackgroundColor: "#000000",
            inputColor: "#FFFFFF"
        };
    }
    GenreVideoComponent.prototype.addVideoSource = function (videoLink) {
        this.opts.videoSource.push({ source: videoLink, label: "small version", is360: "yes" });
        this.videoFetched = true;
    };
    GenreVideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.site_settings = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].settings;
        this.user_id = (this.sessionStorage['user_id'] != '' && this.sessionStorage['user_id'] != undefined) ? this.sessionStorage['user_id'] : false;
        this.access_token = (this.sessionStorage['access_token'] != undefined && this.sessionStorage['access_token'] != '') ? this.sessionStorage['access_token'] : '';
        if (this.user_id && this.access_token) {
            this.video = '';
            this.displayPopup = false;
            this.ios_video = '';
            this.sub_profile_id = this.sessionStorage.sub_profile_id;
            this.height = $(window).height();
            this.user_type = (this.sessionStorage.user_type == undefined || this.sessionStorage.user_type == 0) ? true : false;
            var id = this.route.snapshot.paramMap['params'].id;
            this.apiService.GenreVideo({ id: this.user_id, token: this.access_token, genre_id: id })
                .subscribe(function (data) {
                if (data.success) {
                    _this.video = data.model;
                    _this.embed_link = src_app_app_global__WEBPACK_IMPORTED_MODULE_5__["AppGlobal"].apiBase + "g_embed?u_id=" + data.model.unique_id;
                    _this.ios_video = data.ios_video;
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
            var JWPLAYER_KEY = $.grep(this.site_settings, function (e) { return e.key == 'JWPLAYER_KEY'; });
            var jwplayer_key = "";
            if (JWPLAYER_KEY.length == 0) {
                console.log("not found");
            }
            else if (JWPLAYER_KEY.length == 1) {
                jwplayer_key = JWPLAYER_KEY[0].value;
                if (jwplayer_key != '' || jwplayer_key != null || jwplayer_key != undefined) {
                }
                else {
                    jwplayer_key = '';
                }
            }
            else {
                jwplayer_key = "";
            }
            //  jwplayer.key = jwplayer_key;
            if (jwplayer_key == "") {
                UIkit.notify({ message: "Configure JWPLAYER KEY, Please Contact Admin", timeout: 3000, pos: 'top-center', status: 'danger' });
                return false;
            }
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    GenreVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-genre-video',
            template: __webpack_require__(/*! ./genre-video.component.html */ "./src/app/components/genre-video/genre-video.component.html"),
            styles: [__webpack_require__(/*! ./genre-video.component.css */ "./src/app/components/genre-video/genre-video.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], GenreVideoComponent);
    return GenreVideoComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .box-head h3{\r\n    color: #e5e5e5;\r\n    font-weight: 700;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin: 0;\r\n}\r\n.tile-img {\r\n    max-height: 420px;\r\n    -o-object-fit: fill;\r\n       object-fit: fill;\r\n    height: 420px;\r\n}\r\n.tile-media {\r\n    border: 2px solid #141414;\r\n    height: auto !important;\r\n    text-align: center;\r\n}\r\n.slick-initialized .slick-slide {\r\n    display: inline-block !important;\r\n    height: 100% !important;\r\n    padding: 0;\r\n}\r\n.tab-overlay {\r\n    background: rgba(0, 0, 0, .90);\r\n}\r\n.slick-slider {\r\n  width: 90%;\r\n  margin: 0 auto !important;\r\n  /* background: #000; */\r\n\r\n}\r\n.slick-track {\r\n    margin: 0 auto !important;\r\n}\r\n.nav-btn {\r\n  height: 47px;\r\n  position: absolute;\r\n  width: 26px;\r\n  cursor: pointer;\r\n  top: 100px !important;\r\n}\r\n.prev-slide.slick-disabled,\r\n.next-slide.slick-disabled {\r\n  pointer-events: none;\r\n  opacity: 0.2;\r\n}\r\n.prev-slide:hover {\r\n  background-position: 0px -53px;\r\n}\r\n.next-slide:hover {\r\n  background-position: -24px -53px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztJQUNHLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBZ0I7T0FBaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBRUM7SUFDRyxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBRUM7RUFDQyxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHNCQUFzQjs7QUFFeEI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QjtBQUVBOztFQUVFLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7QUFHQTtFQUNFLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuYm94LWhlYWQgaDN7XHJcbiAgICBjb2xvcjogI2U1ZTVlNTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLnRpbGUtaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDQyMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogZmlsbDtcclxuICAgIGhlaWdodDogNDIwcHg7XHJcbn1cclxuXHJcbi50aWxlLW1lZGlhIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxNDE0MTQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIC5zbGljay1pbml0aWFsaXplZCAuc2xpY2stc2xpZGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi50YWItb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC45MCk7XHJcbn0gXHJcblxyXG4gLnNsaWNrLXNsaWRlciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gIC8qIGJhY2tncm91bmQ6ICMwMDA7ICovXHJcblxyXG59IFxyXG5cclxuLnNsaWNrLXRyYWNrIHtcclxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuIFxyXG4ubmF2LWJ0biB7XHJcbiAgaGVpZ2h0OiA0N3B4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdG9wOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiBcclxuLnByZXYtc2xpZGUuc2xpY2stZGlzYWJsZWQsXHJcbi5uZXh0LXNsaWRlLnNsaWNrLWRpc2FibGVkIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBvcGFjaXR5OiAwLjI7XHJcbn1cclxuIFxyXG4gXHJcbi5wcmV2LXNsaWRlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTUzcHg7XHJcbn1cclxuIFxyXG4ubmV4dC1zbGlkZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0cHggLTUzcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n\t<!-- HIGHLIGHT -->\n\t<div class=\"highlight\">\n\t\t<div class=\"tab-content\">\n\t\t\t<!-- OVERVIEW Banner SECTION  -->\n\t\t\t<div role=\"tabpanel\" class=\"tab-pane active\" id=\"overview\">\n\t\t\t\t<div class=\"overview tab-section relative\">\n\n\t\t\t\t\t<div class=\"tab-section-content row no-margin\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-5 no-pad overview-details\">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<!-- Modal -->\n\t\t\t\t\t\t<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n\t\t\t\t\t\t\t<div class=\"modal-dialog\">\n\t\t\t\t\t\t\t\t<!-- Modal content-->\n\t\t\t\t\t\t\t\t<div class=\"modal-content\" style=\"background-color: #333;\">\n\t\t\t\t\t\t\t\t\t<div class=\"modal-header spam\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"modal-title bold\">Report This Video</h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t<form (ngSubmit)=\"spamVideo(recent_video.admin_video_id, recent_video.admin_video_id, 989)\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"radio radio-danger\" *ngFor=\"let spam_reason of spam_reasons; let spamindex = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"reason\" id=\"reason_{{spamindex}}_{{recent_video.admin_video_id}}_989\" value=\"{{spam_reason.value}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"reason_{{spamindex}}_{{recent_video.admin_video_id}}_989\">\n\t\t\t\t\t\t\t                        {{spam_reason.value}}\n\t\t\t\t\t\t\t                    </label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t{{spam_reason_value}}\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"small bold text-center\">If you report this video, you won't see again the same video in anywhere in your account except \"Spam Videos\".\n\t\t\t\t\t\t\t\t\t\t\t\tIf you want to continue to report this video as same. Click continue and proceed the same.</p>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"payment-submit\">Submit</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7 no-pad\">\n\t\t\t\t\t\t\t<div class=\"linear-outer\">\n\t\t\t\t\t\t\t\t<div class=\"linear\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"rotate-img-outer\">\n\t\t\t\t\t\t\t\t\t<div class=\"rotate-img highlight-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + recent_video.default_image + ')'}\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"play-icon-outer\">\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"recent_video.pay_per_view_status\">\n\t\t\t    \t\t\t\t\t\t<a href=\"/video/{{recent_video.admin_video_id}}\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t    \t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"!recent_video.pay_per_view_status\">\n\t\t\t    \t\t\t\t\t\t<a href=\"/payment-option/{{recent_video.admin_video_id}}\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t    \t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"home-new-deatils\">\n\t\t\t\t\t\t<div class=\"overview-details\" style=\"background-color: unset;\">\n\t\t\t\t\t\t\t<h3 class=\"content-tit\"></h3>\n\t\t\t\t\t\t\t<div class=\"row no-margin hidden-xs\">\n\t\t\t\t\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (recent_video.ratings < 1), 'glyphicon-star' : (recent_video.ratings >= 1)}\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (recent_video.ratings < 2), 'glyphicon-star' : (recent_video.ratings >= 2)}\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (recent_video.ratings < 3), 'glyphicon-star' : (recent_video.ratings >= 3)}\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (recent_video.ratings < 4), 'glyphicon-star' : (recent_video.ratings >= 4)}\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (recent_video.ratings < 5), 'glyphicon-star' : (recent_video.ratings >= 5)}\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\n\t\t\t\t\t\t\t\t\t<span class=\"green-clr\">{{recent_video.release_date && recent_video.release_date !=\"0000-00-00\" ? recent_video.release_date:'' }}</span>\n\t\t\t\t\t\t\t\t\t<span class=\"epi-count\">{{recent_video.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{recent_video.watch_count}}</span>\n\t\t\t\t\t\t\t\t\t<span>{{recent_video.duration}}</span>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t\t\t\t\t<a class=\"white-icon\">\n\t\t    \t\t\t\t\t\t\t<i class=\"fa fa-thumbs-up\"></i><span id=\"like_count_{{recent_video.admin_video_id}}_989\">{{recent_video.like_count}}</span>\n\t\t    \t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a class=\"white-icon\">\n\t\t    \t\t\t\t\t\t\t<i class=\"fa fa-thumbs-down\"></i><span id=\"dis_like_count_{{recent_video.admin_video_id}}_989\">{{recent_video.dis_like_count}}</span>\n\t\t    \t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t\t\t\t\t<div class=\"display_amount\" *ngIf=\"recent_video.amount > 0 && !recent_video.pay_per_view_status\" style=\"margin-left: 5px;\">\n\t\t\t\t\t\t\t\t\t\t<span>PAY - ${{recent_video.amount}}</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<p class=\"content-txt overview-des\">{{recent_video.description}}\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div id=\"my-list-txt_{{recent_video.admin_video_id}}_989\" class=\"pull-left\">\n\t\t\t\t\t\t\t\t<a (click)=\"addWishlist(recent_video.admin_video_id, recent_video.admin_video_id, 989)\" class=\"bold\" id=\"\" *ngIf=\"!recent_video.wishlist_status\"\n\t\t\t\t\t\t\t\t style=\"cursor: pointer;\">\n\t    \t\t\t\t\t\t\t<button class=\"my-list\">\n\t\t    \t\t\t\t\t\t\t<i class=\"fa fa-plus my-list-icon\"></i>\n\t\t    \t\t\t\t\t\t\t<span class=\"my-list-txt\">My List</span>\n\t    \t\t\t\t\t\t\t</button> \n\t    \t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a (click)=\"removeWishlist(recent_video.wishlist_status, recent_video.admin_video_id,recent_video.admin_video_id, 989)\"\n\t\t\t\t\t\t\t\t class=\"bold\" *ngIf=\"recent_video.wishlist_status\" style=\"cursor: pointer;\">\n\t    \t\t\t\t\t\t\t<button class=\"my-list\">\n\t\t    \t\t\t\t\t\t\t<i class=\"fa fa-check my-list-icon\"></i>\n\t\t    \t\t\t\t\t\t\t<span class=\"my-list-txt\">My List</span> \n\t\t    \t\t\t\t\t\t</button>\n\t    \t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"banner-icon-sec hidden-xs\">\n\t\t\t\t\t\t\t\t<a id=\"like_{{recent_video.admin_video_id}}_989\" style=\"cursor: pointer;\" *ngIf=\"recent_video.is_liked == 1 || recent_video.is_liked == 0\"\n\t\t\t\t\t\t\t\t (click)=\"likeVideo(recent_video.admin_video_id, recent_video.admin_video_id, 989)\">\n\t    \t\t\t\t\t\t\t<button class=\"banner-icon\">\n\t    \t\t\t\t\t\t\t \t<i class=\"fa fa-thumbs-up\"></i>\n\t    \t\t\t\t\t\t\t</button>\n\t    \t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a id=\"dis_like_{{recent_video.admin_video_id}}_989\" style=\"cursor: pointer;\" *ngIf=\"recent_video.is_liked == -1 || recent_video.is_liked == 0\"\n\t\t\t\t\t\t\t\t (click)=\"dislikeVideo(recent_video.admin_video_id, recent_video.admin_video_id, 989)\">\n\t    \t\t\t\t\t\t\t<button class=\"banner-icon\">\n\t    \t\t\t\t\t\t\t\t<i class=\"fa fa-thumbs-down\"></i>\n\t    \t\t\t\t\t\t\t</button>\n\t    \t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a style=\"cursor: pointer;\" data-toggle=\"modal\" data-target=\"#myModal\" title=\"Report as Spam\">\n\t    \t\t\t\t\t\t\t<button class=\"banner-icon\">\n\t    \t\t\t\t\t\t\t\t<i class=\"fa fa-exclamation\"></i>\n\t    \t\t\t\t\t\t\t</button>\n\t    \t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- OVERVIEW Banner SECTION END -->\n\n\t\t\t<!-- EPISODES-SECTION\n\t\t\t======================================== -->\n\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"episodes\" *ngIf=\"recent_video.is_genre\">\n\t\t\t\t<div class=\"episodes-section tab-section tab-bg bg-img\"  [ngStyle]=\"{ 'background-image': 'url(' + recent_video.default_image + ')'}\">\n\t\t\t\t\t<div class=\"tab-overlay\">\n\n\t\t\t\t\t\t<div class=\"episodes-section-inner tab-section-content tab-sec-inner contain-width\">\n\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{recent_video.sub_category_name}}</h3>\n\t\t\t\t\t\t\t<form class=\"season-select\">\n\t\t\t\t\t\t\t\t<div class=\"form-group styled-select black rounde\">\n\t\t\t\t\t\t\t\t\t<!-- <select id=\"exampleSelect1\" ngModel=\"genres_name\" ngChange=\"getSeasons(genres_name, '','','seasons', 'data_loader_seasons', recent_video.genre_id);\">\n\t\t\t\t\t\t\t\t\t    <option value=\"\">Select Seasons</option>\n\t\t\t\t\t\t\t\t\t    <option value=\"{{genrename.genre_id}}\" *ngFor=\"let genrename of recent_video.genre_names\">\n\t\t\t\t\t\t\t\t\t    {{genrename.genre_name}}\n\t\t\t\t\t\t\t\t\t    </option>\n\t\t\t\t\t\t\t\t    </select> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\n\t\t\t\t\t\t\t<div class=\"episodes-list row no-margin\">\n\n\t\t\t\t\t\t\t\t<div id=\"data_loader_seasons\" style=\"margin-top: 10px;text-align: center;display: none\">\n\t\t\t\t\t\t\t\t\t<img src=\"assets/img/ellipsis.svg\" style=\"width: 40px;\">\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div id=\"seasons\" class=\"row\">\n\t\t\t\t\t\t\t\t\t<!-- episode list box -->\n\t\t\t\t\t\t\t\t\t<ngx-slick-carousel class=\"carousel\" \n\t\t\t\t\t\t\t\t\t\t#slickModal=\"slick-carousel\" \n\t\t\t\t\t\t\t\t\t\t[config]=\"slideConfig\" \n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div ngxSlickItem *ngFor=\"let genre_list of recent_video.first_part\" class=\"slide\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-box\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img bg-img\"  [ngStyle]=\"{ 'background-image': 'url(' + recent_video.default_image + ')'}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-inner\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"epi-count1\">{{genre_list.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{genre_list.watch_count}}</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"epi-play-icon-outer\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"genre_list.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<a href=\"/video/genre_list.admin_video_id\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!genre_list.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t\t<a href=\"/payment-option/{genre_list.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t\t\t\t\t\t\t    \t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"epi-tit gray-color1 txt-overflow\">{{genre_list.title}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 text-right hidden-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"bold epi-tit gray-color1 txt-overflow\">{{genre_list.duration}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt overview-des more-link mt-0\">{{genre_list.description}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ngx-slick-carousel>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- episode-list-box end -->\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- EPISODES-SECTION END-->\n\t\t\t\n\t\t\t<!-- TRAILERS SECTION -->\n\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"trailers\" *ngIf=\"recent_video.is_genre || recent_video.trailer_video\">\n\t\t\t\t<div class=\"trailers-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + recent_video.default_image + ')'}\">\n\t\t\t\t\t<div class=\"tab-overlay\">\n\n\t\t\t\t\t\t<div class=\"trailers-section-inner tab-section-content tab-sec-inner contain-width\">\n\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{recent_video.sub_category_name}}</h3>\n\n\t\t\t\t\t\t\t<div class=\"trailers-list row\">\n\n\t\t\t\t\t\t\t\t<!-- episode list box -->\n\t\t\t\t\t\t\t\t<!-- <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 top\" *ngFor=\"let trailer in recent_video.genres\" *ngIf=\"recent_video.is_genre\">\n\t\t\t\t\t\t\t\t\t<div class=\"episode-list-box\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + trailer.genre_image + ')'}\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-overlay\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"epi-play-icon-outer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"genre_video({id : trailer.genre_id})\" class=\"epi-play-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-content\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-margin\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"epi-tit gray-color1\">{{trailer.genre_name}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 top\" *ngIf=\"recent_video.trailer_video\">\n\t\t\t\t\t\t\t\t\t<div class=\"episode-list-box\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + recent_video.default_image + ')'}\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-overlay\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"epi-play-icon-outer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/trailer_video/{{recent_video.admin_video_id}}\" class=\"epi-play-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-content\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-margin\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"epi-tit gray-color1\">{{recent_video.title}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- TRAILERS SECTION END -->\n\n\t\t\t<!-- MORE LIKE SECTION  -->\n\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"more-like\">\n\t\t\t\t<div class=\"morelike-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + recent_video.default_image + ')'}\">\n\t\t\t\t\t<div class=\"tab-overlay\">\n\n\t\t\t\t\t\t<div class=\"morelike-section-inner tab-section-content tab-sec-inner contain-width\">\n\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{recent_video.sub_category_name}}</h3>\n\n\t\t\t\t\t\t\t<div class=\"morelike-list row\">\n\t\t\t\t\t\t\t\t<!-- episode list box -->\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 top\" *ngFor=\"let video of recent_video.sub_videos\">\n\t\t\t\t\t\t\t\t\t<div class=\"episode-list-box\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + recent_video.default_image + ')'}\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"new-epi\">{{video.title}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"epi-play-icon-outer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a href=\"single_video({id : video.admin_video_id})\" class=\"epi-play-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"video.pay_per_view_status\">\n\t\t\t\t\t\t\t    \t\t\t\t\t\t<a href=\"/video/{{video.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t\t\t\t\t    \t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!video.pay_per_view_status\">\n\t\t\t\t\t\t\t    \t\t\t\t\t\t<a href=\"/payment-option/{{video.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t\t\t\t\t    \t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"duration_more\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{video.duration}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-content\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-margin\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 1), 'glyphicon-star' : (video.ratings >= 1)}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 2), 'glyphicon-star' : (video.ratings >= 2)}\"></div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 3), 'glyphicon-star' : (video.ratings >= 3)}\"></div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 4), 'glyphicon-star' : (video.ratings >= 4)}\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 5), 'glyphicon-star' : (video.ratings >= 5)}\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"green-clr hidden-sm\">{{video.release_date  && video.release_date !=\"0000-00-00\" ? video.release_date:''}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"epi-count hidden-sm hidden-md\">{{video.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{video.watch_count}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span>{{video.duration}}</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt overview-des more-link\">{{video.description}}</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- episode-list-box end -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- MORE LIKE SECTION END -->\n\n\t\t\t<!-- DETAILS-SECTION -->\n\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"details\">\n\t\t\t\t<div class=\"details-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + recent_video.default_image + ')'}\">\n\t\t\t\t\t<div class=\"tab-overlay\">\n\n\t\t\t\t\t\t<div class=\"details-section-inner tab-section-content tab-sec-inner contain-width details_section_tab\">\n\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{recent_video.title}}</h3>\n\n\t\t\t\t\t\t\t<div class=\"row col-sm-12 col-sm-12 col-lg-12 col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"detailsItem detailsMedia col-md-2\">\n\t\t\t\t\t\t\t\t\t<h4>Directors</h4>\n\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let director of recent_video.directors\" class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"/director/{{director.id}}\">{{director.name}}</a></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<h4>Writers</h4>\n\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let writer of recent_video.writers\" class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"/writer/{{writer.id}}\">{{writer.name}}</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"detailsItem detailsMedia col-md-2\">\n\t\t\t\t\t\t\t\t\t<h4>Actors</h4>\n\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let actor of recent_video.actors\" class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"/actor/{{actor.id}}\">{{actor.name}}</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"detailsItem detailsMedia col-md-2\">\n\t\t\t\t\t\t\t\t\t<h4>Category</h4>\n\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t{{recent_video.sub_category_name}}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div class=\"clear-fix\"></div>\n\t\t\t\t\t\t\t\t\t<h4>Publish Date</h4>\n\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"green-clr hidden-sm\">{{recent_video.release_date  && recent_video.release_date !=\"0000-00-00\" ? recent_video.release_date:''}}</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<h4>Duration</h4>\n\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>{{recent_video.duration}}</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"detailsItem detailsMedia col-md-2\">\n\t\t\t\t\t\t\t\t\t<h4>Ratings</h4>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (recent_video.ratings < 1), 'glyphicon-star' : (recent_video.ratings >= 1)}\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (recent_video.ratings < 2), 'glyphicon-star' : (recent_video.ratings >= 2)}\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (recent_video.ratings < 3), 'glyphicon-star' : (recent_video.ratings >= 3)}\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (recent_video.ratings < 4), 'glyphicon-star' : (recent_video.ratings >= 4)}\"></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (recent_video.ratings < 5), 'glyphicon-star' : (recent_video.ratings >= 5)}\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<h4>Age</h4>\n\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\n\t\t\t\t\t\t\t\t\t\t\t\tRecommended for ages {{recent_video.age}} and up\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<!-- DETAILS-SECTION END -->\n\t\t</div>\n\t\t<div class=\"drop-tab hidden-xs\">\n\n\t\t\t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t\t\t\t<li role=\"presentation\" class=\"active\">\n\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"displayContent('overview')\" aria-controls=\"overview\" role=\"tab\" data-toggle=\"tab\">Overview</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li role=\"presentation\" *ngIf=\"recent_video.is_genre\">\n\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"displayContent('episodes')\" aria-controls=\"episodes\" role=\"tab\" data-toggle=\"tab\">Episodes</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li role=\"presentation\" *ngIf=\"recent_video.is_genre || recent_video.trailer_video\">\n\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"displayContent('trailers')\" aria-controls=\"trailers\" role=\"tab\" data-toggle=\"tab\">Trailers &amp; More</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li role=\"presentation\">\n\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"displayContent('more-like')\" aria-controls=\"more-like\" role=\"tab\" data-toggle=\"tab\">More Like This</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li role=\"presentation\">\n\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"displayContent('details')\" aria-controls=\"details\" role=\"tab\" data-toggle=\"tab\">Details</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<div [ngClass]=\"{'home_top_class' : recent_video, 'top_class' : !recent_video}\" onresize>\n\t\t\t<div class=\"post slide-area\" *ngFor=\"let data of datas; let keyindex = index\">\n\t\t\t\t<div class=\"box-head\">\n\t\t\t\t\t<a href=\"/title/{{data.key}}\">\n\t\t\t\t\t\t<h3 (mouseover)=\"showArrow(keyindex)\" (mouseleave)=\"hideArrow(keyindex)\">{{data.name}}&nbsp;&nbsp;<i class=\"fa fa-angle-right\" style=\"display: none\" id=\"{{keyindex}}\"></i></h3>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"box video-box-row\">\n\t\t\t\t\t<!-- <slick slides-to-show=\"{{slide_to_show}}\" slides-to-scroll=\"{{slide_to_scroll}}\" init-onload=true data=\"data.list\" class=\"slider multiple-items\"> -->\n\t\t\t\t\t\t\n\t\t\t\t\t<ngx-slick-carousel class=\"carousel episode-slider\"  #slickModal=\"slick-carousel\" [config]=\"slideConfig1\" >\n\t\t\t\t\t\t<div ngxSlickItem  id=\"{{childindex}}_{{data.key}}\"  class=\"slide-box tile video-box\" *ngFor=\"let value of data.list; let childindex = index\"\n\t\t\t\t\t\t(mouseover)=\"hoverIn(this, childindex, data.key, data.list.length)\" (mouseleave)=\"hoverOut(this, childindex, data.key, data.list.length)\"\n\t\t\t\t\t\t>\n\n\t\t\t\t\t\t\t\t\t<div class=\"video-box-outer\">\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"tile-media\" id=\"{{childindex}}_{{data.key}}_img\">\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"tile-img\" src=\"{{value.default_image}}\" alt=\"\" [ngStyle]=\"media_height\" />\n\t\t\t\t\t\t\t\t\t\t\t<!-- 3rd image-->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"tile-details\">\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"video_amount\" *ngIf=\"value.amount > 0 && !value.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span *ngIf=\"value.pay_per_view_status\">PAID</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<span>PAY - {{value.currency}} {{value.amount}}</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<!-- <a href=\"single_video({id:value.admin_video_id})\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"hover-icon\" id=\"{{keyindex}}_{{data.key}}_div\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\" id=\"{{keyindex}}_{{data.key}}_icon\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</a> -->\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"value.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/video/{{value.admin_video_id}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"hover-icon\" id=\"{{childindex}}_{{data.key}}_div\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\" id=\"{{childindex}}_{{data.key}}_icon\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"value.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/payment-option/{{value.admin_video_id}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"hover-icon\" id=\"{{childindex}}_{{data.key}}_div\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\" id=\"{{childindex}}_{{data.key}}_icon\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tile-content\" id=\"{{childindex}}_{{data.key}}_desc\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"tile-tit\">{{value.title}}</h3>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-margin hidden-cls\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 1), 'glyphicon-star' : (value.ratings >= 1)}\">\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 2), 'glyphicon-star' : (value.ratings >= 2)}\">\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 3), 'glyphicon-star' : (value.ratings >= 3)}\">\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 4), 'glyphicon-star' : (value.ratings >= 4)}\">\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 5), 'glyphicon-star' : (value.ratings >= 5)}\">\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"video-season\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{value.release_date && value.release_date !=\"0000-00-00\" ? value.release_date:'' }}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"video-epi-count\">{{value.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{value.watch_count}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{value.duration}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"video-des\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"video-des-inner\">{{value.description}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"showVideoDrop(this, childindex, data.key, data.list.length)\" style=\"cursor: pointer;\" class=\"arrow\" style=\"width:25%\">\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-angle-down size-arrow\"></i> -->\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/down-arrow-red.png\" class=\"arrow_down\" style=\"width:25%\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t</ngx-slick-carousel>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\n\t\t\t\t<div class=\"video-drop\" id=\"{{lastindex}}_{{data.key}}_video_drop\" *ngFor=\"let value of data.list; let lastindex = index\">\n\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\t<!-- OVERVIEW SECTION  -->\n\t\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane active\" id=\"{{lastindex}}_{{data.key}}_overview\">\n\t\t\t\t\t\t\t<div class=\"overview tab-section relative\">\n\t\t\t\t\t\t\t\t<div class=\"close-tab\">\n\t\t\t\t\t\t\t\t\t<a style=\"cursor: pointer;\" (click)=\"closeDiv(lastindex,data.key)\" class=\"close-btn\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-times\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t<div class=\"tab-section-content row no-margin\">\n\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-5 no-pad overview-details\">\n\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\n\t\t\t\t\t\t\t\t\t<div class=\"modal fade\" id=\"overviewmodal_{{lastindex}}_{{data.key}}\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" tabindex=\"-1\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"modal-dialog\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- Modal content-->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-content\" style=\"background-color: #333;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"modal-title bold\">Report This Video</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<form (Submit)=\"spamVideo(value.admin_video_id, lastindex, data.key)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"radio radio-danger\" *ngFor=\"let spam_reason of spam_reasons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"reason\" id=\"reason_{{value.admin_video_id}}_{{lastindex}}_{{data.key}}\" value=\"{{spam_reason.value}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"reason_{{value.admin_video_id}}_{{lastindex}}_{{data.key}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{spam_reason.value}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{spam_reason_value}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"small bold text-center\">If you report this video, you won't see again the same video in anywhere in your account except \"Spam Videos\".\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIf you want to continue to report this video as same. Click continue and proceed the same.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"payment-submit\">Submit</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7 no-pad\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"linear-outer\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"linear\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rotate-img-outer\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rotate-img highlight-img bg-img\"  [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"rotate-img highlight-img bg-img\" style=\"background-image: url({{value.video_gif_image}});\"></div> -->\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"play-icon-outer\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a ui-sref=\"single_video({id : value.admin_video_id})\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a> -->\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"value.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/video/{{value.admin_video_id}}\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!value.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/payment-option/{{value.admin_video_id}}\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t<div class=\"home-new-deatils\">\n\t\t\t\t\t\t\t\t\t<div class=\"overview-details\" style=\"background-color: unset;\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{value.title}}</h3>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row no-margin  hidden-xs\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 1), 'glyphicon-star' : (value.ratings >= 1)}\"></div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 2), 'glyphicon-star' : (value.ratings >= 2)}\"></div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 3), 'glyphicon-star' : (value.ratings >= 3)}\"></div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 4), 'glyphicon-star' : (value.ratings >= 4)}\"></div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 5), 'glyphicon-star' : (value.ratings >= 5)}\"></div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"green-clr\">{{value.release_date && value.release_date !=\"0000-00-00\" ? value.release_date:'' }}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"epi-count\">{{value.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{value.watch_count}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>{{value.duration}}</span>\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"white-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-thumbs-up\"></i><span id=\"like_count_{{lastindex}}_{{data.key}}\">{{value.like_count}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"white-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-thumbs-down\"></i><span id=\"dis_like_count_{{lastindex}}_{{data.key}}\">{{value.dis_like_count}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"display_amount\" *ngIf=\"value.amount > 0 && !value.pay_per_view_status\" style=\"margin-left: 5px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span *ngIf=\"recent_video.pay_per_view_status\">PAID</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>PAY - ${{value.amount}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt overview-des\">{{value.description}}</p>\n\t\n\t\t\t\t\t\t\t\t\t\t\t<!-- <p class=\"content-txt awards\"><i class=\"fa fa-trophy\"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t<div id=\"my-list-txt_{{lastindex}}_{{data.key}}\" class=\"pull-left\">\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"addWishlist(value.admin_video_id, lastindex, data.key)\" class=\"bold\" id=\"\" *ngIf=\"!value.wishlist_status\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"my-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-plus my-list-icon\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"my-list-txt\">My List</span> \n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"removeWishlist(value.wishlist_status, value.admin_video_id,lastindex, data.key)\" class=\"bold\" *ngIf=\"value.wishlist_status\"\n\t\t\t\t\t\t\t\t\t\t\t style=\"cursor: pointer;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"my-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-check my-list-icon\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"my-list-txt\">My List</span> \n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"banner-icon-sec hidden-xs\">\n\t\t\t\t\t\t\t\t\t\t\t<a id=\"like_{{lastindex}}_{{data.key}}\" style=\"cursor: pointer;\" *ngIf=\"value.is_liked == 1 || value.is_liked == 0\" (click)=\"likeVideo(value.admin_video_id, lastindex, data.key)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"banner-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-thumbs-up\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t<a id=\"dis_like_{{lastindex}}_{{data.key}}\" style=\"cursor: pointer;\" *ngIf=\"value.is_liked == -1 || value.is_liked == 0\" (click)=\"dislikeVideo(value.admin_video_id, lastindex, data.key)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"banner-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-thumbs-down\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t<a style=\"cursor: pointer;\" data-toggle=\"modal\" data-target=\"#overviewmodal_{{lastindex}}_{{data.key}}\" title=\"Report as Spam\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"banner-icon\" (click)=\"modalShow(lastindex, data.key)\" data-toggle=\"modal\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <i class=\"fa fa-exclamation \"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- OVERVIEW SECTION END -->\n\t\n\t\t\t\t\t\t<!-- EPISODES-SECTION\n\t\t\t\t\t\t======================================== -->\n\t\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"{{lastindex}}_{{data.key}}_episodes\" *ngIf=\"value.is_genre\">\n\t\t\t\t\t\t\t<div class=\"episodes-section tab-section tab-bg bg-img\"  [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\n\t\t\t\t\t\t\t\t<div class=\"tab-overlay\">\n\t\n\t\t\t\t\t\t\t\t\t<div class=\"episodes-section-inner tab-section-content tab-sec-inner contain-width\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{value.sub_category_name}}</h3>\n\t\t\t\t\t\t\t\t\t\t<form class=\"season-select\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group styled-select black\">\n\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"exampleSelect1\" [ngModel]=\"genres_name\" (ngModelChange)=\"getSeasons(genres_name, lastindex,keyindex,'_sessions', '_loader_seasons', value.genre_id);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Select Seasons </option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"{{genrename.genre_id}}\" *ngFor=\"let genrename of value.genre_names\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{genrename.genre_name}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"episodes-list\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"{{lastindex}}{{keyindex}}_loader_seasons\" style=\"margin-top: 10px;text-align: center;display: none\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/ellipsis.svg\" style=\"width: 40px;\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"{{lastindex}}{{keyindex}}_sessions\" class=\"row\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <slick slides-to-show=\"{{epdisode_slide_to_show}}\" slides-to-scroll=\"{{epdisode_slide_to_scroll}}\" dots=\"false\" class=\"episode-slider\"> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<ngx-slick-carousel class=\"carousel slider multiple-items\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\" data=\"item.value.videos\">  \n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let genre_list of value.first_part\" ngxSlickItem>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-box\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img bg-img\"  [ngStyle]=\"{ 'background-image': 'url(' + genre_list.default_image + ')'}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"epi-count\">{{genre_list.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{genre_list.watch_count}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"epi-play-icon-outer\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"genre_list.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/video/{{genre_list.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span  *ngIf=\"!genre_list.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/payment-option/{{ genre_list.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8 col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"epi-tit gray-color1 txt-overflow\">{{genre_list.title}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 text-right hidden-sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"bold gray-color1 epi-tit txt-overflow\">{{genre_list.duration}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\" gray-color1 overview-des more-link mt-0\">{{genre_list.description}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t</ngx-slick-carousel>\n\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- EPISODES-SECTION END-->\n\t\n\t\t\t\t\t\t<!-- TRAILERS SECTION -->\n\t\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"{{lastindex}}_{{data.key}}_trailers\" *ngIf=\"value.is_genre || value.trailer_video\">\n\t\t\t\t\t\t\t<div class=\"trailers-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\n\t\t\t\t\t\t\t\t<div class=\"tab-overlay\">\n\t\n\t\t\t\t\t\t\t\t\t<div class=\"trailers-section-inner tab-section-content tab-sec-inner contain-width\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{value.sub_category_name}}</h3>\n\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"trailers-list row\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t<!-- episode list box -->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 top\" *ngFor=\"let trailer of value.genres\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-box\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + trailer.genre_image + ')'}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-overlay\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"epi-play-icon-outer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/genre_video/{{trailer.genre_id}}\" class=\"epi-play-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-margin\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"epi-tit gray-color1\">{{trailer.genre_name}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 top\" *ngIf=\"value.trailer_video\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-box\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-overlay\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"epi-play-icon-outer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/trailer/{{ value.admin_video_id}}\" class=\"epi-play-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-margin\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"epi-tit gray-color1\">{{value.title}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- TRAILERS SECTION END -->\n\t\n\t\t\t\t\t\t<!-- MORE LIKE SECTION  -->\n\t\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"{{lastindex}}_{{data.key}}_more-like\">\n\t\t\t\t\t\t\t<div class=\"morelike-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\n\t\t\t\t\t\t\t\t<div class=\"tab-overlay\">\n\t\n\t\t\t\t\t\t\t\t\t<div class=\"morelike-section-inner tab-section-content tab-sec-inner contain-width\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{value.sub_category_name}}</h3>\n\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"morelike-list row\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\" *ngFor=\"let sub_video of value.sub_videos\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-box\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + sub_video.default_image + ')'}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-img-inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"new-epi\">{{sub_video.title}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"epi-play-icon-outer\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a ui-sref=\"single_video({id : sub_video.admin_video_id})\" class=\"epi-play-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-play\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a> -->\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"sub_video.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/video/{{sub_video.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!sub_video.pay_per_view_status\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/payment-option/{{sub_video.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"duration_more\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{sub_video.duration}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"episode-list-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row no-margin\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 1), 'glyphicon-star' : (sub_video.ratings >= 1)}\"></div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 2), 'glyphicon-star' : (sub_video.ratings >= 2)}\"></div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 3), 'glyphicon-star' : (sub_video.ratings >= 3)}\"></div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 4), 'glyphicon-star' : (sub_video.ratings >= 4)}\"></div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 5), 'glyphicon-star' : (sub_video.ratings >= 5)}\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"green-clr hidden-sm\">{{sub_video.release_date && sub_video.release_date !=\"0000-00-00\" ? sub_video.release_date:'' }}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"epi-count hidden-sm hidden-md\">{{sub_video.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{sub_video.watch_count}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span>{{sub_video.duration}}</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt overview-des more-link\">{{sub_video.description}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- MORE LIKE SECTION END -->\n\t\n\t\t\t\t\t\t<!-- DETAILS-SECTION -->\n\t\t\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane\" id=\"{{lastindex}}_{{data.key}}_details\">\n\t\t\t\t\t\t\t<div class=\"details-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\n\t\t\t\t\t\t\t\t<div class=\"tab-overlay\">\n\t\t\t\t\t\t\t\t\t<div class=\"details-section-inner tab-section-content tab-sec-inner contain-width details_section_tab\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"content-tit\">{{value.title}}</h3>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row col-sm-12 col-sm-12 col-lg-12 col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"detailsItem detailsMedia col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4>Directors</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let director of value.directors\" class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/director/{{director.id}}\">{{director.name}}</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<h4>Writers</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let writer of value.writers\" class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/writer/{{writer.id}}\">{{writer.name}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"detailsItem detailsMedia col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4>Actors</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let actor of value.actors\" class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/actor/{{actor.id}}\">{{actor.name}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"detailsItem detailsMedia col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4>Category</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a>{{value.sub_category_name}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clear-fix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<h4>Publish Date</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"green-clr hidden-sm\">{{value.release_date  && value.release_date !=\"0000-00-00\" ? value.release_date:''}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<h4>Duration</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{{value.duration}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"detailsItem detailsMedia col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4>Ratings</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 1), 'glyphicon-star' : (value.ratings >= 1)}\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 2), 'glyphicon-star' : (value.ratings >= 2)}\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 3), 'glyphicon-star' : (value.ratings >= 3)}\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 4), 'glyphicon-star' : (value.ratings >= 4)}\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 5), 'glyphicon-star' : (value.ratings >= 5)}\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<h4>Age</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"listLabel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content-txt bold seasons\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRecommended for ages {{value.age}} and up\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- DETAILS-SECTION END -->\n\t\t\t\t\t</div>\n\t\n\t\t\t\t\t<div class=\"drop-tab hidden-xs\">\n\t\n\t\t\t\t\t\t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"active\">\n\t\t\t\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"dynamicContent(lastindex, data.key,'overview')\" aria-controls=\"overview\" role=\"tab\" data-toggle=\"tab\">Overview</a>\n\t\t\t\t\t\t\t</li>\n\t\n\t\t\t\t\t\t\t<li role=\"presentation\" *ngIf=\"value.is_genre\">\n\t\t\t\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"dynamicContent(lastindex,data.key,'episodes')\" aria-controls=\"episodes\" role=\"tab\" data-toggle=\"tab\">Episodes</a>\n\t\t\t\t\t\t\t</li>\n\t\n\t\t\t\t\t\t\t<li role=\"presentation\" *ngIf=\"value.is_genre || value.trailer_video\">\n\t\t\t\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"dynamicContent(lastindex,data.key,'trailers')\" aria-controls=\"trailers\" role=\"tab\" data-toggle=\"tab\">Trailers &amp; More</a>\n\t\t\t\t\t\t\t</li>\n\t\n\t\t\t\t\t\t\t<li role=\"presentation\">\n\t\t\t\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"dynamicContent(lastindex,data.key,'more-like')\" aria-controls=\"more-like\" role=\"tab\" data-toggle=\"tab\">More Like This</a>\n\t\t\t\t\t\t\t</li>\n\t\n\t\t\t\t\t\t\t<li role=\"presentation\">\n\t\t\t\t\t\t\t\t<a style=\"cursor:pointer\" (click)=\"dynamicContent(lastindex,data.key,'details')\" aria-controls=\"details\" role=\"tab\" data-toggle=\"tab\">Details</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_app_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-global */ "./src/app/app-global.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(apiService, router, route, titleService) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.recent_video = {};
        this.sessionStorage = {};
        this.slide_to_show = 6;
        this.slide_to_scroll = 6;
        this.ActiveCategories = {};
        this.loadStatus = false;
        this.spamVideo = function (admin_video_id, index, key) {
            if (confirm('Are you sure want to spam the video ?')) {
                var reason = $('input[name=reason]:checked').val();
                console.log(reason);
                $.ajax({
                    type: "post",
                    url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/add_spam",
                    data: { id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sessionStorage.sub_profile_id, reason: reason },
                    async: false,
                    beforeSend: function () {
                        //$("#my-list-txt_"+$index+"_"+key).html('<a class="my-list bold"><i class="fa fa-plus my-list-icon"></i><span class="my-list-txt">Removing</span></a>');
                    },
                    success: function (data) {
                        if (data.success) {
                            UIkit.notify({ message: "You have marked the video as spam, the video won't appear anywhere except spam videos section", timeout: 3000, pos: 'top-center', status: 'success' });
                            window.setTimeout(function () {
                                window.location.reload();
                            }, 1000);
                        }
                        else {
                            UIkit.notify({ message: data.error_messages, timeout: 5000, pos: 'top-center', status: 'danger' });
                            return false;
                        }
                    },
                    error: function (data) {
                        UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                    },
                });
            }
        };
        this.displayContent = function (id) {
            $("#overview").hide();
            $("#episodes").hide();
            $("#trailers").hide();
            $("#more-like").hide();
            $("#details").hide();
            if (id == 'overview') {
                $("#overview").show();
                $("#overview").addClass('adtive');
            }
            else if (id == 'episodes') {
                $("#episodes").show();
                $("#episodes").addClass('adtive');
            }
            else if (id == 'trailers') {
                $("#trailers").show();
                $('#trailers').addClass('active');
            }
            else if (id == 'more-like') {
                $("#more-like").show();
                $('#more-like').addClass('active');
            }
            else {
                $("#details").show();
                $('#details').addClass('active');
            }
        };
        this.addWishlist = function (id, $index, key) {
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/addWishlist",
                data: { id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: id, sub_profile_id: this.sessionStorage.sub_profile_id },
                async: false,
                beforeSend: function () {
                    $("#my-list-txt_" + $index + "_" + key).html('<a class="my-list bold"><i class="fa fa-check my-list-icon"></i><span class="my-list-txt">Adding</span></a>');
                },
                success: function (data) {
                    if (data.success) {
                        setTimeout(function () {
                            $("#my-list-txt_" + $index + "_" + key).html('<a (click)="removeWishlist(' + data.wishlist_id + ', ' + id + ', ' + $index + ', ' + "'" + key + "'" + ')" class="my-list bold" id="remove-my-list-txt" style="cursor: pointer;">' +
                                '<i class="fa fa-check my-list-icon"></i>' +
                                '<span class="my-list-txt">My List</span>' +
                                '</a>');
                        }, 2000);
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
            });
        };
        this.closeDiv = function (index, key) {
            $("#" + index + "_" + key + "_video_drop").fadeOut();
            // $("#"+index+"_"+key+"_video_drop").fadeOut();
            $('#' + index + "_" + key + "_img").removeClass('active_img');
            $('#' + index + "_" + key + "_desc").show();
            $('#' + index + "_" + key + "_div").removeClass('play_icon_div');
        };
        this.removeWishlist = function (id, admin_video_id, $index, key) {
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/deleteWishlist",
                data: { id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, wishlist_id: admin_video_id, sub_profile_id: this.sessionStorage.sub_profile_id },
                async: false,
                beforeSend: function () {
                    $("#my-list-txt_" + $index + "_" + key)
                        .html('<a class="my-list bold"><i class="fa fa-plus my-list-icon"></i><span class="my-list-txt">Removing</span></a>');
                },
                success: function (data) {
                    if (data.success) {
                        setTimeout(function () {
                            $("#my-list-txt_" + $index + "_" + key).html('<a (click)="addWishlist(' + admin_video_id + ', ' + $index + ', ' + "'" + key + "'" + ')" class="my-list bold" style="cursor: pointer;">' +
                                '<i class="fa fa-plus my-list-icon"></i>' +
                                '<span class="my-list-txt">My List</span>' +
                                '</a>');
                        }, 2000);
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
            });
        };
        this.likeVideo = function (admin_video_id, $index, key) {
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/like_video",
                data: { id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sessionStorage.sub_profile_id },
                async: false,
                beforeSend: function () {
                    $("#like_" + $index + "_" + key).addClass('disabled_class');
                },
                success: function (data) {
                    $("#like_" + $index + "_" + key).removeClass('disabled_class');
                    if (data.success) {
                        // setTimeout(function(){
                        $("#like_count_" + $index + "_" + key).html(data.like_count);
                        $("#dis_like_count_" + $index + "_" + key).html(data.dislike_count);
                        if (data.delete) {
                            // UIkit.notify({message : "We are very sorry you removed the video from like", timeout : 3000, pos : 'top-center', status : 'success'});
                            $("#dis_like_" + $index + "_" + key).show();
                            $("#dis_like_" + $index + "_" + key).removeClass('ng-hide');
                            $("#dis_like_" + $index + "_" + key).css('display', 'inline !important');
                        }
                        else {
                            // UIkit.notify({message : "I'm glad you liked the video", timeout : 3000, pos : 'top-center', status : 'success'});
                            $("#dis_like_" + $index + "_" + key).fadeOut(500);
                        }
                        // }, 2000);
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
            });
        };
        this.dislikeVideo = function (admin_video_id, $index, key) {
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/dis_like_video",
                data: { id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sessionStorage.sub_profile_id },
                async: false,
                beforeSend: function () {
                    //$("#my-list-txt_"+$index+"_"+key).html('<a class="my-list bold"><i class="fa fa-plus my-list-icon"></i><span class="my-list-txt">Removing</span></a>');
                    $("#dis_like_" + $index + "_" + key).addClass('disabled_class');
                },
                success: function (data) {
                    $("#dis_like_" + $index + "_" + key).removeClass('disabled_class');
                    if (data.success) {
                        // setTimeout(function(){
                        $("#like_count_" + $index + "_" + key).html(data.like_count);
                        $("#dis_like_count_" + $index + "_" + key).html(data.dislike_count);
                        if (data.delete) {
                            // UIkit.notify({message : "I'm glad you removed the video from dislike", timeout : 3000, pos : 'top-center', status : 'success'});
                            $("#like_" + $index + "_" + key).show(500);
                            $("#like_" + $index + "_" + key).removeClass('ng-hide');
                            $("#like_" + $index + "_" + key).css('display', 'inline !important');
                        }
                        else {
                            // UIkit.notify({message : "You disliked the video", timeout : 3000, pos : 'top-center', status : 'warning'});
                            $("#like_" + $index + "_" + key).fadeOut(500);
                        }
                        // }, 2000);
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
            });
        };
        this.getSeasons = function (genre_id, idx, key, divid, loader, main_id) {
            if (genre_id == '' || genre_id == undefined) {
                genre_id = main_id;
            }
            $.ajax({
                type: "post",
                url: src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/genre-list",
                data: { id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, genre_id: genre_id },
                async: false,
                beforeSend: function () {
                    $("#" + idx + key + divid).html("");
                    $("#" + idx + key + loader).show();
                },
                success: function (data) {
                    if (data.success) {
                        $("#" + idx + key + divid).html(data.data);
                        $(".episode-slider").not('.slick-initialized').slick({
                            slidesToShow: this.epdisode_slide_to_show,
                            slidesToScroll: this.epdisode_slide_to_scroll,
                        });
                        $(".episode-slider").slick('setPosition');
                        $('.slick-carousel-responsive').resize();
                    }
                    else {
                        UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                },
                complete: function (data) {
                    $("#" + idx + key + loader).hide();
                },
            });
        };
        this.showArrow = function (id) {
            $("#" + id).css('line-height', 0);
            $("#" + id).fadeIn();
        };
        this.hideArrow = function (id) {
            $("#" + id).fadeOut();
        };
        this.showVideoDrop = function (event, idx, key) {
            console.log('dfdfdfdfdfdfd');
            $(".video-drop").hide();
            $("#" + idx + "_" + key + "_video_drop").show();
            // $('#'+idx+"_"+key).addClass('active_img');
            //console.log($('#'+idx+"_"+key).closest('.slide-box').siblings().find('tile-img').addClass('active_img'));
            $('#' + idx + "_" + key + "_img").addClass('active_img');
            $('#' + idx + "_" + key + "_desc").hide();
            $('#' + idx + "_" + key + "_div").addClass('play_icon_div');
            $('#' + idx + "_" + key).removeClass('transition-class');
        };
        this.hoverIn = function (event, id, key, length) {
            var video_drop = $(".video-drop").is(":visible");
            if (!video_drop) {
                $('#' + id + "_" + key).addClass('transition-class');
                $('#' + id + "_" + key + "_desc").show();
                $('#' + id + "_" + key + "_div").removeClass('play_icon_div');
                var n_w = $('#' + id + "_recent").width();
                var added_w = n_w * 0.4 / 2;
                // $('#' + id + "_" + key).parent().css('width', $('#' + id + "_" + key).parent().width() + added_w + 100 + 'px');
                // if($('#' + id + "_" + key).prev().length > 0){
                //   $('#' + id + "_" + key).prev().css('margin-right', added_w + 'px');
                //   $('#' + id + "_" + key).css('margin-left', '-' + added_w + 'px');
                // }
                // if($('#' + id + "_" + key).next().length > 0){
                //   $('#' + id + "_" + key).next().css('margin-left', added_w + 'px');
                //   $('#' + id + "_" + key).css('margin-right', added_w + 'px');
                // }
                $('#' + id + "_" + key).css('padding', '0');
                //$('#' + id + "_" + key + "_desc").css('bottom', '30px');
            }
            else {
                for (var i = 0; i < length; i++) {
                    $("#" + i + "_" + key + "_video_drop").hide();
                    // $('#'+i+"_"+key).removeClass('active_img');
                    $('#' + i + "_" + key + "_img").removeClass('active_img');
                    $('#' + i + "_" + key + "_div").removeClass('play_icon_div');
                    $('#' + i + "_" + key + "_desc").show();
                }
                $('#' + id + "_" + key).removeClass('transition-class');
                $('#' + id + "_" + key + "_img").addClass('active_img');
                $('#' + id + "_" + key + "_desc").hide();
                $('#' + id + "_" + key + "_div").addClass('play_icon_div');
                $("#" + id + "_" + key + "_video_drop").show();
            }
        };
        this.hoverOut = function (event, id, key, length) {
            $('.slick-slide').css('margin', '0px');
            var value = id;
            if (value == 0 || value % this.showCount == 0) {
            }
            else if ((value + 1) % this.showCount == 0 && value != 0) {
                $(".transition-class").css("margin-left", "0px");
            }
            else {
                $(".transition-class").css("margin-left", "0px");
            }
            var video_drop = $(".video-drop").is(":visible");
            if (video_drop) {
                for (var i = 0; i < length; i++) {
                    $("#" + i + "_" + key + "_video_drop").hide();
                    $('#' + i + "_" + key + "_img").removeClass('active_img');
                    $('#' + i + "_" + key + "_div").removeClass('play_icon_div');
                    $('#' + i + "_" + key + "_desc").show();
                }
                // $('#'+id+"_"+key).addClass('active_img');
                $('#' + id + "_" + key + "_img").addClass('active_img');
                $('#' + id + "_" + key + "_desc").hide();
                $('#' + id + "_" + key + "_div").addClass('play_icon_div');
                $("#" + id + "_" + key + "_video_drop").show();
            }
            $('#' + id + "_" + key).removeClass('transition-class');
        };
        this.dynamicContent = function (index, key, id) {
            $("#" + index + "_" + key + "_overview").removeClass('active');
            $("#" + index + "_" + key + "_episodes").removeClass('active');
            $("#" + index + "_" + key + "_trailers").removeClass('active');
            $("#" + index + "_" + key + "_more-like").removeClass('active');
            $("#" + index + "_" + key + "_details").removeClass('active');
            if (id == "overview") {
                $("#" + index + "_" + key + "_overview").addClass('active');
            }
            else if (id == "episodes") {
                $("#" + index + "_" + key + "_episodes").addClass('active');
            }
            else if (id == "trailers") {
                $("#" + index + "_" + key + "_trailers").addClass('active');
            }
            else if (id == "more-like") {
                $("#" + index + "_" + key + "_more-like").addClass('active');
            }
            else {
                $("#" + index + "_" + key + "_details").addClass('active');
            }
            // $(".episode-slider").not('.slick-initialized').slick({
            //   slidesToShow: this.epdisode_slide_to_show,
            //   slidesToScroll: this.epdisode_slide_to_scroll,
            // });
            // $(".episode-slider").slick('setPosition');
        };
        this.modalShow = function (a, b) {
            console.log(a, b);
            $.noConflict();
            $('#overviewmodal_' + a + '_' + b).modal('show');
        };
        this.titleService.setTitle("Flashington | Home");
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.window_width = $(window).innerWidth;
        if (this.window_width > 991) {
            this.epdisode_slide_to_show = 4;
            this.epdisode_slide_to_scroll = 4;
        }
        if (this.window_width > 767 && this.window_width < 992) {
            this.epdisode_slide_to_show = 3;
            this.epdisode_slide_to_scroll = 3;
        }
        if (this.window_width > 479 && this.window_width < 768) {
            this.epdisode_slide_to_show = 2;
            this.epdisode_slide_to_scroll = 2;
        }
        if (this.window_width < 480) {
            this.epdisode_slide_to_show = 1;
            this.epdisode_slide_to_scroll = 1;
        }
        $(window).bind('resize', function () {
            this.window_width = $(window).innerWidth;
            if (this.window_width > 991) {
                this.epdisode_slide_to_show = 4;
                this.epdisode_slide_to_scroll = 4;
            }
            if (this.window_width > 767 && this.window_width < 992) {
                this.epdisode_slide_to_show = 3;
                this.epdisode_slide_to_scroll = 3;
            }
            if (this.window_width > 479 && this.window_width < 768) {
                this.epdisode_slide_to_show = 2;
                this.epdisode_slide_to_scroll = 2;
            }
            if (this.window_width < 480) {
                this.epdisode_slide_to_show = 1;
                this.epdisode_slide_to_scroll = 1;
            }
            // this.$apply();
        });
        this.slideConfig = {
            "slidesToShow": this.epdisode_slide_to_show,
            "slidesToScroll": this.epdisode_slide_to_scroll,
            // "nextArrow":"<div class='nav-btn next-slide'></div>",
            // "prevArrow":"<div class='nav-btn prev-slide'></div>",
            "dots": false,
            "infinite": true
        };
        this.sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
        this.user_id = (this.sessionStorage['user_id'] != '' && this.sessionStorage['user_id'] != undefined) ? this.sessionStorage['user_id'] : false;
        this.access_token = (this.sessionStorage['access_token'] != undefined && this.sessionStorage['access_token'] != '') ? this.sessionStorage['access_token'] : '';
        if (this.user_id && this.access_token) {
            this.sub_profile_id = this.sessionStorage['sub_profile_id'] = this.route.snapshot.paramMap['params'].id;
            this.user_type = (this.sessionStorage['user_type'] == undefined || this.sessionStorage['user_type'] == 0) ? true : false;
            if (this.window_width > 991) {
                this.slide_to_show = 6;
                this.slide_to_scroll = 6;
                this.media_height = {
                    "height": Math.round((this.window_width - 200)) / 6 * 1.5 + "px"
                };
            }
            if (this.window_width > 767 && this.window_width < 992) {
                this.slide_to_show = 4;
                this.slide_to_scroll = 4;
                this.media_height = {
                    "height": Math.round((this.window_width - 100)) / 5 * 1.5 + "px"
                };
            }
            if (this.window_width > 479 && this.window_width < 768) {
                this.slide_to_show = 2;
                this.slide_to_scroll = 2;
                this.media_height = {
                    "height": Math.round((this.window_width - 50)) / 2 * 1.5 + "px"
                };
            }
            if (this.window_width < 480) {
                this.slide_to_show = 1;
                this.slide_to_scroll = 1;
                this.media_height = {
                    "height": (this.window_width - 100) * 1.5 + "px"
                };
            }
            console.log(this.slide_to_show, this.slide_to_scroll);
            $(window).bind('resize', function () {
                this.window_width = window.innerWidth;
                if (this.window_width > 991) {
                    this.slide_to_show = 6;
                    this.slide_to_scroll = 6;
                    this.media_height = {
                        "height": Math.round((this.window_width - 200)) / 6 * 1.5 + "px"
                    };
                }
                if (this.window_width > 767 && this.window_width < 992) {
                    this.slide_to_show = 4;
                    this.slide_to_scroll = 4;
                    this.media_height = {
                        "height": Math.round((this.window_width - 100)) / 5 * 1.5 + "px"
                    };
                    $(".slider").slick({
                        slidesToShow: 4
                    });
                }
                if (this.window_width > 479 && this.window_width < 768) {
                    this.slide_to_show = 2;
                    this.slide_to_scroll = 2;
                    this.media_height = {
                        "height": Math.round((this.window_width - 50)) / 2 * 1.5 + "px"
                    };
                    $(".slider").slick({
                        slidesToShow: 2
                    });
                }
                if (this.window_width < 480) {
                    this.slide_to_show = 1;
                    this.slide_to_scroll = 1;
                    this.media_height = {
                        "height": (this.window_width - 100) * 1.5 + "px"
                    };
                    $(".slider").slick({
                        slidesToShow: 1
                    });
                }
                console.log(this.slide_to_show, this.slide_to_scroll);
            });
            this.slideConfig1 = {
                "slidesToShow": this.slide_to_show,
                "slidesToScroll": this.slide_to_scroll,
                "dots": false,
                "infinite": true
            };
            console.log(this.slideConfig1);
            $("#before_loader").show();
            this.apiService.getHomeData({ id: this.sessionStorage['user_id'], token: this.sessionStorage['access_token'], sub_profile_id: this.sessionStorage['sub_profile_id'], device_type: 'web' })
                .subscribe(function (data) {
                if (data.success) {
                    _this.datas = data.data;
                    _this.recent_video = data.recent_video;
                    $("#before_loader").hide();
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
            var win = $(window);
            var windowWidth = win.width();
            if (windowWidth >= 0 && windowWidth <= 479) {
                this.showCount = 2;
            }
            else if (windowWidth >= 480 && windowWidth <= 767) {
                this.showCount = 3;
            }
            else if (windowWidth >= 768 && windowWidth <= 991) {
                this.showCount = 4;
            }
            else {
                this.showCount = 5;
            }
            this.apiService.spamReasons().subscribe(function (data) {
                if (data.success) {
                    _this.spam_reasons = data.data;
                }
                else {
                    return false;
                }
            });
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/invoice/invoice.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/invoice/invoice.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/invoice/invoice.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/invoice/invoice.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main-content form-content bg-img\" style=\"background-image:url({{login_bg}})\"> -->\n    <div class=\"main-content\" style=\"min-height: 1300px\">\n\n        <div style=\"padding-top:75px;\"></div>\n        <div>\n          <div class=\"col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6\">\n            <div class=\"plans\" id=\"plan2\">\n              <div class=\"plan-img1\" style=\"background-image: url(assets/img/invoice.gif);\"></div>\n              <div class=\"white-bg1 spacing\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8 \" >\n                    <div class=\"invoice-details text-center\">\n                      <h3 class=\"black-clr no-margin top\">{{plan?.title}}</h3>\n                      <p class=\"black-clr top\">{{plan?.description}}</p>\n                      <h4 class=\"black-clr no-margin top\">No of account - {{plan?.no_of_account}}</h4>\n                             <table class=\"table text-center\">\n                               <tbody>\n                                <tr class=\"warning\">\n                                    <td>Amount</td>\n                                    <td>-</td>\n                                    <td>{{plan?.currency}}{{plan?.amount}}</td>\n                                </tr>\n                                <!-- <tr>\n                                    <td>Tax</td>\n                                    <td>- $10.00</td>\n                                </tr> -->\n                                <tr class=\"warning\">\n                                    <td>Total</td>\n                                    <td>-</td>\n                                    <td>{{plan?.currency}}{{plan?.amount}}</td>\n                                </tr>\n                            </tbody>\n                             </table>\n                             \n                             \n      \n                          <div *ngIf=\"plan?.amount > 0\">\n      \n                            <h4 class=\"table-title\">Have a coupon ?</h4>\n      \n                            <table class=\"table\">\n                                  <tbody>\n                                    <tr>\n                                    <!-- <tr class=\"active\"> -->\n                                      <td style=\"width: 100px;vertical-align: middle;\">Promo Code</td>\n                                      <td><input type=\"text\" name=\"coupon_code\" id=\"coupon_code\" [ngModel]=\"coupon_code\" class=\"form-control coupon-form\" (ngModelChange)=\"changeCouponCode($event)\"></td>\n                                      <td><button class=\"payment-submit\" style=\"margin-top:0\" (click)=\"apply_coupon_subscription(coupon_code)\">Apply</button></td>\n                                  </tr>\n                                  <tr class=\"showPay\" style=\"display: none\">\n                                    <!-- <tr class=\"active\"> -->\n                                      <td>Coupon Amount</td>\n                                      <td></td>\n                                      <td>{{original_coupon_amount}}</td>\n                                  </tr>\n                                  <tr class=\"warning showPay\" style=\"display: none\">\n                                    <!-- <tr class=\"active\"> -->\n                                      <td>Grant Total</td>\n                                      <td></td>\n                                      <td>{{plan?.currency}}{{remaining_amount}}</td>\n                                  </tr>\n                              </tbody>\n                            </table>\n      \n                          </div>\n                          <div style=\"clear: both;\"></div>\n      \n                          <div *ngIf=\"plan?.amount > 0\">\n                               <h3 class=\"no-margin mt-35 black-clr\"><span><i class=\"fa fa-credit-card-alt icon\"></i></span>Payment Options</h3>\n                               <div class=\"black-clr\">\n                                 <label>\n                                  <input type=\"radio\" class=\"option-input radio\" name=\"type_of_payment\" checked value=\"1\"/>\n                                  PayPal\n                              </label>\n                              <label>\n                                  <input type=\"radio\" class=\"option-input radio\" name=\"type_of_payment\" value=\"0\"/>\n                                 Card Payment\n                              </label>\n                            </div>\n      \n                          </div>\n      \n                          <div class=\"text-center\"> \n                               <button class=\"paynow-btn1 top\" (click)=\"sendToPaypal(plan?.id, plan?.amount)\" id=\"pay_now_subscription\"><i class=\"fa fa-credit-card\"></i> &nbsp; Pay Now</button>\n                             </div>\n                          \n                    </div>\n                   </div>\n                </div>\n              </div>\n              <div class=\"clearfix\"></div>\n            </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/components/invoice/invoice.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/invoice/invoice.component.ts ***!
  \*********************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_app_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app-global */ "./src/app/app-global.ts");







var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.apply_coupon_subscription = function (coupon_code) {
            var _this = this;
            if (coupon_code == undefined || coupon_code == '') {
                UIkit.notify({ message: "Promo Code is required", timeout: 3000, pos: 'top-center', status: 'danger' });
                return false;
            }
            var id = this.route.snapshot.paramMap['params'].id;
            this.apiService.ApplyCouponSubscription({ id: this.user_id, token: this.access_token, subscription_id: id, coupon_code: coupon_code })
                .subscribe(function (data) {
                if (data.success) {
                    console.log(data);
                    _this.remaining_amount = data.data.remaining_amount;
                    _this.coupon_amount = data.data.coupon_amount;
                    _this.coupon_code = coupon_code;
                    $(".showPay").show();
                    _this.original_coupon_amount = data.data.original_coupon_amount;
                }
                else {
                    _this.coupon_amount = 0;
                    _this.coupon_code = "";
                    _this.remaining_amount = 0;
                    $(".showPay").hide();
                    _this.original_coupon_amount = 0;
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        };
        this.sendToPaypal = function (id, amt) {
            var _this = this;
            this.type_of_payment = $("input[name='type_of_payment']:checked").val();
            if (this.coupon_code != '' && typeof (this.coupon_code) != undefined) {
                amt = this.remaining_amount;
            }
            if (confirm('Are you sure want to subscribe the plan ?')) {
                console.log('Are you sure want to subscribe the plan ?');
                console.log(amt);
                if (amt == 0) {
                    console.log('adfdfdfdsffff');
                    var data = new FormData;
                    data.append('id', this.user_id);
                    data.append('token', this.access_token);
                    data.append('coupon_code', this.coupon_code);
                    data.append('plan_id', id);
                    $("#pay_now_subscription").html("Request Sending...");
                    $("#pay_now_subscription").attr('disabled', true);
                    this.apiService.ZeroPlan(data)
                        .subscribe(function (data) {
                        if (data.success == true) {
                            console.log('dfdfddf');
                            _this.sessionStorage.one_time_subscription = 1;
                            _this.sessionStorage.user_type = 1;
                            _this.sessionStorage.no_of_account = data.plan.no_of_account;
                            _this.sessionStorage.access_token = data.user.token;
                            _this.one_time_subscription = _this.sessionStorage.one_time_subscription;
                            localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
                            UIkit.notify({ message: "Successfully, subscribed to view videos", timeout: 3000, pos: 'top-center', status: 'success' });
                            _this.router.navigateByUrl('/subscription-success');
                        }
                        else {
                            UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        }
                        $("#pay_now_subscription").html("Pay Now");
                        $("#pay_now_subscription").attr('disabled', false);
                    });
                }
                else {
                    if (this.type_of_payment == 1) {
                        console.log(this.type_of_payment);
                        if (this.coupon_code != '') {
                            window.location.href = src_app_app_global__WEBPACK_IMPORTED_MODULE_5__["AppGlobal"].apiBase + "paypal/" + id + '/' + this.user_id + '/' + this.coupon_code;
                        }
                        else {
                            window.location.href = src_app_app_global__WEBPACK_IMPORTED_MODULE_5__["AppGlobal"].apiBase + "paypal/" + id + '/' + this.user_id;
                        }
                    }
                    else {
                        this.apiService.StripePayment({ id: this.user_id, token: this.access_token, sub_profile_id: this.sub_profile_id, sub_scription_id: id, coupon_code: this.coupon_code })
                            .subscribe(function (data) {
                            if (data.success) {
                                _this.router.navigateByUrl('/subscription-success');
                            }
                            else {
                                UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                                return false;
                            }
                        });
                    }
                }
            }
        };
        this.changeCouponCode = function (input) {
            this.coupon_code = input;
        };
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.site_settings = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].settings;
        this.user_id = (this.sessionStorage.user_id != '' && this.sessionStorage.user_id != undefined) ? this.sessionStorage.user_id : false;
        this.access_token = (this.sessionStorage.access_token != undefined && this.sessionStorage.access_token != '') ? this.sessionStorage.access_token : '';
        if (this.user_id && this.access_token) {
            var login_bg = $.grep(this.site_settings, function (e) { return e.key == 'common_bg_image'; });
            var bg_image = "";
            if (login_bg.length == 0) {
                console.log("not found");
            }
            else if (login_bg.length == 1) {
                // access the foo property using result[0].foo
                bg_image = login_bg[0].value;
                if (bg_image != '' || bg_image != null || bg_image != undefined) {
                }
                else {
                    bg_image = '';
                }
            }
            else {
                // multiple items found
                bg_image = "";
            }
            this.login_bg = bg_image;
            var site_name = $.grep(this.site_settings, function (e) { return e.key == 'site_name'; });
            var name = "";
            if (site_name.length == 0) {
                console.log("not found");
            }
            else if (site_name.length == 1) {
                // access the foo property using result[0].foo
                name = site_name[0].value;
                if (name != '' || name != null || name != undefined) {
                }
                else {
                    name = '';
                }
            }
            else {
                // multiple items found
                name = "";
            }
            this.site_name = name;
            this.user_id = (this.sessionStorage.user_id != undefined && this.sessionStorage.user_id != '') ? this.sessionStorage.user_id : '';
            this.access_token = (this.sessionStorage.access_token != undefined && this.sessionStorage.access_token != '') ? this.sessionStorage.access_token : '';
            var id = this.route.snapshot.paramMap['params'].id;
            this.apiService.PlanDetail({ id: this.user_id, token: this.access_token, plan_id: id })
                .subscribe(function (data) {
                if (data.success) {
                    _this.plan = data.data;
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
            this.coupon_amount = 0;
            this.coupon_code = "";
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    InvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/components/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.css */ "./src/app/components/invoice/invoice.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/landing/landing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-landing\" *ngIf=\"loadStatus\">\n  <div class=\"landing-image bg-img\" [style.backgroundImage]=\"'url('+ AppSettings.home_page_bg_image +')'\">\n    <div class=\"basic-landing-image\">\n      <div class=\"banner-spacing\">\n        <div class=\"basic-header\">\n          <div class=\"logo\">\n            <a href=\"/index\">\n\t\t\t\t\t\t\t<img src=\"{{AppSettings.site_logo}}\" class=\"hidden-xs\">\n\t\t\t\t\t\t</a>\n          </div>\n          <div class=\"signin\">\n            <a routerLink=\"/signin\">Sign In</a>\n          </div>\n        </div>\n        <!--end of basic-header-->\n        <div class=\"clear-both\"></div>\n        <div class=\"text-wrap\">\n          <div class=\"basic-text\">\n            <h1 class=\"basic-title\">{{AppSettings.home_banner_heading}}</h1>\n            <p class=\"basic-para\">{{AppSettings.home_banner_description}}</p>\n            <a href=\"/register\" class=\"join-free\">Join Free for a month</a>\n          </div>\n          <!--end of text-->\n        </div>\n        <!--end of text-wrap-->\n      </div>\n      <!--end of end of container-->\n    </div>\n    <!--end of basic-landing-image-->\n  </div>\n  <!--end of landing-image-->\n\n  <div class=\"basic-tabs\">\n    <div class=\"banner-spacing1\">\n      <div class=\"basic-tabs-title\">\n        <ul class=\"nav nav-tabs\" role=\"tablist\">\n          <li role=\"presentation\">\n            <a href=\"#home\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">\t\n\t\t\t\t\t\t\t<i class=\"fa fa-clipboard tab-icon hidden-xs\"></i>\n\t\t\t\t\t\t\t<span class=\"tab-wrap hidden-xs hidden-sm\">No commitments Cancel online at anytime</span>\n\t\t\t\t\t\t\t<span class=\"visible-sm\">Cancel at Anytime</span>\n\t\t\t\t\t\t\t<span class=\"visible-xs\">Cancel</span>\n\t\t\t\t\t\t</a>\n          </li>\n          <li role=\"presentation\" class=\"active\">\n            <a href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">\n\t\t\t\t    \t\t<i class=\"fa fa-mobile tab-icon hidden-xs\"></i>\n\t\t\t\t    \t\t<span class=\"tab-wrap hidden-xs hidden-sm\">Browse Anywhere</span>\n\t\t\t\t    \t\t<span class=\"visible-sm\">Browse Anywhere</span>\n\t\t\t\t\t\t\t<span class=\"visible-xs\">Browse</span>\n\t\t\t\t    \t</a>\n          </li>\n          <li role=\"presentation\">\n            <a href=\"#messages\" aria-controls=\"messages\" role=\"tab\" data-toggle=\"tab\">\n\t\t\t\t    \t\t<i class=\"fa fa-tag tab-icon hidden-xs\"></i>\n\t\t\t\t    \t\t<span class=\"tab-wrap hidden-xs hidden-sm\">About {{AppSettings.site_name}}</span>\n\t\t\t\t    \t\t<span class=\"visible-sm\">About {{AppSettings.site_name}}</span>\n\t\t\t\t\t\t\t<span class=\"visible-xs\">About</span>\n\t\t\t\t    \t</a>\n          </li>\n        </ul>\n      </div>\n      <!--end of basic-tabs-title-->\n    </div>\n    <!--end of container-->\n\n    <div class=\"basic-tabs-inner\">\n      <div class=\"banner-spacing1\">\n        <div class=\"tab-content\">\n          <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"home\">\n            <div class=\"row basic-row no-margin center-align-mob\">\n              <div class=\"col-sm-6 basic-section\">\n                <div class=\"online-cancel\">\n                  <p>{{AppSettings.home_cancel_content}}</p>\n                  <a href=\"/register\" class=\"join-free\">Join Free for a month</a>\n                </div>\n                <!--end of section-down-->\n              </div>\n              <!--end of column-->\n\n              <div class=\"col-sm-6\">\n                <div class=\"cancel-image\">\n                  <img src=\"{{AppSettings.home_cancel_image}}\">\n                </div>\n                <!--end of cancel-image-->\n              </div>\n              <!--end of col-sm-6-->\n            </div>\n            <!--end of row-->\n          </div>\n          <!--end of tab-panel-->\n\n          <div role=\"tabpanel\" class=\"tab-pane fade in active \" id=\"profile\">\n            <div class=\"all-device\">\n              <div class=\"device-join\">\n                <p class=\"device-join-txt\">\n                  Watch TV shows and movies anytime, anywhere — personalized for you.\n                  <a href=\"/register\" class=\"device-join-link\">Join Free for a month</a>\n                </p>\n              </div>\n\n              <div class=\"devices row no-margin\">\n                <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12\">\n                  <div class=\"device-section text-center\">\n                    <div class=\"device-img\" [style.backgroundImage]=\"'url('+ AppSettings.home_browse_desktop_image +')'\">\n                      <!-- <img src=\"img/tv-ui.png\"> -->\n                    </div>\n\n                    <div class=\"device-content\">\n                      <h3 class=\"device-tit\">Watch on your TV</h3>\n                      <p class=\"device-txt\">Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12\">\n                  <div class=\"device-section text-center\">\n                    <div class=\"device-img\" [style.backgroundImage]=\"'url('+ AppSettings.home_browse_tv_image +')'\">\n                      <!-- <img src=\"img/tv-ui.png\"> -->\n                    </div>\n\n                    <div class=\"device-content\">\n                      <h3 class=\"device-tit\">Watch instantly on any mobile device.</h3>\n                      <p class=\"device-txt\">Available on phone or tablet, wherever you go.</p>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-lg-4 col-md-4 col-sm-4  col-xs-12\">\n                  <div class=\"device-section text-center\">\n\n                    <div class=\"device-img\" [style.backgroundImage]=\"'url('+ AppSettings.home_browse_mobile_image +')'\">\n                      <!-- <img src=\"img/tv-ui.png\"> -->\n                    </div>\n\n                    <div class=\"device-content\">\n                      <h3 class=\"device-tit\">Use any computer</h3>\n                      <p class=\"device-txt\">Watch right on {{AppSettings.site_name}}</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--end of row-->\n          </div>\n          <!--end of tab-panel-->\n\n          <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"messages\">\n            <div class=\"\">\n              <div class=\"price-head text-center\">\n                <p class=\"device-join-txt\">\n                  {{AppSettings.home_about_site}}</p>\n                <a href=\"/register\" class=\"device-join-link price-link\">Join Free for a month</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--end of tab-content-->\n      </div>\n      <!--end of basic-tabs-->\n    </div>\n    <!--end of container-->\n  </div>\n  <!--end of basic-tabs-->\n</div>\n<!--end of basic-landing-->"

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");





var LandingComponent = /** @class */ (function () {
    function LandingComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.loadStatus = true;
        this.sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
    }
    LandingComponent.prototype.ngOnInit = function () {
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].settings) {
            this.AppSettings = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].settings;
            this.loadStatus = true;
        }
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/components/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/paid-video/paid-video.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/paid-video/paid-video.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFpZC12aWRlby9wYWlkLXZpZGVvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/paid-video/paid-video.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/paid-video/paid-video.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main-content form-content bg-img\" style=\"background-image:url({{login_bg}})\"> -->\n  <div class=\"main-content\">\n\n    <div class=\"login-form\" style=\"padding-top: 100px;padding-bottom: 40px;\">\n\n    \t<div class=\"\">\n        \t<div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 billing-white-bg\" *ngIf=\"paid_videos?.length > 0\">\n\t        \t<div class=\"row\">\n\t        \t\t<div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5 zero-padding billing-bg-img\" style=\"background-image: url(assets/img/billing-back.jpg);\">\n\t        \t\t\t<div class=\"pay-details-bg text-center\">\n\t        \t\t\t\t<div>\n\t        \t\t\t\t\t<div class=\"pay-profile-img\" style=\"background-image: url({{profile.picture}});\"></div>\n\t        \t\t\t\t\t<h3 class=\"white-clr text-center mb-0\">{{profile.name}}</h3>\n\t        \t\t\t\t</div>\n\t        \t\t\t</div>\n\t        \t\t</div>\n\n\t        \t\t<div class=\"col-xs-12 col-sm-7 col-md-7 col-lg-7 billing-history\">\n\t        \t\t\t<h3 class=\"billing-head1\"><i class=\"fa fa-clock-o\"></i> &nbsp;Payment History</h3>\n\t        \t\t\t<p class=\"bill-line1\"></p>\n\n\t        \t\t\t<div class=\"payment-details top\" *ngFor=\"let video of paid_videos\">\n\t        \t\t\t\t<div class=\"relative\">\n\n\t        \t\t\t\t\t<a ui-sref=\"single_video({id : video.admin_video_id})\">\n\n\t\t\t        \t\t\t\t<div class=\"payment-vide-img\" [ngStyle]=\"{ 'background-image': 'url(' + video.picture + ')'}\">\n\t\t\t        \t\t\t\t\t<h4 class=\"payment-video-title\">{{video.title}}</h4>\n\t\t\t        \t\t\t\t</div>\n\t\t\t        \t\t\t\t<div class=\"video-amount\" style=\"color: #fff\">{{video.currency}}{{video.amount}}</div>\n\n\t\t        \t\t\t\t</a>\n\t        \t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"table-responsive\">    \t\t\t\t\n\t\t\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t\t\t      \t<tr>\n\t\t\t\t\t\t\t\t        \t<td>Payment ID</td>\n\t\t\t\t\t\t\t\t        \t<td>{{video.payment_id}}</td>\n\t\t\t\t\t\t\t\t      \t</tr>\n\t\t\t\t\t\t\t\t      \t<tr>\n\t\t\t\t\t\t\t\t\t        <td>Paid date</td>\n\t\t\t\t\t\t\t\t\t        <td>{{video.paid_date}}</td>\n\t\t\t\t\t\t\t\t      \t</tr>\n\t\t\t\t\t\t\t\t      \t<!-- <tr>\n\t\t\t\t\t\t\t\t       \t\t<td>Status</td>\n\t\t\t\t\t\t\t\t       \t \t<td>{{}}</td>\t\n\t\t\t\t\t\t\t\t     \t</tr> -->\n\t\t\t\t\t\t\t\t     \t<tr>\n\t\t\t\t\t\t\t\t       \t\t<td>Subscription Type</td>\n\t\t\t\t\t\t\t\t       \t \t<td>{{video.type_of_subscription}}</td>\t\n\t\t\t\t\t\t\t\t     \t</tr>\n\t\t\t\t\t\t\t\t     \t<tr>\n\t\t\t\t\t\t\t\t       \t\t<td>User Type</td>\n\t\t\t\t\t\t\t\t       \t \t<td>{{video.type_of_user}}</td>\t\n\t\t\t\t\t\t\t\t     \t</tr>\n\t\t\t\t\t\t\t\t     \t<tr *ngIf=\"video.coupon_amount > 0\">\n\t\t\t\t\t\t\t\t       \t\t<td>Total Amount</td>\n\t\t\t\t\t\t\t\t       \t \t<td>{{video.currency}}{{video.total_amount}}</td>\t\n\t\t\t\t\t\t\t\t     \t</tr>\n\t\t\t\t\t\t\t\t     \t\n\t\t\t\t\t\t\t\t     \t<tr *ngIf=\"video.coupon_amount > 0\">\n\t\t\t\t\t\t\t\t       \t\t<td>Coupon Code</td>\n\t\t\t\t\t\t\t\t       \t \t<td>{{video.coupon_code}}</td>\t\n\t\t\t\t\t\t\t\t     \t</tr>\n\t\t\t\t\t\t\t\t     \t<tr *ngIf=\"video.coupon_amount > 0\">\n\t\t\t\t\t\t\t\t       \t\t<td>Coupon Amount</td>\n\t\t\t\t\t\t\t\t       \t \t<td>{{video.currency}}{{video.coupon_amount}}</td>\t\n\t\t\t\t\t\t\t\t     \t</tr>\n\t                    <tr>\n\t\t\t\t\t\t\t\t       \t\t<td>Payment Mode</td>\n\t\t\t\t\t\t\t\t       \t \t<td>{{video.payment_mode}}</td>\t\n\t\t\t\t\t\t\t\t     \t</tr>\n\t\t\t\t\t\t\t\t    </tbody>\n\t\t\t\t\t\t\t\t </table>\n\t\t\t\t\t\t\t </div>\t    \n\t        \t\t\t</div>\n\t        \t\t</div>\n        \t\t</div>\n        \t</div>\n\n        \t<div class=\"text-center\"  style=\"margin-top:40px !important\"  *ngIf=\"paid_videos?.length <= 0\"> \n\t\t\t\t<img src=\"assets/img/no-results.png\" class=\"img-responsive auto-margin\">\n\t\t\t</div>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/paid-video/paid-video.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/paid-video/paid-video.component.ts ***!
  \***************************************************************/
/*! exports provided: PaidVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaidVideoComponent", function() { return PaidVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");






var PaidVideoComponent = /** @class */ (function () {
    function PaidVideoComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
    }
    PaidVideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.site_settings = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].settings;
        this.sub_profile_id = this.route.snapshot.paramMap['params'].id;
        this.user_id = (this.sessionStorage['user_id'] != '' && this.sessionStorage['user_id'] != undefined) ? this.sessionStorage['user_id'] : false;
        this.access_token = (this.sessionStorage['access_token'] != undefined && this.sessionStorage['access_token'] != '') ? this.sessionStorage['access_token'] : '';
        if (this.user_id && this.access_token) {
            this.apiService.PpvList({ id: this.user_id, token: this.access_token })
                .subscribe(function (data) {
                if (data.success) {
                    _this.paid_videos = data.data;
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        }
        $("#before_loader").fadeIn();
        this.apiService.getSingleSubscription({ id: this.user_id, token: this.access_token, sub_profile_id: this.sub_profile_id })
            .subscribe(function (data) {
            if (data.success) {
                _this.profile = data;
            }
            else {
                UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                return false;
            }
            $("#before_loader").fadeOut();
        });
    };
    PaidVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paid-video',
            template: __webpack_require__(/*! ./paid-video.component.html */ "./src/app/components/paid-video/paid-video.component.html"),
            styles: [__webpack_require__(/*! ./paid-video.component.css */ "./src/app/components/paid-video/paid-video.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PaidVideoComponent);
    return PaidVideoComponent;
}());



/***/ }),

/***/ "./src/app/components/pay-per-view/pay-per-view.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/pay-per-view/pay-per-view.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5LXBlci12aWV3L3BheS1wZXItdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pay-per-view/pay-per-view.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pay-per-view/pay-per-view.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <!-- <div class=\"content-wrapper\" style=\"background-image:url({{login_bg}})\"> -->\n    \n        <div class=\"login-form\" style=\"padding-top:100px;padding-bottom:40px;\">\n            <div class=\"section-padding\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\">\n                  <div class=\"white-bg\">\n                    <div class=\"row  m-0 red-bg\">\n                      <div class=\"col-xs-12 col-sm-6 col-md-5 col-lg-5 p-0\">\n                        <div class=\"section1\">\n    \n                          <p><i class=\"fa fa-suitcase pay-icon\"></i>Category</p>\n                          <p class=\"right\"><strong>{{video.category_name}}</strong></p>\n                          <p class=\"section1-line top\"></p>\n    \n                          <p><i class=\"fa fa-suitcase pay-icon\"></i>Sub Category</p>\n                          <p class=\"right\"><strong>{{video.sub_category_name}}</strong></p>\n                          <p class=\"section1-line top\"></p>\n    \n                          <p><i class=\"fa fa-file-o pay-icon\"></i>Title</p>\n                          <p class=\"right\"><strong>{{video.title}}</strong></p>\n                          <p class=\"section1-line\"></p>\n    \n                          <p><i class=\"fa fa-user pay-icon\"></i> User Type</p>\n                          <p class=\"right\"><strong>\n                              <span *ngIf=\"video.type_of_user == 1\">\n                                    Normal Users\n                                  </span>\n                                  <span *ngIf=\"video.type_of_user == 2\">\n                                    Paid Users\n                                  </span>\n                                  <span *ngIf=\"video.type_of_user == 3\">\n                                    Both Users\n                                  </span>\n                          </strong></p>\n                          <p class=\"section1-line\"></p>\n    \n                          <p><i class=\"fa fa-hand-o-up pay-icon\"></i> Subcription type</p>\n                          <p class=\"right\"><strong>\n                            <span *ngIf=\"video.type_of_subscription == 1\">\n                                    One Time Payment\n                                  </span>\n                                  <span *ngIf=\"video.type_of_subscription == 2\">\n                                    Recurring Payment\n                                  </span>\n                                  \n                          </strong></p>\n                          <p class=\"section1-line\"></p>\n    \n                          <p><i class=\"fa fa-usd pay-icon\"></i> Amount</p>\n                          <p class=\"right\"><strong>{{video.currency}}{{video.amount}}</strong></p>\n                        </div>\n                      </div>\n    \n                      \n                      <div class=\"col-xs-12 col-sm-6 col-md-7 col-lg-7 p-0 whte-bg\">\n                        <div class=\"spacing payment-status payment-status1\">\n                          <h3 class=\"pay-head\"><i class=\"fa fa-globe pay-icon1\" ></i><span>Pay per view</span></h3>\n                          <h3 class=\"table-title\">Amount</h3>\n    \n                          <p style=\"color: #000\" class=\"pay-para\"  *ngIf=\"video.type_of_user == 3\"><small>If you subscribe also , you need to pay for this selected video</small></p>\n    \n                          <table class=\"table payment-tabel\">\n                            <tbody>\n                              <tr>\n                              <!-- <tr class=\"active\"> -->\n                                <td>Subtotal</td>\n                                <td>{{video.currency}}{{video.amount}}</td>\n                            </tr>\n                           <!--  <tr>\n                                <td>Tax</td>\n                                <td>$0.00</td>\n                            </tr> -->\n                            <tr class=\"warning\">\n                            <!-- <tr class=\"active\"> -->\n                                <td>Total</td>\n                                <td>{{video.currency}}{{video.amount}}</td>\n                            </tr>\n                        </tbody>\n                      </table> \n    \n                      <h4 class=\"table-title\">Have a coupon ?</h4>\n    \n                      <table class=\"table\">\n                            <tbody>\n                              <tr>\n                              <!-- <tr class=\"active\"> -->\n                                <td style=\"width: 100px;vertical-align: middle;\">Promo Code</td>\n                                <td><input type=\"text\" name=\"coupon_code\" id=\"coupon_code\" [(ngModel)]=\"coupon_code\" class=\"form-control coupon-form\"></td>\n                                <td><button class=\"payment-submit\" style=\"margin-top:0\" (click)=\"apply_coupon_ppv(coupon_code)\">Apply</button></td>\n                            </tr>\n                             <tr class=\"showPay\" style=\"display: none\">\n                              <!-- <tr class=\"active\"> -->\n                                <td>Coupon Amount</td>\n                                <td></td>\n                                <td>{{original_coupon_amount}}</td>\n                            </tr>\n                            <tr class=\"warning showPay\" style=\"display: none\">\n                              <!-- <tr class=\"active\"> -->\n                                <td>Grant Total</td>\n                                <td></td>\n                                <td>{{video.currency}}{{remaining_amount}}</td>\n                            </tr>\n                        </tbody>\n                      </table>\n    \n                      <h3 class=\"no-margin top1 black-clr\"><span><i class=\"fa fa-credit-card-alt icon\"></i></span>Payment Options</h3>\n                           <div class=\"black-clr\">\n                             <label>\n                              <input type=\"radio\" class=\"option-input radio\" name=\"type_of_payment\" checked value=\"1\"/>\n                              PayPal\n                          </label>\n                          <label>\n                              <input type=\"radio\" class=\"option-input radio\" name=\"type_of_payment\" value=\"0\"/>\n                             Card Payment\n                          </label>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                      <div class=\"text-right\">\n                        <button class=\"payment-submit payment-tabel-btn\" (click)=\"sendToPaypal(video.admin_video_id)\" id=\"payment_ppv_button\"><i class=\"fa fa-cc-mastercard\"></i> Pay</button>\n                      </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n             </div>\n        </div>\n        <div class=\"push\"></div>\n    </div>"

/***/ }),

/***/ "./src/app/components/pay-per-view/pay-per-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pay-per-view/pay-per-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: PayPerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPerViewComponent", function() { return PayPerViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_app_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app-global */ "./src/app/app-global.ts");







var PayPerViewComponent = /** @class */ (function () {
    function PayPerViewComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.sessionStorage = {};
        this.video = {};
        this.apply_coupon_ppv = function (coupon_code) {
            var _this = this;
            if (coupon_code == undefined || coupon_code == '') {
                UIkit.notify({ message: "Promo Code is required", timeout: 3000, pos: 'top-center', status: 'danger' });
                return false;
            }
            var id = this.route.snapshot.paramMap['params'].id;
            this.apiService.ApplyCouponPpv({ id: this.user_id, token: this.access_token, admin_video_id: id, coupon_code: coupon_code })
                .subscribe(function (data) {
                if (data.success) {
                    _this.coupon_amount = data.data.coupon_amount;
                    _this.remaining_amount = data.data.remaining_amount;
                    _this.coupon_code = coupon_code;
                    _this.original_coupon_amount = data.data.original_coupon_amount;
                    $(".showPay").show();
                }
                else {
                    _this.coupon_amount = 0;
                    _this.coupon_code = "";
                    _this.remaining_amount = 0;
                    $(".showPay").hide();
                    _this.original_coupon_amount = 0;
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        };
        this.sendToPaypal = function (id) {
            var _this = this;
            this.type_of_payment = $("input[name='type_of_payment']:checked").val();
            var amt = 1;
            if (this.coupon_code != '' && typeof (this.coupon_code) != undefined) {
                amt = this.remaining_amount;
            }
            if (amt <= 0) {
                this.apiService.Payppv({ id: this.user_id, token: this.access_token, admin_video: id, coupon_code: this.coupon_code })
                    .subscribe(function (data) {
                    $("#payment_ppv_button").html("Pay Now");
                    $("#payment_ppv_button").attr('disabled', false);
                    if (data.success) {
                        _this.router.navigateByUrl('/pay-per-view-success/' + id);
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                });
            }
            else {
                if (confirm('Are you sure want to proceed to see the video ?')) {
                    $("#payment_ppv_button").html("Request Sending...");
                    $("#payment_ppv_button").attr('disabled', true);
                    if (this.type_of_payment == 1) {
                        if (this.coupon_code != '') {
                            window.location.href = src_app_app_global__WEBPACK_IMPORTED_MODULE_5__["AppGlobal"].apiBase + "videoPaypal/" + id + '/' + this.user_id + '/' + this.coupon_code;
                        }
                        else {
                            window.location.href = src_app_app_global__WEBPACK_IMPORTED_MODULE_5__["AppGlobal"].apiBase + "videoPaypal/" + id + '/' + this.user_id;
                        }
                    }
                    else {
                        this.apiService.Stripeppv({ id: this.user_id, token: this.access_token, admin_video_id: id, coupon_code: this.coupon_code })
                            .subscribe(function (data) {
                            $("#payment_ppv_button").html("Pay Now");
                            $("#payment_ppv_button").attr('disabled', false);
                            if (data.success) {
                                _this.router.navigateByUrl('/pay_per_view_success' + id);
                            }
                            else {
                                UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                                return false;
                            }
                        });
                    }
                }
                else {
                    // $state.go('profile.home', {sub_profile_id : memoryStorage.sub_profile_id}, {reload:true});
                }
            }
        };
    }
    PayPerViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.site_settings = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].settings;
        this.user_id = (this.sessionStorage['user_id'] != '' && this.sessionStorage['user_id'] != undefined) ? this.sessionStorage['user_id'] : false;
        this.access_token = (this.sessionStorage['access_token'] != undefined && this.sessionStorage['access_token'] != '') ? this.sessionStorage['access_token'] : '';
        if (this.user_id && this.access_token) {
            var login_bg = $.grep(this.site_settings, function (e) { return e.key == 'common_bg_image'; });
            var bg_image = "";
            if (login_bg.length == 0) {
                console.log("not found");
            }
            else if (login_bg.length == 1) {
                // access the foo property using result[0].foo
                bg_image = login_bg[0].value;
                if (bg_image != '' || bg_image != null || bg_image != undefined) {
                }
                else {
                    bg_image = '';
                }
            }
            else {
                // multiple items found
                bg_image = "";
            }
            this.login_bg = bg_image;
            var site_name = $.grep(this.site_settings, function (e) { return e.key == 'site_name'; });
            var name = "";
            if (site_name.length == 0) {
                console.log("not found");
            }
            else if (site_name.length == 1) {
                // access the foo property using result[0].foo
                name = site_name[0].value;
                if (name != '' || name != null || name != undefined) {
                }
                else {
                    name = '';
                }
            }
            else {
                // multiple items found
                name = "";
            }
            this.site_name = name;
            this.user_id = (this.sessionStorage['user_id'] != undefined && this.sessionStorage['user_id'] != '') ? this.sessionStorage['user_id'] : '';
            var id = this.route.snapshot.paramMap['params'].id;
            this.apiService.getSingleVideo({ id: this.user_id, token: this.access_token, admin_video_id: id })
                .subscribe(function (data) {
                if (data.success) {
                    _this.video = data.video;
                    if (data.pay_per_view_status) {
                        UIkit.notify({ message: 'Already you paid the amount for the particular video', timeout: 3000, pos: 'top-center', status: 'success' });
                        _this.router.navigateByUrl('/video/' + _this.video['admin_video_id']);
                    }
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
            this.coupon_amount = 0;
            this.coupon_code = "";
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    PayPerViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pay-per-view',
            template: __webpack_require__(/*! ./pay-per-view.component.html */ "./src/app/components/pay-per-view/pay-per-view.component.html"),
            styles: [__webpack_require__(/*! ./pay-per-view.component.css */ "./src/app/components/pay-per-view/pay-per-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PayPerViewComponent);
    return PayPerViewComponent;
}());



/***/ }),

/***/ "./src/app/components/payment-option/payment-option.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/payment-option/payment-option.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudC1vcHRpb24vcGF5bWVudC1vcHRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/payment-option/payment-option.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/payment-option/payment-option.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <div class=\"login-form\" style=\"padding-top:100px;padding-bottom: 40px;\">\n    <div class=\"section-padding\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3\">\n          <div class=\"white-bg  spacing1 res-spacing\">\n            <h3 class=\"select-head text-center text-uppercase\">Select Payment</h3>\n            <p>\n              <span *ngIf=\"video.type_of_user == 1 \"> \n                <small><b>Note: </b> \n                    You are a Normal User. If you are Paid User, you no need to pay the video payment. You can watch the video anytime. If you want to paid user, Please choose plan and continue the same.\n                </small>\n\t\t\t\t\t    </span> \n\t\t\t\t\t\t</p>\n            <p *ngIf=\"video.type_of_user == 2\">\n              <small><b>Note: </b> If you subscribe also , you need to pay for this selected video</small>\n            </p>\n            <div class=\"card-1\">\n                <div class=\"amount-sec\">\n                    <h2 class=\"select-amount\">Plans</h2>\n                </div>\n                <div class=\"text-sec\">\n                    <h4 >Subscription plan</h4>\n                    <a href=\"/subscriptions/{{ sub_profile_id }}\" class=\"text-uppercase\"><P>Click here to subscribe</P></a>\n                </div>\n            </div>\n            <div class=\"card-1\">\n                <div class=\"amount-sec\">\n                    <h2 class=\"select-amount\">{{video.currency}}{{video.amount}}</h2>\n                </div>\n                <div class=\"text-sec\">\n                    <h4>Pay per video (<span *ngIf=\"video.type_of_subscription == 1\">One Time Payment</span><span *ngIf=\"video.type_of_subscription == 2\">Recurring Payment</span>)</h4>\n                    <a href=\"/pay_per_view/{{video.admin_video_id}}\" class=\"text-uppercase\"><P>Click here to pay per video</P></a>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"push\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/payment-option/payment-option.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/payment-option/payment-option.component.ts ***!
  \***********************************************************************/
/*! exports provided: PaymentOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentOptionComponent", function() { return PaymentOptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");






var PaymentOptionComponent = /** @class */ (function () {
    function PaymentOptionComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.sessionStorage = {};
        this.video = {};
    }
    PaymentOptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('payment apppSetting getting!!!!', _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].settings);
        this.site_settings = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].settings;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.user_id = (this.sessionStorage['user_id'] != '' && this.sessionStorage['user_id'] != undefined) ? this.sessionStorage['user_id'] : false;
        this.access_token = (this.sessionStorage['access_token'] != undefined && this.sessionStorage['access_token'] != '') ? this.sessionStorage['access_token'] : '';
        if (this.user_id && this.access_token) {
            this.sub_profile_id = this.sessionStorage['sub_profile_id'];
            if (this.sessionStorage['user_type'] == 1) {
                var key = this.route.snapshot.paramMap['params'].id;
                this.sessionStorage['saved_subscription_video_id'] = key;
                localStorage.setItem('sessionStorage', JSON.stringify(this.sessionStorage));
                this.router.navigateByUrl('/pay-per-view/' + key);
                return false;
            }
            var login_bg = $.grep(this.site_settings, function (e) { return e.key == 'common_bg_image'; });
            var bg_image = "";
            if (login_bg.length == 0) {
                console.log("not found");
            }
            else if (login_bg.length == 1) {
                // access the foo property using result[0].foo
                bg_image = login_bg[0].value;
                if (bg_image != '' || bg_image != null || bg_image != undefined) {
                }
                else {
                    bg_image = '';
                }
            }
            else {
                // multiple items found
                bg_image = "";
            }
            this.login_bg = bg_image;
            var id = this.route.snapshot.paramMap['params'].id;
            this.apiService.getSingleVideo({ id: this.user_id, token: this.access_token, admin_video_id: id }).
                subscribe(function (data) {
                console.log('data', data);
                if (data.success) {
                    _this.video = data.video;
                    _this.sessionStorage['saved_subscription_video_id'] = _this.route.snapshot.paramMap['params'].id;
                    localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
            console.log('t his.video', this.video);
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    PaymentOptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-option',
            template: __webpack_require__(/*! ./payment-option.component.html */ "./src/app/components/payment-option/payment-option.component.html"),
            styles: [__webpack_require__(/*! ./payment-option.component.css */ "./src/app/components/payment-option/payment-option.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PaymentOptionComponent);
    return PaymentOptionComponent;
}());



/***/ }),

/***/ "./src/app/components/player/player.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/player/player.component.ts ***!
  \*******************************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.ngAfterViewInit = function () {
        if (this.parentId && this.videoOpts) {
            var defaultOpts = {
                parentId: this.parentId
            };
            var Opts = Object.assign(this.videoOpts, defaultOpts);
            console.log(Opts);
            new FWDEVPlayer(Opts);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parentId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], Player.prototype, "parentId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('opts'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Player.prototype, "videoOpts", void 0);
    Player = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fwd',
            template: "\n    <div [id]=\"parentId\"></div>"
        })
    ], Player);
    return Player;
}());



/***/ }),

/***/ "./src/app/components/pop-up-video/pop-up-video.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/pop-up-video/pop-up-video.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wLXVwLXZpZGVvL3BvcC11cC12aWRlby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pop-up-video/pop-up-video.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pop-up-video/pop-up-video.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" style=\"position: relative;\">\n  <div style=\"width: 90% !important;margin: 0 auto;\">\n      <fwd *ngIf = \"videoFetched\" parentId=\"video01\" [opts] = \"opts\"></fwd>\n  </div>\n  <div class=\"embed-link\">\n      <div class=\"embed_icon\">\n          <div class=\"modal fade embed-top\" id=\"embed-popup\" role=\"dialog\">\n              <div class=\"modal-dialog\">\n                  <!-- Modal content-->\n                  <div class=\"modal-content embed-bg\" style=\"background-image: url(img/img7.jpg);\">\n                      <div class=\"embed-overlay\">\n                          <div class=\"modal-header\">\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                              <h4 class=\"modal-title\">Video Name</h4>\n                          </div>\n                          <div class=\"modal-body\">\n                              <textarea type=\"text\" row=\"\" name=\"embed_link\" [(ngModel)]=\"embed_link\" class=\"form-control\" id=\"embed_link\"></textarea>\n                          </div>\n                          <div class=\"modal-footer\">\n                              <div class=\"text-right\">\n                                  <button type=\"button\" class=\"payment-submit\" title=\"Copy Link\" (click)=\"copyFromTextBox()\">Copy</button>\n                                  <!-- <button type=\"button\" class=\"btn btn-danger btn-sm\" title=\"Cancel\" (click)=\"closePopup()\"  data-dismiss=\"modal\">Cancel</button> -->\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pop-up-video/pop-up-video.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pop-up-video/pop-up-video.component.ts ***!
  \*******************************************************************/
/*! exports provided: PopUpVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpVideoComponent", function() { return PopUpVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_router_ext_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/router-ext.service */ "./src/app/services/router-ext.service.ts");
/* harmony import */ var src_app_app_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app-global */ "./src/app/app-global.ts");








var PopUpVideoComponent = /** @class */ (function () {
    function PopUpVideoComponent(apiService, router, route, RouterExtService) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.RouterExtService = RouterExtService;
        this.videoFetched = false;
        this.videoData = {};
        this.title = "FWD";
        this.opts = {
            instanceName: 'first-video',
            mainFolderPath: "/assets/fwd-content",
            skinPath: "minimal_skin_dark",
            initializeOnlyWhenVisible: "no",
            displayType: "fullscreen",
            autoScale: "yes",
            fillEntireVideoScreen: "no",
            openDownloadLinkOnMobile: "no",
            useHEXColorsForSkin: "no",
            normalHEXButtonsColor: "#FF0000",
            selectedHEXButtonsColor: "#FFFFFF",
            privateVideoPassword: "428c841430ea18a70f7b06525d4b748a",
            startAtTime: "",
            stopAtTime: "",
            startAtVideoSource: 2,
            videoSource: [],
            posterPath: "/assets/fwd-content/posters/360.jpg",
            showErrorInfo: "yes",
            fillEntireScreenWithPoster: "no",
            rightClickContextMenu: "default",
            disableDoubleClickFullscreen: "no",
            useChromeless: "no",
            showPreloader: "yes",
            addKeyboardSupport: "yes",
            autoPlay: "yes",
            loop: "no",
            maxWidth: 2500,
            maxHeight: 1500,
            volume: .8,
            greenScreenTolerance: 200,
            backgroundColor: "#000000",
            posterBackgroundColor: "#0099FF",
            //logo settings
            showLogo: "yes",
            hideLogoWithController: "yes",
            logoPosition: "topRight",
            logoLink: "http://www.webdesign-flash.ro",
            logoMargins: 5,
            //controller settings
            showController: "yes",
            showControllerWhenVideoIsStopped: "yes",
            showVolumeScrubber: "yes",
            showVolumeButton: "yes",
            showTime: "yes",
            showQualityButton: "yes",
            showShareButton: "yes",
            showEmbedButton: "no",
            showDownloadButton: "no",
            showFullScreenButton: "yes",
            repeatBackground: "yes",
            controllerHeight: 41,
            controllerHideDelay: 3,
            startSpaceBetweenButtons: 7,
            spaceBetweenButtons: 9,
            mainScrubberOffestTop: 14,
            scrubbersOffsetWidth: 4,
            timeOffsetLeftWidth: 5,
            timeOffsetRightWidth: 3,
            volumeScrubberWidth: 80,
            volumeScrubberOffsetRightWidth: 0,
            timeColor: "#888888",
            youtubeQualityButtonNormalColor: "#888888",
            youtubeQualityButtonSelectedColor: "#FFFFFF",
            //cuepoints
            executeCuepointsOnlyOnce: "no",
            //subtitles
            showSubtitleButton: "yes",
            subtitlesOffLabel: "Subtitle off",
            startAtSubtitle: 1,
            //audio visualizer
            audioVisualizerLinesColor: "#0099FF",
            audioVisualizerCircleColor: "#FFFFFF",
            //advertisement on pause window
            aopwTitle: "Advertisement",
            aopwSource: "",
            aopwWidth: 400,
            aopwHeight: 240,
            aopwBorderSize: 6,
            aopwTitleColor: "#FFFFFF",
            //playback rate / speed
            showPlaybackRateButton: "no",
            defaultPlaybackRate: "1",
            //embed window
            embedWindowCloseButtonMargins: 0,
            borderColor: "#333333",
            mainLabelsColor: "#FFFFFF",
            secondaryLabelsColor: "#a1a1a1",
            shareAndEmbedTextColor: "#5a5a5a",
            inputBackgroundColor: "#000000",
            inputColor: "#FFFFFF"
        };
    }
    PopUpVideoComponent.prototype.addVideoSource = function (videoLink) {
        this.opts.videoSource.push({ source: videoLink, label: "small version", is360: "yes" });
        this.videoFetched = true;
    };
    PopUpVideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        $("#page_preloader").show();
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.site_settings = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].settings;
        this.user_id = (this.sessionStorage['user_id'] != '' && this.sessionStorage['user_id'] != undefined) ? this.sessionStorage['user_id'] : false;
        this.access_token = (this.sessionStorage['access_token'] != undefined && this.sessionStorage['access_token'] != '') ? this.sessionStorage['access_token'] : '';
        if (this.user_id && this.access_token) {
            this.sub_profile_id = this.sessionStorage['sub_profile_id'];
            this.user_type = (this.sessionStorage['user_type'] == undefined || this.sessionStorage['user_type'] == 0) ? true : false;
            this.height = $(window).height();
            this.page_not_changed = true;
            var id = this.route.snapshot.paramMap['params'].id;
            this.id = 'http://localhost:4200/popupVideo/' + id;
            this.apiService.getSingleVideo({ id: this.user_id, token: this.access_token, device_type: 'web', admin_video_id: id })
                .subscribe(function (data) {
                if (data.success) {
                    _this.videoData = data;
                    _this.embed_link = src_app_app_global__WEBPACK_IMPORTED_MODULE_6__["AppGlobal"].apiBase + "embed?v_t=2&u_id=" + data.video.unique_id;
                    _this.sessionStorage['saved_subscription_video_id'] = "";
                    localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
                    if (_this.videoData['pay_per_view_status']) {
                    }
                    else {
                        _this.page_not_changed = false;
                        _this.sessionStorage['saved_subscription_video_id'] = _this.route.snapshot.paramMap['params'].id;
                        localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
                        _this.router.navigateByUrl('pay_per_viedw/' + _this.videoData['video'].admin_video_id);
                    }
                    if (_this.videoData['pay_per_view_status'] && _this.videoData['video'].amount <= 0) {
                        if (_this.user_type) {
                            _this.page_not_changed = false;
                            _this.sessionStorage.saved_subscription_video_id = _this.route.snapshot.paramMap['params'].id;
                            localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
                            _this.router.navigateByUrl('/subscriptions/' + _this.sessionStorage.sub_profile_id);
                        }
                    }
                    if (_this.page_not_changed) {
                        _this.sessionStorage.continous_watch_video_id = _this.route.snapshot.paramMap['params'].id;
                        _this.sessionStorage.continous_sub_profile_id = _this.sessionStorage.sub_profile_id;
                        localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
                        _this.player_ins = "ins_" + _this.videoData['video'].admin_video_id;
                        _this.source = _this.videoData['video'].video;
                        _this.addVideoSource(_this.source);
                        $("html>div").css("z-index", 1000);
                    }
                    ;
                    $("#page_preloader").show();
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    _this.router.navigateByUrl('/');
                    return false;
                }
            });
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    PopUpVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pop-up-video',
            template: __webpack_require__(/*! ./pop-up-video.component.html */ "./src/app/components/pop-up-video/pop-up-video.component.html"),
            styles: [__webpack_require__(/*! ./pop-up-video.component.css */ "./src/app/components/pop-up-video/pop-up-video.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_router_ext_service__WEBPACK_IMPORTED_MODULE_5__["RouterExtService"]])
    ], PopUpVideoComponent);
    return PopUpVideoComponent;
}());



/***/ }),

/***/ "./src/app/components/profiles/add-profile/add-profile.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/profiles/add-profile/add-profile.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZXMvYWRkLXByb2ZpbGUvYWRkLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/profiles/add-profile/add-profile.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/profiles/add-profile/add-profile.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" *ngIf=\"loadStatus\">\n  <nav class=\"navbar navbar-default form-navbar\" role=\"navigation\">\n    <div class=\"banner-spacing\">\n      <div class=\"navbar-header form-header\">\n        <a class=\"navbar-brand\" routherLink=\"/\">\n\t\t\t\t\t<img src=\"{{AppSettings.site_logo}}\" class=\"hidden-xs\">\n\t\t\t\t\t<img src=\"{{AppSettings.site_logo}}\" class=\"visible-xs\">\n\t\t\t\t</a>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"content-panel\">\n    <div class=\"profiles-gate-container\">\n      <div class=\"centered-div\">\n        <div class=\"profile-actions-container\">\n          <h1>Add Profile</h1>\n          <h2>Add a profile for another person watching {{site_name}}.</h2>\n          <form #addForm=\"ngForm\" enctype=\"multipart/form-data\">\n            <div class=\"profile-metadata profile-entry\">\n              <div class=\"main-profile-avatar\" style=\"position: relative;\">\n                <img src=\"{{profileDetail.imgsrc}}\" alt=\"\" style=\"opacity: 1; transform: scale(1); transition-duration: 400ms;\" id=\"preview_picture\">\n                <div class=\"image_sub_profile\" style=\"cursor: pointer;\" (click)=\"openBrowse()\"><i class=\"fa fa-plus-circle\"></i></div>\n              </div>\n              <input type=\"file\" name=\"picture\" id=\"picture\" style=\"display: none\" (change)=\"onFileChange($event)\"\n                accept=\"image/png, image/jpeg\">\n              <div class=\"profile-add-parent\">\n                <div class=\"profile-entry-inputs\">\n                  <input id=\"add-profile-name\" class=\"\" placeholder=\"Name\" type=\"text\" required [(ngModel)]=\"profileDetail.name\" name=\"name\">\n                  <input type=\"type\" name=\"id\" style=\"display: none;\" ng-model=\"id\">\n                  <input type=\"type\" name=\"token\" style=\"display: none;\" ng-model=\"token\">\n                  <label for=\"add-profile-name\" aria-label=\"Name\"></label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"profile-button preferred-action pull-left\" role=\"button\" (click)=\"onAddProfile()\">\n              <span>Continue</span>\n            </div>\n            <a routerLink=\"/view-profiles\">\n              <div class=\"profile-button pull-left\" style=\"margin-left: 5px;\">\n                <span>Cancel</span>\n              </div>\n            </a>\n            <div class=\"clearfix\"></div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profiles/add-profile/add-profile.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/profiles/add-profile/add-profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProfileComponent", function() { return AddProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _app_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app-global */ "./src/app/app-global.ts");






var AddProfileComponent = /** @class */ (function () {
    function AddProfileComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.profileDetail = {
            imgsrc: '',
            id: '',
            token: '',
            sub_profile_id: '',
            name: ''
        };
        if (localStorage.getItem('logged_in') === 'false') {
            this.router.navigateByUrl('/signin');
        }
        else {
            this.loadStatus = false;
            this.sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
        }
    }
    AddProfileComponent.prototype.ngOnInit = function () {
        if (this.sessionStorage.noOfAccount === this.sessionStorage.active_profiles_length) {
            UIkit.notify({
                message: 'Already you added ' + this.sessionStorage.active_profiles_length
                    + ' profiles in your account. If you want more subscribe and get to Add More Profile.',
                timeout: 3000, pos: 'top-center', status: 'warning'
            });
            this.router.navigateByUrl('/view-profiles');
        }
        else {
            this.profileDetail.imgsrc = _app_global__WEBPACK_IMPORTED_MODULE_5__["AppGlobal"].apiBase + 'placeholder.png';
            this.profileDetail.id = this.sessionStorage.user_id;
            this.profileDetail.token = this.sessionStorage.access_token;
            if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].settings) {
                this.AppSettings = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].settings;
                this.loadStatus = true;
            }
        }
    };
    AddProfileComponent.prototype.openBrowse = function () {
        jQuery('#picture').click();
    };
    AddProfileComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            this.file = event.target.files[0];
            this.reader = new FileReader();
            this.reader.onload = function (ev) {
                document.getElementById('preview_picture').setAttribute('src', ev.target.result);
            };
            this.reader.readAsDataURL(this.file);
        }
    };
    AddProfileComponent.prototype.onAddProfile = function () {
        var _this = this;
        if (this.profileDetail.name === '') {
            UIkit.notify({ message: 'Name should not be an empty', timeout: 3000, pos: 'top-center', status: 'danger' });
        }
        else {
            var formData = new FormData();
            if (this.file !== undefined) {
                formData.append('picture', this.file);
            }
            formData.append('name', this.profileDetail.name);
            formData.append('id', this.profileDetail.id);
            formData.append('token', this.profileDetail.token);
            console.log(this.file);
            this.apiService.addNewProfile(formData).subscribe(function (res) {
                if (res.success) {
                    UIkit.notify({ message: 'Successfully added profile into your account', timeout: 3000, pos: 'top-center', status: 'success' });
                    _this.router.navigateByUrl('/view-profiles');
                }
                else {
                    UIkit.notify({ message: res.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                }
            });
        }
    };
    AddProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-profile',
            template: __webpack_require__(/*! ./add-profile.component.html */ "./src/app/components/profiles/add-profile/add-profile.component.html"),
            styles: [__webpack_require__(/*! ./add-profile.component.css */ "./src/app/components/profiles/add-profile/add-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddProfileComponent);
    return AddProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/profiles/edit-profile/edit-profile.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/profiles/edit-profile/edit-profile.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/profiles/edit-profile/edit-profile.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/profiles/edit-profile/edit-profile.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" *ngIf=\"loadStatus\">\n  <nav class=\"navbar navbar-default form-navbar\" role=\"navigation\">\n    <div class=\"banner-spacing\">\n      <div class=\"navbar-header form-header\">\n        <a class=\"navbar-brand\" routherLink=\"/\">\n\t\t\t\t\t<img src=\"{{AppSettings.site_logo}}\" class=\"hidden-xs\">\n\t\t\t\t\t<img src=\"{{AppSettings.site_logo}}\" class=\"visible-xs\">\n\t\t\t\t</a>\n      </div>\n    </div>\n  </nav>\n  <div class=\"content-panel\">\n    <div class=\"profiles-gate-container\">\n      <div class=\"centered-div\">\n        <div class=\"profile-actions-container\">\n          <h1>Edit Profile</h1>\n          <!-- <h2>Add a profile for another person watching Netflix.</h2> -->\n          <form id=\"sub_profile\" #editForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"profile-metadata profile-entry\">\n              <div class=\"main-profile-avatar\" style=\"position: relative;\">\n                <img src=\"{{profile.picture}}\" alt=\"\" style=\"opacity: 1; transform: scale(1); transition-duration: 400ms;\" id=\"preview_picture\">\n                <div class=\"image_sub_profile\" style=\"cursor: pointer;\" (click)=\"openBrowse()\"><i class=\"fa fa-pencil\"></i></div>\n              </div>\n              <input type=\"file\" name=\"picture\" style=\"display: none\" (change)=\"onFileChange($event)\" accept=\"image/png, image/jpeg\" id=\"picture\" >\n              <div class=\"profile-add-parent\">\n                <div class=\"profile-entry-inputs\">\n                  <input id=\"add-profile-name\" placeholder=\"Name\" type=\"text\" name=\"name\" value=\"{{profile.name}}\" [(ngModel)]=\"profile.name\">\n                  <input type=\"hidden\" name=\"id\" value=\"{{profileDetail.id}}\">\n                  <input type=\"hidden\" name=\"sub_profile_id\" value=\"{{profile.id}}\">\n                  <input type=\"hidden\" name=\"token\" value=\"{{profileDetail.token}}\">\n                  <label for=\"add-profile-name\" aria-label=\"Name\"></label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"profile-button preferred-action pull-left\" role=\"button\" (click)=\"onEditProfile()\">\n              <span>Save</span>\n            </div>\n            <a routerLink=\"/view-profiles\">\n              <div class=\"profile-button pull-left\" style=\"margin-left: 5px;\">\n                <span>Cancel</span>\n              </div>\n            </a>\n\n            <a (click)=\"onDeleteProfile(profile.id)\" class=\"hidden-xxs\">\n              <div class=\"profile-button pull-left\" style=\"margin-left: 5px;\">\n                <span>Delete Profile</span>\n              </div>\n            </a>\n\n            <a (click)=\"onDeleteProfile(profile.id)\" class=\"visible-xxs\">\n              <div class=\"profile-button pull-left\" style=\"margin-left: 5px;\">\n                <span>Delete</span>\n              </div>\n            </a>\n            <div class=\"clearfix\"></div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profiles/edit-profile/edit-profile.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/profiles/edit-profile/edit-profile.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _app_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app-global */ "./src/app/app-global.ts");






var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(apiService, router, activateRouter) {
        this.apiService = apiService;
        this.router = router;
        this.activateRouter = activateRouter;
        this.profileDetail = {
            imgsrc: '',
            id: '',
            token: '',
            sub_profile_id: ''
        };
        if (localStorage.getItem('logged_in') === 'false') {
            this.router.navigateByUrl('/signin');
        }
        else {
            this.loadStatus = false;
            this.sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
        }
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.profileDetail.imgsrc = _app_global__WEBPACK_IMPORTED_MODULE_5__["AppGlobal"].apiBase + 'placeholder.png';
        this.profileDetail.id = this.sessionStorage.user_id;
        this.profileDetail.token = this.sessionStorage.access_token;
        this.sessionStorage.profileId = this.activateRouter.snapshot.params.id;
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].settings) {
            this.AppSettings = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].settings;
            this.apiService.getSingleSubscription({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, sub_profile_id: this.activateRouter.snapshot.params.id }).subscribe(function (res) {
                if (res.success) {
                    console.log(res);
                    _this.profile = res.data;
                }
                else {
                    UIkit.notify({ message: res.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                }
                _this.loadStatus = true;
            });
        }
    };
    EditProfileComponent.prototype.openBrowse = function () {
        jQuery('#picture').click();
    };
    EditProfileComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            this.file = event.target.files[0];
            this.reader = new FileReader();
            this.reader.onload = function (ev) {
                document.getElementById('preview_picture').setAttribute('src', ev.target.result);
            };
            this.reader.readAsDataURL(this.file);
        }
    };
    EditProfileComponent.prototype.onEditProfile = function () {
        var _this = this;
        if (this.profile.name === '') {
            UIkit.notify({ message: 'Name should not be an empty', timeout: 3000, pos: 'top-center', status: 'danger' });
        }
        else {
            var formData = new FormData();
            if (this.file !== undefined) {
                formData.append('picture', this.file);
            }
            formData.append('name', this.profile.name);
            formData.append('sub_profile_id', this.profile.id);
            formData.append('id', this.profileDetail.id);
            formData.append('token', this.profileDetail.token);
            this.apiService.sendProfileInfo(formData).subscribe(function (res) {
                if (res.success) {
                    UIkit.notify({ message: 'Successfully added profile into your account', timeout: 3000, pos: 'top-center', status: 'success' });
                    _this.router.navigateByUrl('/view-profiles');
                }
                else {
                    UIkit.notify({ message: res.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                }
            });
        }
    };
    EditProfileComponent.prototype.onDeleteProfile = function (profileId) {
        var _this = this;
        this.apiService.sendDeleteProfile(this.sessionStorage).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                UIkit.notify({ message: 'Successfully deleted profile from your account', timeout: 3000, pos: 'top-center', status: 'success' });
                _this.router.navigateByUrl('/view-profiles');
            }
            else {
                UIkit.notify({ message: res.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
            }
        });
    };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/components/profiles/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/components/profiles/edit-profile/edit-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/profiles/manage-profile/manage-profile.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/profiles/manage-profile/manage-profile.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZXMvbWFuYWdlLXByb2ZpbGUvbWFuYWdlLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/profiles/manage-profile/manage-profile.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/profiles/manage-profile/manage-profile.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" >\n  <nav class=\"navbar navbar-default form-navbar\" role=\"navigation\">\n    <div class=\"banner-spacing\">\n      <div class=\"navbar-header form-header\">\n        <a class=\"navbar-brand\" routherLink=\"/\">\n\t\t\t\t\t<img src=\"{{site_logo}}\" class=\"hidden-xs\">\n\t\t\t\t\t<img src=\"{{site_logo}}\" class=\"visible-xs\">\n\t\t\t\t</a>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"content-panel\">\n    <div class=\"profiles-gate-container\">\n      <div class=\"centered\">\n        <div class=\"list-profiles\">\n          <div class=\"profile-gate-label\">Manage Profiles</div>\n          <ul class=\"choose-profile\">\n            <li class=\"profile\" *ngFor=\"let profile of profiles\">\n              <div>\n                <a class=\"profile-link\" routerLink=\"/edit-profile/{{profile.id}}\">\n                  <div class=\"avatar-wrapper\">\n                    <div class=\"profile-icon\" [style.backgroundImage]=\"'url('+ profile.picture +')'\" style=\"position: relative;\">\n                      <div class=\"edit_sub_profile\">\n                        <div class=\"edit-round\"><i class=\"fa fa-pencil\"></i></div>\n                      </div>\n                    </div>\n                  </div>\n                  <span class=\"profile-name\">{{profile.name}}</span>\n                </a>\n              </div>\n            </li>\n\n            <li *ngIf=\"profiles?.length < noOfAccount\">\n              <a routherLink=\"/add-profile\">\n                <div class=\"addProfileIcon icon-tvuiAdd\">\n                  <i class=\"fa fa-plus-circle\"></i>\n                </div>\n                <span class=\"profile-name\">Add Profile</span>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <span class=\"profile-button preferred-action\">\n      <a routerLink=\"/view-profiles\">Done</a>\n    </span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profiles/manage-profile/manage-profile.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/profiles/manage-profile/manage-profile.component.ts ***!
  \********************************************************************************/
/*! exports provided: ManageProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProfileComponent", function() { return ManageProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app-settings */ "./src/app/app-settings.ts");





var ManageProfileComponent = /** @class */ (function () {
    function ManageProfileComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        if (localStorage.getItem('logged_in') === 'false') {
            this.router.navigateByUrl('/signin');
        }
        else {
            this.loadStatus = false;
            this.sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
        }
    }
    ManageProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.site_settings = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].settings;
        console.log(this.site_settings);
        this.user_id = (this.sessionStorage.user_id != '' && this.sessionStorage.user_id != undefined) ? this.sessionStorage.user_id : false;
        this.access_token = (this.sessionStorage.access_token != undefined && this.sessionStorage.access_token != '') ? this.sessionStorage.access_token : '';
        if (this.user_id && this.access_token) {
            var login_bg = $.grep(this.site_settings, function (e) { return e.key == 'common_bg_image'; });
            var bg_image = "";
            if (login_bg.length == 0) {
                console.log("not found");
            }
            else if (login_bg.length == 1) {
                // access the foo property using result[0].foo
                bg_image = login_bg[0].value;
                if (bg_image != '' || bg_image != null || bg_image != undefined) {
                }
                else {
                    bg_image = '';
                }
            }
            else {
                // multiple items found
                bg_image = "";
            }
            this.login_bg = bg_image;
            var site_logo = $.grep(this.site_settings, function (e) { return e.key == 'site_logo'; });
            var logo = "";
            if (site_logo.length == 0) {
                console.log("not found");
            }
            else if (site_logo.length == 1) {
                // access the foo property using result[0].foo
                logo = site_logo[0].value;
                if (logo != '' || logo != null || logo != undefined) {
                }
                else {
                    logo = '';
                }
            }
            else {
                // multiple items found
                logo = "";
            }
            this.site_logo = logo;
            var site_icon = $.grep(this.site_settings, function (e) { return e.key == 'site_icon'; });
            var icon = "";
            if (site_icon.length == 0) {
                console.log("not found");
            }
            else if (site_icon.length == 1) {
                // access the foo property using result[0].foo
                icon = site_icon[0].value;
                if (icon != '' || icon != null || icon != undefined) {
                }
                else {
                    icon = '';
                }
            }
            else {
                // multiple items found
                icon = "";
            }
            this.site_icon = icon;
            var site_name = $.grep(this.site_settings, function (e) { return e.key == 'site_name'; });
            var name = "";
            if (site_name.length == 0) {
                console.log("not found");
            }
            else if (site_name.length == 1) {
                // access the foo property using result[0].foo
                name = site_name[0].value;
                if (name != '' || name != null || name != undefined) {
                }
                else {
                    name = '';
                }
            }
            else {
                // multiple items found
                name = "";
            }
            this.site_name = name;
            this.sub_profile_id = (this.sessionStorage.sub_profile_id != undefined && this.sessionStorage.sub_profile_id != '') ? this.sessionStorage.sub_profile_id : '';
            this.apiService.getProfiles({ id: this.user_id, token: this.access_token })
                .subscribe(function (data) {
                if (data.success) {
                    _this.profiles = data.data;
                    console.log(data);
                    _this.sessionStorage.active_profiles_length = _this.profiles.length;
                    localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
                }
                else {
                    if (data.error != undefined && data.error != '') {
                        UIkit.notify({ message: data.error, timeout: 3000, pos: 'top-center', status: 'danger' });
                        window.localStorage.setItem('logged_in', 'false');
                        _this.sessionStorage = {};
                        localStorage.removeItem("sessionStorage");
                        localStorage.clear();
                        _this.router.navigateByUrl('/');
                        return false;
                    }
                    else {
                        UIkit.notify({ message: data.message, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                }
            });
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    ManageProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-profile',
            template: __webpack_require__(/*! ./manage-profile.component.html */ "./src/app/components/profiles/manage-profile/manage-profile.component.html"),
            styles: [__webpack_require__(/*! ./manage-profile.component.css */ "./src/app/components/profiles/manage-profile/manage-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ManageProfileComponent);
    return ManageProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/profiles/view-profile/view-profile.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/profiles/view-profile/view-profile.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZXMvdmlldy1wcm9maWxlL3ZpZXctcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/profiles/view-profile/view-profile.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/profiles/view-profile/view-profile.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" *ngIf=\"loadStatus\">\n\t<nav class=\"navbar navbar-default form-navbar\" role=\"navigation\">\n\t\t<div class=\"banner-spacing\">\n\t\t\t<div class=\"navbar-header form-header\">\n\t\t\t\t<a class=\"navbar-brand\" routerLink=\"/\">\n\t\t\t\t\t<img src=\"{{AppSettings.site_logo}}\" class=\"hidden-xs\">\n\t\t\t\t\t<img src=\"{{AppSettings.site_logo}}\" class=\"visible-xs\">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</nav>\n\t<div class=\"content-panel\">\n\t\t<div class=\"profiles-gate-container\">\n\t\t\t<div class=\"centered\">\n\t\t\t\t<div class=\"list-profiles\">\n\t\t\t\t\t<div class=\"profile-gate-label\">Who's watching?</div>\n\t\t\t\t\t<ul class=\"choose-profile\">\n\t\t\t\t\t\t<li class=\"profile\" *ngFor=\"let profile of profiles\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<a class=\"profile-link\" href=\"/home/{{profile.id}}\">\n\t\t\t\t\t\t\t\t\t<div class=\"avatar-wrapper\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"profile-icon\" [style.backgroundImage]=\"'url('+ profile.picture +')'\"> </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span class=\"profile-name\">{{profile.name}}</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li *ngIf=\"profiles.length < noOfAccount\">\n\t\t\t\t\t\t\t<a routerLink=\"/add-profile\">\n\t\t\t\t\t\t\t\t<div class=\"addProfileIcon icon-tvuiAdd\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-plus-circle\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class=\"profile-name\">Add Profile</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<span class=\"profile-button\">\n\t\t\t<a href=\"/manage-profiles\">Manage Profiles</a>\n\t\t</span>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/profiles/view-profile/view-profile.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/profiles/view-profile/view-profile.component.ts ***!
  \****************************************************************************/
/*! exports provided: ViewProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfileComponent", function() { return ViewProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var ViewProfileComponent = /** @class */ (function () {
    function ViewProfileComponent(apiService, router, titleService) {
        this.apiService = apiService;
        this.router = router;
        this.titleService = titleService;
        this.profiles = [];
        if (localStorage.getItem('logged_in') === 'false') {
            this.router.navigateByUrl('/signin');
        }
        else {
            this.logined = true;
            this.loadStatus = true;
            this.sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
            this.noOfAccount = 0;
        }
        this.titleService.setTitle('Flashington | profile');
    }
    ViewProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        if (_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].settings) {
            this.AppSettings = _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].settings;
            this.apiService.getUserDetail({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token }).subscribe(function (res) {
                console.log(res);
                _this.sessionStorage.access_token = res.token;
                _this.sessionStorage.user_id = res.id;
                _this.sessionStorage.user_type = res.user_type;
                _this.sessionStorage.login_by = res.login_by;
                _this.sessionStorage.user_picture = res.picture;
                _this.sessionStorage.user_name = res.name;
                _this.sessionStorage.sub_profile_id = res.sub_profile_id;
                _this.sessionStorage.one_time_subscription = res.one_time_subscription;
                // localStorage.setItem('sessionStorage', JSON.stringify(this.sessionStorage));
            });
            this.getSubscription();
            this.getProfiles();
        }
    };
    ViewProfileComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.apiService.getUserDetail(this.sessionStorage).subscribe(function (res) {
            console.log(res);
            _this.sessionStorage.access_token = res.token;
            _this.sessionStorage.user_id = res.id;
            _this.sessionStorage.user_type = res.user_type;
            _this.sessionStorage.login_by = res.login_by;
            _this.sessionStorage.user_picture = res.picture;
            _this.sessionStorage.user_name = res.name;
            _this.sessionStorage.sub_profile_id = res.sub_profile_id;
            _this.sessionStorage.one_time_subscription = res.one_time_subscription;
            localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
        });
    };
    ViewProfileComponent.prototype.getSubscription = function () {
        var _this = this;
        this.apiService.getSubscription({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token }).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.sessionStorage.noOfAccount = res.data;
                _this.noOfAccount = res.data;
                //localStorage.setItem('sessionStorage', JSON.stringify(this.sessionStorage));
            }
        });
    };
    ViewProfileComponent.prototype.getProfiles = function () {
        var _this = this;
        this.apiService.getProfiles({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token }).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.profiles = res.data;
                _this.sessionStorage.active_profiles_length = res.data.length;
                //  localStorage.setItem('sessionStorage', JSON.stringify(this.sessionStorage));
                _this.loadStatus = true;
            }
        });
    };
    ViewProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-profile',
            template: __webpack_require__(/*! ./view-profile.component.html */ "./src/app/components/profiles/view-profile/view-profile.component.html"),
            styles: [__webpack_require__(/*! ./view-profile.component.css */ "./src/app/components/profiles/view-profile/view-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], ViewProfileComponent);
    return ViewProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/search-video/search-video.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/search-video/search-video.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    .box-head h3{\r\n    \r\n        font-size: 18px;\r\n      color: #e5e5e5;\r\n      font-weight: 700;\r\n      text-decoration: none;\r\n      display: inline-block;\r\n    \r\n      margin:0;\r\n    \r\n    }\r\n    \r\n    .video-box-row {\r\n    \r\n      font-size : 14px;\r\n    \r\n      white-space: normal;\r\n    }\r\n    \r\n    .tile-img {\r\n        max-height: 420px;\r\n        -o-object-fit: fill;\r\n           object-fit: fill;\r\n      }\r\n    \r\n    .tile-media {\r\n        /*border: 2px solid #141414;*/\r\n        height: auto !important;\r\n        text-align: center;\r\n      }\r\n    \r\n    .slick-initialized .slick-slide {\r\n        display: inline-block !important;\r\n        height: 100% !important;\r\n        padding: 0;\r\n      }\r\n    \r\n    .tab-overlay {\r\n        background: rgba(0, 0, 0, .90);\r\n      }\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtdmlkZW8vc2VhcmNoLXZpZGVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJOztRQUVJLGVBQWU7TUFDakIsY0FBYztNQUNkLGdCQUFnQjtNQUNoQixxQkFBcUI7TUFDckIscUJBQXFCOztNQUVyQixRQUFROztJQUVWOztJQUVBOztNQUVFLGdCQUFnQjs7TUFFaEIsbUJBQW1CO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG1CQUFnQjtXQUFoQixnQkFBZ0I7TUFDbEI7O0lBRUE7UUFDRSw2QkFBNkI7UUFDN0IsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtNQUNwQjs7SUFFQTtRQUNFLGdDQUFnQztRQUNoQyx1QkFBdUI7UUFDdkIsVUFBVTtNQUNaOztJQUVBO1FBQ0UsOEJBQThCO01BQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtdmlkZW8vc2VhcmNoLXZpZGVvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5ib3gtaGVhZCBoM3tcclxuICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6ICNlNWU1ZTU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgXHJcbiAgICAgIG1hcmdpbjowO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC52aWRlby1ib3gtcm93IHtcclxuICAgIFxyXG4gICAgICBmb250LXNpemUgOiAxNHB4O1xyXG4gICAgXHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpbGUtaW1nIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA0MjBweDtcclxuICAgICAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAudGlsZS1tZWRpYSB7XHJcbiAgICAgICAgLypib3JkZXI6IDJweCBzb2xpZCAjMTQxNDE0OyovXHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuc2xpY2staW5pdGlhbGl6ZWQgLnNsaWNrLXNsaWRlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAudGFiLW92ZXJsYXkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjkwKTtcclxuICAgICAgfVxyXG4gICAgIl19 */"

/***/ }),

/***/ "./src/app/components/search-video/search-video.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/search-video/search-video.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" id=\"page_content\">\n\n    <div style=\"margin-top:80px !important;margin:5%; padding: 10px;\">\n    \n    <div class=\"box-head\" style=\"margin-bottom: 2%;\">\n       <h3>\"{{title}}\" Search Results</h3>\n    </div>\n    \n    \n    <!-- <p>{{no_results_found}}</p>\n     -->\n    \n    \n    <div class=\"text-center\"  style=\"margin-top:40px !important\"  *ngIf=\"no_results_found\"> \n      <img src=\"{{no_results_found}}\" class=\"img-responsive auto-margin height-250\">\n    </div>\n    <div id=\"all_data\"></div>\n    <div class=\"box video-box-row\" *ngFor=\"let video of datas.data; let parentindex = index\">\n    \n      <div  id=\"{{childindex}}_{{parentindex}}\" (mouseover)=\"hoverIn(this,childindex, parentindex, video.length)\" (mouseleave)=\"hoverOut(this, childindex, parentindex, video.length)\" class=\"tile col-lg-2 col-md-2 col-sm-2 col-xs-6 slide-box video-box\" *ngFor=\"let value of video; let childindex = index\">\n          <div class=\"video-box-outer\">\n          \n              <div class=\"tile-media\" id=\"{{childindex}}_{{parentindex}}_img\">\n                  <img class=\"tile-img\" src=\"{{value.default_image}}\" alt=\"\" [ngStyle]=\"media_height\"/><!-- 3rd image-->\n                  <!-- <img class=\"tile-img first\" ng-src=\"{{value.default_image}}\" alt=\"\"/>\n                  <img class=\"tile-img first\" ng-src=\"{{value.default_image}}\" alt=\"\"/> -->\n              </div>\n    \n              <div class=\"tile-details\">\n    \n                <div class=\"video_amount\" *ngIf=\"value.amount > 0 && !value.pay_per_view_status\">\n                  <!-- <span *ngIf=\"value.pay_per_view_status\">PAID</span> -->\n                  <span>PAY- {{value.currency}} {{value.amount}}</span>\n    \n                </div>\n                <!-- <a ui-sref=\"single_video({id : value.admin_video_id})\">\n                  <div class=\"hover-icon\" id=\"{{parentindex}}_{{parentindex}}_div\">\n                    <i class=\"fa fa-play\"></i>\n                  </div>\n                </a> -->\n                <span *ngIf=\"value.pay_per_view_status\">\n              <a href=\"/video/{{value.admin_video_id}}\">\n                    <div class=\"hover-icon\" id=\"{{childindex}}_{{parentindex}}_div\">\n                      <i class=\"fa fa-play\" id=\"{{childindex}}_{{parentindex}}_icon\"></i>\n                    </div>\n                  </a>\n            </span>\n            <span *ngIf=\"value.pay_per_view_status\">\n              <a href=\"/payment-option/{{value.admin_video_id}}\">\n                    <div class=\"hover-icon\" id=\"{{childindex}}_{{parentindex}}_div\">\n                      <i class=\"fa fa-play\" id=\"{{childindex}}_{{parentindex}}_icon\"></i>\n                    </div>\n                  </a>\n            </span>\n    \n            <div class=\"tile-content\" id=\"{{childindex}}_{{parentindex}}_desc\">\n                    <h3 class=\"tile-tit\">{{value.title}}</h3>\n    \n                    <div class=\"row no-margin hidden-cls\">\n                <div class=\"pull-left\">\n                  <div>\n                    <div class=\"rating-symbol glyphicon\"\n                    [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 1), 'glyphicon-star' : (value.ratings >= 1)}\">\n                      \n                    </div>\n                    <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 2), 'glyphicon-star' : (value.ratings >= 2)}\">\n                      \n                    </div>\n                    <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 3), 'glyphicon-star' : (value.ratings >= 3)}\">\n                      \n                    </div>\n                    <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 4), 'glyphicon-star' : (value.ratings >= 4)}\">\n                      \n                    </div>\n                    <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 5), 'glyphicon-star' : (value.ratings >= 5)}\">\n                      \n                    </div>\n                  </div>\n                </div>\n                <p class=\"video-season\">\n                  <span>{{value.release_date && value.release_date !=\"0000-00-00\" ? value.release_date:'' }}</span>\n                  <span class=\"video-epi-count\">{{value.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{value.watch_count}}</span>\n                  <span>{{value.duration}}</span>\n                </p>\n              </div>\n    \n              <div class=\"\">\n                <div class=\"video-des\">\n                  <p class=\"video-des-inner\">{{value.description}}</p>\n                </div>\n              </div>\n    \n              <div class=\"text-center\">\n                <a (click)=\"showVideoDrop(this, childindex, parentindex,video.length)\" class=\"arrow\"><img src=\"assets/img/down-arrow-red.png\" class=\"arrow_down\" /></a>\n              </div>\n            </div>\n    \n              </div>\n          </div>\n          \n        </div>\n     \n       <!-- <div class=\"clearfix\"></div> -->\n    \n       <div class=\"video-drop\" style=\"margin-top: 1% !important; clear: both;\" id=\"{{lastindex}}_{{parentindex}}_video_drop\" *ngFor=\"let value of video; let lastindex = index\">\n        <div class=\"tab-content\">\n    \n          <!-- OVERVIEW SECTION  -->\n            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"{{lastindex}}_{{parentindex}}_overview\">\n              <div class=\"overview tab-section relative\">\n                <div class=\"close-tab\">\n                <a style=\"cursor: pointer;\" (click)=\"closeDiv(lastindex,parentindex)\" class=\"close-btn\">\n                  <i class=\"fa fa-times\"></i>\n                </a>\n              </div>\n                \n                <div class=\"tab-section-content row no-margin\">\n                  <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-5 no-pad overview-details\">\n                    \n                  </div>\n    \n                  <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7 no-pad\">\n                    <div class=\"linear-outer\">\n                      \n                      <div class=\"linear\">\n                      </div>\n                      <div class=\"rotate-img-outer\">\t\n                        <div class=\"rotate-img highlight-img bg-img\"  [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\"></div>\n                        <!-- <div class=\"rotate-img highlight-img bg-img\" style=\"background-image: url({{value.video_gif_image}});\"></div> -->\n                      </div>\n    \n                      <div class=\"play-icon-outer\">\n                        <!-- <a ui-sref=\"single_video({id : value.admin_video_id})\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a> -->\n    \n                        <span *ngIf=\"value.pay_per_view_status\">\n                          <a href=\"/video/{{value.admin_video_id}}\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a>\n                        </span>\n                        <span *ngIf=\"!value.pay_per_view_status\">\n                          <a href=\"/payment-option/{{value.admin_video_id}}\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a>\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n    \n                <div class=\"home-new-deatils\">\n                  <div class=\"overview-details\" style=\"background-color: unset;\">\n                      <h3 class=\"content-tit\">{{value.title}}</h3>\n    \n                      <div class=\"row no-margin hidden-xs\">\n                        <div class=\"pull-left\">\n                          <div>\n                            <div class=\"rating-symbol glyphicon\"\n                            [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 1), 'glyphicon-star' : (value.ratings >= 1)}\">\n                              \n                            </div>\n                            <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 2), 'glyphicon-star' : (value.ratings >= 2)}\">\n                              \n                            </div>\n                            <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 3), 'glyphicon-star' : (value.ratings >= 3)}\">\n                              \n                            </div>\n                            <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 4), 'glyphicon-star' : (value.ratings >= 4)}\">\n                              \n                            </div>\n                            <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 5), 'glyphicon-star' : (value.ratings >= 5)}\">\n                              \n                            </div>\n                          </div>\n                        </div>\n                        <p class=\"content-txt bold seasons\">\n                          <span class=\"green-clr\">{{value.release_date && value.release_date !=\"0000-00-00\" ? value.release_date:'' }}</span>\n                          <span class=\"epi-count\">{{value.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{value.watch_count}}</span>\n                          <span>{{value.duration}}</span>\n                        </p>\n                      </div>\n    \n    \n                        <div class=\"\">\n    \n                        <div class=\"pull-left\">\n    \n                          <a class=\"white-icon\">\n                            <i class=\"fa fa-thumbs-up\"></i><span id=\"like_count_{{lastindex}}_{{parentindex}}\">{{value.like_count}}</span>\n                          </a>\n                          <a class=\"white-icon\">\n                            <i class=\"fa fa-thumbs-down\"></i><span id=\"dis_like_count_{{lastindex}}_{{parentindex}}\">{{value.dis_like_count}}</span>\n                          </a>\n    \n                        </div>\n    \n    \n                        <div class=\"pull-left\">\n    \n                          <div class=\"display_amount\" *ngIf=\"value.amount > 0 && !value.pay_per_view_status\" style=\"margin-left: 5px;\">\n                              <!-- <span *ngIf=\"recent_video.pay_per_view_status\">PAID</span> -->\n                              <span>PAY - {{value.currency}} {{value.amount}}</span>\n                            </div>\n    \n                          </div>\n    \n                          <div class=\"clearfix\"></div>\n                      </div>\n    \n                      <div>\n                        <p class=\"content-txt overview-des\">{{value.description}}</p>\n    \n                        <!-- <p class=\"content-txt awards\"><i class=\"fa fa-trophy\"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p> -->\n                      </div>\n    \n                      <div id=\"my-list-txt_{{lastindex}}_{{parentindex}}\" class=\"pull-left\">\n                      \n                        <a (click)=\"addWishlist(value.admin_video_id, lastindex, parentindex)\" class=\"bold\" id=\"\" *ngIf=\"!value.wishlist_status\" style=\"cursor: pointer;\">\n                          <button class=\"my-list\">\n                            <i class=\"fa fa-plus my-list-icon\"></i>\n                            <span class=\"my-list-txt\">My List</span>\n                          </button> \n                        </a>\n                        <a (click)=\"removeWishlist(value.wishlist_status, value.admin_video_id,lastindex, parentindex)\" class=\"bold\" *ngIf=\"value.wishlist_status\" style=\"cursor: pointer;\">\n                          <button class=\"my-list\">\n                            <i class=\"fa fa-check my-list-icon\"></i>\n                            <span class=\"my-list-txt\">My List</span> \n                          </button>\n                        </a>\n                      </div>\n                      <div class=\"banner-icon-sec hidden-xs\">\n                        <a id=\"like_{{lastindex}}_{{parentindex}}\" style=\"cursor: pointer;\"  *ngIf=\"value.is_liked == 1 || value.is_liked == 0\" (click)=\"likeVideo(value.admin_video_id, lastindex, parentindex)\">\n                          <button class=\"banner-icon\">\n                            <i class=\"fa fa-thumbs-up\"></i>\n                          </button>\n                        </a>\n                        <a id=\"dis_like_{{lastindex}}_{{parentindex}}\" style=\"cursor: pointer;\" *ngIf=\"value.is_liked == -1 || value.is_liked == 0\" (click)=\"dislikeVideo(value.admin_video_id, lastindex, parentindex)\">\n                          <button class=\"banner-icon\">\n                            <i class=\"fa fa-thumbs-down\"></i>\n                          </button>\n                        </a>\n                        <a data-toggle=\"modal\" data-target=\"#myModal_{{lastindex}}_{{parentindex}}\" title=\"Report as Spam\" style=\"cursor: pointer;\">\n                          <button class=\"banner-icon\">\n                            <i class=\"fa fa-exclamation \"></i>\n                          </button>\n                        </a>\n                      </div>\n    \n                      <div class=\"modal fade\" id=\"myModal_{{lastindex}}_{{parentindex}}\" role=\"dialog\">\n                        <div class=\"modal-dialog\">\n                            <!-- Modal content-->\n                            <div class=\"modal-content\" style=\"background-color: #333;\">\n                              <div class=\"modal-header\">\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                  <h4 class=\"modal-title bold\">Report This Video</h4>\n                              </div>\n                              <div class=\"modal-body\">\n                                <!-- <form [ngSubmit]=\"spamVideo(value.admin_video_id, parentindex, parentindex)\">\n                                    <div class=\"radio radio-danger\" *ngFor=\"let spam_reason of spam_reasons\">\n                                          <input type=\"radio\" name=\"reason\" id=\"reason_{{value.admin_video_id}}_{{lastindex}}_{{parentindex}}\" value=\"{{spam_reason.value}}\">\n                                          <label for=\"reason_{{value.admin_video_id}}_{{lastindex}}_{{parentindex}}\">\n                                              {{spam_reason.value}}\n                                          </label>\n                                      </div>\n    \n                                      {{spam_reason_value}}\n                                      <p class=\"small bold text-center\">If you report this video, you won't see again the same video in anywhere in your account except \"Spam Videos\". If you want to continue to report this video as same. Click continue and proceed the same.</p>\n                                      <div class=\"text-right\">\n                                        <button type=\"submit\" class=\"payment-submit\">Submit</button>\n                                      </div>\n                                </form> -->\n                              </div>\n                              \n                            </div>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n                              \n              </div>\n          </div>\n          <!-- OVERVIEW SECTION END -->\n    \n    \n    \n          <!-- EPISODES-SECTION\n                  ======================================== -->\n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"{{lastindex}}_{{parentindex}}_episodes\" *ngIf=\"value.is_genre\">\n            <div class=\"episodes-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\n              <div class=\"tab-overlay\">\n    \n                <div class=\"episodes-section-inner tab-section-content tab-sec-inner contain-width\">\n                  <h3 class=\"content-tit\">{{value.sub_category_name}}</h3>\n                  <!-- <form class=\"season-select\">\n                    <div class=\"form-group styled-select black rounde\">\n                         <select id=\"exampleSelect1\" [ngModel]=\"genres_name\" (change)=\"getSeasons(genres_name, {{parentindex}},{{parentindex}},'_sessions', '_loader_seasons', value.genre_id);\">\n                          <option value=\"\">Select Seasons</option>\n                          <option value=\"{{genrename.genre_id}}\" *ngFor=\"genrename in value.genre_names\">\n                          {{genrename.genre_name}}\n                          </option>\n                        </select>\n                    </div>\n                  </form> -->\n    \n                  <div class=\"episodes-list\">\n    \n                  <div id=\"{{childindex}}{{parentindex}}_loader_seasons\" style=\"margin-top: 10px;text-align: center;display: none\">\n                      <img src=\"assets/img/ellipsis.svg\" style=\"width: 40px;\">\n                    </div>\n    \n                    <div id=\"{{childindex}}{{parentindex}}_sessions\" class=\"row\">\n    \n                      <!-- <slick slides-to-show=\"{{epdisode_slide_to_show}}\" slides-to-scroll=\"{{epdisode_slide_to_scroll}}\" dots=\"false\" class=\"episode-slider\"> -->\n                      \n                        <ngx-slick-carousel class=\"carousel episode-slider\"  #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\n                      \n                          <div *ngFor=\"let genre_list of value.first_part\">\n    \n                          <div class=\"episode-list-box\">\n    \n                            <div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + genre_list.default_image + ')'}\">\n                              <div class=\"episode-img-overlay\">\n                                <div class=\"episode-img-inner\">\n                                  <span class=\"epi-count\">{{genre_list.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{genre_list.watch_count}}</span>\n                                </div>\n    \n                                <div class=\"epi-play-icon-outer\">\n    \n                                  <span *ngIf=\"genre_list.pay_per_view_status\">\n                                      <a href=\"/video/{{genre_list.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n                                    </span>\n                                    <span *ngIf=\"genre_list.pay_per_view_status\">\n                                      <a href=\"/payment-option/{{genre_list.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n                                    </span>\n                                </div>\n                              </div>\n                            </div>\n    \n                            <div class=\"episode-list-content\">\n                              <div class=\"row\">\n                                <div class=\"col-md-8 col-sm-12\">\n                                  <h4 class=\"epi-tit gray-color1 txt-overflow\">{{genre_list.title}}</h4>\n                                </div>\n    \n                                <div class=\"col-md-4 text-right hidden-sm\">\n                                  <p class=\"bold gray-color1 epi-tit txt-overflow\">{{genre_list.duration}}</p>\n                                </div>\n                              </div>\n    \n                              <div class=\"\">\n                                <p class=\" gray-color1 overview-des more-link mt-0\">{{genre_list.description}}</p>\n                              </div>\n                            </div>\n    \n                          </div>\n                        \n                        </div>\n    \n                      </ngx-slick-carousel>\n    \n                    </div>\n    \n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- EPISODES-SECTION END-->\n    \n    \n    \n          <!-- TRAILERS SECTION -->\n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"{{lastindex}}_{{parentindex}}_trailers\" *ngIf=\"value.is_genre || value.trailer_video\">\n            <div class=\"trailers-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\n              <div class=\"tab-overlay\">\n    \n                <div class=\"trailers-section-inner tab-section-content tab-sec-inner contain-width\">\n                  <h3 class=\"content-tit\">{{value.sub_category_name}}</h3>\n    \n                  <div class=\"trailers-list row\">\n    \n                    <!-- episode list box -->\n                    <!-- <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 top\" *ngFor=\"let trailer of value.genres\" *ngIf=\"value.is_genre\">\n                      <div class=\"episode-list-box\">\n    \n                        <div class=\"episode-img bg-img\"  [ngStyle]=\"{ 'background-image': 'url(' + trailer.genre_image + ')'}\">\n                          <div class=\"episode-img-overlay\">\n    \n                            <div class=\"epi-play-icon-outer\">\n                              <a href=\"/genre_video/{{trailer.genre_id}}\" class=\"epi-play-icon\">\n                                <i class=\"fa fa-play\"></i>\n                              </a>\n                            </div>\n                          </div>\n                        </div>\n    \n                        <div class=\"episode-list-content\">\n                          <div class=\"row no-margin\">\n                            <div class=\"\">\n                              <h4 class=\"epi-tit gray-color1\">{{trailer.genre_name}}</h4>\n                            </div>\n                          </div>\n                        </div>\n    \n                      </div>\n                    </div>\n     -->\n                    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 top\" *ngIf=\"value.trailer_video\">\n                      <div class=\"episode-list-box\">\n    \n                        <div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\n                          <div class=\"episode-img-overlay\">\n    \n                            <div class=\"epi-play-icon-outer\">\n                              <a href=\"/trailer/{{ value.admin_video_id}}\" class=\"epi-play-icon\">\n                                <i class=\"fa fa-play\"></i>\n                              </a>\n                            </div>\n                          </div>\n                        </div>\n    \n                        <div class=\"episode-list-content\">\n                          <div class=\"row no-margin\">\n                            <div class=\"\">\n                              <h4 class=\"epi-tit gray-color1\">{{value.title}}</h4>\n                            </div>\n                          </div>\n                        </div>\n    \n                      </div>\n                    </div>\n    \n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n    \n    \n    \n          <!-- MORE LIKE SECTION  -->\n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"{{lastindex}}_{{parentindex}}_more-like\">\n            <div class=\"morelike-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\n              <div class=\"tab-overlay\">\n    \n                <div class=\"morelike-section-inner tab-section-content tab-sec-inner contain-width\">\n                  <h3 class=\"content-tit\">{{value.sub_category_name}}</h3>\n    \n                  <div class=\"morelike-list row\">\n    \n                    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\" *ngFor=\"let sub_video of value.sub_videos\">\n                      <div class=\"episode-list-box\">\n    \n                        <div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + sub_video.default_image + ')'}\">\n                          <div class=\"episode-img-overlay\">\n                            <div class=\"episode-img-inner\">\n                              <p class=\"new-epi\">{{sub_video.title}}</p>\n                            </div>\n    \n                            <div class=\"epi-play-icon-outer\">\n                              <!-- <a ui-sref=\"single_video({id : sub_video.admin_video_id})\" class=\"epi-play-icon\">\n                                <i class=\"fa fa-play\"></i>\n                              </a> -->\n    \n                              <span *ngIf=\"sub_video.pay_per_view_status\">\n                                  <a href=\"/video/{{sub_video.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n                                </span>\n                                <span *ngIf=\"!sub_video.pay_per_view_status\">\n                                  <a href=\"/payment-option/{{sub_video.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n                                </span>\n                            </div>\n    \n                            <div class=\"duration_more\">\n                              <span>{{sub_video.duration}}</span>\t\t\n                            </div>\n                          </div>\n                        </div>\n    \n                        <div class=\"episode-list-content\">\n                          <div class=\"row no-margin\">\n                              <div class=\"pull-left\">\n                                <div>\n                                  <div class=\"rating-symbol glyphicon\"\n                              [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 1), 'glyphicon-star' : (sub_video.ratings >= 1)}\">\n                                \n                              </div>\n                              <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 2), 'glyphicon-star' : (sub_video.ratings >= 2)}\">\n                                \n                              </div>\n                              <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 3), 'glyphicon-star' : (sub_video.ratings >= 3)}\">\n                                \n                              </div>\n                              <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 4), 'glyphicon-star' : (sub_video.ratings >= 4)}\">\n                                \n                              </div>\n                              <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 5), 'glyphicon-star' : (sub_video.ratings >= 5)}\">\n                                \n                              </div>\n                                </div>\n                              </div>\n                              <p class=\"content-txt bold seasons\">\n                                <span class=\"green-clr hidden-sm\">{{sub_video.publish_time}}</span>\n                                <span class=\"epi-count hidden-sm hidden-md\">{{sub_video.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{sub_video.watch_count}}</span>\n                                <!-- <span>{{sub_video.duration}}</span> -->\n                              </p>\n                            </div>\n    \n                            <div>\n                              <p class=\"content-txt overview-des more-link\">{{sub_video.description}}</p>\n                            </div>\n                        </div>\n    \n                      </div>\n                    </div>\n                    \n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- MORE LIKE SECTION END -->\n    \n    \n    \n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"{{lastindex}}_{{parentindex}}_details\">\n              <div class=\"details-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + value.default_image + ')'}\">\n                <div class=\"tab-overlay\">\n                  <div class=\"details-section-inner tab-section-content tab-sec-inner contain-width details_section_tab\">\n                    <h3 class=\"content-tit\">{{value.title}}</h3>\n                    <div class=\"row col-sm-12 col-sm-12 col-lg-12 col-md-12\">\n                      <div class=\"detailsItem detailsMedia col-md-2\">\n                        <h4>Directors</h4>\n                        <ul class=\"list-unstyled\">\n                          <li *ngFor=\"let director of value.directors\" class=\"listLabel\">\n                            <a href=\"/director/{{director.id}}\">{{director.name}}</a></li>\n                        </ul>\n                        <h4>Writers</h4>\n                        <ul class=\"list-unstyled\">\n                          <li *ngFor=\"let writer of value.writers\" class=\"listLabel\">\n                            <a href=\"/writer/{{writer.id}}\">{{writer.name}}</a>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"detailsItem detailsMedia col-md-2\">\n                        <h4>Actors</h4>\n                        <ul class=\"list-unstyled\">\n                          <li *ngFor=\"let actor of value.actors\" class=\"listLabel\">\n                            <a href=\"/actor/{{actor.id}}\">{{actor.name}}</a>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"detailsItem detailsMedia col-md-2\">\n                        <h4>Category</h4>\n                        <ul class=\"list-unstyled\">\n                          <li class=\"listLabel\">\n                            <a>{{value.sub_category_name}}</a>\n                          </li>\n                        </ul>\n                        <div class=\"clear-fix\"></div>\n                        <h4>Publish Date</h4>\n                        <ul class=\"list-unstyled\">\n                          <li class=\"listLabel\">\n                            <p class=\"content-txt bold seasons\">\n                              <span class=\"green-clr hidden-sm\">{{value.release_date  && value.release_date !=\"0000-00-00\" ? value.release_date:''}}</span>\n                            </p>\n                          </li>\n                        </ul>\n                        <h4>Duration</h4>\n                        <ul class=\"list-unstyled\">\n                          <li class=\"listLabel\">\n                            <p class=\"content-txt bold seasons\">\n                              <span>{{value.duration}}</span>\n                            </p>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"detailsItem detailsMedia col-md-2\">\n                        <h4>Ratings</h4>\n                        <div class=\"mt-3\">\n                          <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 1), 'glyphicon-star' : (value.ratings >= 1)}\"></div>\n                          <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 2), 'glyphicon-star' : (value.ratings >= 2)}\"></div>\n                          <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 3), 'glyphicon-star' : (value.ratings >= 3)}\"></div>\n                          <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 4), 'glyphicon-star' : (value.ratings >= 4)}\"></div>\n                          <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (value.ratings < 5), 'glyphicon-star' : (value.ratings >= 5)}\"></div>\n                        </div>\n                        <h4>Age</h4>\n                        <ul class=\"list-unstyled\">\n                          <li class=\"listLabel\">\n                            <p class=\"content-txt bold seasons\">\n                              Recommended for ages {{value.age}} and up\n                            </p>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n    \n        <div class=\"drop-tab hidden-xs\">\n    \n          <ul class=\"nav nav-tabs\" role=\"tablist\">\n              <li role=\"presentation\" class=\"active\">\n                <a style=\"cursor:pointer\" (click)=\"dynamicContent(lastindex, parentindex,'overview')\" aria-controls=\"overview\" role=\"tab\" data-toggle=\"tab\">Overview</a>\n              </li>\n    \n              <li role=\"presentation\" *ngIf=\"value.is_genre\">\n                <a style=\"cursor:pointer\" (click)=\"dynamicContent(lastindex, parentindex,'episodes')\" aria-controls=\"episodes\" role=\"tab\" data-toggle=\"tab\">Episodes</a>\n              </li>\n    \n              <li role=\"presentation\" *ngIf=\"value.is_genre || value.trailer_video\">\n                <a style=\"cursor:pointer\" (click)=\"dynamicContent(lastindex,parentindex,'trailers')\" aria-controls=\"trailers\" role=\"tab\" data-toggle=\"tab\">Trailers &amp; More</a>\n              </li>\n    \n              <li role=\"presentation\">\n                <a style=\"cursor:pointer\" (click)=\"dynamicContent(lastindex,parentindex,'more-like')\" aria-controls=\"more-like\" role=\"tab\" data-toggle=\"tab\">More Like This</a>\n              </li>\n    \n              <li role=\"presentation\" >\n                <a style=\"cursor:pointer\" (click)=\"dynamicContent(lastindex,parentindex,'details')\" aria-controls=\"details\" role=\"tab\" data-toggle=\"tab\">Details</a>\n              </li>\n            </ul>\t\t\n          \n        </div>\n      </div>\n    \n    </div>\n    \n    <div id=\"data_loader\" style=\"margin-top: 5px;text-align: center;display: none\">\n      <img src=\"assets/img/ellipsis.svg\" style=\"width: 40px;\">\n    </div>\n    \n    <div class=\"clearfix\"></div>\n    \n    </div>"

/***/ }),

/***/ "./src/app/components/search-video/search-video.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/search-video/search-video.component.ts ***!
  \*******************************************************************/
/*! exports provided: SearchVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchVideoComponent", function() { return SearchVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var SearchVideoComponent = /** @class */ (function () {
    function SearchVideoComponent(apiService, router, route, titleService) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.datas = {};
        this.addWishlist = function (id, $index, key) {
            $("#my-list-txt_" + $index + "_" + key).html('<a class="my-list bold"><i class="fa fa-check my-list-icon"></i><span class="my-list-txt">Adding</span></a>');
            this.apiService.AddWishList({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: id, sub_profile_id: this.sessionStorage.sub_profile_id })
                .subscribe(function (data) {
                if (data.success) {
                    setTimeout(function () {
                        $("#my-list-txt_" + $index + "_" + key).html('<a onclick="angular.element(this).scope().removeWishlist(' + data.wishlist_id + ', ' + id + ', ' + $index + ', ' + "'" + key + "'" + ')" class="my-list bold" id="remove-my-list-txt" style="cursor: pointer;">' +
                            '<i class="fa fa-check my-list-icon"></i>' +
                            '<span class="my-list-txt">My List</span>' +
                            '</a>');
                    }, 2000);
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        };
        this.closeDiv = function (index, key) {
            $("#" + index + "_" + key + "_video_drop").fadeOut();
            $('#' + index + "_" + key + "_img").removeClass('active_img');
            $('#' + index + "_" + key + "_desc").show();
            $('#' + index + "_" + key + "_div").removeClass('play_icon_div');
        };
        this.removeWishlist = function (id, admin_video_id, $index, key) {
            $("#my-list-txt_" + $index + "_" + key).html('<a class="my-list bold"><i class="fa fa-plus my-list-icon"></i><span class="my-list-txt">Removing</span></a>');
            this.apiService.deleteWishlist({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, wishlist_id: admin_video_id, sub_profile_id: this.sessionStorage.sub_profile_id })
                .subscribe(function (data) {
                if (data.success) {
                    setTimeout(function () {
                        $("#my-list-txt_" + $index + "_" + key).html('<a onclick="angular.element(this).scope().addWishlist(' + admin_video_id + ', ' + $index + ', ' + "'" + key + "'" + ')" class="my-list bold" style="cursor: pointer;">' +
                            '<i class="fa fa-plus fa-stack-1x my-list-icon"></i>' +
                            '<span class="my-list-txt">My List</span>' +
                            '</a>');
                    }, 2000);
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        };
        this.likeVideo = function (admin_video_id, $index, key) {
            $("#like_" + $index + "_" + key).addClass('disabled_class');
            this.apiService.likeVideo({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sessionStorage.sub_profile_id })
                .subscribe(function (data) {
                $("#like_" + $index + "_" + key).removeClass('disabled_class');
                if (data.success) {
                    $("#like_count_" + $index + "_" + key).html(data.like_count);
                    $("#dis_like_count_" + $index + "_" + key).html(data.dislike_count);
                    if (data.delete) {
                        $("#dis_like_" + $index + "_" + key).show();
                        $("#dis_like_" + $index + "_" + key).removeClass('ng-hide');
                        $("#dis_like_" + $index + "_" + key).css('display', 'inline !important');
                    }
                    else {
                        $("#dis_like_" + $index + "_" + key).fadeOut(500);
                    }
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        };
        this.dislikeVideo = function (admin_video_id, $index, key) {
            $("#dis_like_" + $index + "_" + key).addClass('disabled_class');
            this.apiService.dislikeVideo({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sessionStorage.sub_profile_id })
                .subscribe(function (data) {
                $("#dis_like_" + $index + "_" + key).removeClass('disabled_class');
                if (data.success) {
                    $("#like_count_" + $index + "_" + key).html(data.like_count);
                    $("#dis_like_count_" + $index + "_" + key).html(data.dislike_count);
                    if (data.delete) {
                        UIkit.notify({ message: "I'm glad you removed the video from dislike", timeout: 3000, pos: 'top-center', status: 'success' });
                        $("#like_" + $index + "_" + key).show(500);
                        $("#like_" + $index + "_" + key).removeClass('ng-hide');
                        $("#like_" + $index + "_" + key).css('display', 'inline !important');
                    }
                    else {
                        UIkit.notify({ message: "You disliked the video", timeout: 3000, pos: 'top-center', status: 'warning' });
                        $("#like_" + $index + "_" + key).fadeOut(500);
                    }
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        };
        this.spamVideo = function (admin_video_id, index, key) {
            if (confirm('Are you sure want to spam the video ?')) {
                var reason = $('input[name=reason]:checked').val();
                this.apiService.AddSpam({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: admin_video_id, sub_profile_id: this.sessionStorage.sub_profile_id, reason: reason })
                    .subscribe(function (data) {
                    if (data.success) {
                        UIkit.notify({ message: "You have marked the video as spam, the video won't appear anywhere except spam videos section", timeout: 3000, pos: 'top-center', status: 'success' });
                        // window.setTimeout(function() {
                        window.location.reload();
                        // }, 1000);
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 5000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                });
            }
        };
        this.showVideoDrop = function (event, idx, key) {
            console.log('video_drop', idx, key);
            $("#" + idx + "_" + key + "_video_drop").show();
            $('#' + idx + "_" + key).removeClass('transition-class');
            $('#' + idx + "_" + key + "_img").addClass('active_img');
            $('#' + idx + "_" + key + "_desc").hide();
            $('#' + idx + "_" + key + "_div").addClass('play_icon_div');
        };
        this.hoverIn = function (event, id, key, length) {
            var video_drop = $(".video-drop").is(":visible");
            if (!video_drop) {
                $('#' + id + "_" + key).addClass('transition-class');
            }
            else {
                for (var i = 0; i < length; i++) {
                    $("#" + i + "_" + key + "_video_drop").hide();
                    $('#' + i + "_" + key + "_img").removeClass('active_img');
                    $('#' + i + "_" + key + "_desc").show();
                    $('#' + i + "_" + key + "_div").removeClass('play_icon_div');
                }
                $('#' + id + "_" + key + "_img").addClass('active_img');
                $('#' + id + "_" + key + "_desc").hide();
                $('#' + id + "_" + key + "_div").addClass('play_icon_div');
                $("#" + id + "_" + key + "_video_drop").show();
            }
        };
        this.hoverOut = function (event, id, key, length) {
            var video_drop = $(".video-drop").is(":visible");
            if (video_drop) {
                for (var i = 0; i < length; i++) {
                    $("#" + i + "_" + key + "_video_drop").hide();
                    $('#' + i + "_" + key + "_img").removeClass('active_img');
                    $('#' + i + "_" + key + "_desc").show();
                    $('#' + i + "_" + key + "_div").removeClass('play_icon_div');
                }
                $('#' + id + "_" + key + "_img").addClass('active_img');
                $("#" + id + "_" + key + "_video_drop").show();
                $('#' + id + "_" + key + "_desc").hide();
                $('#' + id + "_" + key + "_div").addClass('play_icon_div');
            }
            $('#' + id + "_" + key).removeClass('transition-class');
        };
        this.dynamicContent = function (index, key, id) {
            $("#" + index + "_" + key + "_overview").removeClass('active');
            $("#" + index + "_" + key + "_episodes").removeClass('active');
            $("#" + index + "_" + key + "_trailers").removeClass('active');
            $("#" + index + "_" + key + "_more-like").removeClass('active');
            $("#" + index + "_" + key + "_details").removeClass('active');
            if (id == "overview") {
                $("#" + index + "_" + key + "_overview").addClass('active');
            }
            else if (id == "episodes") {
                $("#" + index + "_" + key + "_episodes").addClass('active');
            }
            else if (id == "trailers") {
                $("#" + index + "_" + key + "_trailers").addClass('active');
            }
            else if (id == "more-like") {
                $("#" + index + "_" + key + "_more-like").addClass('active');
            }
            else {
                $("#" + index + "_" + key + "_details").addClass('active');
            }
            $(".episode-slider").not('.slick-initialized').slick({
                slidesToShow: this.epdisode_slide_to_show,
                slidesToScroll: this.epdisode_slide_to_scroll,
            });
            $(".episode-slider").slick('setPosition');
        };
        this.getSeasons = function (genre_id, idx, key, divid, loader, main_id) {
            var _this = this;
            if (genre_id == '' || genre_id == undefined) {
                genre_id = main_id;
            }
            $("#" + idx + key + divid).html("");
            $("#" + idx + key + loader).show();
            this.apiService.GetGenreList({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, genre_id: genre_id })
                .subscribe(function (data) {
                if (data.success) {
                    // $("#"+divid).html(data.view);
                    console.log($("#" + idx + key + divid));
                    $("#" + idx + key + divid).html(data.data);
                    $(".episode-slider").not('.slick-initialized').slick({
                        slidesToShow: _this.epdisode_slide_to_show,
                        slidesToScroll: _this.epdisode_slide_to_scroll,
                    });
                    $(".episode-slider").slick('setPosition');
                    $('.slick-carousel-responsive').resize();
                }
                else {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        };
        this.titleService.setTitle('Flashington | Search');
    }
    SearchVideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.user_id = (this.sessionStorage.user_id != '' && this.sessionStorage.user_id != undefined) ? this.sessionStorage.user_id : false;
        this.access_token = (this.sessionStorage.access_token != undefined && this.sessionStorage.access_token != '') ? this.sessionStorage.access_token : '';
        this.window_width = $(window).width();
        if (this.window_width > 991) {
            this.slide_to_show = 6;
            this.slide_to_scroll = 6;
            this.media_height = {
                "height": Math.round((this.window_width - 200)) / 6 * 1.5 + "px"
            };
        }
        if (this.window_width > 767 && this.window_width < 992) {
            this.slide_to_show = 4;
            this.slide_to_scroll = 4;
            this.media_height = {
                "height": Math.round((this.window_width - 100)) / 5 * 1.5 + "px"
            };
        }
        if (this.window_width > 479 && this.window_width < 768) {
            this.slide_to_show = 2;
            this.slide_to_scroll = 2;
            this.media_height = {
                "height": Math.round((this.window_width - 50)) / 2 * 1.5 + "px"
            };
        }
        if (this.window_width < 480) {
            this.slide_to_show = 1;
            this.slide_to_scroll = 1;
            this.media_height = {
                "height": (this.window_width - 100) * 1.5 + "px"
            };
        }
        $(window).bind('resize', function () {
            this.window_width = $(window).innerWidth;
            if (this.window_width > 991) {
                this.epdisode_slide_to_show = 4;
                this.epdisode_slide_to_scroll = 4;
            }
            if (this.window_width > 767 && this.window_width < 992) {
                this.epdisode_slide_to_show = 3;
                this.epdisode_slide_to_scroll = 3;
            }
            if (this.window_width > 479 && this.window_width < 768) {
                this.epdisode_slide_to_show = 2;
                this.epdisode_slide_to_scroll = 2;
            }
            if (this.window_width < 480) {
                this.epdisode_slide_to_show = 1;
                this.epdisode_slide_to_scroll = 1;
            }
            //		this.$apply();
            this.slideConfig = {
                "slidesToShow": this.epdisode_slide_to_show,
                "slidesToScroll": this.epdisode_slide_to_scroll,
                // "nextArrow":"<div class='nav-btn next-slide'></div>",
                // "prevArrow":"<div class='nav-btn prev-slide'></div>",
                "dots": false,
                "infinite": true
            };
        });
        this.slideConfig1 = {
            "slidesToShow": this.slide_to_show,
            "slidesToScroll": this.slide_to_scroll,
            // "nextArrow":"<div class='nav-btn next-slide'></div>",
            // "prevArrow":"<div class='nav-btn prev-slide'></div>",
            "dots": false,
            "infinite": true
        };
        if (this.user_id && this.access_token) {
            this.user_type = (this.sessionStorage.user_type == undefined || this.sessionStorage.user_type == 0) ? true : false;
            this.title = this.route.snapshot.paramMap['params'].id;
            $("#data_loader").show();
            this.apiService.SearchVideo({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, key: this.title, sub_profile_id: this.sessionStorage.sub_profile_id, device_type: 'web' })
                .subscribe(function (data) {
                if (data.success) {
                    if (data.data.length > 0) {
                        _this.datas = data;
                        _this.no_results_found = "";
                    }
                    else {
                        _this.no_results_found = "img/no-results.png";
                    }
                    setInterval(function () {
                        // $('#div1').contents().appendTo('#div2')
                        $('.video-box-row').contents().appendTo('#all_data');
                    }, 2000);
                    $("#data_loader").hide();
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    SearchVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-video',
            template: __webpack_require__(/*! ./search-video.component.html */ "./src/app/components/search-video/search-video.component.html"),
            styles: [__webpack_require__(/*! ./search-video.component.css */ "./src/app/components/search-video/search-video.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], SearchVideoComponent);
    return SearchVideoComponent;
}());



/***/ }),

/***/ "./src/app/components/sing-channel/sing-channel.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/sing-channel/sing-channel.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tile-img {\r\n    max-height: 420px;\r\n    -o-object-fit: fill;\r\n       object-fit: fill;\r\n}\r\n.tile-media {\r\n    /*border: 2px solid #141414;*/\r\n    height: auto !important;\r\n    text-align: center;\r\n}\r\n.tile {\r\n    height: auto !important;\r\n}\r\n.slick-initialized .slick-slide {\r\n    display: inline-block !important;\r\n    height: 100% !important;\r\n    padding: 0 10px;\r\n}\r\n.tab-overlay {\r\n    background: rgba(0, 0, 0, .90);\r\n}\r\n.box-head h3 {\r\n    font-size: 18px;\r\n    color: #e5e5e5;\r\n    font-weight: 700;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    margin: 0;\r\n}\r\n.video-box-row {\r\n    font-size: 14px;\r\n    white-space: normal;\r\n}\r\n.video-drop{\r\n    margin-top: 6px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaW5nLWNoYW5uZWwvc2luZy1jaGFubmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQWdCO09BQWhCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsU0FBUztBQUNiO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpbmctY2hhbm5lbC9zaW5nLWNoYW5uZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aWxlLWltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MjBweDtcclxuICAgIG9iamVjdC1maXQ6IGZpbGw7XHJcbn1cclxuLnRpbGUtbWVkaWEge1xyXG4gICAgLypib3JkZXI6IDJweCBzb2xpZCAjMTQxNDE0OyovXHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGlsZSB7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4uc2xpY2staW5pdGlhbGl6ZWQgLnNsaWNrLXNsaWRlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuLnRhYi1vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjkwKTtcclxufVxyXG4uYm94LWhlYWQgaDMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNlNWU1ZTU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi52aWRlby1ib3gtcm93IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuLnZpZGVvLWRyb3B7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/sing-channel/sing-channel.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/sing-channel/sing-channel.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content\" id=\"page_content\">\n    <div style=\"margin-top:80px !important; margin:5%; padding: 10px;\">\n        <div class=\"container\">\n            <div class=\"row mt-4 pb-4\">\n                <div class=\"col-md-3 single-avatar\">\n                    <img src=\"{{picture}}\" alt=\"\" srcset=\"\">\n                </div>\n                <div class=\"col-md-9 pl-4\">\n                    <h1>{{title}}</h1>\n                    <h4 style=\"line-height: 1.5;\">{{description}}</h4>\n                </div>\n            </div>\n        </div>\n        <button (click)=\"loadMoreDetails()\" *ngIf=\"true\" id=\"load_more_details\" style=\"background: black; display: none\"></button>\n        <div class=\"row\" *ngIf=\"videos.length == 0\">\n            <p>No videos found</p>\n        </div>\n        <div class=\"row\" *ngFor=\"let sub_videos of videos; let parentindex = index\">\n            <div id=\"video_{{video.admin_video_id}}\" *ngFor=\"let video of sub_videos\"\n                class=\"tile col-lg-2 col-md-3 col-sm-4 col-xs-6 video-box\"\n                (mouseover)=\"hoverIn(this, video.admin_video_id, (sub_videos).length)\"\n                (mouseleave)=\"hoverOut(this, video.admin_video_id, (sub_videos).length)\" >\n\n                <div class=\"video-box-outer\">\n                    <div class=\"tile-media\" id=\"{{video?.admin_video_id}}_img\">\n                        <img class=\"tile-img\" src=\"{{video?.default_image}}\" alt=\"\" [ngStyle]=\"media_height\" />\n                    </div>\n                    <div class=\"tile-details\">\n                        <div class=\"video_amount\" *ngIf=\"video.amount > 0 && !video.pay_per_view_status\">\n                            <!-- <span ng-if=\"video.pay_per_view_status\">PAID</span> -->\n                            <span>PAY - {{video.currency}} {{video.amount}}</span>\n                        </div>\n                        <span>\n                            <a href=\"/video/{{video?.admin_video_id}}\">\n                                <div class=\"hover-icon\" id=\"{{video.admin_video_id}}_div\">\n                                <i class=\"fa fa-play\"></i>\n                                </div>\n                            </a>\n                        </span>\n                        <div class=\"tile-content\" id=\"{{video.admin_video_id}}_desc\">\n                            <h3 class=\"tile-tit\">{{video.title}}</h3>\n                            <div class=\"row no-margin hidden-cls\">\n                                <div class=\"pull-left\">\n                                    <div>\n                                        <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 1), 'glyphicon-star' : (video.ratings >= 1)}\">\n                                        </div>\n                                        <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 2), 'glyphicon-star' : (video.ratings >= 2)}\">\n                                        </div>\n                                        <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 3), 'glyphicon-star' : (video.ratings >= 3)}\">\n                                        </div>\n                                        <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 4), 'glyphicon-star' : (video.ratings >= 4)}\">\n                                        </div>\n                                        <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 5), 'glyphicon-star' : (video.ratings >= 5)}\">\n                                        </div>\n                                    </div>\n                                </div>\n                                <p class=\"video-season\">\n                                    <span>{{video.release_date && video.release_date !=\"0000-00-00\" ? video.release_date:'' }}</span>\n                                    <span class=\"video-epi-count\">{{video.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{video.watch_count}}</span>\n                                    <span>{{video.duration}}</span>\n                                </p>\n                            </div>\n                            <div class=\"video-des\">\n                                <p class=\"video-des-inner\">{{video.description}}</p>\n                            </div>\n                            <div class=\"text-center\">\n                                <a (click)=\"showVideoDrop(this, video.admin_video_id, (video).length)\" class=\"arrow\">\n                                    <img src=\"assets/img/down-arrow-red.png\" class=\"arrow_down\" />\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div id=\"drop_{{video.admin_video_id}}\" class=\"video-drop\" *ngFor=\"let video of sub_videos\">\n                <div class=\"tab-content\">\n                    <!-- OVERVIEW SECTION  -->\n\t\t\t\t\t  <div role=\"tabpanel\" class=\"tab-pane active\" id=\"{{video.admin_video_id}}_overview\">\n                        <div class=\"overview tab-section relative\">\n                            <div class=\"close-tab\">\n                                <a style=\"cursor: pointer;\" (click)=\"closeDiv(video.admin_video_id)\" class=\"close-btn\">\n                                    <i class=\"fa fa-times\"></i>\n                                </a>\n                            </div>\n                            <div class=\"tab-section-content row no-margin\">\n                                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-5 no-pad overview-details\">\n                                </div>\n                                <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-7 no-pad\">\n                                    <div class=\"linear-outer\">\n                                        <div class=\"linear\"></div>\n                                        <div class=\"rotate-img-outer\">\n                                            <div class=\"rotate-img highlight-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + video.default_image + ')'}\"></div>\n                                            <!-- <div class=\"rotate-img highlight-img bg-img\" style=\"background-image: url({{video.video_gif_image}});\"></div> -->\n                                        </div>\n                                        <div class=\"play-icon-outer\">\n                                            <!-- <a ui-sref=\"single_video({id : video.admin_video_id})\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a>-->\n                                            <span *ngIf=\"video.pay_per_view_status\">\n                                                <a href=\"/video/{{video.admin_video_id}}\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a>\n                                            </span>\n                                            <span *ngIf=\"!video.pay_per_view_status\">\n                                                <a href=\"/payment-option/{{video.admin_video_id}}\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a>\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"home-new-deatils\">\n                                <div class=\"overview-details\" style=\"background-color: unset;\">\n                                    <h3 class=\"content-tit\">{{video.title}}</h3>\n                                    <div class=\"row no-margin hidden-xs\">\n                                        <div class=\"pull-left\">\n                                            <div>\n                                                <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 1), 'glyphicon-star' : (video.ratings >= 1)}\">\n                                                </div>\n                                                <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 2), 'glyphicon-star' : (video.ratings >= 2)}\">\n                                                </div>\n                                                <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 3), 'glyphicon-star' : (video.ratings >= 3)}\">\n                                                </div>\n                                                <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 4), 'glyphicon-star' : (video.ratings >= 4)}\">\n                                                </div>\n                                                <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 5), 'glyphicon-star' : (video.ratings >= 5)}\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <p class=\"content-txt bold seasons\">\n                                            <span class=\"green-clr\">{{video.release_date && video.release_date !=\"0000-00-00\" ? video.release_date:'' }}</span>\n                                            <span class=\"epi-count\">{{video.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{video.watch_count}}</span>\n                                            <span>{{video.duration}}</span>\n                                        </p>\n                                    </div>\n\n                                    <div class=\"\">\n                                        <div class=\"pull-left\">\n                                            <a class=\"white-icon\">\n                                                <i class=\"fa fa-thumbs-up\"></i><span id=\"like_count_{{video.admin_video_id}}\">{{video.like_count}}</span>\n                                            </a>\n                                            <a class=\"white-icon\">\n                                                <i class=\"fa fa-thumbs-down\"></i><span id=\"dis_like_count_{{video.admin_video_id}}\">{{video.dis_like_count}}</span>\n                                            </a>\n                                        </div>\n                                        <div class=\"pull-left\">\n                                            <div class=\"display_amount\" *ngIf=\"video.amount > 0 && !video.pay_per_view_status\" style=\"margin-left: 5px;\">\n                                                <!-- <span ng-if=\"recent_video.pay_per_view_status\">PAID</span> -->\n                                                <span>PAY - ${{video.amount}}</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"clearfix\"></div>\n                                    </div>\n                                    <div>\n                                        <p class=\"content-txt overview-des\">{{video.description}}</p>\n                                        <!-- <p class=\"content-txt awards\"><i class=\"fa fa-trophy\"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p> -->\n                                    </div>\n                                    <div id=\"my-list-txt_{{video.admin_video_id}}\" class=\"pull-left\">\n                                        <a (click)=\"addWishlist(video.admin_video_id)\" class=\" bold\" id=\"\" *ngIf=\"!video.wishlist_status\"\n                                            style=\"cursor: pointer;\">\n                                            <button class=\"my-list\">\n                                                <i class=\"fa fa-plus my-list-icon\"></i>\n                                                <span class=\"my-list-txt\">My List</span> \n                                            </button>\n                                        </a>\n                                        <a (click)=\"removeWishlist(video.wishlist_status, video.admin_video_id)\" class=\"bold\" *ngIf=\"video.wishlist_status\"\n                                            style=\"cursor: pointer;\">\n                                            <button class=\"my-list\">\n                                                <i class=\"fa fa-check my-list-icon\"></i>\n                                                <span class=\"my-list-txt\">My List</span> \n                                            </button>\n                                        </a>\n                                    </div>\n                                    <div class=\"banner-icon-sec hidden-xs\">\n                                        <a id=\"like_{{video.admin_video_id}}\" style=\"cursor: pointer;\" *ngIf=\"video.is_liked == 1 || video.is_liked == 0\" (click)=\"likeVideo(video.admin_video_id)\">\n                                            <button class=\"banner-icon\">\n                                                <i class=\"fa fa-thumbs-up\"></i>\n                                            </button>\n                                        </a>\n                                        <a id=\"dis_like_{{video.admin_video_id}}\" style=\"cursor: pointer;\" *ngIf=\"video.is_liked == -1 || video.is_liked == 0\"\n                                            (click)=\"dislikeVideo(video.admin_video_id)\">\n                                            <button class=\"banner-icon\">\n                                                <i class=\"fa fa-thumbs-down\"></i>\n                                            </button>\n                                        </a>\n                                        <a data-toggle=\"modal\" data-target=\"#myModal_{{video.admin_video_id}}\" title=\"Report as Spam\" style=\"cursor: pointer;\">\n                                            <button class=\"banner-icon\">\n                                                <i class=\"fa fa-exclamation \"></i>\n                                            </button>\n                                        </a>\n                                    </div>\n\n                                    <div class=\"modal fade\" id=\"myModal_{{video.admin_video_id}}\" role=\"dialog\">\n                                        <div class=\"modal-dialog\">\n                                            <div class=\"modal-content\" style=\"background-color: #333;\">\n                                                <div class=\"modal-header\">\n                                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                                    <h4 class=\"modal-title bold\">Report This Video</h4>\n                                                </div>\n                                                <div class=\"modal-body\">\n                                                    <form (ngSubmit)=\"spamVideo(video.admin_video_id, video.admin_video_id, parentindex)\">\n                                                        <div class=\"radio radio-danger\" *ngFor=\"let spam_reason of spam_reasons\">\n                                                            <input type=\"radio\" name=\"reason\" id=\"reason_{{video.admin_video_id}}_{{video.admin_video_id}}\" >\n                                                            <label for=\"reason_{{video.admin_video_id}}_{{video.admin_video_id}}\">\n                                                        {{spam_reason.video}}\n                                                    </label>\n                                                        </div>\n\n                                                        {{spam_reason_video}}\n                                                        <p class=\"small bold text-center\">If you report this video, you won't see again the same video in anywhere in your account except \"Spam Videos\".\n                                                            If you want to continue to report this video as same. Click continue and proceed the same.</p>\n                                                        <div class=\"text-right\">\n                                                            <button type=\"submit\" class=\"payment-submit\">Submit</button>\n                                                        </div>\n                                                    </form>\n                                                </div>\n\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                    <!-- OVERVIEW SECTION END -->\n\n                    <!-- EPISODES-SECTION -->\n                    <div role=\"tabpanel\" class=\"tab-pane\" id=\"{{video.admin_video_id}}_episodes\" *ngIf=\"video.is_genre\">\n                        <div class=\"episodes-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + video.default_image + ')'}\">\n                            <div class=\"close-tab\">\n                                <a style=\"cursor: pointer;\" (click)=\"closeDiv(video.admin_video_id)\" class=\"close-btn\">\n                                    <i class=\"fa fa-times\"></i>\n                                </a>\n                            </div>\n                            <div class=\"tab-overlay\">\n                                <div class=\"episodes-section-inner tab-section-content tab-sec-inner contain-width\">\n                                    <h3 class=\"content-tit\">{{video.sub_category_name}}</h3>\n                                    <!-- <form class=\"season-select\">\n                                        <div class=\"form-group styled-select black\">\n                                            <select id=\"exampleSelect1\" ng-model=\"genres_name\" ng-change=\"getSeasons(genres_name, {{video.admin_video_id}},'_sessions', '_loader_seasons', video.genre_id);\">\n                                                <option video=\"\">Select Seasons</option>\n                                                <option video=\"{{genrename.genre_id}}\" ng-repeat=\"genrename in video.genre_names\">\n                                                {{genrename.genre_name}}\n                                                </option>\n                                            </select>\n                                        </div>\n                                    </form> -->\n    \n                                    <div class=\"episodes-list\">\n                                        <div id=\"{{video.admin_video_id}}_loader_seasons\" style=\"margin-top: 10px;text-align: center;display: none\">\n                                            <img src=\"assets/img/ellipsis.svg\" style=\"width: 40px;\">\n                                        </div>\n                                        <div id=\"{{video.admin_video_id}}_sessions\" class=\"row\">\n                                            <!-- episode list box -->\n                                            <!-- <slick slides-to-show=\"{{epdisode_slide_to_show}}\" slides-to-scroll=\"{{epdisode_slide_to_scroll}}\" dots=\"false\" class=\"episode-slider\"> -->\n                                            <ngx-slick-carousel class=\"carousel slider multiple-items\"  #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\n                                              <div *ngFor=\"let genre_list of video.first_part\" ngxSlickItem>\n                                                    <div class=\"episode-list-box\">\n\n                                                        <div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + genre_list.default_image + ')'}\">\n                                                            <div class=\"episode-img-overlay\">\n                                                                <div class=\"episode-img-inner\">\n                                                                    <!-- <p class=\"episode-count\">{{genre_list.watch_count}}</p> -->\n                                                                    <span class=\"epi-count\">{{genre_list.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{genre_list.watch_count}}</span>\n                                                                </div>\n\n                                                                <div class=\"epi-play-icon-outer\">\n                                                                    <!-- <a ui-sref=\"single_video({id : genre_list.id})\" class=\"epi-play-icon\">\n                                                            <i class=\"fa fa-play\"></i>\n                                                        </a> -->\n\n                                                                    <span *ngIf=\"genre_list.pay_per_view_status\">\n                                                                        <a href=\"/video/{{genre_list.id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n                                                                    </span>\n                                                                    <span *ngIf=\"genre_list.pay_per_view_status\">\n                                                                        <a href=\"/payment-option/{{genre_list.id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n                                                                    </span>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n\n                                                        <div class=\"episode-list-content\">\n                                                            <div class=\"row\">\n                                                                <div class=\"col-md-8 col-sm-12\">\n                                                                    <h4 class=\"epi-tit gray-color1 txt-overflow\">{{genre_list.title}}</h4>\n                                                                </div>\n\n                                                                <div class=\"col-md-4 text-right hidden-sm\">\n                                                                    <p class=\"bold epi-tit gray-color1 txt-overflow\">{{genre_list.duration}}</p>\n                                                                </div>\n                                                            </div>\n\n                                                            <div class=\"\">\n                                                                <p class=\"gray-color1 overview-des more-link mt-0\">{{genre_list.description}}</p>\n                                                            </div>\n                                                        </div>\n\n                                                    </div>\n                                                </div>\n                                            </ngx-slick-carousel>\n                                        </div>\n                                        <!-- episode-list-box end -->\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- EPISODES-SECTION END-->\n\n                    <!-- TRAILERS SECTION -->\n\t\t\t\t    <div role=\"tabpanel\" class=\"tab-pane\" id=\"{{video.admin_video_id}}_trailers\" *ngIf=\"video.is_genre || video.trailer_video\">\n                        <div class=\"trailers-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + video.default_image + ')'}\">\n                            <div class=\"close-tab\">\n                                <a style=\"cursor: pointer;\" (click)=\"closeDiv(video.admin_video_id)\" class=\"close-btn\">\n                                    <i class=\"fa fa-times\"></i>\n                                </a>\n                            </div>\n                            <div class=\"tab-overlay\">\n\n                                <div class=\"trailers-section-inner tab-section-content tab-sec-inner contain-width\">\n                                    <h3 class=\"content-tit\">{{video.sub_category_name}}</h3>\n\n                                    <div class=\"trailers-list row\">\n\n                                        <!-- episode list box -->\n                                        <!-- <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 top\" *ngFor=\"let trailer of video.genres\" *ngIf=\"video.is_genre\">\n                                            <div class=\"episode-list-box\">\n\n                                                <div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + trailer.default_image + ')'}\">\n                                                    <div class=\"episode-img-overlay\">\n\n                                                        <div class=\"epi-play-icon-outer\">\n                                                            <a href=\"/genre_video/{{trailer.genre_id}}\" class=\"epi-play-icon\">\n                                                        <i class=\"fa fa-play\"></i>\n                                                    </a>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"episode-list-content\">\n                                                    <div class=\"row no-margin\">\n                                                        <div class=\"\">\n                                                            <h4 class=\"epi-tit gray-color1\">{{trailer.genre_name}}</h4>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n                                        </div> -->\n\n                                        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 top\" ng-if=\"video.trailer_video\">\n                                            <div class=\"episode-list-box\">\n\n                                                <div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + video.default_image + ')'}\">\n                                                    <div class=\"episode-img-overlay\">\n\n                                                        <div class=\"epi-play-icon-outer\">\n                                                            <a href=\"/trailer/{{video.admin_video_id}}\" class=\"epi-play-icon\">\n                                                        <i class=\"fa fa-play\"></i>\n                                                    </a>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"episode-list-content\">\n                                                    <div class=\"row no-margin\">\n                                                        <div class=\"\">\n                                                            <h4 class=\"epi-tit gray-color1\">{{video.title}}</h4>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- MORE LIKE SECTION  -->\n                    <div role=\"tabpanel\" class=\"tab-pane\" id=\"{{video.admin_video_id}}_more-like\">\n                        <div class=\"morelike-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + video.default_image + ')'}\">\n                            <div class=\"close-tab\">\n                                <a style=\"cursor: pointer;\" (click)=\"closeDiv(video.admin_video_id)\" class=\"close-btn\">\n                                    <i class=\"fa fa-times\"></i>\n                                </a>\n                            </div>\n                            <div class=\"tab-overlay\">\n\n                                <div class=\"morelike-section-inner tab-section-content tab-sec-inner contain-width\">\n                                    <h3 class=\"content-tit\">{{video.sub_category_name}}</h3>\n\n                                    <div class=\"morelike-list row\">\n\n                                        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\" *ngFor=\"let sub_video of video.sub_videos\">\n                                            <div class=\"episode-list-box\">\n\n                                                <div class=\"episode-img bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + sub_video.default_image + ')'}\">\n                                                    <div class=\"episode-img-overlay\">\n                                                        <div class=\"episode-img-inner\">\n                                                            <p class=\"new-epi\">{{sub_video.title}}</p>\n                                                        </div>\n\n                                                        <div class=\"epi-play-icon-outer\">\n                                                            <!-- <a ui-sref=\"single_video({id : sub_video.admin_video_id})\" class=\"epi-play-icon\">\n                                                        <i class=\"fa fa-play\"></i>\n                                                    </a> -->\n\n                                                            <span *ngIf=\"sub_video.pay_per_view_status\">\n                                                        <a href=\"/video/{{sub_video.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n                                                    </span>\n                                                            <span *ngIf=\"!sub_video.pay_per_view_status\">\n                                                        <a href=\"payment-option/{{sub_video.admin_video_id}}\" class=\"epi-play-icon\"><i class=\"fa fa-play\"></i></a>\n                                                    </span>\n\n\n                                                        </div>\n\n                                                        <div class=\"duration_more\">\n                                                            <span>{{sub_video.duration}}</span>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                                <div class=\"episode-list-content\">\n                                                    <div class=\"row no-margin\">\n                                                        <div class=\"pull-left\">\n                                                            <div>\n                                                                <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 1), 'glyphicon-star' : (sub_video.ratings >= 1)}\">\n\n                                                                </div>\n                                                                <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 2), 'glyphicon-star' : (sub_video.ratings >= 2)}\">\n\n                                                                </div>\n                                                                <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 3), 'glyphicon-star' : (sub_video.ratings >= 3)}\">\n\n                                                                </div>\n                                                                <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 4), 'glyphicon-star' : (sub_video.ratings >= 4)}\">\n\n                                                                </div>\n                                                                <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (sub_video.ratings < 5), 'glyphicon-star' : (sub_video.ratings >= 5)}\">\n\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <p class=\"content-txt bold seasons\">\n                                                            <span class=\"green-clr hidden-sm\">{{sub_video.release_date && sub_video.release_date !=\"0000-00-00\" ? sub_video.release_date:'' }}</span>\n                                                            <span class=\"epi-count hidden-sm hidden-md\">{{sub_video.age}} / <i class=\"fa fa-eye\"></i>&nbsp;{{sub_video.watch_count}}</span>\n                                                            <!-- <span>{{sub_video.duration}}</span> -->\n                                                        </p>\n                                                    </div>\n\n                                                    <div>\n                                                        <p class=\"content-txt overview-des more-link\">{{sub_video.description}}</p>\n                                                    </div>\n                                                </div>\n\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- MORE LIKE SECTION END -->\n\n                    <!-- DETAILS-SECTION -->\n                    <div role=\"tabpanel\" class=\"tab-pane\" id=\"{{video.admin_video_id}}_details\">\n                        <div class=\"details-section tab-section tab-bg bg-img\" [ngStyle]=\"{ 'background-image': 'url(' + video?.default_image + ')'}\">\n                            <div class=\"close-tab\">\n                                <a style=\"cursor: pointer;\" (click)=\"closeDiv(video.admin_video_id)\" class=\"close-btn\">\n                                    <i class=\"fa fa-times\"></i>\n                                </a>\n                            </div>\n                            <div class=\"tab-overlay\">\n                                <div class=\"details-section-inner tab-section-content tab-sec-inner contain-width details_section_tab\">\n                                    <h3 class=\"content-tit\">{{video.title}}</h3>\n                                    <div class=\"row col-sm-12 col-sm-12 col-lg-12 col-md-12\">\n                                        <div class=\"detailsItem detailsMedia col-md-2\">\n                                            <h4>Directors</h4>\n                                            <ul class=\"list-unstyled\">\n                                                <li *ngFor=\"let director of video.directors\" class=\"listLabel\">\n                                                    <a href=\"/director/{{director.id}}\">{{director.name}}</a></li>\n                                            </ul>\n                                            <h4>Writers</h4>\n                                            <ul class=\"list-unstyled\">\n                                                <li *ngFor=\"let writer of video.writers\" class=\"listLabel\">\n                                                    <a href=\"/writer/{{writer.id}}\">{{writer.name}}</a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"detailsItem detailsMedia col-md-2\">\n                                            <h4>Actors</h4>\n                                            <ul class=\"list-unstyled\">\n                                                <li *ngFor=\"let actor of video.actors\" class=\"listLabel\">\n                                                    <a href=\"/actor/{{actor.id}}\">{{actor.name}}</a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"detailsItem detailsMedia col-md-2\">\n                                            <h4>Category</h4>\n                                            <ul class=\"list-unstyled\">\n                                                <li class=\"listLabel\">\n                                                    <a>{{video.sub_category_name}}</a>\n                                                </li>\n                                            </ul>\n                                            <div class=\"clear-fix\"></div>\n                                            <h4>Publish Date</h4>\n                                            <ul class=\"list-unstyled\">\n                                                <li class=\"listLabel\">\n                                                    <p class=\"content-txt bold seasons\">\n                                                        <span class=\"green-clr hidden-sm\">{{video.release_date  && video.release_date !=\"0000-00-00\" ? video.release_date:''}}</span>\n                                                    </p>\n                                                </li>\n                                            </ul>\n                                            <h4>Duration</h4>\n                                            <ul class=\"list-unstyled\">\n                                                <li class=\"listLabel\">\n                                                    <p class=\"content-txt bold seasons\">\n                                                        <span>{{video.duration}}</span>\n                                                    </p>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"detailsItem detailsMedia col-md-2\">\n                                            <h4>Ratings</h4>\n                                            <div class=\"mt-3\">\n                                                <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 1), 'glyphicon-star' : (video.ratings >= 1)}\"></div>\n                                                <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 2), 'glyphicon-star' : (video.ratings >= 2)}\"></div>\n                                                <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 3), 'glyphicon-star' : (video.ratings >= 3)}\"></div>\n                                                <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 4), 'glyphicon-star' : (video.ratings >= 4)}\"></div>\n                                                <div class=\"rating-symbol glyphicon\" [ngClass]=\"{'glyphicon-star-empty' : (video.ratings < 5), 'glyphicon-star' : (video.ratings >= 5)}\"></div>\n                                            </div>\n                                            <h4>Age</h4>\n                                            <ul class=\"list-unstyled\">\n                                                <li class=\"listLabel\">\n                                                    <p class=\"content-txt bold seasons\">\n                                                        Recommended for ages {{video.age}} and up\n                                                    </p>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class=\"clearfix\"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"drop-tab hidden-xs\">\n                    <ul class=\"nav nav-tabs\" role=\"tablist\">\n                        <li role=\"presentation\" class=\"active\">\n                            <a style=\"cursor:pointer\" (click)=\"dynamicContent(video.admin_video_id, 'overview')\" aria-controls=\"overview\" role=\"tab\"\n                                data-toggle=\"tab\">Overview</a>\n                        </li>\n\n                        <li role=\"presentation\" *ngIf=\"value?.is_genre\">\n                            <a style=\"cursor:pointer\" (click)=\"dynamicContent(video.admin_video_id, 'episodes')\" aria-controls=\"episodes\" role=\"tab\" data-toggle=\"tab\">Episodes</a>\n                        </li>\n\n                        <li role=\"presentation\" *ngIf=\"value?.is_genre || value?.trailer_video\">\n                            <a style=\"cursor:pointer\" (click)=\"dynamicContent(video.admin_video_id, 'trailers')\" aria-controls=\"trailers\" role=\"tab\" data-toggle=\"tab\">Trailers &amp; More</a>\n                        </li>\n\n                        <li role=\"presentation\">\n                            <a style=\"cursor:pointer\" (click)=\"dynamicContent(video.admin_video_id, 'more-like')\" aria-controls=\"more-like\" role=\"tab\"\n                                data-toggle=\"tab\">More Like This</a>\n                        </li>\n\n                        <li role=\"presentation\">\n                            <a style=\"cursor:pointer\" (click)=\"dynamicContent(video.admin_video_id, 'details')\" aria-controls=\"details\" role=\"tab\" data-toggle=\"tab\">Details</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"clearfix\"></div>\n\n        <div id=\"data_loader\" style=\"margin-top: 5px;text-align: center;display: none\">\n            <img src=\"assets/img/ellipsis.svg\" style=\"width: 40px;\">\n        </div>\n\n    </div>\n  "

/***/ }),

/***/ "./src/app/components/sing-channel/sing-channel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/sing-channel/sing-channel.component.ts ***!
  \*******************************************************************/
/*! exports provided: SingChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingChannelComponent", function() { return SingChannelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var SingChannelComponent = /** @class */ (function () {
    function SingChannelComponent(apiService, router, route, titleService) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.sessionStorage = {};
        this.videos = [];
        this.epdisode_slide_to_show = 6;
        this.epdisode_slide_to_scroll = 1;
        this.showVideoDrop = function (event, id, length) {
            $("#drop_" + id).show();
            $('#video_' + id).removeClass('transition-class');
            $('#' + id + "_img").addClass('active_img');
            $('#' + id + "_desc").hide();
            $('#' + id + "_div").addClass('play_icon_div');
        };
        this.closeDiv = function (id) {
            $("#drop_" + id).fadeOut();
            $('#' + id + "_img").removeClass('active_img');
            $('#' + id + "_desc").show();
            $('#' + id + "_div").removeClass('play_icon_div');
        };
        // Event for Mouse Over
        this.hoverIn = function (event, id, length) {
            var video_drop = $(".video-drop").is(":visible");
            if (!video_drop) {
                $('#video_' + id).addClass('transition-class');
            }
            else {
                $('#video_' + id).parent().find(".tile-media").removeClass("active_img");
                $("#drop_" + id).parent().find(".video-drop").hide();
                $("#drop_" + id).show();
                $('#' + id + "_img").addClass('active_img');
                $('#' + id + "_desc").hide();
                $('#' + id + "_div").addClass('play_icon_div');
            }
        };
        // Event for Mouse Out
        this.hoverOut = function (event, id, length) {
            var video_drop = $(".video-drop").is(":visible");
            if (video_drop) {
                $("#drop_" + id).show();
                //$('#' + id + "_img").removeClass('active_img');
                $('#' + id + "_desc").show();
                $('#' + id + "_div").removeClass('play_icon_div');
            }
            $('#video_' + id).removeClass('transition-class');
        };
        // Tab on Drop down
        this.dynamicContent = function (id, key) {
            $("#" + id + "_overview").removeClass('active');
            $("#" + id + "_episodes").removeClass('active');
            $("#" + id + "_trailers").removeClass('active');
            $("#" + id + "_more-like").removeClass('active');
            $("#" + id + "_details").removeClass('active');
            if (key == "overview") {
                $("#" + id + "_overview").addClass('active');
            }
            else if (key == "episodes") {
                $("#" + id + "_episodes").addClass('active');
            }
            else if (key == "trailers") {
                $("#" + id + "_trailers").addClass('active');
            }
            else if (key == "more-like") {
                $("#" + id + "_more-like").addClass('active');
            }
            else {
                $("#" + id + "_details").addClass('active');
            }
        };
        // Adding Wishlist
        this.addWishlist = function (id) {
            console.log(id);
            $("#my-list-txt_" + id).html('<a class="my-list bold"><i class="fa fa-check fa-stack-1x my-list-icon"></i><span class="my-list-txt">Adding</span></a>');
            this.apiService.AddWishList({
                id: this.user_id,
                token: this.access_token,
                admin_video_id: id,
                sub_profile_id: this.sub_profile_id
            }).subscribe(function (data) {
                if (data.success) {
                    setTimeout(function () {
                        $("#my-list-txt_" + id).html('<a (click)="removeWishlist(' + data.wishlist_id + ', ' + id + "'" + ')" class="my-list bold" id="remove-my-list-txt" style="cursor: pointer;">' +
                            '<i class="fa fa-check my-list-icon"></i>' +
                            '<span class="my-list-txt">My List</span>' +
                            '</a>');
                    }, 2000);
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        };
        // Remove from whislist
        this.removeWishlist = function (id, admin_video_id) {
            $("#my-list-txt_" + admin_video_id).html('<a class="my-list bold"><i class="fa fa-plus fa-stack-1x fa-inverse padding2"></i><span class="my-list-txt">Removing</span></a>');
            this.apiService.deleteWishlist({
                id: this.user_id,
                token: this.access_token,
                sub_profile_id: this.sub_profile_id,
                wishlist_id: admin_video_id
            }).subscribe(function (data) {
                if (data.success) {
                    setTimeout(function () {
                        $("#my-list-txt_" + admin_video_id).html('<a (click)="addWishlist(' + admin_video_id + ')" class="my-list bold" style="cursor: pointer;">' +
                            '<i class="fa fa-plus my-list-icon"></i>' +
                            '<span class="my-list-txt">My List</span>' +
                            '</a>');
                    }, 2000);
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        };
        this.likeVideo = function (admin_video_id) {
            $("#like_" + admin_video_id).addClass('disabled_class');
            this.apiService.likeVideo({
                id: this.sessionStorage.user_id,
                token: this.sessionStorage.access_token,
                admin_video_id: admin_video_id,
                sub_profile_id: this.sessionStorage.sub_profile_id
            }).subscribe(function (data) {
                console.log('likevideo', data);
                $("#like_" + admin_video_id).removeClass('disabled_class');
                if (data.success) {
                    $("#like_count_" + admin_video_id).html(data.like_count);
                    $("#dis_like_count_" + admin_video_id).html(data.dislike_count);
                    // setTimeout(function(){
                    if (data.delete) {
                        // UIkit.notify({message : "We are very sorry you removed the video from like", timeout : 3000, pos : 'top-center', status : 'success'});
                        $("#dis_like_" + admin_video_id).show();
                        $("#dis_like_" + admin_video_id).removeClass('ng-hide');
                        $("#dis_like_" + admin_video_id).css('display', 'inline !important');
                    }
                    else {
                        // UIkit.notify({message : "I'm glad you liked the video", timeout : 3000, pos : 'top-center', status : 'success'});
                        $("#dis_like_" + admin_video_id).fadeOut(500);
                    }
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        };
        this.dislikeVideo = function (admin_video_id) {
            $("#dis_like_" + admin_video_id).addClass('disabled_class');
            this.apiService.dislikeVideo({
                id: this.sessionStorage.user_id,
                token: this.sessionStorage.access_token,
                admin_video_id: admin_video_id,
                sub_profile_id: this.sessionStorage.sub_profile_id
            }).subscribe(function (data) {
                console.log('dislike video', data);
                $("#dis_like_" + admin_video_id).removeClass('disabled_class');
                if (data.success) {
                    $("#like_count_" + admin_video_id).html(data.like_count);
                    $("#dis_like_count_" + admin_video_id).html(data.dislike_count);
                    // setTimeout(function(){
                    if (data.delete) {
                        // UIkit.notify({message : "I'm glad you removed the video from dislike", timeout : 3000, pos : 'top-center', status : 'success'});
                        $("#like_" + admin_video_id).show(500);
                        $("#like_" + admin_video_id).removeClass('ng-hide');
                        $("#like_" + admin_video_id).css('display', 'inline !important');
                    }
                    else {
                        // UIkit.notify({message : "You disliked the video", timeout : 3000, pos : 'top-center', status : 'warning'});
                        $("#like_" + admin_video_id).fadeOut(500);
                    }
                    // }, 2000);
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        };
        this.titleService.setTitle('Flashington | channel');
    }
    SingChannelComponent.prototype.ngOnInit = function () {
        var _this = this;
        $("#page_preloader").show();
        var show_count = 6;
        this.sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
        if (this.sessionStorage == null) {
            this.router.navigateByUrl('/');
            return false;
        }
        this.window_width = window.innerWidth;
        if (this.window_width > 1200) {
            this.media_height = {
                "height": Math.round((this.window_width - 200)) / 6 * 1.5 + "px"
            };
            show_count = 6;
        }
        if (this.window_width > 991 && this.window_width < 1200) {
            this.media_height = {
                "height": Math.round((this.window_width - 200)) / 4 * 1.5 + "px"
            };
            show_count = 4;
        }
        if (this.window_width > 768 && this.window_width < 991) {
            this.media_height = {
                "height": Math.round((this.window_width - 150)) / 3 * 1.5 + "px"
            };
            show_count = 3;
        }
        if (this.window_width < 768) {
            this.media_height = {
                "height": Math.round((this.window_width - 100)) / 2 * 1.5 + "px"
            };
            show_count = 2;
        }
        $(window).bind('resize', function () {
            this.window_width = window.innerWidth;
            if (this.window_width > 1200) {
                this.media_height = {
                    "height": Math.round((this.window_width - 200)) / 6 * 1.5 + "px"
                };
                show_count = 6;
            }
            if (this.window_width > 991 && this.window_width < 1200) {
                this.media_height = {
                    "height": Math.round((this.window_width - 250)) / 4 * 1.5 + "px"
                };
                show_count = 4;
            }
            if (this.window_width > 768 && this.window_width < 991) {
                this.media_height = {
                    "height": Math.round((this.window_width - 200)) / 3 * 1.5 + "px"
                };
                show_count = 3;
            }
            if (this.window_width < 768) {
                this.media_height = {
                    "height": Math.round((this.window_width - 150)) / 2 * 1.5 + "px"
                };
                show_count = 2;
            }
            // this.$apply();
        });
        this.slideConfig = {
            "slidesToShow": this.epdisode_slide_to_show,
            "slidesToScroll": this.epdisode_slide_to_scroll,
            // "nextArrow":"<div class='nav-btn next-slide'></div>",
            // "prevArrow":"<div class='nav-btn prev-slide'></div>",
            "dots": false,
            "infinite": true
        };
        this.user_id = (this.sessionStorage['user_id'] != '' && this.sessionStorage['user_id'] != undefined) ? this.sessionStorage['user_id'] : false;
        this.access_token = (this.sessionStorage['access_token'] != undefined && this.sessionStorage['access_token'] != '') ? this.sessionStorage['access_token'] : '';
        if (this.user_id && this.access_token) {
            console.log(this.sessionStorage['user_id'], this.sessionStorage['access_token']);
            // Get init data
            var key = this.route.snapshot.paramMap['params'].id;
            this.apiService.getSingleChannel({ id: this.sessionStorage['user_id'], token: this.sessionStorage['access_token'], cid: key }).subscribe(function (data) {
                if (data.success) {
                    _this.title = data.channel.name;
                    _this.picture = data.channel.picture;
                    _this.description = data.channel.description;
                    var videos_all = data.channel.videos;
                    console.log(videos_all);
                    var videos_s = [];
                    var videos_item = [];
                    var count = 1;
                    videos_all[0] && videos_all[0].forEach(function (item) {
                        if (count % (show_count + 1) == 0) {
                            videos_s.push(videos_item);
                            videos_item = [];
                            videos_item.push(item);
                            count = 1;
                        }
                        else {
                            videos_item.push(item);
                        }
                        count++;
                    }, _this);
                    videos_s.push(videos_item);
                    _this.videos = videos_s;
                    $("#page_preloader").hide();
                }
            });
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    SingChannelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sing-channel',
            template: __webpack_require__(/*! ./sing-channel.component.html */ "./src/app/components/sing-channel/sing-channel.component.html"),
            styles: [__webpack_require__(/*! ./sing-channel.component.css */ "./src/app/components/sing-channel/sing-channel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], SingChannelComponent);
    return SingChannelComponent;
}());



/***/ }),

/***/ "./src/app/components/spam-videos/spam-videos.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/spam-videos/spam-videos.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3BhbS12aWRlb3Mvc3BhbS12aWRlb3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/spam-videos/spam-videos.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/spam-videos/spam-videos.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  spam-videos works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/spam-videos/spam-videos.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/spam-videos/spam-videos.component.ts ***!
  \*****************************************************************/
/*! exports provided: SpamVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpamVideosComponent", function() { return SpamVideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpamVideosComponent = /** @class */ (function () {
    function SpamVideosComponent() {
    }
    SpamVideosComponent.prototype.ngOnInit = function () {
    };
    SpamVideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spam-videos',
            template: __webpack_require__(/*! ./spam-videos.component.html */ "./src/app/components/spam-videos/spam-videos.component.html"),
            styles: [__webpack_require__(/*! ./spam-videos.component.css */ "./src/app/components/spam-videos/spam-videos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpamVideosComponent);
    return SpamVideosComponent;
}());



/***/ }),

/***/ "./src/app/components/static/static.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/static/static.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-tit {\r\n    color: #fff;\r\n    font-family: verdana;\r\n      text-decoration: underline;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGF0aWMvc3RhdGljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO01BQ2xCLDBCQUEwQjtFQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdGljL3N0YXRpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXRpdCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/static/static.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/static/static.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main-content form-content bg-img\" style=\"background-image:url({{login_bg}})\"> -->\n  <div class=\"main-content\">\n    <nav class=\"navbar navbar-default form-navbar\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"navbar-header form-header\">\n      \n      \n          <a class=\"navbar-brand\" href=\"/\">\n            <img src=\"{{site_logo}}\" class=\"hidden-xs\">\n            <img src=\"{{site_icon}}\" class=\"visible-xs\">\n          </a>\n  \n        </div>\n      </div>\n    </nav>\n  \n    <div class=\"content-panel\">\n  \n      <!-- LOGIN FORM \n      ===================================================-->\n      <div class=\"login-form\">\n        <div class=\"container\">\n          <h3 class=\"login-tit\">{{page?.heading}}</h3>\t\t\n  \n          <p ng-bind-html=\"page.description\"></p>\t\t\t\n        </div>\n      </div>\n      <!-- LOGIN FORM -->\n  \n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/static/static.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/static/static.component.ts ***!
  \*******************************************************/
/*! exports provided: StaticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticComponent", function() { return StaticComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");






var StaticComponent = /** @class */ (function () {
    function StaticComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
    }
    StaticComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.user_id = (this.sessionStorage['user_id'] != '' && this.sessionStorage['user_id'] != undefined) ? this.sessionStorage['user_id'] : false;
        this.access_token = (this.sessionStorage['access_token'] != undefined && this.sessionStorage['access_token'] != '') ? this.sessionStorage['access_token'] : '';
        this.site_settings = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].settings;
        var login_bg = $.grep(this.site_settings, function (e) { return e.key == 'common_bg_image'; });
        var bg_image = "";
        if (login_bg.length == 0) {
            console.log("not found");
        }
        else if (login_bg.length == 1) {
            // access the foo property using result[0].foo
            bg_image = login_bg[0].value;
            if (bg_image != '' || bg_image != null || bg_image != undefined) {
            }
            else {
                bg_image = '';
            }
        }
        else {
            // multiple items found
            bg_image = "";
        }
        this.login_bg = bg_image;
        var site_logo = $.grep(this.site_settings, function (e) { return e.key == 'site_logo'; });
        var logo = "";
        if (site_logo.length == 0) {
            console.log("not found");
        }
        else if (site_logo.length == 1) {
            // access the foo property using result[0].foo
            logo = site_logo[0].value;
            if (logo != '' || logo != null || logo != undefined) {
            }
            else {
                logo = '';
            }
        }
        else {
            // multiple items found
            logo = "";
        }
        this.site_logo = logo;
        var id = this.route.snapshot.paramMap['params'].id;
        this.apiService.GetPage(id).subscribe(function (data) {
            _this.data = data;
            console.log('dfdfdfdfdf', data);
        });
    };
    StaticComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-writer',
            template: __webpack_require__(/*! ./static.component.html */ "./src/app/components/static/static.component.html"),
            styles: [__webpack_require__(/*! ./static.component.css */ "./src/app/components/static/static.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StaticComponent);
    return StaticComponent;
}());



/***/ }),

/***/ "./src/app/components/subscription-success/subscription-success.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/subscription-success/subscription-success.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3Vic2NyaXB0aW9uLXN1Y2Nlc3Mvc3Vic2NyaXB0aW9uLXN1Y2Nlc3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/subscription-success/subscription-success.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/subscription-success/subscription-success.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- <div class=\"content-wrapper\" style=\"background-image:url({{login_bg}})\"> -->\n      <div class=\"login-form\" style=\"padding-top:100px;padding-bottom: 40px;\">\n          <div class=\"section-padding\">\n              <div class=\"row\">\n                  <div class=\"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3\">\n                      <div class=\"white-bg spacing1 text-center payment-status\">\n                          <img src=\"assets/img/red.png\" class=\"succes-img\">\n                          <h1>Thank you!</h1>\n                          <h3>Your Payment is received successfully !!</h3>\n                          <p>Now you can watch Video</p>\n  \n                          <a href=\"/video/{{admin_video_id}}\" *ngIf=\"admin_video_id > 0\">\n                              <button class=\"payment-submit\"><i class=\"fa fa-video-o\"></i> View Video</button>\n                          </a>\n                          <a href=\"#\" *ngIf=\"admin_video_id <= 0\">\n                              <button class=\"payment-submit\"><i class=\"fa fa-home\"></i> Home</button>\n                          </a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/subscription-success/subscription-success.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/subscription-success/subscription-success.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SubscriptionSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionSuccessComponent", function() { return SubscriptionSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");






var SubscriptionSuccessComponent = /** @class */ (function () {
    function SubscriptionSuccessComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
    }
    SubscriptionSuccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.site_settings = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].settings;
        this.user_id = (this.sessionStorage.user_id != '' && this.sessionStorage.user_id != undefined) ? this.sessionStorage.user_id : false;
        this.access_token = (this.sessionStorage.access_token != undefined && this.sessionStorage.access_token != '') ? this.sessionStorage.access_token : '';
        if (this.user_id && this.access_token) {
            this.login_bg = (this.site_settings) ? ((this.site_settings[47] != undefined) ? this.site_settings[47].value : '') : '';
            this.video_id = this.route.snapshot.paramMap['params'].id;
            this.admin_video_id = this.sessionStorage.saved_subscription_video_id > 0 ? this.sessionStorage.saved_subscription_video_id : '';
            this.apiService.getUserDetail({ id: this.user_id, token: this.access_token })
                .subscribe(function (data) {
                if (data.success) {
                    _this.profile = data;
                    _this.sessionStorage.access_token = data.token;
                    _this.sessionStorage.user_id = data.id;
                    _this.sessionStorage.user_type = data.user_type;
                    _this.sessionStorage.login_by = data.login_by;
                    _this.sessionStorage.user_picture = data.picture;
                    _this.sessionStorage.user_name = data.name;
                    _this.sessionStorage.sub_profile_id = data.sub_profile_id;
                    _this.sessionStorage.one_time_subscription = data.one_time_subscription;
                    _this.sessionStorage.saved_subscription_video_id = "";
                    localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    SubscriptionSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-actor',
            template: __webpack_require__(/*! ./subscription-success.component.html */ "./src/app/components/subscription-success/subscription-success.component.html"),
            styles: [__webpack_require__(/*! ./subscription-success.component.css */ "./src/app/components/subscription-success/subscription-success.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubscriptionSuccessComponent);
    return SubscriptionSuccessComponent;
}());



/***/ }),

/***/ "./src/app/components/subscription/subscription.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/subscription/subscription.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3Vic2NyaXB0aW9uL3N1YnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/subscription/subscription.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/subscription/subscription.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content-wrapper\">\n\n    <div class=\"login-form\" style=\"padding-top:100px; padding-bottom: 40px;\">\n\n            <div class=\"banner-spacing\">\n\n            <ul class=\"card-list row\">\n                <li class=\"col-sm-6 col-md-4 card course syllabus topic-javascript\" *ngFor=\"let subscription of subscriptions\" >\n\n                    <a class=\"card-box\">\n                        <div class=\"card-progress\">\n                           {{subscription.title}}\n                        </div>\n\n                        <div [ngClass]=\"{'sub-red-bg': (subscription.popular_status == 1) , 'sub-black-bg': (subscription.popular_status == 0)}\" class=\"sub-black-bg\">\n                        <!-- <div class=\"sub-red-bg\"> -->\n                            <strong class=\"card-type white-clr\">Plan</strong>\n                            <h3 class=\"card-title white-clr\">{{subscription.currency}} {{subscription.amount}} / {{subscription.plan}} month</h3>\n                        </div>\n\n                        <div class=\"spacing-30\">\n                            <strong class=\"card-type\">Maintain Account</strong>\n                            <h3 class=\"card-title\"><i class=\"fa fa-user-plus\"></i> {{subscription.no_of_account}}</h3>\n\n                             <p class=\"card-description\">\n                            {{subscription.description}}\n\n                         \n                            </p>\n\n                        </div>\n                    </a>\n\n                    <div class=\"clearfix\"></div>\n                  \n                    <ul class=\"card-actions\">\n                        <li class=\"card-action resume\">\n                        \n                          <!-- <a class=\"btn btn-md\" ng-class=\"{'orange-btn': (subscription.popular_status == 1) , 'pink-btn': (subscription.popular_status == 0)}\" ui-sref=\"profile.invoice({subscription_id:subscription.id})\">Pay Now</a> -->\n\n                          <a class=\"btn btn-md\" [ngClass]=\"{'orange-btn': (subscription.popular_status == 1) , 'black-btn': (subscription.popular_status == 0)}\" href=\"/invoice/{{subscription.id}}\">Pay Now</a>\n                          \n                        </li>\n                       \n                    </ul>\n\n\n                </li>\n            </ul>\n\n\n\n            </div>\n\n    </div>\n</div>\n\n<div class=\"clearfix\"></div>\n"

/***/ }),

/***/ "./src/app/components/subscription/subscription.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/subscription/subscription.component.ts ***!
  \*******************************************************************/
/*! exports provided: SubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function() { return SubscriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");






var SubscriptionComponent = /** @class */ (function () {
    function SubscriptionComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.subscription_index = function () {
            var _this = this;
            this.subscriptions = [];
            $("#before_loader").fadeIn();
            var data = new FormData;
            data.append('id', this.user_id);
            data.append('token', this.access_token);
            this.apiService.SubscriptionIndex(data)
                .subscribe(function (data) {
                if (data.success) {
                    _this.subscriptions = data.data;
                    console.log(_this.subscriptions);
                }
                else {
                    if (data.error_code == 101) {
                        _this.router.navigateByUrl('/');
                    }
                    else {
                        UIkit.notify({ message: 'Something Went wrong, Please try again later', status: 'danger', pos: 'top-center', timeout: 5000 });
                    }
                }
                $("#before_loader").fadeOut();
            });
        };
    }
    SubscriptionComponent.prototype.ngOnInit = function () {
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.site_settings = _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].settings;
        this.user_id = (this.sessionStorage.user_id != '' && this.sessionStorage.user_id != undefined) ? this.sessionStorage.user_id : false;
        this.access_token = (this.sessionStorage.access_token != undefined && this.sessionStorage.access_token != '') ? this.sessionStorage.access_token : '';
        if (this.user_id && this.access_token) {
            var bg_image = "";
            var login_bg = $.grep(this.site_settings, function (e) { return e.key == 'common_bg_image'; });
            if (login_bg.length == 0) {
                console.log("not found");
            }
            else if (login_bg.length == 1) {
                // access the foo property using result[0].foo
                bg_image = login_bg[0].value;
                if (bg_image != '' || bg_image != null || bg_image != undefined) {
                }
                else {
                    bg_image = '';
                }
            }
            else {
                // multiple items found
                bg_image = "";
            }
            this.login_bg = bg_image;
            this.one_time_subscription = this.sessionStorage.one_time_subscription;
            console.log(this.one_time_subscription);
            this.subscription_index();
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    SubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subscription',
            template: __webpack_require__(/*! ./subscription.component.html */ "./src/app/components/subscription/subscription.component.html"),
            styles: [__webpack_require__(/*! ./subscription.component.css */ "./src/app/components/subscription/subscription.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubscriptionComponent);
    return SubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/components/trailer-video/trailer-video.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/trailer-video/trailer-video.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhaWxlci12aWRlby90cmFpbGVyLXZpZGVvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/trailer-video/trailer-video.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/trailer-video/trailer-video.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" style=\"position: relative; height: 750px;\">\n    <div class=\"back_button\" style=\"z-index: 9999; top: 25%\">\n        <a style=\"background: transparent;border: none; cursor: pointer;\" onclick=\"javascript:history.go(-1)\" >\n            <i class=\"fa fa-arrow-circle-o-left\" title=\"Back To Home\"></i>\n        </a>\n        <button class=\"btn btn-success\" type=\"button\" (click)=\"openPopup(id, 960, 550)\" style=\"width: 250px; margin-left: 5%\">play</button>\n    </div>\n    <div style=\"width: 90% !important;margin: 0 auto;\">\n        <!-- <fwd *ngIf = \"videoFetched\" parentId=\"video01\" [opts] = \"opts\"></fwd> -->\n        <!-- <img src=\"{{videoData.video?.default_image}}\" /> -->\n    </div>\n    <div class=\"embed-link\">\n        <div class=\"embed_icon\">\n            <div class=\"modal fade embed-top\" id=\"embed-popup\" role=\"dialog\">\n                <div class=\"modal-dialog\">\n                    <div class=\"modal-content embed-bg\" style=\"background-image: url(img/img7.jpg);\">\n                        <div class=\"embed-overlay\">\n                            <div class=\"modal-header\">\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                <h4 class=\"modal-title\">Video Name</h4>\n                            </div>\n                            <div class=\"modal-body\">\n                                <textarea type=\"text\" row=\"\" name=\"embed_link\" [(ngModel)]=\"embed_link\" class=\"form-control\" id=\"embed_link\"></textarea>\n                            </div>\n                            <div class=\"modal-footer\">\n                                <div class=\"text-right\">\n                                    <button type=\"button\" class=\"payment-submit\" title=\"Copy Link\" (click)=\"copyFromTextBox()\">Copy</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/trailer-video/trailer-video.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/trailer-video/trailer-video.component.ts ***!
  \*********************************************************************/
/*! exports provided: TrailerVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailerVideoComponent", function() { return TrailerVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_app_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-global */ "./src/app/app-global.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var TrailerVideoComponent = /** @class */ (function () {
    function TrailerVideoComponent(apiService, router, route, titleService) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.title = "FWD";
        this.videoFetched = false;
        this.opts = {
            instanceName: 'first-video',
            mainFolderPath: "/assets/fwd-content",
            skinPath: "minimal_skin_dark",
            initializeOnlyWhenVisible: "no",
            displayType: "responsive",
            autoScale: "yes",
            fillEntireVideoScreen: "no",
            openDownloadLinkOnMobile: "no",
            useHEXColorsForSkin: "no",
            normalHEXButtonsColor: "#FF0000",
            selectedHEXButtonsColor: "#FFFFFF",
            privateVideoPassword: "428c841430ea18a70f7b06525d4b748a",
            startAtTime: "",
            stopAtTime: "",
            startAtVideoSource: 2,
            videoSource: [],
            posterPath: "/assets/fwd-content/posters/360.jpg",
            showErrorInfo: "yes",
            fillEntireScreenWithPoster: "yes",
            rightClickContextMenu: "default",
            disableDoubleClickFullscreen: "no",
            useChromeless: "no",
            showPreloader: "yes",
            addKeyboardSupport: "yes",
            autoPlay: "no",
            loop: "no",
            maxWidth: 2500,
            maxHeight: 1500,
            volume: .8,
            greenScreenTolerance: 200,
            backgroundColor: "#000000",
            posterBackgroundColor: "#0099FF",
            //logo settings
            showLogo: "yes",
            hideLogoWithController: "yes",
            logoPosition: "topRight",
            logoLink: "http://www.webdesign-flash.ro",
            logoMargins: 5,
            //controller settings
            showController: "yes",
            showControllerWhenVideoIsStopped: "yes",
            showVolumeScrubber: "yes",
            showVolumeButton: "yes",
            showTime: "yes",
            showQualityButton: "yes",
            showShareButton: "yes",
            showEmbedButton: "yes",
            showDownloadButton: "yes",
            showFullScreenButton: "yes",
            repeatBackground: "yes",
            controllerHeight: 41,
            controllerHideDelay: 3,
            startSpaceBetweenButtons: 7,
            spaceBetweenButtons: 9,
            mainScrubberOffestTop: 14,
            scrubbersOffsetWidth: 4,
            timeOffsetLeftWidth: 5,
            timeOffsetRightWidth: 3,
            volumeScrubberWidth: 80,
            volumeScrubberOffsetRightWidth: 0,
            timeColor: "#888888",
            youtubeQualityButtonNormalColor: "#888888",
            youtubeQualityButtonSelectedColor: "#FFFFFF",
            //cuepoints
            executeCuepointsOnlyOnce: "no",
            //subtitles
            showSubtitleButton: "yes",
            subtitlesOffLabel: "Subtitle off",
            startAtSubtitle: 1,
            //audio visualizer
            audioVisualizerLinesColor: "#0099FF",
            audioVisualizerCircleColor: "#FFFFFF",
            //advertisement on pause window
            aopwTitle: "Advertisement",
            aopwSource: "",
            aopwWidth: 400,
            aopwHeight: 240,
            aopwBorderSize: 6,
            aopwTitleColor: "#FFFFFF",
            //playback rate / speed
            showPlaybackRateButton: "no",
            defaultPlaybackRate: "1",
            //embed window
            embedWindowCloseButtonMargins: 0,
            borderColor: "#333333",
            mainLabelsColor: "#FFFFFF",
            secondaryLabelsColor: "#a1a1a1",
            shareAndEmbedTextColor: "#5a5a5a",
            inputBackgroundColor: "#000000",
            inputColor: "#FFFFFF"
        };
        this.redirect = function () {
            $("html>div").remove();
            window.location.replace(this.prevUrl);
            location.reload();
        };
        this.openPopup = function (htmlPage, width, height) {
            // var left = parseInt(((window.innerWidth) - width)/2);
            // var top =  parseInt(((window.innerHeight) - height)/2);
            window.open(htmlPage, "", 'width=' + '1000px' + ', height=' + '650px' + ', top=' + '300px' + ', left=' + '700px');
        };
        this.titleService.setTitle('Flashington | Trailer');
    }
    TrailerVideoComponent.prototype.addVideoSource = function (videoLink) {
        this.opts.videoSource.push({ source: videoLink, label: "small version", is360: "yes" });
        this.videoFetched = true;
    };
    TrailerVideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.sessionStorage);
        this.user_id = (this.sessionStorage.user_id != '' && this.sessionStorage.user_id != undefined) ? this.sessionStorage.user_id : false;
        this.access_token = (this.sessionStorage.access_token != undefined && this.sessionStorage.access_token != '') ? this.sessionStorage.access_token : '';
        if (this.user_id && this.access_token) {
            this.sub_profile_id = this.sessionStorage.sub_profile_id;
            this.user_type = (this.sessionStorage.user_type == undefined || this.sessionStorage.user_type == 0) ? true : false;
            this.height = $(window).height();
            this.page_not_changed = true;
            var id = this.route.snapshot.paramMap['params'].id;
            this.id = this.id = 'https://flashington.com/popupVideo/' + id;
            this.apiService.getSingleVideo({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, admin_video_id: id, device_type: 'web' })
                .subscribe(function (data) {
                if (data.success) {
                    _this.videoData = data;
                    console.log('this is trailer video', _this.videoData);
                    _this.embed_link = src_app_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "embed?v_t=2&u_id=" + data.video.unique_id;
                    _this.sessionStorage.saved_subscription_video_id = "";
                    localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
                    if (_this.videoData.pay_per_view_status) {
                    }
                    else {
                        _this.page_not_changed = false;
                        _this.sessionStorage.saved_subscription_video_id = _this.route.snapshot.paramMap['params'].id;
                        localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
                        _this.router.navigateByUrl('/pay_per_view' + _this.videoData.video.admin_video_id);
                    }
                    if (_this.videoData.pay_per_view_status && _this.videoData.video.amount <= 0) {
                        if (_this.user_type) {
                            _this.page_not_changed = false;
                            _this.sessionStorage.saved_subscription_video_id = _this.route.snapshot.paramMap['params'].id;
                            localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
                            _this.router.navigateByUrl('/subscriptions' + _this.sessionStorage.sub_profile_id);
                        }
                    }
                    if (_this.page_not_changed) {
                        _this.sessionStorage.continous_watch_video_id = _this.route.snapshot.paramMap['params'].id;
                        _this.sessionStorage.continous_sub_profile_id = _this.sessionStorage.sub_profile_id;
                        localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
                        console.log(_this.videoData);
                        var videoId = _this.getId(_this.videoData['trailer_video']);
                        if (videoId != 'error') {
                            _this.videoFile = "www.youtube.com/embed/" + videoId;
                        }
                        else {
                            _this.videoFile = _this.videoData.trailer_video;
                        }
                        _this.addVideoSource(_this.videoFile);
                    }
                }
                else {
                    UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                    return false;
                }
            });
        }
        else {
            window.localStorage.setItem('logged_in', 'false');
            this.sessionStorage = {};
            localStorage.removeItem("sessionStorage");
            localStorage.clear();
            this.router.navigateByUrl('/');
        }
    };
    TrailerVideoComponent.prototype.getId = function (url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return match[2];
        }
        else {
            return 'error';
        }
    };
    TrailerVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trailer-video',
            template: __webpack_require__(/*! ./trailer-video.component.html */ "./src/app/components/trailer-video/trailer-video.component.html"),
            styles: [__webpack_require__(/*! ./trailer-video.component.css */ "./src/app/components/trailer-video/trailer-video.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], TrailerVideoComponent);
    return TrailerVideoComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-global */ "./src/app/app-global.ts");





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    /** Get App Setting Information */
    ApiService.prototype.getAppSettingInfo = function () {
        return this.http.get(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/site_settings').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    /** Get Static Pages for footer */
    ApiService.prototype.getAllPages = function () {
        return this.http.get(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/allPages').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    /** Signin */
    ApiService.prototype.signIn = function (SendData) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/login', SendData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.signUp = function (SendData) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/register', SendData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.Logout = function (SendData) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/logout', SendData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    /**
     *  Profile APIs
     */
    /** Get User Detail */
    ApiService.prototype.getUserDetail = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/userDetails', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    /** Get Profiles */
    ApiService.prototype.getProfiles = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/active-profiles', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    /** Get Subscriptions */
    ApiService.prototype.getSubscription = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/get-subscription', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    /** Get Single Subscription */
    ApiService.prototype.getSingleSubscription = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/view-sub-profile', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    /** Edit Profile */
    ApiService.prototype.sendProfileInfo = function (formData) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/edit-sub-profile', formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    /** Delete Profile */
    ApiService.prototype.sendDeleteProfile = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/delete-sub-profile', {
            sub_profile_id: sessionStorage.profileId,
            id: sessionStorage.user_id,
            token: sessionStorage.access_token
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    /** Add new profile */
    ApiService.prototype.addNewProfile = function (formData) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/add-profile', formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    /** Get Active categories */
    // getActiveCategories(sessionStorage): Observable<any> {
    //   return this.http.post(AppGlobal.apiBase + 'userApi/active-categories', {
    //     sub_profile_id: sessionStorage.profileId,
    //     id: sessionStorage.user_id,
    //     token: sessionStorage.access_token
    //   }).pipe(map(data => data.json()));
    // }
    ApiService.prototype.getActiveCategories = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/active-categories', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.getHomeData = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/home', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.getVideoData = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/browse', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.getAllChannels = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/all_channels', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.getSingleChannel = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/single_channel', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.AddWishList = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/addWishlist', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.deleteWishlist = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/deleteWishlist', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.likeVideo = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/like_video', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.dislikeVideo = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/dis_like_video', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.spamReasons = function () {
        return this.http.get(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/spam-reasons').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.getDetails = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/details', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.AddSpam = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/add_spam', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.GetGenreList = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/genre_list', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.getSingleVideo = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/singleVideo', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.ApplyCouponPpv = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/apply/coupon/ppv', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.Payppv = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/pay_ppv', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.Stripeppv = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/stripe_ppv', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.SearchVideo = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/searchVideo', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.AcitvePlan = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/active_plan', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.EmailNotification = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/email/notification', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.UpdateProfile = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/updateProfile', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.ChangePassword = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/changePassword', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.DeleteAccount = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/deleteAccount', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.SubscriptionIndex = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/subscription_index', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.PlanDetail = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/plan_detail', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.ApplyCouponSubscription = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/apply/coupon/subscription', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.ZeroPlan = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/zero_plan', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.StripePayment = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/stripe_payment', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.SubscribedPlans = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/subscribed_plans', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.CancelSubscription = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/cancel/subscription', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.AutoRenewalEnable = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/autorenewal/enable', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.PpvList = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/ppv_list', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.RedNotice = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/red-notifications', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.notifications = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/notifications', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.CastAndCrewVideos = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/castAndCrew_videos', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.CastCrewVideos = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/cast_crews/videos', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.GenreVideo = function (sessionStorage) {
        return this.http.post(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/genre-video', sessionStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService.prototype.GetPage = function (id) {
        return this.http.get(_app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + 'userApi/getPage/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/loader.intercepter.ts":
/*!************************************************!*\
  !*** ./src/app/services/loader.intercepter.ts ***!
  \************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");




var LoaderInterceptor = /** @class */ (function () {
    function LoaderInterceptor(loaderService) {
        this.loaderService = loaderService;
    }
    LoaderInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.loaderService.show();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return _this.loaderService.hide(); }));
    };
    LoaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], LoaderInterceptor);
    return LoaderInterceptor;
}());



/***/ }),

/***/ "./src/app/services/loader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    LoaderService.prototype.show = function () {
        this.isLoading.next(true);
    };
    LoaderService.prototype.hide = function () {
        this.isLoading.next(false);
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/services/router-ext.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/router-ext.service.ts ***!
  \************************************************/
/*! exports provided: RouterExtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterExtService", function() { return RouterExtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RouterExtService = /** @class */ (function () {
    function RouterExtService(router) {
        var _this = this;
        this.router = router;
        this.previousUrl = undefined;
        this.currentUrl = undefined;
        this.currentUrl = this.router.url;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.previousUrl = _this.currentUrl;
                _this.currentUrl = event.url;
            }
        });
    }
    RouterExtService.prototype.getPreviousUrl = function () {
        return this.previousUrl;
    };
    RouterExtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RouterExtService);
    return RouterExtService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n    position: relative !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" *ngIf=\"loadStatus\" style=\"position: relative !important\">\n  <div class=\"banner-spacing\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-8 col-lg-8 top\">\n        <div class=\"foot-head\">\n          <a style=\"text-decoration: none\" class=\"foot-link\">Questions? Contact Us</a>\n        </div>\n        <div class=\"footer row no-margin\">\n          <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-6\"  >\n            <div class=\"\">\n              <a href=\"/page/{{page?.id}}\" class=\"foot-link\" *ngFor=\"let page of footerPages[0]\" style=\"text-transform: capitalize;\">{{page?.heading}}</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4\">\n        <div class=\"row\">\n          <div class=\"col-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 top \">\n            <ul class=\"foot-app\">Get the latest App:\n              <li *ngIf=\"appstore\">\n                <a target=\"_blank\" href=\"{{AppSettings.appstore}}\"><img src=\"./assets/img/ios-app.png\"></a>\n              </li>\n              <li *ngIf=\"playstore\">\n                <a target=\"_blank\" href=\"{{AppSettings.playstore}}\"><img src=\"./assets/img/android.png\"></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 top\" >\n            <p class=\"no-margin small-size foot-clr\">Find Us On</p>\n            <ul class=\"foot-share\">\n\n              <li >\n                <a href=\"{{facebook_link}}\" target=\"_blank\">\n                  <span class=\"fa-stack fa-lg\">\n                    <i class=\"fa fa-circle fa-stack-2x social-fb\"></i>\n                    <i class=\"fa fa-facebook fa-stack-1x fa-inverse foot-share2\"></i>\n                  </span>\n                </a>\n\n              </li>\n              <li >\n                <a href=\"{{twitter_link}}\" target=\"_blank\">\n                  <span class=\"fa-stack fa-lg\">\n                    <i class=\"fa fa-circle fa-stack-2x social-twitter\"></i>\n                    <i class=\"fa fa-twitter fa-stack-1x fa-inverse foot-share2\"></i>\n                  </span>\n                </a>\n              </li>\n              <li >\n                <a href=\"{{linkedin_link}}\" target=\"_blank\">\n                  <span class=\"fa-stack fa-lg\">\n                    <i class=\"fa fa-circle fa-stack-2x social-linkedin\"></i>\n                    <i class=\"fa fa fa-linkedin fa-stack-1x fa-inverse foot-share2\"></i>\n                  </span>\n                </a>\n              </li>\n              <li >\n                <a href=\"{{pinterest_link}}\" target=\"_blank\">\n                  <span class=\"fa-stack fa-lg\">\n                    <i class=\"fa fa-circle fa-stack-2x social-pinterest\"></i>\n                    <i class=\"fa fa fa-pinterest fa-stack-1x fa-inverse foot-share2\"></i>\n                  </span>\n                </a>\n              </li>\n\n              <li>\n\n                <a href=\"{{google_plus_link}}\" target=\"_blank\">\n                  <span class=\"fa-stack fa-lg\">\n                    <i class=\"fa fa-circle fa-stack-2x social-google-icon\"></i>\n                    <i class=\"fa fa fa-google fa-stack-1x fa-inverse foot-share2\"></i>\n                  </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app-settings */ "./src/app/app-settings.ts");




var FooterComponent = /** @class */ (function () {
    function FooterComponent(apiService) {
        this.apiService = apiService;
        this.footerPages = {};
        this.alpages = {};
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadStatus = false;
        if (_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].settings) {
            this.AppSettings = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].settings;
            this.facebook_link = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]['facebook_link'];
            this.linkedin_link = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]['linked_link'];
            this.twitter_link = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]['twitter_link'];
            this.pinterest_link = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]['pinterest_link'];
            this.google_plus_link = _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]['google_plus_link'];
            console.log(this.AppSettings);
            this.apiService.getAllPages().subscribe(function (data) {
                _this.footerPages = (data);
                console.log(_this.footerPages);
                _this.alpages = _this.footerPages[0];
                _this.loadStatus = true;
            });
        }
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.navbar-header {\r\n    margin-right: 20px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uYXZiYXItaGVhZGVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\">\n.navbar-header {\n    margin-right: 20px !important;\n}\n</style>\n<nav class=\"navbar navbar-default navbar-fixed-top nav-scroll {{black_bg}}\" role=\"navigation\" *ngIf=\"loadStatus\">\n\t<div class=\"search-section\" id=\"top-search-section\">\n\t\t<form >\n\t\t\t<div class=\"input-group\">\n\t\t\t    <input type=\"text\" class=\"form-control\" name=\"key\" autocomplete=\"true\" (keyup.enter)=\"getSearchModel(search_key)\" [ngModel]=\"search_key\" placeholder=\"Search..\" id=\"search_key\">\n\t\t\t    <div class=\"input-group-btn\">\n\t\t\t      \t<button class=\"btn btn-default\" type=\"submit\">\n\t\t\t        \t<i class=\"glyphicon glyphicon-search\"></i>\n\t\t\t        </button>\n\t\t\t    </div>\n\t\t\t</div>\n\t\t</form>\n\t\t<a (click)=\"hideSearch()\" style=\"cursor: pointer;\"><i class=\"fa fa-close top-close-icon\"></i></a>\n\t</div>\n\t\n\t<div class=\"header_section\" id=\"header-section\">\n\t\t<div class=\"navbar-header left-align\">\n\t\t\t \n\t\t\t<!-- <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n\t\t\t\t <span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t <span class=\"icon-bar\"></span>\n\t\t\t\t <span class=\"icon-bar\"></span>\n\t\t\t\t <span class=\"icon-bar\"></span>\n\t\t\t</button>  -->\n\t\t\t<a class=\"navbar-brand hidden-xs\" href=\"/home/{{sub_profile_id}}\">\n\t\t\t\t<!-- <img ng-src=\"{{site_logo}}\"> -->\n\t\t\t\t<img src=\"{{site_logo}}\" class=\"hidden-xs\">\n\t\t\t</a>\n\t\t</div>\n\t\t\n\t\t<!-- <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"> -->\n\t\t<div>\n\t\t\t<ul class=\"nav navbar-nav left-align\">\n\t\t\t\n\t\t\t\t<li class=\"primary-menu hidden-sm\">\n\t\t\t\t\t<a href=\"/home/{{sub_profile_id}}\">Home</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"primary-menu hidden-sm\" *ngFor=\"let value of ActiveCategories\">\n\t\t\t\t\t<a href=\"/browse/{{value.id}}\">{{value.name}}</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"primary-menu hidden-sm\">\n\t\t\t\t\t<a href=\"/channels\">Channels</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"primary-menu hidden-sm\">\n\t\t\t\t\t<a href=\"/browse/recent\">Recently Added</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"primary-menu hidden-sm\">\n\t\t\t\t\t<a href=\"/title/wishlist\">My List </a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\n\t\t\t<ul class=\"nav navbar-nav navbar-right right-align\">\n\t\t\t\t<li>\n\t\t\t\t\t<form style=\"padding-top: 9px;\" class=\"hidden-xs\">\n\t\t\t\t\t  \t<input id=\"search-box\" type=\"text\" class=\"search-box\" name=\"search_key\" autocomplete=\"true\" (keyup.enter)=\"getSearchModel(search_key)\" [ngModel]=\"search_key\" placeholder=\"Search..\" (ngModelChange)=\"changeSearch($event)\"/>\n\t\t\t\t\t  \t<label for=\"search-box\"><span class=\"glyphicon glyphicon-search search-icon\"></span></label>\n\t\t\t\t\t</form>\n\t\t\t\t\t<a class=\"search-box-xs visible-xs\" (click)=\"searchShow()\" style=\"cursor: pointer;\"><i class=\"fa fa-search search-icon1\"></i></a>\n\t\t\t\t</li>\n\n\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t  \n\t\t\t\t\t  <a id=\"dLabel\" role=\"button\" data-toggle=\"dropdown\" data-target=\"#\" style=\"position: relative;\" (click)=\"redNotification()\">\n\t\t\t\t\t    <i class=\"glyphicon glyphicon-bell\"></i>\n\t\t\t\t\t    <span class=\"notification_badge\" id=\"notification_badge\" *ngIf=\"notifications_count > 0\">{{notifications_count}}</span>\n\t\t\t\t\t  </a>\n\t\t\t\t\t  \n\t\t\t\t\t  <ul class=\"dropdown-menu notifications\" role=\"menu\" aria-labelledby=\"dLabel\">\n\t\t\t\t\t    \n\t\t\t\t\t \n\t\t\t\t\t   <div class=\"notifications-wrapper\">\n\t\t\t\t\t   \t\t<div *ngFor=\"let notification of notifications\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t    <a class=\"content\" *ngIf=\"notification.pay_per_view_status\" href=\"/video/{{ notification.admin_video_id}}\">\n\n\t\t\t\t\t\t\t       <div class=\"notification-item\">\n\n\t\t\t\t\t\t\t       \t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t       \t<div class=\"col-lg-3\">\n\t\t\t\t\t\t\t\t       \t\t<div  [ngStyle]=\"{ 'background-image': 'url(' + notification.img + ')'}\" class=\"noti-img\"></div>\n\t\t\t\t\t\t\t\t       \t</div>\n\n\t\t\t\t\t\t\t\t       \t<div class=\"col-lg-9\">\n\n\t\t\t\t\t\t\t\t        <h4 class=\"item-title\" style=\"text-overflow: ellipsis;\">{{notification.title}}</h4>\n\n\t\t\t\t\t\t\t\t        <p class=\"item-info\">\n\t\t\t\t\t\t\t\t        \t{{notification.time}} \n\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t    \t</p>\n\n\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t\t    </a>\n\t\t\t\t\t\t    </div>\n\n\t\t\t\t\t\t    <div *ngIf=\"notifications?.length == 0\">\t\n\n\t\t\t\t\t\t    \t<p style=\"color: #fff;padding: 15px; margin: 0;\">Sorry - You dont have any notifications</p>\n\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t   </div>\n\t\t\t\t\t    <div class=\"notification-footer\" *ngIf=\"notifications?.length > 0\">\n\t\t\t\t\t    \t<a href=\"/title/recent\">\n\t\t\t\t\t    \t<h4 class=\"menu-title pull-right\">View all&nbsp;<i class=\"fa fa-chevron-right\"></i></h4>\n\t\t\t\t\t    \t</a>\n\t\t\t\t\t    \t<div class=\"clearfix\"></div>\n\t\t\t\t\t    </div>\n\t\t\t\t\t  </ul>\n\t\t\t\t\t  \n\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t<li class=\"dropdown nav-profile\">\n\t\t\t\t\t<a class=\"dropdown-toggle hidden-xs l-height-27\" data-toggle=\"dropdown\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t<div class=\"nav-profile-img bg-img\" style=\"background-image: url('https://admin.flashington.com/placeholder.png');\"></div>\n\t\t\t\t\t\t<span class=\"nav-profile-name t-0\">{{sub_profile?.name}}</span>\n\t\t\t\t\t \t<strong class=\"caret top-4\">\t</strong>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"dropdown-toggle visible-xs\" data-toggle=\"dropdown\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t<!-- <div class=\"nav-profile-img bg-img\" style=\"background-image: url({{sub_profile.picture}});\"></div> -->\n\t\t\t\t\t</a>\n\t\t\t\t\t<ul class=\"dropdown-menu nav-profile-menu\" style=\"margin-top: 10px;\">\n\t\t\t\t\t\t<div class=\"border-bot more-profile padding15\">\n\t\t\t\t\t\t\t<li class=\"row no-margin\" *ngFor=\"let value of profiles\">\n\t\t\t\t\t\t\t\t<a ><div class=\"nav-profile-img bg-img\" style=\"background-image: url('https://admin.flashington.com/placeholder.png');\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"nav-profile-name\">{{value.name}} <span *ngIf=\"value.status == 1\">(Main)</span></div></a>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"/manage-profiles\">Manage Profile</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"padding15 more-profile1\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"/account-setting/{{sub_profile_id}}\">\n\t\t\t\t\t\t\t\t\tYour Account\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"/payment-details\">\n\t\t\t\t\t\t\t\t\tPayment History\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a (click)=\"logout()\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t\t\t\tSignout\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\t\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _app_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-global */ "./src/app/app-global.ts");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.sessionStorage = {};
        this.sub_profile = {};
        this.profiles = [];
        this.notifications = [];
        this.sub_profile_data = function (sub_profile_id) {
            var _this = this;
            var sub_profile_id = sub_profile_id ? sub_profile_id : this.sub_profile_id;
            this.apiService.getSingleSubscription({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, sub_profile_id: sub_profile_id })
                .subscribe(function (data) {
                if (data.success) {
                    _this.sub_profile = data.data;
                    window.localStorage.setItem('sub_profile', JSON.stringify(data.data));
                }
                else {
                    if (data.error_code == 101 || data.error_code == 103 || data.error_code == 104) {
                        window.localStorage.setItem('logged_in', 'false');
                        _this.sessionStorage = {};
                        localStorage.removeItem("sessionStorage");
                        localStorage.clear();
                        // this.router.navigateByUrl('/');
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        _this.router.navigateByUrl('/view-profile');
                        return false;
                    }
                }
            });
        };
        this.activeProfiles = function (sub_profile_id) {
            var _this = this;
            var sub_profile_id = sub_profile_id ? sub_profile_id : this.sub_profile_id;
            this.apiService.getProfiles({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token, sub_profile_id: sub_profile_id })
                .subscribe(function (data) {
                if (data.success) {
                    _this.profiles = data.data;
                }
                else {
                    if (data.error_code == 101 || data.error_code == 103 || data.error_code == 104) {
                        window.localStorage.setItem('logged_in', 'false');
                        _this.sessionStorage = {};
                        localStorage.removeItem("sessionStorage");
                        localStorage.clear();
                        _this.router.navigateByUrl('/index');
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                }
            });
        };
        this.logout = function () {
            var details = { id: '', token: '' };
            details.id = this.sessionStorage.user_id;
            details.token = this.sessionStorage.access_token;
            this.signoutAllDevice(details);
        };
        this.signoutAllDevice = function (data) {
            this.logoutFn();
        };
        this.logoutFn = function () {
            var _this = this;
            if (!this.logoutFnCalled) {
                this.apiService.Logout({ id: this.sessionStorage.user_id, token: this.sessionStorage.access_token })
                    .subscribe(function (data) {
                    if (data.success) {
                        window.localStorage.setItem('logged_in', 'false');
                        _this.sessionStorage = {};
                        localStorage.removeItem("sessionStorage");
                        localStorage.clear();
                        UIkit.notify({ message: "Logged Out Successfully", status: 'success', timeout: 3000, pos: 'top-center' });
                        _this.logoutFnCalled = 1;
                        _this.router.navigateByUrl('/');
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                });
            }
        };
        this.notifications_method = function () {
            var _this = this;
            setTimeout(function () {
                _this.apiService.notifications({ id: _this.user_id, token: _this.access_token, sub_profile_id: _this.sub_profile_id })
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.notifications = data.data;
                        _this.notifications_count = data.count;
                    }
                    else {
                        UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                        return false;
                    }
                });
            }, 5000);
        };
        this.getSearchModel = function () {
            if (this.search_key != '' && this.search_key != undefined) {
                window.location.href = "/search/" + this.search_key;
            }
            else {
                window.location.href = "/home/" + this.sessionStorage.sub_profile_id;
            }
        };
        this.changeSearch = function (data) {
            this.search_key = data;
        };
        this.redNotification = function () {
            $.ajax({
                type: "post",
                url: _app_global__WEBPACK_IMPORTED_MODULE_4__["AppGlobal"].apiBase + "userApi/red-notifications",
                data: { id: this.user_id, token: this.access_token, sub_profile_id: this.sub_profile_id },
                async: false,
                success: function (data) {
                    this.notifications_count = 0;
                    if (data.error_code == 101 || data.error_code == 103 || data.error_code == 104) {
                        window.localStorage.setItem('logged_in', 'false');
                        this.sessionStorage = {};
                        localStorage.removeItem("sessionStorage");
                        localStorage.clear();
                        this.router.navigateByUrl('/');
                    }
                },
                error: function (data) {
                    UIkit.notify({ message: 'Something Went Wrong, Please Try again later', timeout: 1000, pos: 'top-center', status: 'danger' });
                },
            });
        };
        this.loadStatus = false;
        this.sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
        //this.sub_profile = JSON.parse(localStorage.getItem('sub_profile'));
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionStorage = JSON.parse(localStorage.getItem('sessionStorage'));
        this.sub_profile_id = (this.sessionStorage['sub_profile_id'] != '' && this.sessionStorage['sub_profile_id'] != undefined) ? this.sessionStorage['sub_profile_id'] : false;
        this.user_id = (this.sessionStorage['user_id'] != '' && this.sessionStorage['user_id'] != undefined) ? this.sessionStorage['user_id'] : false;
        this.access_token = (this.sessionStorage['access_token'] != undefined && this.sessionStorage['access_token'] != '') ? this.sessionStorage['access_token'] : '';
        this.getAllsetting();
        this.sub_profile = JSON.parse(localStorage.getItem('sub_profile'));
        this.sub_profile_data(this.sessionStorage['sub_profile_id']);
        //this.notifications_method();console.log(this.notifications);
        this.apiService.notifications({ id: this.user_id, token: this.access_token, sub_profile_id: this.sub_profile_id })
            .subscribe(function (data) {
            if (data.success) {
                _this.notifications = data.data;
                _this.notifications_count = data.count;
            }
            else {
                UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                return false;
            }
        });
        //setTimeout(this.notifications_method, 5000);
        this.activeProfiles(this.sessionStorage['sub_profile_id']);
    };
    HeaderComponent.prototype.getAllsetting = function () {
        var _this = this;
        this.apiService.getAppSettingInfo().subscribe(function (data) {
            _this.AppSettings = data;
            _this.appSettingLoaded = true;
            _this.user_id = (_this.sessionStorage['user_id'] != '' && _this.sessionStorage['user_id'] != undefined) ? _this.sessionStorage['user_id'] : false;
            _this.access_token = (_this.sessionStorage['access_token'] != undefined && _this.sessionStorage['access_token'] != '') ? _this.sessionStorage['access_token'] : '';
            if (_this.user_id && _this.access_token) {
                var site_logo = $.grep(_this.AppSettings, function (e) { return e.key == "site_logo"; });
                var logo = "";
                if (site_logo.length == 0) {
                }
                else if (site_logo.length == 1) {
                    // access the foo property using result[0].foo
                    logo = site_logo[0].value;
                    if (logo != '' || logo != null || logo != undefined) {
                    }
                    else {
                        logo = '';
                    }
                }
                else {
                    // multiple items found
                    logo = "";
                }
                _this.site_logo = logo;
                var site_icon = $.grep(_this.AppSettings, function (e) { return e.key == 'site_icon'; });
                var icon = "";
                if (site_icon.length == 0) {
                }
                else if (site_icon.length == 1) {
                    // access the foo property using result[0].foo
                    icon = site_icon[0].value;
                    if (icon != '' || icon != null || icon != undefined) {
                    }
                    else {
                        icon = '';
                    }
                }
                else {
                    // multiple items found
                    icon = "";
                }
                _this.site_icon = icon;
                _this.user_id = (_this.sessionStorage['user_id'] != '' && _this.sessionStorage['user_id'] != undefined) ? true : false;
                if (!_this.user_id) {
                    _this.router.navigateByUrl('/index');
                }
                var sub_profile_id = _this.route.snapshot.params.id;
                if (sub_profile_id == undefined || sub_profile_id == "") {
                    _this.sub_profile_id = _this.sessionStorage['sub_profile_id'];
                }
                else {
                    _this.sessionStorage['sub_profile_id'] = sub_profile_id;
                    _this.sub_profile_id = _this.sessionStorage['sub_profile_id'];
                    localStorage.setItem('sessionStorage', JSON.stringify(_this.sessionStorage));
                }
                _this.user_picture = (_this.sessionStorage['user_picture'] != '' && _this.sessionStorage['user_picture'] != undefined) ? _this.sessionStorage['user_picture'] : 'img/model3.jpg';
                _this.user_name = (_this.sessionStorage['user_name'] != '' && _this.sessionStorage['user_name'] != undefined) ? _this.sessionStorage['user_name'] : '';
                _this.apiService.getSingleSubscription({ id: _this.sessionStorage['user_id'], token: _this.sessionStorage['access_token'], sub_profile_id: _this.sub_profile_id })
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.sub_profile = data.data;
                        window.localStorage.setItem('sub_profile', JSON.stringify(data.data));
                    }
                    else {
                        if (data.error_code == 101 || data.error_code == 103 || data.error_code == 104) {
                            window.localStorage.setItem('logged_in', 'false');
                            _this.sessionStorage = {};
                            localStorage.removeItem("sessionStorage");
                            localStorage.clear();
                            _this.router.navigateByUrl('/index');
                        }
                        else {
                            UIkit.notify({ message: data.error_messages, timeout: 3000, pos: 'top-center', status: 'danger' });
                            _this.router.navigateByUrl('/view-profile');
                            return false;
                        }
                    }
                });
                _this.activeProfiles(_this.sub_profile_id);
            }
        });
        this.apiService.getActiveCategories({ id: this.sessionStorage['user_id'], token: this.sessionStorage['access_token'] }).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.ActiveCategories = data.data[0];
            }
            _this.loadStatus = true;
            if (!data.success) {
                _this.router.navigateByUrl('/index');
            }
        });
    };
    HeaderComponent.prototype.searchShow = function () {
        // alert("showing");
        $('#header-section').slideUp();
        $('#top-search-section').slideDown();
    };
    ;
    HeaderComponent.prototype.hideSearch = function () {
        // alert("Hiding");
        $('#header-section').slideDown();
        $('#top-search-section').slideUp();
    };
    ;
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/loader/loader.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/loader/loader.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=page_preloader class=\"page-loading\" *ngIf=\"isLoading | async\">\n  <img src=\"./assets/img/page_preloader.svg\" alt=Loader title=Loader width=48 height=48 />\n</div>"

/***/ }),

/***/ "./src/app/shared/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/loader.service */ "./src/app/services/loader.service.ts");



var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.isLoading = this.loaderService.isLoading;
    }
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/shared/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/shared/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! E:\work\fashion_streamview_Min\front end ng7\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map