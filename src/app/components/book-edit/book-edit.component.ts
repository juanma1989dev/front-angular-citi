import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../../models/book';
import { BooksService } from '../../services/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.sass']
})
export class BookEditComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  formBook: FormGroup;

  book$;

  book: Book;

  ngOnInit() {
    this.formBook = this.fb.group({
      nombre: ['', Validators.required] ,
      autor: ['', Validators.required] ,
      idioma: ['', Validators.required] ,
      descripcion: ['', Validators.required] ,
    });

    this.getBook();
  }

  /**
   * Funcion que invoca el servicio de libros para obtener un libro
   */
  getBook() {
    const bookId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.book$ = this.booksService.getBook(bookId).pipe(
      tap((book: Book) => {
        this.formBook.patchValue(book);
        this.book = book;
      })
    );
  }

  /**
   * Se realiza el proceso de validacion para actualizar un libro
   * @param formBook: FormGroup
   */
  updateBook(formBook: FormGroup) {
    if (formBook.valid) {
      const data: Book = formBook.value;
      this.booksService.updateBook(this.book.id, data).subscribe((res: any) => {
        if (res.success) {
          return this.router.navigate(['/book-list']);
        }
        return console.log('hacer algo');
      }, (err) => {
        console.error(err);
      });
    }
  }

}
