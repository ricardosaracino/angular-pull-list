import {Component, OnInit} from '@angular/core';
import {Company} from '../../models/Company';

import {AdminService} from '../admin.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public company = new Company();

  public success = undefined;

  public sending = false;

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
  }

  public save() {

    this.sending = true;

    this.adminService.saveCompany(this.company).subscribe((success: boolean) => {
      this.success = (true === success);
      this.sending = false;
    });
  }
}
