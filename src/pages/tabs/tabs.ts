import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';
//added by ashish
import { AttendanceOptionsPage } from '../attendance-options/attendance-options';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
 /* commented by ashish 
 tab1Root: any = SchedulePage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = MapPage;
  tab4Root: any = AboutPage;
  tab5Root: any = AttendanceOptionsPage; */
  tab1Root: any = SchedulePage;
  tab2Root: any = DashboardPage; 
  tab3Root: any = AboutPage;
  tab4Root: any = AttendanceOptionsPage;
  
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
