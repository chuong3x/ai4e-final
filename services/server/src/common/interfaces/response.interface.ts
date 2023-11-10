export interface IResponse {
  statusCode: number;
  message: string;
}
export interface IData<T> {
  data: T;
}
export interface IServerResponse<T> extends IResponse {
  data?: T;
}
