import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.sass']
})
export class BookDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) { }

  book$;


  ngOnInit() {
    this.getBook();
  }

  getBook() {
    const bookId = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.book$ = this.booksService.getBook(bookId);
  }

}
