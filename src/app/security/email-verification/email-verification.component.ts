import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {SecurityService} from '../security.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {

  constructor(private securityService: SecurityService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    const token = this.route.snapshot.paramMap.get('token');

    this.securityService.postEmailVerification(token).subscribe(
      (d) => {
        console.log(d);
      }
    );
  }
}
