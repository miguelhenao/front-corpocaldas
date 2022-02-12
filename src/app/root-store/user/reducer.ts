import { Action, createReducer, on } from '@ngrx/store';

import { initState, State, usersAdapter } from './state';
import * as actions from './actions';

const reducer = createReducer(
  initState,

  on(actions.CreateRequested, actions.UpdateRequested, (state): State => ({ ...state, isSaving: true })),
  on(actions.CreateSuccess, (state, action) =>
    usersAdapter.addOne(action.user, {
      ...state,
      isSaving: false
    })
  ),
  on(actions.CreateFail, actions.UpdateFail, (state): State => ({ ...state, isSaving: false })),

  on(actions.ListRequested, actions.ReadRequested, (state): State => ({ ...state, isLoading: true })),
  on(actions.ListSuccess, (state, action) =>
    usersAdapter.setAll(action.users, {
      ...state,
      isLoading: false,
      hasLoaded: true
    })
  ),
  on(actions.ListFail, actions.ReadFail, (state): State => ({ ...state, isLoading: false })),

  on(actions.ReadSuccess, (state, action) => {
    return usersAdapter.upsertOne(action.user, {
      ...state,
      isLoading: false
    });
  }),
  on(actions.UpdateSuccess, (state): State => ({ ...state, isSaving: false }))
);

export function usersReducer(state: State | undefined, action: Action): State {
  return reducer(state, action);
}
