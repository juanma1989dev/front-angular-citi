import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.sass']
})
export class ListBooksComponent implements OnInit {

  searchBox: string;

  books: Book[] = [];

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit() {
  }

  changeSearchBox(termSearch: string) {
    this.booksService.searchBook(termSearch).subscribe((books: Book[]) => {
      this.books = books;
    }, (err) => {
      console.error(err);
    });
  }

}
