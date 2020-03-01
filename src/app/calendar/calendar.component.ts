import { Component, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { FirebaseService } from '../shared/firebase.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements AfterViewInit {

  @ViewChild('calendar', { static: true }) calendarComponent: FullCalendarComponent;
  @ViewChild('modal', { static: true }) modal: TemplateRef<any>;

  modalRef: BsModalRef;

  defaultDate = new Date('1900-01-01');
  input = '';
  calendarPlugins = [interactionPlugin, dayGridPlugin];
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

  constructor(
    private firebaseService: FirebaseService,
    private modalService: BsModalService
  ) {
  }

  ngAfterViewInit() {
  }

  handleDateClick(eventClick) {
    this.showModal(this.modal);
    return this.input;
    console.log(eventClick, this.input);
  }

  showModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  hideModal() {
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }

  clearValueInput() {

  }
}
