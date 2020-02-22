import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @ViewChild('calendar', {static: false}) calendarComponent: CalendarComponent;
  calendarPlugins = [dayGridPlugin];
  constructor() {}

  ngOnInit() {
    console.log(this.calendarPlugins);
  }

}
