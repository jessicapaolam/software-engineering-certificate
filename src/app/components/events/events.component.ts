import { Component } from '@angular/core';
import { NewEventComponent } from './new-event/new-event.component';
import { MatDialog } from '@angular/material/dialog';

export interface ItemsData {
  title: string;
  date: string;
  about: string;
}

const ITEMS_CARD: ItemsData[] = [];

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  items = ITEMS_CARD;

  title?: string;

  date?: string;

  about?: string;

  constructor(public dialog: MatDialog) {}

  public addNewEvent() {
    const dialogRef = this.dialog.open(NewEventComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.title = result.title;
      this.date = result.date;
      this.about = result.about;
      this.items.push(result);
      this.items = [...this.items];
    });
  }
}
