import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUsers from './state';

export const selectUsersState = createFeatureSelector<fromUsers.State>('users');
export const selectUsersIsLoading = createSelector(selectUsersState, (state: fromUsers.State) => state.isLoading);
export const selectUsersIsSaving = createSelector(selectUsersState, (state: fromUsers.State) => state.isSaving);
export const selectUsersIsHasLoaded = createSelector(selectUsersState, (state: fromUsers.State) => state.hasLoaded);
export const selectAllUsers = createSelector(selectUsersState, fromUsers.selectAll);
