import { Component } from '@angular/core';

import {
  ActionSheet,
  ActionSheetController,
  Config,
  NavController
} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ConferenceData } from '../../providers/conference-data';

import { TeamDetailPage } from '../team-detail/team-detail';

// TODO remove
export interface ActionSheetButton {
  text?: string;
  role?: string;
  icon?: string;
  cssClass?: string;
  handler?: () => boolean|void;
};

@Component({
  selector: 'page-team-list',
  templateUrl: 'team-list.html'
})

export class TeamListPage {
  actionSheet: ActionSheet;
  speakers: any[] = [];
  team: any[] = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public confData: ConferenceData,
    public config: Config,
    public inAppBrowser: InAppBrowser
  ) {}

  ionViewDidLoad() {
    // Fetches teams
    this.confData.getTeam().subscribe((team: any[]) => {
      this.team = team;
    });
  }


  goToTeamDetail(team: any) {
    this.navCtrl.push(TeamDetailPage, { teamId: team.id });
  }

}
