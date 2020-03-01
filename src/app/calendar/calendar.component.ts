import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FirebaseService } from '../shared/firebase.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements AfterViewInit {
  @ViewChild('calendar', { static: true }) calendarComponent: FullCalendarComponent;
  @ViewChild('Modal', { static: false }) Modal: ModalDirective;
  defaultDate = new Date('1900-01-01');
  input = '';
  calendarPlugins = [interactionPlugin, dayGridPlugin];
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

  constructor(
    private firebaseService: FirebaseService
  ) {
  }

  ngAfterViewInit() {
  }

  handleDateClick(eventClick) {
    return this.input;
    console.log(eventClick, this.input);
  }

  showModal() {
    this.Modal.show();
  }

  hideModal() {
    this.Modal.hide();
  }

  clearValueInput() {

  }
}
