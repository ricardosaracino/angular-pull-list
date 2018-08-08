export class ApiResponseData {
  readonly offset: number; // The requested offset (number of skipped results) of the call.
  readonly limit: number;  // The requested result limit.
  readonly total: number;  // The total number of resources available given the current filter set.
  readonly count: number;  // The total number of results returned by this call.

  readonly results: Array<any>;
}
