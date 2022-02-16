import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { WorkSpaceRequestPayload } from '../../helpers/classes/workspace';

export interface State extends EntityState<WorkSpaceRequestPayload> {
  isLoading: boolean;
  isSaving: boolean;
  hasLoaded: boolean;
}

export const workspacesAdapter: EntityAdapter<WorkSpaceRequestPayload> = createEntityAdapter<WorkSpaceRequestPayload>();

export const initState: State = workspacesAdapter.getInitialState({
  isLoading: false,
  isSaving: false,
  hasLoaded: false
});

export const { selectAll, selectEntities, selectIds, selectTotal } = workspacesAdapter.getSelectors();
