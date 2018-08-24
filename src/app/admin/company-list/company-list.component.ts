import {Component, OnInit} from '@angular/core';

import {AdminService} from '../admin.service';

import {ApiResponseData} from '../../models/ApiResponseData';
import {Company} from '../../models/Company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  public companies: Array<Company> = [];

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.adminService.getCompanies().subscribe((data: ApiResponseData) => {
      this.companies = data.results;
    });
  }
}
