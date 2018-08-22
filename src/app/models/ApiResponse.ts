import {ApiResponseData} from './ApiResponseData';

export class ApiResponse {

  public readonly code: number;

  public readonly status: string;

  public readonly data?: ApiResponseData | any;

  public readonly message?: string;
}
