import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { QuestionAnswerPage } from '../question-answer/question-answer';
import { NotificationsPage } from '../notifications/notifications';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = MapPage;
  tab3Root: any = QuestionAnswerPage;
  tab4Root: any = NotificationsPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
