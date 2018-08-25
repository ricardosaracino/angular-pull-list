import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/index';

@Injectable()
export class MessageService {

  public flash: Subject<any> = new Subject();

  public sendToFlash(message) {
    this.flash.next(message);
  }
}
