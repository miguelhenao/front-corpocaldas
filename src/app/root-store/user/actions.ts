import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

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

export const ReadRequested = createAction('[User Effects] READ Users Requested', props<{ id: string }>());
export const ReadSuccess = createAction('[User Effects] READ Users Success', props<{ user: UserPayload }>());
export const ReadFail = createAction('[User Effects] READ Users Fail', props<{ error: HttpErrorResponse }>());

export const UpdateRequested = createAction('[User Effects] UPDATE User Requested', props<{ user: UserPayload }>());
export const UpdateSuccess = createAction(
  '[User Effects] UPDATE User Success',
  props<{ id: string; message: string }>()
);
export const UpdateFail = createAction('[User Effects] UPDATE User Fail', props<{ error: HttpErrorResponse }>());
