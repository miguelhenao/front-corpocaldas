import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UsersEffects } from './effects';
import { usersReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('users', usersReducer), EffectsModule.forFeature([UsersEffects])]
})
export class AppStoreModule {}
