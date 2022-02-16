import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { WorkspacesEffects } from './effects';
import { workspacesReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('workspaces', workspacesReducer),
    EffectsModule.forFeature([WorkspacesEffects])
  ]
})
export class AppStoreModule {}
