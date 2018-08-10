import {Injectable} from '@angular/core';

import {ReplaySubject} from 'rxjs/index';

@Injectable()
export class LoaderService {

  // https://github.com/mpalourdio/ng-http-loader/blob/master/src/lib/services/pending-interceptor.service.ts
  // https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/replaysubject.md

  private requestsRunning = 0;

  pendingRequestsStatus: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor() {
  }

  get pendingRequestsStatus$(): Observable<boolean> {
    return this.pendingRequestsStatus.asObservable();
  }

  public list(): number {

    return this.requestsRunning;

  }

  public increase(): void {
    this.requestsRunning++;

    if (1 === this.requestsRunning) {
      this.pendingRequestsStatus.next(true);
    }
  }

  public decrease() {
    if (this.requestsRunning > 0) {
      this.requestsRunning--;

      if (0 === this.requestsRunning) {
        this.pendingRequestsStatus.next(false);
      }
    }
  }
}
