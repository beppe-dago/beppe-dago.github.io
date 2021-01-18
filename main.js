(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gidagost\Documents\Angular\angular-projects\FocusMeter\FocusMeter\src\main.ts */"zUnb");


/***/ }),

/***/ "0jDt":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sandbox/sandbox.component */ "hu5T");
/* harmony import */ var _access_container_access_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access-container/access-container.component */ "6Zl/");
/* harmony import */ var _security_services_route_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security-services/route-guard.service */ "M0Sv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_container_main_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-container/main-container.component */ "wN61");
/* harmony import */ var _reports_detail_reports_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reports-detail/reports-detail.component */ "sHVl");
/* harmony import */ var _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes/RoutesPath */ "CNR5");
/* harmony import */ var _report_detail_report_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./report-detail/report-detail.component */ "wNAo");












const routes = [
    {
        path: _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_8__["INDEX"],
        pathMatch: 'full',
        redirectTo: _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_8__["HOME"]
    },
    {
        path: _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_8__["HOME"],
        pathMatch: 'full',
        component: _main_container_main_container_component__WEBPACK_IMPORTED_MODULE_6__["MainContainerComponent"],
        canActivate: [_security_services_route_guard_service__WEBPACK_IMPORTED_MODULE_2__["RouteGuardService"]]
    },
    {
        path: _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_8__["REPORTS"],
        component: _reports_detail_reports_detail_component__WEBPACK_IMPORTED_MODULE_7__["ReportsDetailComponent"],
        canActivate: [_security_services_route_guard_service__WEBPACK_IMPORTED_MODULE_2__["RouteGuardService"]]
    },
    {
        path: _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_8__["REPORT_CODE"],
        component: _report_detail_report_detail_component__WEBPACK_IMPORTED_MODULE_9__["ReportDetailComponent"],
        canActivate: [_security_services_route_guard_service__WEBPACK_IMPORTED_MODULE_2__["RouteGuardService"]]
    },
    {
        path: _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_8__["LOGIN"],
        component: _access_container_access_container_component__WEBPACK_IMPORTED_MODULE_1__["AccessContainerComponent"],
        canActivate: [_security_services_route_guard_service__WEBPACK_IMPORTED_MODULE_2__["RouteGuardService"]]
    },
    {
        path: _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_8__["REGISTER"],
        component: _access_container_access_container_component__WEBPACK_IMPORTED_MODULE_1__["AccessContainerComponent"],
        canActivate: [_security_services_route_guard_service__WEBPACK_IMPORTED_MODULE_2__["RouteGuardService"]]
    },
    {
        path: _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_8__["SANDBOX"],
        component: _sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_0__["SandboxComponent"]
    }
];
class RoutingModule {
}
RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RoutingModule });
RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function RoutingModule_Factory(t) { return new (t || RoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "2YS+":
/*!***************************************************!*\
  !*** ./src/app/security-services/auth.service.ts ***!
  \***************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_UserImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/UserImpl */ "foB4");
/* harmony import */ var _classes_AuthServerUris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/AuthServerUris */ "EjOr");
/* harmony import */ var _classes_LocalStorageKeys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/LocalStorageKeys */ "Lbm9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class LoginRequest {
}
class RegisterRequest {
}
class AuthService {
    constructor(http) {
        this.http = http;
        this.isUserLogged = false;
        this.userSignedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userSignedUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userlogout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    isUserloggedIn() {
        this.isUserLogged = !!localStorage.getItem('token'); //true se esiste
        return this.isUserLogged;
    }
    //Login
    signIn(email, password) {
        //Chiamata con jwt
        let req = new LoginRequest();
        req.email = email;
        req.password = password;
        req.additionalInformations = "NONE";
        return this.http.post(_classes_AuthServerUris__WEBPACK_IMPORTED_MODULE_2__["BASE"] + _classes_AuthServerUris__WEBPACK_IMPORTED_MODULE_2__["SIGN_IN"], req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
        //operazione pre subscribe
        (payload) => {
            localStorage.setItem(_classes_LocalStorageKeys__WEBPACK_IMPORTED_MODULE_3__["TOKEN"], payload.data.token);
            let user = new _classes_UserImpl__WEBPACK_IMPORTED_MODULE_1__["UserImpl"]();
            user.username = payload.data.username;
            user.email = payload.data.email;
            localStorage.setItem(_classes_LocalStorageKeys__WEBPACK_IMPORTED_MODULE_3__["USER"], JSON.stringify(user));
            this.userSignedIn.emit(user);
        }, (httpResp) => {
            alert(httpResp.message);
        }));
    }
    signUp(username, email, password) {
        //Chiamata con jwt
        let req = new RegisterRequest();
        req.username = username;
        req.password = password;
        req.email = email;
        req.additionalInformations = "NONE";
        return this.http.post(_classes_AuthServerUris__WEBPACK_IMPORTED_MODULE_2__["BASE"] + _classes_AuthServerUris__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP"], req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
        //operazione pre subscribe
        (payload) => {
            let user = new _classes_UserImpl__WEBPACK_IMPORTED_MODULE_1__["UserImpl"]();
            user.username = payload.data.username;
            user.email = payload.data.email;
            this.userSignedUp.emit(user);
        }, (httpResp) => {
            alert(httpResp.message);
        }));
    }
    logout() {
        localStorage.removeItem('token');
        this.userlogout.emit();
        this.isUserLogged = false;
        return this.isUserLogged;
    }
    getUser() {
        return JSON.parse(localStorage.getItem(_classes_LocalStorageKeys__WEBPACK_IMPORTED_MODULE_3__["USER"]));
    }
    getToken() {
        return localStorage.getItem(_classes_LocalStorageKeys__WEBPACK_IMPORTED_MODULE_3__["TOKEN"]);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, { userSignedIn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], userSignedUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], userlogout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "4K/k":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/RoutesPath */ "CNR5");
/* harmony import */ var _security_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security-services/auth.service */ "2YS+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validation_alert_validation_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validation-alert/validation-alert.component */ "OMxv");








function RegistrationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registraion form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegistrationComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
    }
    //Login
    onFormSubmit(form) {
        let username = form.value.username;
        let email = form.value.email;
        let password = form.value.password;
        if (!form.valid) {
            return false;
        }
        let result = this.auth.signUp(username, email, password);
        result.subscribe((payload) => {
            alert("User " + payload.data.username + " registered!");
            this.router.navigate([_classes_RoutesPath__WEBPACK_IMPORTED_MODULE_1__["LOGIN"]]);
        }, (error) => {
            console.log("Error in register.onFormSubmit.component");
        });
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_security_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 28, vars: 5, consts: [[1, "p-3", "contentDiv", "rounded", "bg-light", "shadow"], [1, "row"], ["class", "col", 4, "ngIf"], [1, "col"], [3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "username", "name", "username", "minlength", "3", "required", "", "ngModel", "", 1, "form-control"], ["username", "ngModel"], [3, "field"], ["for", "email"], ["type", "email", "name", "email", "email", "", "required", "", "ngModel", "", 1, "form-control"], ["email", "ngModel"], ["for", "password"], ["type", "password", "name", "password", "minlength", "5", "required", "", "ngModel", "", 1, "form-control"], ["password", "ngModel"], [1, "text-center"], [1, "btn", "btn-primary", 3, "disabled"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegistrationComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.onFormSubmit(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-validation-alert", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-validation-alert", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-validation-alert", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r1.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _validation_alert_validation_alert_component__WEBPACK_IMPORTED_MODULE_6__["ValidationAlertComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"]], styles: [".contentDiv[_ngcontent-%COMP%]{\r\n  border-right: 1px solid #dee2e6;\r\n  border-left: 1px solid #dee2e6;\r\n  border-bottom: 1px solid #dee2e6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLDhCQUE4QjtFQUM5QixnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudERpdntcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.css']
            }]
    }], function () { return [{ type: _security_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_LocalStorageKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/LocalStorageKeys */ "Lbm9");
/* harmony import */ var _security_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../security-services/auth.service */ "2YS+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NavBarComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.username);
} }
function NavBarComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_a_19_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.logout($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavBarComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.logged = false;
        this.auth.userSignedIn.subscribe((user) => {
            let userLS = JSON.parse(localStorage.getItem(_classes_LocalStorageKeys__WEBPACK_IMPORTED_MODULE_1__["USER"]));
            this.username = userLS.username;
            this.logged = true;
        });
        auth.userlogout.subscribe(() => {
            this.username = "";
            this.logged = false;
        });
    }
    ngOnInit() {
        this.logged = this.auth.isUserloggedIn();
        let userLS = JSON.parse(localStorage.getItem(_classes_LocalStorageKeys__WEBPACK_IMPORTED_MODULE_1__["USER"]));
        if (this.logged && !!userLS) {
            this.username = userLS.username;
        }
    }
    isLogged() {
        return this.logged = this.auth.isUserloggedIn();
    }
    logout(e) {
        e.preventDefault();
        alert("Logout : " + !this.auth.logout());
        this.router.navigate(['login']);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_security_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 20, vars: 2, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "sticky-top", "bg-dark"], ["routerLink", "/graph", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "/graph", 1, "nav-link"], ["routerLink", "/reports", 1, "nav-link"], ["routerLink", "/sandbox", 1, "nav-link"], [1, "navbar-nav", "px-3"], ["class", "nav-item text-nowrap", 4, "ngIf"], [1, "nav-item", "text-nowrap"], ["class", "nav-link", "href", "#", 3, "click", 4, "ngIf"], [1, "nav-link"], ["href", "#", 1, "nav-link", 3, "click"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Focus Meter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SandBox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavBarComponent_li_17_Template, 3, 1, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavBarComponent_a_19_Template, 2, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return [{ type: _security_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "6Zl/":
/*!****************************************************************!*\
  !*** ./src/app/access-container/access-container.component.ts ***!
  \****************************************************************/
/*! exports provided: AccessContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessContainerComponent", function() { return AccessContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/RoutesPath */ "CNR5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.component */ "vtpD");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../registration/registration.component */ "4K/k");







class AccessContainerComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.path = this.route.routeConfig.path;
    }
    ngOnInit() {
        this.activateTab(this.path);
    }
    loginSelected(e) {
        this.router.navigate([_classes_RoutesPath__WEBPACK_IMPORTED_MODULE_2__["LOGIN"]]);
    }
    registrationSelected(e) {
        this.router.navigate([_classes_RoutesPath__WEBPACK_IMPORTED_MODULE_2__["REGISTER"]]);
    }
    activateTab(tab) {
        let tabElement = jquery__WEBPACK_IMPORTED_MODULE_1__("a.loginTab");
        let contentElement = jquery__WEBPACK_IMPORTED_MODULE_1__("app-login.loginForm");
        switch (tab) {
            case _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_2__["LOGIN"]: {
                break;
            }
            case _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_2__["REGISTER"]: {
                tabElement = jquery__WEBPACK_IMPORTED_MODULE_1__("a.regTab");
                contentElement = jquery__WEBPACK_IMPORTED_MODULE_1__("app-registration.regForm");
                break;
            }
        }
        let attivo = jquery__WEBPACK_IMPORTED_MODULE_1__(".visible");
        let disattivo = jquery__WEBPACK_IMPORTED_MODULE_1__(".d-none");
        contentElement.removeClass("d-none");
        contentElement.addClass("visible");
        attivo.removeClass("visible");
        attivo.addClass("d-none");
        jquery__WEBPACK_IMPORTED_MODULE_1__(".active").removeClass("bg-light");
        jquery__WEBPACK_IMPORTED_MODULE_1__(".active").removeClass("active");
        tabElement.addClass("active");
        tabElement.addClass("bg-light");
    }
}
AccessContainerComponent.ɵfac = function AccessContainerComponent_Factory(t) { return new (t || AccessContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AccessContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccessContainerComponent, selectors: [["app-access-container"]], decls: 10, vars: 0, consts: [[1, "container", "p-3", "mb-5", "col-xs-10", "col-sm-8", "col-md-6", "col-lg-4"], [1, "nav", "nav-tabs"], [1, "nav-item"], [1, "nav-link", "loginTab", "active", "bg-light", 3, "click"], [1, "nav-link", "regTab", 3, "click"], [1, "d-none", "loginForm"], [1, "d-none", "regForm"]], template: function AccessContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccessContainerComponent_Template_a_click_3_listener($event) { return ctx.loginSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccessContainerComponent_Template_a_click_6_listener($event) { return ctx.registrationSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-login", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-registration", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Nlc3MtY29udGFpbmVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-access-container',
                templateUrl: './access-container.component.html',
                styleUrls: ['./access-container.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "7Ojr":
/*!**********************************************************!*\
  !*** ./src/app/reports-table/reports-table.component.ts ***!
  \**********************************************************/
/*! exports provided: ReportsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsTableComponent", function() { return ReportsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _report_row_report_row_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../report-row/report-row.component */ "wtcb");




function ReportsTableComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reportSelected", function ReportsTableComponent_tr_13_Template_tr_reportSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onReportSelected($event); })("showReportClick", function ReportsTableComponent_tr_13_Template_tr_showReportClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onShowReport($event); })("exportReportClick", function ReportsTableComponent_tr_13_Template_tr_exportReportClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onExportReport($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("report-data", report_r1);
} }
class ReportsTableComponent {
    constructor() {
        this.reports = new Array;
        this.reportSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showReport = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.exportReport = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onReportSelected(report) {
        this.reportSelected.emit(report);
    }
    onShowReport(report) {
        this.showReport.emit(report);
    }
    onExportReport(report) {
        this.exportReport.emit(report);
    }
}
ReportsTableComponent.ɵfac = function ReportsTableComponent_Factory(t) { return new (t || ReportsTableComponent)(); };
ReportsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportsTableComponent, selectors: [["app-reports-table"]], inputs: { reports: "reports" }, outputs: { reportSelected: "reportSelected", showReport: "showReport", exportReport: "exportReport" }, decls: 14, vars: 1, consts: [[1, "tableFixHead", "responsiveText"], [1, "table", "table-striped", "table"], [1, "thead-dark"], [1, "p-1"], ["app-report-row", "", 3, "report-data", "reportSelected", "showReportClick", "exportReportClick", 4, "ngFor", "ngForOf"], ["app-report-row", "", 3, "report-data", "reportSelected", "showReportClick", "exportReportClick"]], template: function ReportsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Day ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Focus avg. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ReportsTableComponent_tr_13_Template, 1, 1, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reports);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _report_row_report_row_component__WEBPACK_IMPORTED_MODULE_2__["ReportRowComponent"]], styles: [".tableFixHead[_ngcontent-%COMP%]          { overflow-y: auto; height: 300px;  }\r\n.tableFixHead[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { position: sticky; top: 0; }\r\n\r\ntable[_ngcontent-%COMP%]  { border-collapse: collapse; width: 100%; }\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] { padding: 8px 16px; }\r\nth[_ngcontent-%COMP%]     { background:#eee; }\r\n.responsiveText[_ngcontent-%COMP%]{\r\n  font-size:2vw;\r\n}\r\n@media screen and (max-width:575px) {\r\n  .responsiveText[_ngcontent-%COMP%]{\r\n    font-size:3vw;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydHMtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUIsZ0JBQWdCLEVBQUUsYUFBYSxHQUFHO0FBQzNELHlCQUF5QixnQkFBZ0IsRUFBRSxNQUFNLEVBQUU7QUFFbkQscUNBQXFDO0FBQ3JDLFNBQVMseUJBQXlCLEVBQUUsV0FBVyxFQUFFO0FBQ2pELFNBQVMsaUJBQWlCLEVBQUU7QUFDNUIsU0FBUyxlQUFlLEVBQUU7QUFFMUI7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoicmVwb3J0cy10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlRml4SGVhZCAgICAgICAgICB7IG92ZXJmbG93LXk6IGF1dG87IGhlaWdodDogMzAwcHg7ICB9XHJcbi50YWJsZUZpeEhlYWQgdGhlYWQgdGggeyBwb3NpdGlvbjogc3RpY2t5OyB0b3A6IDA7IH1cclxuXHJcbi8qIEp1c3QgY29tbW9uIHRhYmxlIHN0dWZmLiBSZWFsbHkuICovXHJcbnRhYmxlICB7IGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IHdpZHRoOiAxMDAlOyB9XHJcbnRoLCB0ZCB7IHBhZGRpbmc6IDhweCAxNnB4OyB9XHJcbnRoICAgICB7IGJhY2tncm91bmQ6I2VlZTsgfVxyXG5cclxuLnJlc3BvbnNpdmVUZXh0e1xyXG4gIGZvbnQtc2l6ZToydnc7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc1cHgpIHtcclxuICAucmVzcG9uc2l2ZVRleHR7XHJcbiAgICBmb250LXNpemU6M3Z3O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reports-table',
                templateUrl: './reports-table.component.html',
                styleUrls: ['./reports-table.component.css']
            }]
    }], function () { return []; }, { reports: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reportSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['reportSelected']
        }], showReport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['showReport']
        }], exportReport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['exportReport']
        }] }); })();


/***/ }),

/***/ "8FeS":
/*!**********************************************************!*\
  !*** ./src/app/focus-graphv2/focus-graphv2.component.ts ***!
  \**********************************************************/
/*! exports provided: FocusGraphv2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusGraphv2Component", function() { return FocusGraphv2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_ev_assembler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ev-assembler.service */ "9guo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function FocusGraphv2Component_h4_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Report : ", ctx_r0.report.code, "");
} }
function FocusGraphv2Component_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FocusGraphv2Component {
    constructor(assembler) {
        this.assembler = assembler;
        this.graphLoadingError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.graphDrew = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.graphRefreshed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.graphChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.evaluationAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.message = "Please add an evaluation or load a Report!";
        this.options = {
            chartArea: { left: 10, right: 10, top: 10, bottom: 50 },
            hAxis: { format: 'HH:mm:ss' },
            vAxis: { viewWindow: {
                    max: 10,
                    min: 0
                } },
            colors: ['#ff5767'],
            pointSize: 5,
            pointShape: 'circle',
            legend: { position: 'bottom' },
            height: screen.height / 2.5,
            explorer: {
                actions: ['dragToZoom', 'rightClickToReset'],
                axis: 'horizontal',
                keepInBounds: true,
                maxZoomIn: 20.0,
                zoomDelta: 2.0
            }
        };
        this.graphTitle = "No report";
    }
    ngOnChanges(changes) {
        for (const propName in changes) {
            const chng = changes[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
            this.message = '';
            if (chng.currentValue == null && chng.previousValue == null) {
                this.message = "Please add the first evaluation or load a Report";
            }
            else if (chng.previousValue == null && chng.currentValue != null) {
                this.initChart();
            }
            else if (chng.previousValue != null && chng.currentValue != null) {
                console.log("refreshing graph");
                try {
                    this.loadReport();
                    if (chng.previousValue.code === chng.currentValue.code) {
                        this.graphRefreshed.emit(this.report);
                    }
                    else {
                        this.graphChanged.emit(this.report);
                    }
                }
                catch (err) {
                    alert(err);
                    this.chart.clearChart();
                    this.message = "Error!";
                }
            }
            else if (chng.previousValue != null && chng.currentValue == null) {
                this.chart.clearChart();
                this.message = "Please add the first evaluation or load a Report";
            }
            else {
                this.message = "Error!";
            }
        }
    }
    ngOnInit() {
        let func = () => {
            this.drawDottedFocusChart();
        };
        window.addEventListener('resize', func, false);
    }
    refreshGraph() {
        console.log(this.data);
    }
    initChart() {
        this.loadedPromise = google.charts.load("current", { packages: ['corechart'] });
        this.message = "Graph loading ...";
        this.loadedPromise
            .then(() => {
            console.log("Google Visualization API is loaded.");
            this.message = "";
            this.loadReport();
        })
            .catch((err) => {
            this.message = "Error in loading";
            alert("Error during loading package: " + err);
            this.graphLoadingError.emit("Error during loading package: " + err);
        });
    }
    loadReport() {
        this.data = this.assembler.getDataTable(this.report, 'Time', 'Focus');
        this.drawDottedFocusChart();
        console.log("Report loaded: " + this.report.code);
    }
    //https://developers.google.com/chart/interactive/docs/gallery/linechart
    drawDottedFocusChart() {
        console.log("draw chart");
        var containerElement = jquery__WEBPACK_IMPORTED_MODULE_1__('#chartContainer')[0];
        this.chart = new google.visualization.LineChart(containerElement);
        this.chart.draw(this.data, this.options);
        this.graphDrew.emit(this.report);
    }
}
FocusGraphv2Component.ɵfac = function FocusGraphv2Component_Factory(t) { return new (t || FocusGraphv2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ev_assembler_service__WEBPACK_IMPORTED_MODULE_2__["EvAssemblerService"])); };
FocusGraphv2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FocusGraphv2Component, selectors: [["app-focus-graphv2"]], inputs: { report: "report" }, outputs: { graphLoadingError: "graphLoadingError", graphDrew: "graphDrew", graphRefreshed: "graphRefreshed", graphChanged: "graphChanged", evaluationAdded: "evaluationAdded" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 3, consts: [[1, "container"], ["id", "graph-title", 1, "row", "justify-content-center"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "row"], ["id", "chartContainer", 1, "row"], [1, "row", "justify-content-center"]], template: function FocusGraphv2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FocusGraphv2Component_h4_2_Template, 2, 1, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FocusGraphv2Component_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.report != null)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".debug[_ngcontent-%COMP%] {\r\n  border: solid 1px black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvY3VzLWdyYXBodjIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJmb2N1cy1ncmFwaHYyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVidWcge1xyXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusGraphv2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-focus-graphv2',
                templateUrl: './focus-graphv2.component.html',
                styleUrls: ['./focus-graphv2.component.css']
            }]
    }], function () { return [{ type: _services_ev_assembler_service__WEBPACK_IMPORTED_MODULE_2__["EvAssemblerService"] }]; }, { report: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['report']
        }], graphLoadingError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], graphDrew: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], graphRefreshed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], graphChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], evaluationAdded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "9guo":
/*!**************************************************!*\
  !*** ./src/app/services/ev-assembler.service.ts ***!
  \**************************************************/
/*! exports provided: EvAssemblerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvAssemblerService", function() { return EvAssemblerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EvAssemblerService {
    constructor() { }
    getDataTable(repo, xTitle, yTitle) {
        if (repo != null && repo.evaluations != null && repo.evaluations.length > 0) {
            var data = [[xTitle, yTitle]];
            repo.evaluations.forEach(element => {
                data.push(this.getEvaluationRow(element));
            });
            return google.visualization.arrayToDataTable(data);
        }
        else if (repo == null) {
            throw new Error("Report is null.");
        }
        else if (repo.evaluations == null || repo.evaluations.length < 1) {
            throw new Error("Evaluations array is empty.");
        }
        return null;
    }
    getEvaluationRow(ev) {
        let date = new Date(ev.timestamp);
        return [[date.getHours(), date.getMinutes(), date.getSeconds()], ev.value];
    }
}
EvAssemblerService.ɵfac = function EvAssemblerService_Factory(t) { return new (t || EvAssemblerService)(); };
EvAssemblerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EvAssemblerService, factory: EvAssemblerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EvAssemblerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "CNR5":
/*!***************************************!*\
  !*** ./src/app/classes/RoutesPath.ts ***!
  \***************************************/
/*! exports provided: INDEX, HOME, REPORTS, REPORT_CODE, LOGIN, REGISTER, SANDBOX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INDEX", function() { return INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPORTS", function() { return REPORTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPORT_CODE", function() { return REPORT_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANDBOX", function() { return SANDBOX; });
const INDEX = "", HOME = "graph", REPORTS = "reports", REPORT_CODE = "reports/:code", LOGIN = "login", REGISTER = "register", SANDBOX = "sandbox";


/***/ }),

/***/ "EI/9":
/*!******************************************************************!*\
  !*** ./src/app/evaluations-table/evaluations-table.component.ts ***!
  \******************************************************************/
/*! exports provided: EvaluationsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationsTableComponent", function() { return EvaluationsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _evaluation_row_evaluation_row_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../evaluation-row/evaluation-row.component */ "WJEU");





function EvaluationsTableComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowSelected", function EvaluationsTableComponent_tr_15_Template_tr_rowSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onEvaluationSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const evaluation_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("evaluation", evaluation_r1);
} }
class EvaluationsTableComponent {
    constructor() {
        this.evalSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        for (const propName in changes) {
            const chng = changes[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
            if (this.report != null) {
                this.evaluations = this.report.evaluations;
            }
        }
    }
    onEvaluationSelected(ev) {
        this.evalSelected.emit(ev);
    }
}
EvaluationsTableComponent.ɵfac = function EvaluationsTableComponent_Factory(t) { return new (t || EvaluationsTableComponent)(); };
EvaluationsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvaluationsTableComponent, selectors: [["app-evaluations-table"]], inputs: { report: "report" }, outputs: { evalSelected: "evalSelected" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 16, vars: 1, consts: [[1, "tableFixHead"], ["id", "table-evaluations", 1, "table", "table-striped"], [1, "thead-dark"], ["app-evaluation-row", "", 3, "evaluation", "rowSelected", 4, "ngFor", "ngForOf"], ["app-evaluation-row", "", 3, "evaluation", "rowSelected"]], template: function EvaluationsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EvaluationsTableComponent_tr_15_Template, 1, 1, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.evaluations);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _evaluation_row_evaluation_row_component__WEBPACK_IMPORTED_MODULE_2__["EvaluationRowComponent"]], styles: [".tableFixHead[_ngcontent-%COMP%]          { overflow-y: auto; height: 300px; }\r\n.tableFixHead[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { position: sticky; top: 0; }\r\n\r\ntable[_ngcontent-%COMP%]  { border-collapse: collapse; width: 100%; }\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] { padding: 8px 16px; }\r\nth[_ngcontent-%COMP%]     { background:#eee; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2YWx1YXRpb25zLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBQXlCLGdCQUFnQixFQUFFLGFBQWEsRUFBRTtBQUMxRCx5QkFBeUIsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFO0FBRW5ELHFDQUFxQztBQUNyQyxTQUFTLHlCQUF5QixFQUFFLFdBQVcsRUFBRTtBQUNqRCxTQUFTLGlCQUFpQixFQUFFO0FBQzVCLFNBQVMsZUFBZSxFQUFFIiwiZmlsZSI6ImV2YWx1YXRpb25zLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGVGaXhIZWFkICAgICAgICAgIHsgb3ZlcmZsb3cteTogYXV0bzsgaGVpZ2h0OiAzMDBweDsgfVxyXG4udGFibGVGaXhIZWFkIHRoZWFkIHRoIHsgcG9zaXRpb246IHN0aWNreTsgdG9wOiAwOyB9XHJcblxyXG4vKiBKdXN0IGNvbW1vbiB0YWJsZSBzdHVmZi4gUmVhbGx5LiAqL1xyXG50YWJsZSAgeyBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB3aWR0aDogMTAwJTsgfVxyXG50aCwgdGQgeyBwYWRkaW5nOiA4cHggMTZweDsgfVxyXG50aCAgICAgeyBiYWNrZ3JvdW5kOiNlZWU7IH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EvaluationsTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-evaluations-table',
                templateUrl: './evaluations-table.component.html',
                styleUrls: ['./evaluations-table.component.css']
            }]
    }], function () { return []; }, { report: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], evalSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "EjOr":
/*!*******************************************!*\
  !*** ./src/app/classes/AuthServerUris.ts ***!
  \*******************************************/
/*! exports provided: BASE, SIGN_IN, SIGN_UP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE", function() { return BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN", function() { return SIGN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP", function() { return SIGN_UP; });
/* harmony import */ var _classes_EnvURI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/EnvURI */ "kOkU");

const BASE = _classes_EnvURI__WEBPACK_IMPORTED_MODULE_0__["ENV"] + "/api/auth/", SIGN_IN = "login", SIGN_UP = "register";


/***/ }),

/***/ "JTLI":
/*!*******************************************!*\
  !*** ./src/app/classes/EvaluationImpl.ts ***!
  \*******************************************/
/*! exports provided: EvaluationImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationImpl", function() { return EvaluationImpl; });
class EvaluationImpl {
}


/***/ }),

/***/ "Lbm9":
/*!*********************************************!*\
  !*** ./src/app/classes/LocalStorageKeys.ts ***!
  \*********************************************/
/*! exports provided: TOKEN, USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER", function() { return USER; });
const TOKEN = 'token', USER = 'user';


/***/ }),

/***/ "M0Sv":
/*!**********************************************************!*\
  !*** ./src/app/security-services/route-guard.service.ts ***!
  \**********************************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../classes/RoutesPath */ "CNR5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "2YS+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class RouteGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.accessGaranted = false;
    }
    canActivate(route, state) {
        let path = state.root.firstChild.routeConfig.path;
        console.log("Request to go to: /" + path); //Route(url:'', path:''),Route(url:'graph', path:'graph')
        switch (path) {
            case _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_0__["HOME"]: {
                this.checkAuthentication();
                break;
            }
            case _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_0__["REPORTS"]: {
                this.checkAuthentication();
                break;
            }
            case _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_0__["REPORT_CODE"]: {
                this.checkAuthentication();
                break;
            }
            case _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_0__["LOGIN"]: {
                this.accessGaranted = true;
                break;
            }
            case _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_0__["REGISTER"]: {
                this.accessGaranted = true;
                break;
            }
            default: {
                alert("Route not managed");
                this.router.navigate([_classes_RoutesPath__WEBPACK_IMPORTED_MODULE_0__["LOGIN"]]);
                this.accessGaranted = false;
                break;
            }
        }
        return this.accessGaranted;
    }
    checkAuthentication() {
        if (this.auth.isUserloggedIn()) {
            this.accessGaranted = true;
        }
        else {
            alert("Please Login first.");
            this.router.navigate([_classes_RoutesPath__WEBPACK_IMPORTED_MODULE_0__["LOGIN"]]);
            this.accessGaranted = false;
        }
    }
}
RouteGuardService.ɵfac = function RouteGuardService_Factory(t) { return new (t || RouteGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RouteGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RouteGuardService, factory: RouteGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RouteGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "OMxv":
/*!****************************************************************!*\
  !*** ./src/app/validation-alert/validation-alert.component.ts ***!
  \****************************************************************/
/*! exports provided: ValidationAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationAlertComponent", function() { return ValidationAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ValidationAlertComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.REQUIRED);
} }
function ValidationAlertComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.EMAIL);
} }
function ValidationAlertComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r3.MINLENGTH, "", ctx_r3.field.errors.minlength.requiredLength, "");
} }
function ValidationAlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ValidationAlertComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ValidationAlertComponent_div_0_div_2_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ValidationAlertComponent_div_0_div_3_Template, 2, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.field.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.field.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.field.errors.minlength);
} }
class ValidationAlertComponent {
    constructor() {
    }
    ngOnInit() {
        this.REQUIRED = 'The field ' + this.field.name + ' is required.';
        this.EMAIL = 'This email address is invalid.';
        this.MINLENGTH = 'The min length in characters is : ';
    }
    getMinLengthMsg() {
        return this;
    }
}
ValidationAlertComponent.ɵfac = function ValidationAlertComponent_Factory(t) { return new (t || ValidationAlertComponent)(); };
ValidationAlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValidationAlertComponent, selectors: [["app-validation-alert"]], inputs: { field: "field" }, decls: 1, vars: 1, consts: [["class", "validationTip", 4, "ngIf"], [1, "validationTip"], ["class", "alert-danger", 4, "ngIf"], [1, "alert-danger"]], template: function ValidationAlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ValidationAlertComponent_div_0_Template, 4, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.field.invalid && ctx.field.dirty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWxpZGF0aW9uLWFsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidationAlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-validation-alert',
                templateUrl: './validation-alert.component.html',
                styleUrls: ['./validation-alert.component.css']
            }]
    }], function () { return []; }, { field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Q2+c":
/*!**************************************!*\
  !*** ./src/app/classes/ReportIpl.ts ***!
  \**************************************/
/*! exports provided: ReportIpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportIpl", function() { return ReportIpl; });
class ReportIpl {
}


/***/ }),

/***/ "SdA4":
/*!******************************************************!*\
  !*** ./src/app/services/ev-communication.service.ts ***!
  \******************************************************/
/*! exports provided: EvCommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvCommunicationService", function() { return EvCommunicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "MyqM");



class EvCommunicationService {
    constructor() {
        //OBservable
        this.reloadReportSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.reloadReport$ = this.reloadReportSource.asObservable();
    }
    reloadReport(repo) {
        this.reloadReportSource.next(repo);
    }
}
EvCommunicationService.ɵfac = function EvCommunicationService_Factory(t) { return new (t || EvCommunicationService)(); };
EvCommunicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EvCommunicationService, factory: EvCommunicationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EvCommunicationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");






class AppComponent {
    constructor() {
        this.title = 'FocusMeter';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "WJEU":
/*!************************************************************!*\
  !*** ./src/app/evaluation-row/evaluation-row.component.ts ***!
  \************************************************************/
/*! exports provided: EvaluationRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationRowComponent", function() { return EvaluationRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["app-evaluation-row", ""];
class EvaluationRowComponent {
    constructor() {
        this.rowSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onRowSelected() {
        this.rowSelected.emit(this.evaluation);
    }
}
EvaluationRowComponent.ɵfac = function EvaluationRowComponent_Factory(t) { return new (t || EvaluationRowComponent)(); };
EvaluationRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvaluationRowComponent, selectors: [["tr", "app-evaluation-row", ""]], inputs: { evaluation: "evaluation" }, outputs: { rowSelected: "rowSelected" }, attrs: _c0, decls: 12, vars: 7, consts: [[1, "btn", "btn-outline-dark", "btn-sm", 3, "click"]], template: function EvaluationRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluationRowComponent_Template_a_click_1_listener() { return ctx.onRowSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.evaluation.code, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, ctx.evaluation.timestamp, "HH:mm:ss"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.evaluation.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.evaluation.notes);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmFsdWF0aW9uLXJvdy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EvaluationRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tr[app-evaluation-row]',
                templateUrl: './evaluation-row.component.html',
                styleUrls: ['./evaluation-row.component.css']
            }]
    }], function () { return []; }, { evaluation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['evaluation']
        }], rowSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['rowSelected']
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing.module */ "0jDt");
/* harmony import */ var _reports_detail_reports_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports-detail/reports-detail.component */ "sHVl");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-google-charts */ "BbL1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _main_container_main_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-container/main-container.component */ "wN61");
/* harmony import */ var _focus_form_focus_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./focus-form/focus-form.component */ "yy26");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _reports_table_reports_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reports-table/reports-table.component */ "7Ojr");
/* harmony import */ var _report_row_report_row_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./report-row/report-row.component */ "wtcb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _report_detail_report_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./report-detail/report-detail.component */ "wNAo");
/* harmony import */ var _evaluations_table_evaluations_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./evaluations-table/evaluations-table.component */ "EI/9");
/* harmony import */ var _evaluation_row_evaluation_row_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./evaluation-row/evaluation-row.component */ "WJEU");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validation_alert_validation_alert_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./validation-alert/validation-alert.component */ "OMxv");
/* harmony import */ var _access_container_access_container_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./access-container/access-container.component */ "6Zl/");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./registration/registration.component */ "4K/k");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sandbox/sandbox.component */ "hu5T");
/* harmony import */ var _focus_graphv2_focus_graphv2_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./focus-graphv2/focus-graphv2.component */ "8FeS");


























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _routing_module__WEBPACK_IMPORTED_MODULE_0__["RoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _main_container_main_container_component__WEBPACK_IMPORTED_MODULE_8__["MainContainerComponent"],
        _focus_form_focus_form_component__WEBPACK_IMPORTED_MODULE_9__["FocusFormComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _reports_detail_reports_detail_component__WEBPACK_IMPORTED_MODULE_1__["ReportsDetailComponent"],
        _reports_table_reports_table_component__WEBPACK_IMPORTED_MODULE_11__["ReportsTableComponent"],
        _report_row_report_row_component__WEBPACK_IMPORTED_MODULE_12__["ReportRowComponent"],
        _report_detail_report_detail_component__WEBPACK_IMPORTED_MODULE_14__["ReportDetailComponent"],
        _evaluations_table_evaluations_table_component__WEBPACK_IMPORTED_MODULE_15__["EvaluationsTableComponent"],
        _evaluation_row_evaluation_row_component__WEBPACK_IMPORTED_MODULE_16__["EvaluationRowComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
        _validation_alert_validation_alert_component__WEBPACK_IMPORTED_MODULE_19__["ValidationAlertComponent"],
        _access_container_access_container_component__WEBPACK_IMPORTED_MODULE_20__["AccessContainerComponent"],
        _registration_registration_component__WEBPACK_IMPORTED_MODULE_21__["RegistrationComponent"],
        _sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_23__["SandboxComponent"],
        _focus_graphv2_focus_graphv2_component__WEBPACK_IMPORTED_MODULE_24__["FocusGraphv2Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
        _routing_module__WEBPACK_IMPORTED_MODULE_0__["RoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _main_container_main_container_component__WEBPACK_IMPORTED_MODULE_8__["MainContainerComponent"],
                    _focus_form_focus_form_component__WEBPACK_IMPORTED_MODULE_9__["FocusFormComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _reports_detail_reports_detail_component__WEBPACK_IMPORTED_MODULE_1__["ReportsDetailComponent"],
                    _reports_table_reports_table_component__WEBPACK_IMPORTED_MODULE_11__["ReportsTableComponent"],
                    _report_row_report_row_component__WEBPACK_IMPORTED_MODULE_12__["ReportRowComponent"],
                    _report_detail_report_detail_component__WEBPACK_IMPORTED_MODULE_14__["ReportDetailComponent"],
                    _evaluations_table_evaluations_table_component__WEBPACK_IMPORTED_MODULE_15__["EvaluationsTableComponent"],
                    _evaluation_row_evaluation_row_component__WEBPACK_IMPORTED_MODULE_16__["EvaluationRowComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                    _validation_alert_validation_alert_component__WEBPACK_IMPORTED_MODULE_19__["ValidationAlertComponent"],
                    _access_container_access_container_component__WEBPACK_IMPORTED_MODULE_20__["AccessContainerComponent"],
                    _registration_registration_component__WEBPACK_IMPORTED_MODULE_21__["RegistrationComponent"],
                    _sandbox_sandbox_component__WEBPACK_IMPORTED_MODULE_23__["SandboxComponent"],
                    _focus_graphv2_focus_graphv2_component__WEBPACK_IMPORTED_MODULE_24__["FocusGraphv2Component"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                    _routing_module__WEBPACK_IMPORTED_MODULE_0__["RoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"]
                ],
                providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [[1, "d-flex", "justify-content-center", "flex-wrap", "flex-md-nowrap", "align-items-center", "pt-3", "pb-2", "mb-3", "border-bottom", "Zlevel"], [1, "h2"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Focus Meter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["zlevel[_ngcontent-%COMP%]{\r\n  z-index: +6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiemxldmVse1xyXG4gIHotaW5kZXg6ICs2O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "foB4":
/*!*************************************!*\
  !*** ./src/app/classes/UserImpl.ts ***!
  \*************************************/
/*! exports provided: UserImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserImpl", function() { return UserImpl; });
class UserImpl {
}


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Created by Giuseppe D'Agostino");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hu5T":
/*!**********************************************!*\
  !*** ./src/app/sandbox/sandbox.component.ts ***!
  \**********************************************/
/*! exports provided: SandboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandboxComponent", function() { return SandboxComponent; });
/* harmony import */ var _classes_EvaluationImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../classes/EvaluationImpl */ "JTLI");
/* harmony import */ var _classes_UserImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../classes/UserImpl */ "foB4");
/* harmony import */ var _classes_ReportIpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/ReportIpl */ "Q2+c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _focus_graphv2_focus_graphv2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../focus-graphv2/focus-graphv2.component */ "8FeS");






class SandboxComponent {
    constructor() {
        this.evIndex = 1;
    }
    ngOnInit() {
    }
    changeReport() {
        let user = new _classes_UserImpl__WEBPACK_IMPORTED_MODULE_1__["UserImpl"]();
        user.email = "beppe@prova.com";
        user.username = "beppe";
        user.password = "prova001";
        let ev = new _classes_EvaluationImpl__WEBPACK_IMPORTED_MODULE_0__["EvaluationImpl"]();
        ev.code = "E00001";
        ev.notes = "Non mi va.";
        ev.report = "R00001";
        ev.timestamp = new Date();
        ev.userEmail = user.email;
        ev.value = 4;
        let evaluations = [ev];
        let report = new _classes_ReportIpl__WEBPACK_IMPORTED_MODULE_2__["ReportIpl"]();
        report.code = "R00001";
        report.day = new Date();
        report.evaluations = evaluations;
        report.user = user.email;
        this.currentReport = report;
    }
    changeReport2() {
        let user = new _classes_UserImpl__WEBPACK_IMPORTED_MODULE_1__["UserImpl"]();
        user.email = "beppe@prova.com";
        user.username = "beppe";
        user.password = "prova001";
        let ev = new _classes_EvaluationImpl__WEBPACK_IMPORTED_MODULE_0__["EvaluationImpl"]();
        ev.code = "E00001";
        ev.notes = "Sono carico.";
        ev.report = "R00002";
        ev.timestamp = new Date();
        ev.userEmail = user.email;
        ev.value = 8;
        let ev2 = new _classes_EvaluationImpl__WEBPACK_IMPORTED_MODULE_0__["EvaluationImpl"]();
        ev2.code = "E0000" + (++this.evIndex);
        ev2.notes = "Bah.";
        ev2.report = "R00002";
        ev2.timestamp = new Date();
        ev2.userEmail = user.email;
        ev2.value = 6;
        let evaluations = [ev, ev2];
        let report = new _classes_ReportIpl__WEBPACK_IMPORTED_MODULE_2__["ReportIpl"]();
        report.code = "R00002";
        report.day = new Date();
        report.evaluations = evaluations;
        report.user = user.email;
        this.currentReport = report;
    }
    changeReportNull() {
        this.currentReport = null;
    }
    addEvaluation() {
        if (this.currentReport != null) {
            let ev = new _classes_EvaluationImpl__WEBPACK_IMPORTED_MODULE_0__["EvaluationImpl"]();
            this.evIndex++;
            ev.code = "E0000" + this.evIndex;
            ev.notes = "Sono carico.";
            ev.report = this.currentReport.code;
            ev.timestamp = new Date();
            ev.userEmail = this.currentReport.user;
            ev.value = 5;
            this.currentReport.evaluations.push(ev);
            this.currentReport = Object.assign({}, this.currentReport);
        }
    }
}
SandboxComponent.ɵfac = function SandboxComponent_Factory(t) { return new (t || SandboxComponent)(); };
SandboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SandboxComponent, selectors: [["app-sandbox"]], decls: 16, vars: 1, consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "row"], [1, "col"], [3, "report"], [3, "click"]], template: function SandboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "SandBox");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-focus-graphv2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_8_listener() { return ctx.changeReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Change Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_10_listener() { return ctx.changeReport2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Change Report 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_12_listener() { return ctx.changeReportNull(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Change Report null");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_14_listener() { return ctx.addEvaluation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Add Evaluation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("report", ctx.currentReport);
    } }, directives: [_focus_graphv2_focus_graphv2_component__WEBPACK_IMPORTED_MODULE_4__["FocusGraphv2Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYW5kYm94LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SandboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-sandbox',
                templateUrl: './sandbox.component.html',
                styleUrls: ['./sandbox.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kOkU":
/*!***********************************!*\
  !*** ./src/app/classes/EnvURI.ts ***!
  \***********************************/
/*! exports provided: DEV, PROD, ENV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEV", function() { return DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROD", function() { return PROD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV", function() { return ENV; });
const DEV = "http://localhost:8081", PROD = "https://focus-meter.herokuapp.com", ENV = PROD;


/***/ }),

/***/ "mVAH":
/*!*********************************************!*\
  !*** ./src/app/services/ev-data.service.ts ***!
  \*********************************************/
/*! exports provided: EvDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvDataService", function() { return EvDataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _classes_EnvURI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/EnvURI */ "kOkU");
/* harmony import */ var _security_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../security-services/auth.service */ "2YS+");







class EvDataService {
    constructor(http, auth) {
        this.http = http;
        this.auth = auth;
        this.today = new Date();
        this.increment = 0;
    }
    getReports() {
        const userEmail = this.auth.getUser().email;
        let observable;
        observable = this.http.get(_classes_EnvURI__WEBPACK_IMPORTED_MODULE_3__["ENV"] + "/api/" + userEmail + "/reports", {
            headers: this.getHeaders()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((payload) => {
            // alert(JSON.stringify(payload));
        }, (error) => {
            alert(error.message);
        }));
        return observable;
    }
    getTodayReport() {
        const userEmail = this.auth.getUser().email;
        let observable = this.http.get(_classes_EnvURI__WEBPACK_IMPORTED_MODULE_3__["ENV"] + "/api/" + userEmail + "/reports/today", {
            headers: this.getHeaders()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((payload) => {
            // alert(JSON.stringify(payload));
        }, (error) => {
            alert(error.message);
        }));
        return observable;
    }
    getReportByCode(code) {
        const userEmail = this.auth.getUser().email;
        let observable = this.http.get(_classes_EnvURI__WEBPACK_IMPORTED_MODULE_3__["ENV"] + "/api/" + userEmail + "/reports/" + code, {
            headers: this.getHeaders()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((payload) => {
            // alert(JSON.stringify(payload));
        }, (error) => {
            alert(error.message);
        }));
        return observable;
    }
    addEvaluation(ev) {
        let observable = this.http.post(_classes_EnvURI__WEBPACK_IMPORTED_MODULE_3__["ENV"] + "/api/evaluations/add", ev, {
            headers: this.getHeaders()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((payload) => {
            //FAI QULCOSA
        }, (error) => {
            alert(error.message);
        }));
        return observable;
    }
    getHeaders() {
        // alert(this.auth.getToken());
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: '' + this.auth.getToken()
        });
        return headers;
    }
}
EvDataService.ɵfac = function EvDataService_Factory(t) { return new (t || EvDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_security_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
EvDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EvDataService, factory: EvDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EvDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _security_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "q4w8":
/*!*********************************************************************************!*\
  !*** ../node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy namespace object ***!
  \*********************************************************************************/
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
webpackEmptyAsyncContext.id = "q4w8";

/***/ }),

/***/ "sHVl":
/*!************************************************************!*\
  !*** ./src/app/reports-detail/reports-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ReportsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsDetailComponent", function() { return ReportsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_ev_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/ev-data.service */ "mVAH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reports_table_reports_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reports-table/reports-table.component */ "7Ojr");
/* harmony import */ var _focus_graphv2_focus_graphv2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../focus-graphv2/focus-graphv2.component */ "8FeS");






class ReportsDetailComponent {
    constructor(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    ngOnInit() {
        var getTodayObs = this.dataService.getTodayReport();
        getTodayObs.subscribe((payload) => {
            this.selectedReport = payload;
        }, (error) => {
            alert("Error in adding evaluation: " + error.message);
        });
        var getReportsObs = this.dataService.getReports();
        getReportsObs.subscribe((payload) => {
            this.reports = payload.reports;
        }, (error) => {
            alert("Error in adding evaluation: " + error.message);
        });
    }
    reportSelected(report) {
        this.selectedReport = report;
        this.route.navigate(['reports', this.selectedReport.code]);
    }
    showReport(report) {
        this.selectedReport = report;
    }
    exportReport(report) {
        this.selectedReport = report;
    }
}
ReportsDetailComponent.ɵfac = function ReportsDetailComponent_Factory(t) { return new (t || ReportsDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ev_data_service__WEBPACK_IMPORTED_MODULE_1__["EvDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ReportsDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportsDetailComponent, selectors: [["app-reports-detail"]], decls: 9, vars: 2, consts: [[1, "border-bottom", "container-fluid", "p-2"], [1, "row", "justify-content-center"], [2, "z-index", "+6"], [1, "row"], [1, "col-sm-7"], [3, "reports", "reportSelected", "showReport", "exportReport"], [1, "col-sm-5"], [3, "report"]], template: function ReportsDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-reports-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reportSelected", function ReportsDetailComponent_Template_app_reports_table_reportSelected_6_listener($event) { return ctx.reportSelected($event); })("showReport", function ReportsDetailComponent_Template_app_reports_table_showReport_6_listener($event) { return ctx.showReport($event); })("exportReport", function ReportsDetailComponent_Template_app_reports_table_exportReport_6_listener($event) { return ctx.exportReport($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-focus-graphv2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reports", ctx.reports);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("report", ctx.selectedReport);
    } }, directives: [_reports_table_reports_table_component__WEBPACK_IMPORTED_MODULE_3__["ReportsTableComponent"], _focus_graphv2_focus_graphv2_component__WEBPACK_IMPORTED_MODULE_4__["FocusGraphv2Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reports-detail',
                templateUrl: './reports-detail.component.html',
                styleUrls: ['./reports-detail.component.css']
            }]
    }], function () { return [{ type: _services_ev_data_service__WEBPACK_IMPORTED_MODULE_1__["EvDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _classes_RoutesPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/RoutesPath */ "CNR5");
/* harmony import */ var _security_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../security-services/auth.service */ "2YS+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validation_alert_validation_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validation-alert/validation-alert.component */ "OMxv");








function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
    }
    //Login
    onFormSubmit(form) {
        let email = form.value.email;
        let password = form.value.password;
        if (!form.valid) {
            return false;
        }
        this.auth.signIn(email, password).subscribe((payload) => {
            alert(this.auth.getUser().username + " logged");
            alert(this.auth.getToken());
            this.router.navigate([_classes_RoutesPath__WEBPACK_IMPORTED_MODULE_1__["INDEX"]]);
        }, (error) => {
            console.log("Error in login.onFormSubmit.component");
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_security_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 4, consts: [[1, "contentDiv", "p-3", "rounded", "bg-light", "shadow"], [1, "row"], ["class", "col", 4, "ngIf"], [1, "col"], [3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["for", "email"], ["type", "email", "name", "email", "email", "", "required", "", "ngModel", "", 1, "form-control"], ["email", "ngModel"], [3, "field"], ["for", "password"], ["type", "password", "name", "password", "minlength", "5", "required", "", "ngModel", "", 1, "form-control"], ["password", "ngModel"], [1, "text-center"], [1, "btn", "btn-primary", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.onFormSubmit(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-validation-alert", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-validation-alert", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r1.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _validation_alert_validation_alert_component__WEBPACK_IMPORTED_MODULE_6__["ValidationAlertComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"]], styles: [".contentDiv[_ngcontent-%COMP%]{\r\n  border-right: 1px solid #dee2e6;\r\n  border-left: 1px solid #dee2e6;\r\n  border-bottom: 1px solid #dee2e6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7Ozs7R0FJRzs7QUFFSDtFQUNFLCtCQUErQjtFQUMvQiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBkaXZ7XHJcbiAgYm9yZGVyOiBzb2xpZDtcclxufSAqL1xyXG5cclxuLyogLmNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59ICovXHJcblxyXG4uY29udGVudERpdntcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _security_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "wN61":
/*!************************************************************!*\
  !*** ./src/app/main-container/main-container.component.ts ***!
  \************************************************************/
/*! exports provided: MainContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContainerComponent", function() { return MainContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_ev_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/ev-data.service */ "mVAH");
/* harmony import */ var _services_ev_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/ev-communication.service */ "SdA4");
/* harmony import */ var _focus_graphv2_focus_graphv2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../focus-graphv2/focus-graphv2.component */ "8FeS");
/* harmony import */ var _focus_form_focus_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../focus-form/focus-form.component */ "yy26");






class MainContainerComponent {
    constructor(dataService, comunications) {
        this.dataService = dataService;
        this.comunications = comunications;
    }
    ngOnInit() {
        var getTodayObs = this.dataService.getTodayReport();
        getTodayObs.subscribe((payload) => {
            this.currentRepo = payload;
        }, (error) => {
            alert("Error in adding evaluation: " + error.message);
        });
    }
    onEvaluationAdded(newReport) {
        this.currentRepo = newReport;
    }
}
MainContainerComponent.ɵfac = function MainContainerComponent_Factory(t) { return new (t || MainContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ev_data_service__WEBPACK_IMPORTED_MODULE_1__["EvDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ev_communication_service__WEBPACK_IMPORTED_MODULE_2__["EvCommunicationService"])); };
MainContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainContainerComponent, selectors: [["app-main-container"]], decls: 6, vars: 2, consts: [[1, "border-bottom", "container-fluid", "p-2"], [1, "row", "no-gutters"], [1, "col-sm-8"], [3, "report"], [1, "col-sm-4"], [3, "report", "evSubmitted"]], template: function MainContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-focus-graphv2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-focus-form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("evSubmitted", function MainContainerComponent_Template_app_focus_form_evSubmitted_5_listener($event) { return ctx.onEvaluationAdded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("report", ctx.currentRepo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("report", ctx.currentRepo);
    } }, directives: [_focus_graphv2_focus_graphv2_component__WEBPACK_IMPORTED_MODULE_3__["FocusGraphv2Component"], _focus_form_focus_form_component__WEBPACK_IMPORTED_MODULE_4__["FocusFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-container',
                templateUrl: './main-container.component.html',
                styleUrls: ['./main-container.component.css']
            }]
    }], function () { return [{ type: _services_ev_data_service__WEBPACK_IMPORTED_MODULE_1__["EvDataService"] }, { type: _services_ev_communication_service__WEBPACK_IMPORTED_MODULE_2__["EvCommunicationService"] }]; }, null); })();


/***/ }),

/***/ "wNAo":
/*!**********************************************************!*\
  !*** ./src/app/report-detail/report-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: ReportDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDetailComponent", function() { return ReportDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_ev_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ev-data.service */ "mVAH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _evaluations_table_evaluations_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../evaluations-table/evaluations-table.component */ "EI/9");






function ReportDetailComponent_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Report : ", ctx_r0.report.code, "");
} }
function ReportDetailComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ReportDetailComponent {
    constructor(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.route.params.subscribe((p) => {
            var getReportsObs = this.dataService.getReportByCode(p.code);
            getReportsObs.subscribe((payload) => {
                this.report = payload;
            }, (error) => {
                alert("Error in adding evaluation: " + error.message);
            });
        });
    }
    reportSelected(ev) {
        console.log("Evaluation Selected: " + ev.code);
    }
}
ReportDetailComponent.ɵfac = function ReportDetailComponent_Factory(t) { return new (t || ReportDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ev_data_service__WEBPACK_IMPORTED_MODULE_2__["EvDataService"])); };
ReportDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportDetailComponent, selectors: [["app-report-detail"]], decls: 11, vars: 3, consts: [[1, "border-bottom", "container"], [1, "row", "justify-content-center"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "row"], [1, "col"], [3, "report", "evalSelected"], [1, "row", "ml-1", "mt-2"], ["routerLink", "..", 1, "btn", "btn-primary"]], template: function ReportDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReportDetailComponent_h3_2_Template, 2, 1, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReportDetailComponent_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-evaluations-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("evalSelected", function ReportDetailComponent_Template_app_evaluations_table_evalSelected_7_listener($event) { return ctx.reportSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.report != null)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("report", ctx.report);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _evaluations_table_evaluations_table_component__WEBPACK_IMPORTED_MODULE_4__["EvaluationsTableComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-detail',
                templateUrl: './report-detail.component.html',
                styleUrls: ['./report-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_ev_data_service__WEBPACK_IMPORTED_MODULE_2__["EvDataService"] }]; }, null); })();


/***/ }),

/***/ "wtcb":
/*!****************************************************!*\
  !*** ./src/app/report-row/report-row.component.ts ***!
  \****************************************************/
/*! exports provided: ReportRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRowComponent", function() { return ReportRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["app-report-row", ""];
class ReportRowComponent {
    constructor(route) {
        this.route = route;
        this.reportSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showReportClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.exportReportClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.faChartLine = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChartLine"];
        this.faFileDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFileDownload"];
    }
    ngOnInit() {
        this.reportAverage = this.calculateAverage();
    }
    calculateAverage() {
        let sum = 0;
        this.report.evaluations.forEach(element => {
            sum = sum + element.value;
        });
        return Math.round((sum / this.report.evaluations.length) * 100) / 100;
    }
    onShowGraphClicked() {
        this.showReportClick.emit(this.report);
    }
    onShowDetail() {
        this.reportSelected.emit(this.report);
        // this.route.navigate(['reports', this.report.code])
    }
    onExportReportClicked() {
        this.exportReportClick.emit(this.report);
    }
}
ReportRowComponent.ɵfac = function ReportRowComponent_Factory(t) { return new (t || ReportRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ReportRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportRowComponent, selectors: [["tr", "app-report-row", ""]], inputs: { report: ["report-data", "report"] }, outputs: { reportSelected: "reportSelected", showReportClick: "showReportClick", exportReportClick: "exportReportClick" }, attrs: _c0, decls: 17, vars: 11, consts: [[1, "btn", "btn-outline-dark", "btn-sm", 3, "click"], [1, "m-0"], [1, "row"], [1, "col", 2, "min-width", "max-content"], [1, "show-graph", "btn-primary", "btn-sm", 3, "click"], [1, "fas", "fa-xs", 3, "icon"], [1, "show-graph", "btn-primary", "btn-sm", "ml-1"], [1, "fas", "fa-xs", 3, "icon", "click"]], template: function ReportRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportRowComponent_Template_a_click_1_listener() { return ctx.onShowDetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportRowComponent_Template_button_click_13_listener() { return ctx.onShowGraphClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportRowComponent_Template_fa_icon_click_16_listener() { return ctx.onExportReportClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.report.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 5, ctx.report.day, "dd/MM/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 8, ctx.reportAverage, ".2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faChartLine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFileDownload);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: ["p[_ngcontent-%COMP%]{\r\n  font-size: 2vw;\r\n}\r\n\r\n@media screen and (max-width:575px) {\r\n  p[_ngcontent-%COMP%]{\r\n    font-size: 3vw;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1yb3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJyZXBvcnQtcm93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NXB4KSB7XHJcbiAgcHtcclxuICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tr[app-report-row]',
                templateUrl: './report-row.component.html',
                styleUrls: ['./report-row.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { report: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['report-data']
        }], reportSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['reportSelected']
        }], showReportClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['showReportClick']
        }], exportReportClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['exportReportClick']
        }] }); })();


/***/ }),

/***/ "yy26":
/*!****************************************************!*\
  !*** ./src/app/focus-form/focus-form.component.ts ***!
  \****************************************************/
/*! exports provided: FocusFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusFormComponent", function() { return FocusFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_ev_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/ev-data.service */ "mVAH");
/* harmony import */ var _security_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../security-services/auth.service */ "2YS+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class FocusFormComponent {
    constructor(dataService, auth) {
        this.dataService = dataService;
        this.auth = auth;
        this.evSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#focus-form-range').change((evt) => {
            this.updateValue(Number.parseInt(jquery__WEBPACK_IMPORTED_MODULE_1__(evt.currentTarget).val()));
        });
        //Force first time
        jquery__WEBPACK_IMPORTED_MODULE_1__('#focus-form-range').trigger('change');
        //on click submit
        jquery__WEBPACK_IMPORTED_MODULE_1__('#focus-form').submit(() => {
            this.onSubmitEv();
            return false; //prevent to reload the page
        });
    }
    updateValue(value) {
        this.currentValue = value;
        console.log('Focus val: ' + this.currentValue);
        jquery__WEBPACK_IMPORTED_MODULE_1__('#focus-form-value').val(this.currentValue);
    }
    onSubmitEv() {
        let reportCode = '';
        if (this.todayReport != null) {
            reportCode = this.todayReport.code;
        }
        let today = new Date();
        today.setTime(Date.now());
        this.evaluation = {
            code: '',
            value: this.currentValue,
            timestamp: today,
            notes: jquery__WEBPACK_IMPORTED_MODULE_1__('#focus-form-notes').val(),
            report: reportCode,
            userEmail: this.auth.getUser().email
        };
        //chiamata ajax tramite service
        var addedObs = this.dataService.addEvaluation(this.evaluation);
        addedObs.subscribe((payload) => {
            this.todayReport = payload;
            this.evSubmitted.emit(payload);
        }, (error) => {
            alert("Error in adding evaluation: " + error.message);
        });
    }
}
FocusFormComponent.ɵfac = function FocusFormComponent_Factory(t) { return new (t || FocusFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ev_data_service__WEBPACK_IMPORTED_MODULE_2__["EvDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_security_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
FocusFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FocusFormComponent, selectors: [["app-focus-form"]], inputs: { todayReport: ["report", "todayReport"] }, outputs: { evSubmitted: "evSubmitted" }, decls: 24, vars: 0, consts: [[1, "container"], [1, "row", "mb-4"], ["cass", ""], [1, "row"], ["id", "focus-form", "action", "#", 1, ""], [1, "form-row"], [1, "form-group", "col-md-9"], ["type", "range", "min", "1", "max", "10", "step", "1", "id", "focus-form-range", 1, "form-control-range"], ["id", "focus-form-ev-help", 1, "form-text", "text-muted"], [1, "form-group", "col-md-3", "col-4"], ["type", "number", "id", "focus-form-value", 1, "form-control"], [1, "form-group", "col-12"], [1, "input-group", "mb-2"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "id", "focus-form-notes", "placeholder", "About my evaluation...", 1, "form-control"], [1, "row", "justify-content-end", "mr-1"], [1, "col-lg-4", "col-md-5"], ["type", "submit", "id", "focus-form-submit", 1, "btn", "btn-primary", "form-control"]], template: function FocusFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Evaluate you focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Evaluate you actual focus from 1 to 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb2N1cy1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-focus-form',
                templateUrl: './focus-form.component.html',
                styleUrls: ['./focus-form.component.css'],
            }]
    }], function () { return [{ type: _services_ev_data_service__WEBPACK_IMPORTED_MODULE_2__["EvDataService"] }, { type: _security_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, { todayReport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['report']
        }], evSubmitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map