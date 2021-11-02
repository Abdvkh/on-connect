import { Component } from '@angular/core';
import { Act, Status } from 'src/app/features/acts/models/act.model';
import { actsPageConfig } from './act-page.config';

@Component({
  selector: 'app-acts-page',
  templateUrl: './acts-page.component.html',
  styleUrls: ['./acts-page.component.scss']
})
export class ActsPageComponent {
  pageConfig = actsPageConfig;
  tabsConfig = this.pageConfig.tabs;

  acts: Act[] = [
    {
      id: '1-2676-2021/5677',
      download_date: new Date('2021-02-12T00:00:00.000Z'),
      action_date: new Date('2021-02-12T12:00:00.000Z'),
      status: Status.FullySatisfied,
      title: '10 - Сайлов комиссиясининг харакатлари низолаш тугрисида'
    }
  ];
}
