import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  searchBox: string;

  books: Book[] = [];

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit() {
  }

  /**
   * Fuuncionalidad para invocar el servicio de busqueda de libros
   * @param termSearch string
   */
  changeSearchBox(termSearch: string) {
    this.booksService.searchBook(termSearch).subscribe((books: Book[]) => {
      this.books = books;
    }, (err) => {
      console.error(err);
    });
  }

}
