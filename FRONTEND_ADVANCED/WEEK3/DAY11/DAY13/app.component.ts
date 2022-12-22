import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  eventsArray:any[]=[
    {title: "Microsoft Azure Virtual Training Day:AI Fundamentals",url:"#",Date:"January 8,2023",Format:" Digital/Online",Time:"3:00 PM Pacific Time"},
    {title: "Microsoft Azure Virtual Training Day:Cloud-Native Apps",url:"#",Date:"January 12,2023-January 13,2023",Format:" Digital/Online",Time:"9:00 AM Pacific Time"},
    {title: "DemocracyLab-Hacky New Year",url:"#",Date:"January 14,2023",Format:" Digital/Online",Time:"8:30 AM Pacific Time"},
  ];
}
