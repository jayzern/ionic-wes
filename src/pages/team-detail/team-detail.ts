import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html'
})

export class TeamDetailPage {
  team: any;
  members: any[] = [];

  constructor(public dataProvider: ConferenceData, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      if (data && data.team) {
        for (const team of data.team) {
          if (team && team.id === this.navParams.data.teamId) {
            // get team
            this.team = team;

            // get members
            this.members = team.members;
            break;
          }
        }
      }
    });
  }
}
