import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.sass']
})

export class BookAddComponent implements OnInit {

  formBook: FormGroup;

  constructor(
    private fb: FormBuilder,
    private booksService: BooksService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formBook = this.fb.group({
      nombre: ['', Validators.required] ,
      autor: ['', Validators.required] ,
      idioma: ['', Validators.required] ,
      descripcion: ['', Validators.required] ,
    });
  }

  /**
   * Realiza el proceso de validacion para guardar un libro
   * @param formBook:FormGroup
   */
  saveBook(formBook: FormGroup) {
    if (formBook.valid) {
      const data: Book = formBook.value;
      this.booksService.saveBook(data).subscribe((res: any) => {
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
