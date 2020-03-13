<<<<<<< HEAD
import {Component, ViewChild, AfterViewInit, TemplateRef, OnInit} from '@angular/core';
=======
import { Component, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
>>>>>>> 9c2fdbe6436322e26e78de7ea493b2931ae6bf18
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { FirebaseService } from '../shared/firebase.service';
import { Data } from '../shared/data.model';

import {Observable, pipe} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
<<<<<<< HEAD
export class CalendarComponent implements OnInit, AfterViewInit {
=======
export class CalendarComponent implements AfterViewInit {
>>>>>>> 9c2fdbe6436322e26e78de7ea493b2931ae6bf18

  @ViewChild('calendar', { static: true }) calendarComponent: FullCalendarComponent;
  @ViewChild('modal', { static: true }) modal: TemplateRef<any>;

  modalRef: BsModalRef;
<<<<<<< HEAD
  data: Data[];
=======

  defaultDate = new Date('1900-01-01');
>>>>>>> 9c2fdbe6436322e26e78de7ea493b2931ae6bf18
  input = '';
  defaultDate = new Date('1900-01-01');
  calendarPlugins = [interactionPlugin, dayGridPlugin];
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

  constructor(
    private firebaseService: FirebaseService,
    private modalService: BsModalService
  ) {
  }
  ngOnInit() {
    this.firebaseService.getData()
      .subscribe(data => {
        console.log(data);
      });
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
<<<<<<< HEAD
=======
  }

  clearValueInput() {

>>>>>>> 9c2fdbe6436322e26e78de7ea493b2931ae6bf18
  }
}
