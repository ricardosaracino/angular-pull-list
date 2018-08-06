import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {

  error(message: any) {
    console.error(`ERROR ${message}`);
  }

  debug(message: any) {
    console.log(`DEBUG ${message}`);
  }

  log(message: any) {
    console.log(`LOG ${message}`);
  }
}
