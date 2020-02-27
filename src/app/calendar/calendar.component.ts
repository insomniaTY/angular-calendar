import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput, Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @ViewChild('calendar', {static: false}) calendarComponent: FullCalendarComponent;
  defaultDate = new Date('1900-01-01');
  calendarVisible = true;
  calendarPlugins = [dayGridPlugin];
  calendarWeekends = true;

  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];
  constructor() {}

  ngOnInit() {
    console.log(this.calendarPlugins[0]);
  }
  handleDateClick(eventClick, view) {
    console.log(eventClick, view);
  }
}
