import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { UserPayload } from '../../helpers/classes/user';

export const ListRequested = createAction('[User Effects] LIST Users Requested');
export const ListSuccess = createAction('[User Effects] LIST Users Success', props<{ users: UserPayload[] }>());
export const ListFail = createAction('[User Effects] LIST Users Fail', props<{ error: HttpErrorResponse }>());

export const CreateRequested = createAction('[User Effects] CREATE User Requested', props<{ user: UserPayload }>());
export const CreateSuccess = createAction(
  '[User Effects] CREATE User Success',
  props<{ user: UserPayload; message: string }>()
);
export const CreateFail = createAction('[User Effects] CREATE User Fail', props<{ error: HttpErrorResponse }>());

export const ReadRequested = createAction('[User Effects] READ User Requested', props<{ id: number }>());
export const ReadSuccess = createAction('[User Effects] READ User Success', props<{ user: UserPayload }>());
export const ReadFail = createAction('[User Effects] READ User Fail', props<{ error: HttpErrorResponse }>());

export const UpdateRequested = createAction('[User Effects] UPDATE User Requested', props<{ user: UserPayload }>());
export const UpdateSuccess = createAction(
  '[User Effects] UPDATE User Success',
  props<{ update: Update<UserPayload>; message: string }>()
);
export const UpdateFail = createAction('[User Effects] UPDATE User Fail', props<{ error: HttpErrorResponse }>());

export const DeleteRequested = createAction('[User Effects] DELETE User Requested', props<{ id: number }>());
export const DeleteSuccess = createAction(
  '[User Effects] DELETE User Success',
  props<{ id: number; message: string }>()
);
export const DeleteFail = createAction('[User Effects] DELETE User Fail', props<{ error: HttpErrorResponse }>());
