webpackJsonp([0,3],{

/***/ 1242:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(646);


/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_info__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(auth, router, af) {
        this.auth = auth;
        this.router = router;
        this.af = af;
        this.authInfo$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](AuthService.UNKNOWN_USER);
    }
    AuthService.prototype.login = function (email, password) {
        return this.fromFirebaseAuthPromise(this.auth.login({ email: email, password: password }));
    };
    AuthService.prototype.signUp = function (email, password) {
        return this.fromFirebaseAuthPromise(this.auth.createUser({ email: email, password: password }));
    };
    AuthService.prototype.fromFirebaseAuthPromise = function (promise) {
        var _this = this;
        var subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        promise
            .then(function (res) {
            // this.af.auth.subscribe(auth => this.uuid = auth.uid);
            //   const authInfo = new AuthInfo(this.uuid);
            var authInfo = new __WEBPACK_IMPORTED_MODULE_3__auth_info__["a" /* AuthInfo */](_this.auth.getAuth().uid);
            _this.authInfo$.next(authInfo);
            subject.next(res);
            subject.complete();
        }, function (err) {
            _this.authInfo$.error(err);
            subject.error(err);
            subject.complete();
        });
        return subject.asObservable();
    };
    AuthService.prototype.logout = function () {
        this.auth.logout();
        this.authInfo$.next(AuthService.UNKNOWN_USER);
        this.router.navigateByUrl('/home');
    };
    AuthService.UNKNOWN_USER = new __WEBPACK_IMPORTED_MODULE_3__auth_info__["a" /* AuthInfo */](null);
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* FirebaseAuth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* FirebaseAuth */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _c) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/auth.service.js.map

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_profiles_service__ = __webpack_require__(267);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return profile; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var profile;
var HomeComponent = (function () {
    function HomeComponent(af, pf) {
        this.af = af;
        this.pf = pf;
        var uid;
        this.af.auth.subscribe(function (auth) {
            if (auth != null) {
                uid = auth.uid;
            }
        });
        if (uid != null) {
            this.pf.getUserByUserId(uid).subscribe(function (result) { return profile = result; });
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(972),
            styles: [__webpack_require__(964)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__model_profiles_service__["a" /* ProfilesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__model_profiles_service__["a" /* ProfilesService */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/home.component.js.map

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Idea__ = __webpack_require__(767);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IdeasService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IdeasService = (function () {
    function IdeasService(af) {
        this.af = af;
    }
    IdeasService.prototype.getIdeaById = function (id) {
        return this.af.database.object('ideas/' + id).map(__WEBPACK_IMPORTED_MODULE_2__Idea__["a" /* Idea */].parseFromJson);
    };
    IdeasService.prototype.getAllIdeas = function () {
        return this.af.database.list('ideas').map(__WEBPACK_IMPORTED_MODULE_2__Idea__["a" /* Idea */].parseFromArray);
    };
    IdeasService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object])
    ], IdeasService);
    return IdeasService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/ideas.service.js.map

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Profile__ = __webpack_require__(768);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfilesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilesService = (function () {
    function ProfilesService(db) {
        this.db = db;
    }
    ProfilesService.prototype.getUserByUserId = function (userId) {
        console.log('User Id ' + userId + ' i sprawdzenie danych');
        return this.db.list('profiles', {
            query: {
                orderByChild: 'userId',
                equalTo: userId
            }
        }).first().do(console.log).map(function (result) { return __WEBPACK_IMPORTED_MODULE_2__Profile__["a" /* Profile */].parseFromJson(result[0]); });
    };
    ProfilesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AngularFireDatabase */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AngularFireDatabase */]) === 'function' && _a) || Object])
    ], ProfilesService);
    return ProfilesService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/profiles.service.js.map

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddIdeaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddIdeaComponent = (function () {
    function AddIdeaComponent(fb, af, router) {
        this.fb = fb;
        this.router = router;
        this.form = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
        this.ideas = af.database.list('ideas');
    }
    AddIdeaComponent.prototype.addIdea = function () {
        this.ideas.push({
            title: this.form.value.title,
            description: this.form.value.description
        });
        this.router.navigateByUrl('/home');
    };
    AddIdeaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-add-idea',
            template: __webpack_require__(970),
            styles: [__webpack_require__(962)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], AddIdeaComponent);
    return AddIdeaComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/add-idea.component.js.map

/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_ideas_service__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IdeasListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IdeasListComponent = (function () {
    function IdeasListComponent(is, route, router) {
        this.is = is;
        this.route = route;
        this.router = router;
    }
    IdeasListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.is.getAllIdeas().subscribe(function (ideas) { return _this.ideas = ideas; });
    };
    IdeasListComponent.prototype.ideaDetails = function (idea) {
        console.log("wejscie");
        this.router.navigate(['idea', idea.$key]);
    };
    IdeasListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-ideas-list',
            template: __webpack_require__(973),
            styles: [__webpack_require__(965)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_ideas_service__["a" /* IdeasService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__model_ideas_service__["a" /* IdeasService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], IdeasListComponent);
    return IdeasListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/ideas-list.component.js.map

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_auth_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.form = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var val = this.form.value;
        this.authService.login(val.email, val.password)
            .subscribe(function () {
            //alert('Logged successfully');
            _this.router.navigateByUrl('/home');
        }, function (err) { return alert(err); });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(974),
            styles: [__webpack_require__(966)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__security_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__security_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/login.component.js.map

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Comment__ = __webpack_require__(766);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CommentsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsService = (function () {
    function CommentsService(af) {
        this.af = af;
    }
    CommentsService.prototype.getIdeaComments = function (ideaId) {
        return this.af.database.list('comments', {
            query: {
                orderByChild: 'ideaId',
                equalTo: ideaId
            }
        }).map(__WEBPACK_IMPORTED_MODULE_2__Comment__["a" /* Comment */].parseFromArray);
    };
    CommentsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object])
    ], CommentsService);
    return CommentsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/comments.service.js.map

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_profiles_service__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(profileService, af) {
        var _this = this;
        this.profileService = profileService;
        this.af = af;
        this.af.auth.subscribe(function (auth) { return _this.uid = auth.uid; });
        this.profileService.getUserByUserId(this.uid).subscribe(function (result) {
            _this.profile = result;
        });
    }
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__(975),
            styles: [__webpack_require__(967)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_profiles_service__["a" /* ProfilesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__model_profiles_service__["a" /* ProfilesService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/profile.component.js.map

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_auth_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(fb, authService, router, af) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.af = af;
        this.form = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            secondName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            indexNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        this.profiles = this.af.database.list('profiles');
    }
    RegisterComponent.prototype.signUp = function () {
        var _this = this;
        var val = this.form.value;
        this.authService.signUp(val.email, val.password).
            subscribe(function () {
            alert('User created successfully');
            _this.af.auth.subscribe(function (auth) { return _this.uid = auth.uid; });
            _this.router.navigateByUrl('/home');
            _this.profiles.push({
                userId: _this.uid,
                description: 'default',
                avatarUrl: 'https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png',
                email: val.email
            });
        }, function (err) { return alert(err); });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__(976),
            styles: [__webpack_require__(968)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__security_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__security_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* AngularFire */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/register.component.js.map

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ideas_service__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_comments_service__ = __webpack_require__(408);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SingleIdeaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SingleIdeaComponent = (function () {
    function SingleIdeaComponent(ideasServices, route, router, af, fb, cs) {
        var _this = this;
        this.ideasServices = ideasServices;
        this.route = route;
        this.router = router;
        this.af = af;
        this.fb = fb;
        this.cs = cs;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.ideasServices.getIdeaById(this.id).subscribe(function (idea) { return _this.idea = idea; });
        this.comments = this.af.database.list('comments');
        this.cs.getIdeaComments(this.idea.$key).subscribe(function (result) { return _this.existingComments = result; });
        this.commentForm = this.fb.group({
            comment: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required]
        });
    }
    SingleIdeaComponent.prototype.addComment = function () {
        var he = this.comments.push({
            comment: this.commentForm.value.comment,
            username: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* profile */].email,
            ideaId: this.idea.$key
        });
        this.commentForm.reset();
        alert(' Comment submitted ');
    };
    SingleIdeaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-single-idea',
            template: __webpack_require__(977),
            styles: [__webpack_require__(969)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__model_ideas_service__["a" /* IdeasService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__model_ideas_service__["a" /* IdeasService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* AngularFire */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormBuilder */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__model_comments_service__["a" /* CommentsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__model_comments_service__["a" /* CommentsService */]) === 'function' && _f) || Object])
    ], SingleIdeaComponent);
    return SingleIdeaComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/single-idea.component.js.map

/***/ },

/***/ 645:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 645;


/***/ },

/***/ 646:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(765);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/main.js.map

/***/ },

/***/ 763:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ideas_list_ideas_list_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_idea_add_idea_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__single_idea_single_idea_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__(409);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRouteModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["b" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: 'ideas', component: __WEBPACK_IMPORTED_MODULE_5__ideas_list_ideas_list_component__["a" /* IdeasListComponent */] },
    { path: 'add-idea', component: __WEBPACK_IMPORTED_MODULE_6__add_idea_add_idea_component__["a" /* AddIdeaComponent */] },
    { path: 'idea/:id', component: __WEBPACK_IMPORTED_MODULE_7__single_idea_single_idea_component__["a" /* SingleIdeaComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */] },
];
var AppRouteModule = (function () {
    function AppRouteModule() {
    }
    AppRouteModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRouteModule);
    return AppRouteModule;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/app-route.module.js.map

/***/ },

/***/ 764:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__security_auth_service__ = __webpack_require__(183);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authInfo$.subscribe(function (authInfo) { return _this.authInfo = authInfo; });
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(971),
            styles: [__webpack_require__(963)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__security_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__security_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/app.component.js.map

/***/ },

/***/ 765:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_ng2_bootstrap__ = __webpack_require__(946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_idea_add_idea_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__single_idea_single_idea_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ideas_list_ideas_list_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_route_app_route_module__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__security_auth_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__model_ideas_service__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__model_profiles_service__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__model_comments_service__ = __webpack_require__(408);
/* unused harmony export authConfig */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var config = {
    apiKey: "AIzaSyBqMBdbnw8z3SEm6UYFVmC_xpZkHUXqtqU",
    authDomain: "myidea-c9d2b.firebaseapp.com",
    databaseURL: "https://myidea-c9d2b.firebaseio.com",
    storageBucket: "myidea-c9d2b.appspot.com",
    messagingSenderId: "1012947482588"
};
var authConfig = {
    provder: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["d" /* AuthProviders */].Password,
    method: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["e" /* AuthMethods */].Password
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["b" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__add_idea_add_idea_component__["a" /* AddIdeaComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__single_idea_single_idea_component__["a" /* SingleIdeaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__ideas_list_ideas_list_component__["a" /* IdeasListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_ng2_bootstrap__["a" /* Ng2BootstrapModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__app_route_app_route_module__["a" /* AppRouteModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["f" /* AngularFireModule */].initializeApp(config, authConfig)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__security_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__model_ideas_service__["a" /* IdeasService */], __WEBPACK_IMPORTED_MODULE_17__model_profiles_service__["a" /* ProfilesService */], __WEBPACK_IMPORTED_MODULE_18__model_comments_service__["a" /* CommentsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/app.module.js.map

/***/ },

/***/ 766:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Comment; });
var Comment = (function () {
    function Comment($key, comment, username, ideaId) {
        this.$key = $key;
        this.comment = comment;
        this.username = username;
        this.ideaId = ideaId;
    }
    Comment.parseFromArray = function (array) {
        return array.map(Comment.parseFromJson);
    };
    Comment.parseFromJson = function (_a) {
        var $key = _a.$key, comment = _a.comment, username = _a.username, ideaId = _a.ideaId;
        return new Comment($key, comment, username, ideaId);
    };
    return Comment;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/Comment.js.map

/***/ },

/***/ 767:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Idea; });
var Idea = (function () {
    function Idea($key, title, description) {
        this.$key = $key;
        this.title = title;
        this.description = description;
    }
    Idea.parseFromArray = function (array) {
        return array.map(Idea.parseFromJson);
    };
    Idea.parseFromJson = function (_a) {
        var $key = _a.$key, title = _a.title, description = _a.description;
        return new Idea($key, title, description);
    };
    return Idea;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/Idea.js.map

/***/ },

/***/ 768:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Profile; });
var Profile = (function () {
    function Profile($key, userId, description, avatarUrl, email) {
        this.$key = $key;
        this.userId = userId;
        this.description = description;
        this.avatarUrl = avatarUrl;
        this.email = email;
    }
    Profile.parseFromArray = function (array) {
        return array.map(Profile.parseFromJson);
    };
    Profile.parseFromJson = function (_a) {
        var $key = _a.$key, userId = _a.userId, description = _a.description, avatarUrl = _a.avatarUrl, email = _a.email;
        console.log($key + ' ' + userId + ' ' + description + ' ' + avatarUrl);
        return new Profile($key, userId, description, avatarUrl, email);
    };
    return Profile;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/Profile.js.map

/***/ },

/***/ 769:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthInfo; });
var AuthInfo = (function () {
    function AuthInfo($uid) {
        this.$uid = $uid;
    }
    AuthInfo.prototype.isLoggedIn = function () {
        return !!this.$uid;
    };
    return AuthInfo;
}());
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/auth-info.js.map

/***/ },

/***/ 770:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/environment.js.map

/***/ },

/***/ 771:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/Sebastian/WebstormProjects/myidea-refactored/src/polyfills.js.map

/***/ },

/***/ 936:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./af": 453,
	"./af.js": 453,
	"./ar": 459,
	"./ar-dz": 454,
	"./ar-dz.js": 454,
	"./ar-ly": 455,
	"./ar-ly.js": 455,
	"./ar-ma": 456,
	"./ar-ma.js": 456,
	"./ar-sa": 457,
	"./ar-sa.js": 457,
	"./ar-tn": 458,
	"./ar-tn.js": 458,
	"./ar.js": 459,
	"./az": 460,
	"./az.js": 460,
	"./be": 461,
	"./be.js": 461,
	"./bg": 462,
	"./bg.js": 462,
	"./bn": 463,
	"./bn.js": 463,
	"./bo": 464,
	"./bo.js": 464,
	"./br": 465,
	"./br.js": 465,
	"./bs": 466,
	"./bs.js": 466,
	"./ca": 467,
	"./ca.js": 467,
	"./cs": 468,
	"./cs.js": 468,
	"./cv": 469,
	"./cv.js": 469,
	"./cy": 470,
	"./cy.js": 470,
	"./da": 471,
	"./da.js": 471,
	"./de": 473,
	"./de-at": 472,
	"./de-at.js": 472,
	"./de.js": 473,
	"./dv": 474,
	"./dv.js": 474,
	"./el": 475,
	"./el.js": 475,
	"./en-au": 476,
	"./en-au.js": 476,
	"./en-ca": 477,
	"./en-ca.js": 477,
	"./en-gb": 478,
	"./en-gb.js": 478,
	"./en-ie": 479,
	"./en-ie.js": 479,
	"./en-nz": 480,
	"./en-nz.js": 480,
	"./eo": 481,
	"./eo.js": 481,
	"./es": 483,
	"./es-do": 482,
	"./es-do.js": 482,
	"./es.js": 483,
	"./et": 484,
	"./et.js": 484,
	"./eu": 485,
	"./eu.js": 485,
	"./fa": 486,
	"./fa.js": 486,
	"./fi": 487,
	"./fi.js": 487,
	"./fo": 488,
	"./fo.js": 488,
	"./fr": 491,
	"./fr-ca": 489,
	"./fr-ca.js": 489,
	"./fr-ch": 490,
	"./fr-ch.js": 490,
	"./fr.js": 491,
	"./fy": 492,
	"./fy.js": 492,
	"./gd": 493,
	"./gd.js": 493,
	"./gl": 494,
	"./gl.js": 494,
	"./he": 495,
	"./he.js": 495,
	"./hi": 496,
	"./hi.js": 496,
	"./hr": 497,
	"./hr.js": 497,
	"./hu": 498,
	"./hu.js": 498,
	"./hy-am": 499,
	"./hy-am.js": 499,
	"./id": 500,
	"./id.js": 500,
	"./is": 501,
	"./is.js": 501,
	"./it": 502,
	"./it.js": 502,
	"./ja": 503,
	"./ja.js": 503,
	"./jv": 504,
	"./jv.js": 504,
	"./ka": 505,
	"./ka.js": 505,
	"./kk": 506,
	"./kk.js": 506,
	"./km": 507,
	"./km.js": 507,
	"./ko": 508,
	"./ko.js": 508,
	"./ky": 509,
	"./ky.js": 509,
	"./lb": 510,
	"./lb.js": 510,
	"./lo": 511,
	"./lo.js": 511,
	"./lt": 512,
	"./lt.js": 512,
	"./lv": 513,
	"./lv.js": 513,
	"./me": 514,
	"./me.js": 514,
	"./mi": 515,
	"./mi.js": 515,
	"./mk": 516,
	"./mk.js": 516,
	"./ml": 517,
	"./ml.js": 517,
	"./mr": 518,
	"./mr.js": 518,
	"./ms": 520,
	"./ms-my": 519,
	"./ms-my.js": 519,
	"./ms.js": 520,
	"./my": 521,
	"./my.js": 521,
	"./nb": 522,
	"./nb.js": 522,
	"./ne": 523,
	"./ne.js": 523,
	"./nl": 525,
	"./nl-be": 524,
	"./nl-be.js": 524,
	"./nl.js": 525,
	"./nn": 526,
	"./nn.js": 526,
	"./pa-in": 527,
	"./pa-in.js": 527,
	"./pl": 528,
	"./pl.js": 528,
	"./pt": 530,
	"./pt-br": 529,
	"./pt-br.js": 529,
	"./pt.js": 530,
	"./ro": 531,
	"./ro.js": 531,
	"./ru": 532,
	"./ru.js": 532,
	"./se": 533,
	"./se.js": 533,
	"./si": 534,
	"./si.js": 534,
	"./sk": 535,
	"./sk.js": 535,
	"./sl": 536,
	"./sl.js": 536,
	"./sq": 537,
	"./sq.js": 537,
	"./sr": 539,
	"./sr-cyrl": 538,
	"./sr-cyrl.js": 538,
	"./sr.js": 539,
	"./ss": 540,
	"./ss.js": 540,
	"./sv": 541,
	"./sv.js": 541,
	"./sw": 542,
	"./sw.js": 542,
	"./ta": 543,
	"./ta.js": 543,
	"./te": 544,
	"./te.js": 544,
	"./tet": 545,
	"./tet.js": 545,
	"./th": 546,
	"./th.js": 546,
	"./tl-ph": 547,
	"./tl-ph.js": 547,
	"./tlh": 548,
	"./tlh.js": 548,
	"./tr": 549,
	"./tr.js": 549,
	"./tzl": 550,
	"./tzl.js": 550,
	"./tzm": 552,
	"./tzm-latn": 551,
	"./tzm-latn.js": 551,
	"./tzm.js": 552,
	"./uk": 553,
	"./uk.js": 553,
	"./uz": 554,
	"./uz.js": 554,
	"./vi": 555,
	"./vi.js": 555,
	"./x-pseudo": 556,
	"./x-pseudo.js": 556,
	"./yo": 557,
	"./yo.js": 557,
	"./zh-cn": 558,
	"./zh-cn.js": 558,
	"./zh-hk": 559,
	"./zh-hk.js": 559,
	"./zh-tw": 560,
	"./zh-tw.js": 560
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 936;


/***/ },

/***/ 962:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 963:
/***/ function(module, exports) {

module.exports = "body, html {\r\n  width: 100%;\r\n  padding:10px;\r\n}\r\n\r\n.logoContainer {\r\n  margin-top: 0;\r\n  height: 200px;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.logoContainer {\r\n  border-bottom: 1px solid;\r\n}\r\n\r\n.innerLogoContainer {\r\n  background-image: url(\"http://i.imgur.com/qRFo5wO.png\");\r\n  background-repeat: no-repeat;\r\n  height: 200px;\r\n  width:573px;\r\n  margin: 0 auto ;\r\n}\r\n\r\n.form-control {\r\n  width: 90%;\r\n}\r\n"

/***/ },

/***/ 964:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 965:
/***/ function(module, exports) {

module.exports = ".row-centered {\r\n  text-align:center;\r\n}\r\n.col-centered {\r\n  display:inline-block;\r\n\r\n  float:none;\r\n  /* reset the text-align */\r\n  text-align:center;\r\n  color: white;\r\n\r\n  /* inline-block space fix */\r\n  margin-right:-2px;\r\n  background-color: #00aaff;\r\n  margin:2px;\r\n}\r\n\r\n.leftitem {\r\n  float:left;\r\n  width: 50%;\r\n  border: 1px;\r\n}\r\n\r\n.rightitem {\r\n  float:right;\r\n  width: 50%;\r\n  border: 1px;\r\n}\r\n\r\n.item {\r\n  width:100%;\r\n  height:50px;\r\n\r\n}\r\n.content {\r\n  margin-top: 15px;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n\r\n}\r\n"

/***/ },

/***/ 966:
/***/ function(module, exports) {

module.exports = "#logowanie{\r\n  text-align:center;\r\n}\r\n"

/***/ },

/***/ 967:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 968:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 969:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 970:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 col-md-offset-3\">\n    <h1>Dodaj pomysł </h1>\n    <form [formGroup]=\"form\">\n      <div class=\"form-group\">\n        <label>Tytuł pomysłu:</label>\n        <input type=\"text\"  class=\"form-control\" placeholder=\"Email\" formControlName=\"title\">\n      </div>\n      <div class=\"form-group\">\n        <label>Opis pomysłu</label>\n        <input type=\"text\"  class=\"form-control\" formControlName=\"description\">\n      </div>\n      <button type=\"button\" (click)=\"addIdea()\">Dodaj</button>\n    </form>\n  </div>\n</div>\n"

/***/ },

/***/ 971:
/***/ function(module, exports) {

module.exports = "<div class=\"row show-grid\">\n  <div class=\"col-md-12\">\n    <div class=\"logoContainer\"><div class=\"innerLogoContainer\"></div></div>\n    <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a href=\"#\" routerLink=\"/home\" routerLinkActive=\"active\">Główna</a></li>\n          <li *ngIf=\"authInfo?.isLoggedIn()\"><a href=\"#\" routerLink=\"/ideas\" routerLinkActive=\"active\">Lista pomysłów</a></li>\n          <li *ngIf=\"authInfo?.isLoggedIn()\"><a href=\"#\" routerLink=\"/add-idea\" routerLinkActive=\"active\">Dodaj pomysł</a></li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li *ngIf=\"!authInfo?.isLoggedIn()\"><a href=\"#\" routerLink=\"/register\" routerLinkActive=\"active\" ><span class=\"glyphicon glyphicon-user\" ></span> Rejestracja</a></li>\n          <li *ngIf=\"!authInfo?.isLoggedIn()\"><a href=\"#\" routerLink=\"/login\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-log-in\" ></span> Zaloguj się</a></li>\n          <li *ngIf=\"authInfo?.isLoggedIn()\"><a href=\"#\" (click)=\"logout()\" routerLink=\"/home\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-log-in\" ></span> Wyloguj się</a></li>\n          <li><a routerLink=\"/profile\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-log-in\" ></span>Profil</a></li>\n        </ul>\n      </div>\n    </nav>\n    <router-outlet> </router-outlet>\n  </div>\n</div>\n"

/***/ },

/***/ 972:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h1>Wprowadzenie:</h1>\n    <p>\n      Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer. Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue. Lorem ipsum primis in nibh vel risus. Sed vel lectus. Ut sagittis, ipsum dolor quam.\n    </p>\n  </div>\n</div>\n\n\n"

/***/ },

/***/ 973:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row-centered\" *ngFor=\"let idea of ideas\">\n\n    <div class=\"col-xs-4 col-centered\" (click)=\"ideaDetails(idea)\">\n      <div class=\"item\"><div class=\"content\">{{idea.title}}</div></div>\n    </div>\n\n\n    <div class=\"col-xs-4 col-centered\" (click)=\"ideaDetails(idea)\">\n      <div class=\"item\"><div class=\"content\">{{idea.description | slice:0:20}}</div></div>\n    </div>\n\n  </div>\n</div>\n"

/***/ },

/***/ 974:
/***/ function(module, exports) {

module.exports = "<div id=\"logowanie\">\n  <h1>Logowanie:</h1> <br/>\n  <form class=\"form-inline\" [formGroup]=\"form\">\n    <div class=\"form-group\">\n      <label for=\"email\">Adres Email:</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Podaj adres\" formControlName=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">Password:</label>\n      <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Podaj haslo\" formControlName=\"password\">\n    </div>\n    <br/><br/>\n    <button type=\"submit\" class=\"btn btn-success\" (click)=\"login()\">Zaloguj</button>\n  </form>\n</div>\n"

/***/ },

/***/ 975:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"profile\">\n  <h1>Dane</h1>\n  <h2>{{profile.description}}</h2>\n  <img src=\"{{profile.avatarUrl}}\" alt=\"\">\n\n</div>\n"

/***/ },

/***/ 976:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 col-md-offset-3\">\n    <h1>Rejestracja:</h1>\n    <form [formGroup]=\"form\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email address:</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pwd\">Password:</label>\n        <input type=\"password\" class=\"form-control\" id=\"pwd\" formControlName=\"password\">\n      </div>\n      <button (click)=\"signUp()\" class=\"btn btn-default\">Submit</button>\n    </form>\n  </div>\n\n"

/***/ },

/***/ 977:
/***/ function(module, exports) {

module.exports = "<p>\n  {{idea.title}}\n  {{idea.description}}\n</p>\n<div class=\"form-group\">\n  <form [formGroup]=\"commentForm\">\n  <label for=\"comment\">Comment:</label>\n  <textarea class=\"form-control\" rows=\"5\" id=\"comment\" formControlName=\"comment\"></textarea>\n    <button type=\"button\" (click)=\"addComment()\">Dodaj</button>\n  </form>\n</div>\n<ul>\n  <li *ngFor=\"let comment of existingComments\">{{comment.username}} {{comment.comment}}</li>\n\n</ul>\n"

/***/ }

},[1242]);
//# sourceMappingURL=main.bundle.map