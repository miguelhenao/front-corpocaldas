export interface WorkSpaceRequestPayload {
  id: number;
  name: string;
  parent?: WorkSpaceRequestPayload;
}
