import {Component, OnInit} from '@angular/core';

import {LoaderService} from '../../services/loader.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor(public loadingService: LoaderService) {
  }

  ngOnInit() {
  }
}
