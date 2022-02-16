import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromWorkspaces from './state';

export const selectWorkspacesState = createFeatureSelector<fromWorkspaces.State>('workspaces');
export const selectWorkspacesIsLoading = createSelector(
  selectWorkspacesState,
  (state: fromWorkspaces.State) => state.isLoading
);
export const selectWorkspacesIsSaving = createSelector(
  selectWorkspacesState,
  (state: fromWorkspaces.State) => state.isSaving
);
export const selectWorkspacesHasLoaded = createSelector(
  selectWorkspacesState,
  (state: fromWorkspaces.State) => state.hasLoaded
);
export const selectAllWorkspaces = createSelector(selectWorkspacesState, fromWorkspaces.selectAll);
