import { Component, ViewChild, AfterViewInit, TemplateRef, OnInit, OnDestroy, ElementRef } from '@angular/core';

import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';

import { FirebaseService } from '../feature/firebase.service';
import { Game } from '../feature/games.model';

import { Observable, pipe } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { QuerySnapshot } from '@angular/fire/firestore';

import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('calendar', { static: true }) calendarComponent: FullCalendarComponent;
  @ViewChild('modal', { static: true }) modal: TemplateRef<any>;
  @ViewChild('video', { static: true }) video: ElementRef;
  modalRef: BsModalRef;
  games: Game[] = [];

  defaultDate = new Date('1900-01-01');
  input = '';
  calendarPlugins = [interactionPlugin, dayGridPlugin];
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

  constructor(
    private firebaseService: FirebaseService,
    private modalService: BsModalService,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  ngAfterViewInit() {
  }

  onDateClick(info: any) {
    this.firebaseService.getData(info.date)
      .pipe(
        map((data: QuerySnapshot<Game>) => data.docs.map(d => d.data())),
        tap(console.log),
        take(1)
      ).subscribe(data => {
        this.games = data;
        this.showModal(this.modal);
    });
  }

  showModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getYoutubeEmbedLink(link: string): SafeResourceUrl {
    const url = new URL(link);
    const id = url.searchParams.get('v');
    return this.getUrl(`https://www.youtube.com/embed/${id}`);
  }
  getUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  hideModal() {
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }
}
