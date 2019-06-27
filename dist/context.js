var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from '@angular/core';
var Context = /** @class */ (function () {
    function Context(store) {
        this.store = store;
        this.store = store;
    }
    Object.defineProperty(Context.prototype, "state", {
        get: function () {
            return this.store.getState();
        },
        enumerable: true,
        configurable: true
    });
    Context.prototype.dispatch = function (action, payload) {
        if (payload === void 0) { payload = {}; }
        return this.store.dispatch(action, payload);
    };
    Context.prototype.commit = function (mutation, payload) {
        if (payload === void 0) { payload = {}; }
        return this.store.commit(mutation, payload);
    };
    Context.prototype.subscribe = function (event, callback) {
        this.store.subscribe(event, callback);
    };
    Context.prototype.unsubbscribe = function (event, callback) {
        this.store.unsubscribe(event, callback);
    };
    Context = __decorate([
        Injectable(),
        __param(0, Inject('Store')),
        __metadata("design:paramtypes", [Object])
    ], Context);
    return Context;
}());
export { Context };
