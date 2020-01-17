import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass']
})
export class BookListComponent implements OnInit {

  constructor(
    private booksService: BooksService
  ) { }

  books$;

  ngOnInit() {
    this.getBooks();
  }

  /**
   * Obtiene todos los libros para poder listarlos
   */
  getBooks() {
    this.books$ = this.booksService.getBooks();
  }

  /**
   * Realiza la accion para eliminar un libro
   * @param id: number
   */
  deleteBook(id: number) {
    this.booksService.deleteBook(id).subscribe((res: any) => {
      if (res.success) {
        this.getBooks();
      }
      return '';
    });
  }

}
