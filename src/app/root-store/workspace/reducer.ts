import { Action, createReducer, on } from '@ngrx/store';

import { initState, State, workspacesAdapter } from './state';
import * as actions from './actions';

const reducer = createReducer(
  initState,

  on(
    actions.CreateRequested,
    actions.UpdateRequested,
    actions.DeleteRequested,
    (state): State => ({ ...state, isSaving: true })
  ),
  on(actions.ListRequested, actions.ReadRequested, (state): State => ({ ...state, isLoading: true })),

  on(actions.CreateFail, actions.UpdateFail, actions.DeleteFail, (state): State => ({ ...state, isSaving: false })),
  on(actions.ListFail, actions.ReadFail, (state): State => ({ ...state, isLoading: false })),

  on(actions.CreateSuccess, (state, { workspace }) =>
    workspacesAdapter.addOne(workspace, { ...state, isSaving: false })
  ),
  on(actions.UpdateSuccess, (state, { update }) => workspacesAdapter.updateOne(update, { ...state, isSaving: false })),
  on(actions.DeleteSuccess, (state, { id }) => workspacesAdapter.removeOne(id, { ...state, isSaving: false })),
  on(actions.ListSuccess, (state, { workspaces }) =>
    workspacesAdapter.setAll(workspaces, { ...state, isLoading: false, hasLoaded: true })
  ),
  on(actions.ReadSuccess, (state, { workspace }) =>
    workspacesAdapter.upsertOne(workspace, { ...state, isLoading: false })
  )
);

export function workspacesReducer(state: State | undefined, action: Action): State {
  return reducer(state, action);
}
