import { Injectable, Inject } from '@angular/core';

@Injectable()
export class Context {
  constructor(@Inject('Store') private store: any) {
    this.store = store;
  }

  get state() {
    return this.store.getState();
  }

  dispatch(action: string, payload: any = {}) {
    return this.store.dispatch(action, payload);
  }

  commit(mutation: string, payload: any = {}) {
    return this.store.commit(mutation, payload);
  }

  subscribe(event: string, callback: any) {
    this.store.subscribe(event, callback);
  }

  unsubbscribe(event: string, callback: any) {
    this.store.unsubscribe(event, callback);
  }
}
