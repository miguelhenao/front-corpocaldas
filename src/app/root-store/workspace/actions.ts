import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { WorkSpaceRequestPayload } from '../../helpers/classes/workspace';

export const ListRequested = createAction('[Workspace Effects] LIST Workspaces Requested');
export const ListSuccess = createAction(
  '[Workspace Effects] LIST Workspaces Success',
  props<{ workspaces: WorkSpaceRequestPayload[] }>()
);
export const ListFail = createAction('[Workspace Effects] LIST Workspaces Fail', props<{ error: HttpErrorResponse }>());

export const CreateRequested = createAction(
  '[Workspace Effects] CREATE Workspace Requested',
  props<{ workspace: WorkSpaceRequestPayload }>()
);
export const CreateSuccess = createAction(
  '[Workspace Effects] CREATE Workspace Success',
  props<{ workspace: WorkSpaceRequestPayload; message: string }>()
);
export const CreateFail = createAction(
  '[Workspace Effects] CREATE Workspace Fail',
  props<{ error: HttpErrorResponse }>()
);

export const ReadRequested = createAction('[Workspace Effects] READ Workspace Requested', props<{ id: number }>());
export const ReadSuccess = createAction(
  '[Workspace Effects] READ Workspace Success',
  props<{ workspace: WorkSpaceRequestPayload }>()
);
export const ReadFail = createAction('[Workspace Effects] READ Workspace Fail', props<{ error: HttpErrorResponse }>());

export const UpdateRequested = createAction(
  '[Workspace Effects] UPDATE Workspace Requested',
  props<{ workspace: WorkSpaceRequestPayload }>()
);
export const UpdateSuccess = createAction(
  '[Workspace Effects] UPDATE Workspace Success',
  props<{ update: Update<WorkSpaceRequestPayload>; message: string }>()
);
export const UpdateFail = createAction(
  '[Workspace Effects] UPDATE Workspace Fail',
  props<{ error: HttpErrorResponse }>()
);

export const DeleteRequested = createAction('[Workspace Effects] DELETE Workspace Requested', props<{ id: number }>());
export const DeleteSuccess = createAction(
  '[Workspace Effects] DELETE Workspace Success',
  props<{ id: number; message: string }>()
);
export const DeleteFail = createAction(
  '[Workspace Effects] DELETE Workspace Fail',
  props<{ error: HttpErrorResponse }>()
);
