import { Component, ViewChild, AfterViewInit, TemplateRef, OnInit, OnDestroy, ElementRef, Query } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { FirebaseService } from '../feature/firebase.service';
import { Game } from '../feature/games.model';

import { Observable, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';
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



  modalRef: BsModalRef;

  games$: Observable<Game[]> = this.firebaseService.getData()
  .pipe(
    map((data: QuerySnapshot<Game>) => data.docs.map(d => d.data()))
  );

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
  }

  ngOnDestroy() {
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
