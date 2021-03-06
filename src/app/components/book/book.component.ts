import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {

  @Input() book: Book;

  @Input() detail = false;

  constructor() { }

  ngOnInit() {
    console.log('detail', this.detail)
  }

}
