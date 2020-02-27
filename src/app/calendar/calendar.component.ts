import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements AfterViewInit {
  @ViewChild('calendar', { static: true }) calendarComponent: FullCalendarComponent;
  defaultDate = new Date('1900-01-01');
  calendarPlugins = [interactionPlugin, dayGridPlugin];

  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

  constructor() {
  }

  ngAfterViewInit() {
    const calendarApi = this.calendarComponent.getApi();
    console.log(calendarApi);
    calendarApi.on('dateClick', e => console.log(e));
    this.calendarComponent.dateClick.next(12);
  }

  handleDateClick(eventClick) {
    console.log(eventClick);
  }
}
