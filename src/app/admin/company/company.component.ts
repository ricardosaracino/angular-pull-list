import {Component, OnInit} from '@angular/core';
import {Company} from '../../models/Company';
import {ActivatedRoute, Router} from '@angular/router';
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

  constructor(private adminService: AdminService, private router: Router, private routeSnapshot: ActivatedRoute) {
  }

  public ngOnInit() {

    this.routeSnapshot.params.subscribe(params => {

      if (params['id']) {
        this.get(params['id']);
      }
    });
  }

  public get(id: string) {

    this.adminService.getCompany(id).subscribe((company: Company) => {

      if (company) {
        this.company = company;
      }
      // TODO else error
    });
  }

  public save() {

    this.sending = true;

    this.adminService.saveCompany(this.company).subscribe((success: boolean) => {
      this.success = (true === success);
      this.sending = false;
      if (this.success) {
        this.router.navigate(['/admin/companies']);
      }
    });
  }
}
