import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { AppStoreModule as UserStoreModule } from './user/app-store.module';

export interface RootState {
  router: RouterReducerState;
}

export const rootReducer = {
  router: routerReducer
};

export const rootStoreConfig = {
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true
  }
};

@NgModule({
  declarations: [],
  imports: [StoreModule.forRoot(rootReducer, rootStoreConfig), EffectsModule.forRoot([]), CommonModule, UserStoreModule]
})
export class RootStoreModule {}
