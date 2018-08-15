import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {

  public error(message: any) {
    console.error('ERROR', message);
  }

  public debug(message: any) {
    console.log('DEBUG', message);
  }

  public log(message: any) {
    console.log('LOG', message);
  }
}
