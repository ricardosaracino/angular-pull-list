export class ApiResponseData {
  public readonly offset: number; // The requested offset (number of skipped results) of the call.
  public readonly limit: number;  // The requested result limit.
  public readonly total: number;  // The total number of resources available given the current filter set.
  public readonly count: number;  // The total number of results returned by this call.

  public readonly results: Array<any>;
}
