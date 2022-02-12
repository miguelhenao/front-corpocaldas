import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { UserPayload } from '../../helpers/classes/user';

export interface State extends EntityState<UserPayload> {
  isLoading: boolean;
  isSaving: boolean;
  hasLoaded: boolean;
}

export const usersAdapter: EntityAdapter<UserPayload> = createEntityAdapter<UserPayload>();

export const initState: State = usersAdapter.getInitialState({
  isLoading: false,
  isSaving: false,
  hasLoaded: false
});

export const { selectAll, selectEntities, selectIds, selectTotal } = usersAdapter.getSelectors();
