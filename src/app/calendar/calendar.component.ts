<<<<<<< HEAD
import { Component, ViewChild, AfterViewInit, TemplateRef, OnInit, OnDestroy, ElementRef, Query } from '@angular/core';
=======
import { Component, ViewChild, AfterViewInit, TemplateRef, OnInit } from '@angular/core';
>>>>>>> f22abbfec42b7c0a460497aa3c3e0de4dd9474b5
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
<<<<<<< HEAD
import { FirebaseService } from '../feature/firebase.service';
import { Game } from '../feature/games.model';

import { Observable, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';
=======
import { FirebaseService } from '../shared/firebase.service';
import { Game } from '../shared/data.model';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
>>>>>>> f22abbfec42b7c0a460497aa3c3e0de4dd9474b5
import { QuerySnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('calendar', { static: true }) calendarComponent: FullCalendarComponent;
  @ViewChild('modal', { static: true }) modal: TemplateRef<any>;
  @ViewChild('video', { static: true}) video: ElementRef;



<<<<<<< HEAD
  modalRef: BsModalRef;

  games$: Observable<Game[]> = this.firebaseService.getData()
  .pipe(
    map((data: QuerySnapshot<Game>) => data.docs.map(d => d.data()))
  );
=======
  games$: Observable<Game[]> = this.firebaseService.getData()
    .pipe(
      map((data: QuerySnapshot<Game>) => data.docs.map(d => d.data()))
    );
>>>>>>> f22abbfec42b7c0a460497aa3c3e0de4dd9474b5

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

  ngOnInit() {
<<<<<<< HEAD
  }

  ngOnDestroy() {
=======
>>>>>>> f22abbfec42b7c0a460497aa3c3e0de4dd9474b5
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
