import {ApiResponseData} from './ApiResponseData';

export class ApiResponse {

  readonly code: number;

  readonly status: string;

  readonly data?: ApiResponseData | any;

  readonly message?: string;
}
