import { Action, createReducer, on } from '@ngrx/store';

import { initState, State, usersAdapter } from './state';
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

  on(actions.CreateSuccess, (state, { user }) => usersAdapter.addOne(user, { ...state, isSaving: false })),
  on(actions.UpdateSuccess, (state, { update }) => usersAdapter.updateOne(update, { ...state, isSaving: false })),
  on(actions.DeleteSuccess, (state, { id }) => usersAdapter.removeOne(id, { ...state, isSaving: false })),
  on(actions.ListSuccess, (state, { users }) =>
    usersAdapter.setAll(users, { ...state, isLoading: false, hasLoaded: true })
  ),
  on(actions.ReadSuccess, (state, { user }) => usersAdapter.upsertOne(user, { ...state, isLoading: false }))
);

export function usersReducer(state: State | undefined, action: Action): State {
  return reducer(state, action);
}
