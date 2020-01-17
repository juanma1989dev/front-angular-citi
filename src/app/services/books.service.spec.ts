import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksService } from './books.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Book } from '../models/book';
import { environment } from '../../environments/environment';describe('BooksService', () => {

  let service: BooksService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers : [BooksService]
    });

    service = TestBed.get(BooksService);
    httpMock = TestBed.get(HttpTestingController);

  }));

  afterEach(async(() => {
    httpMock.verify();
  }));

  it('Obtener los libros del API', () => {
    const booksDummy: Book[] = [
      { id: 1, nombre: 'Libro 1', autor: 'Autor', idioma: 'Español', descripcion: 'Descripcion 1' },
      { id: 1, nombre: 'Libro 2', autor: 'Autor 2', idioma: 'Español', descripcion: 'Descripcion 2' }
    ];

    service.getBooks().subscribe((books: Book[]) => {
      expect(books.length).toBe(2);
      expect(books).toEqual(booksDummy);
    });

    const request = httpMock.expectOne(`${environment.api}/books`);
    expect(request.request.method).toBe('GET');
    request.flush(booksDummy);

  });

  /*
  it('Obtener un libro', () => {
    const bookDummy: Book = { id: 1, nombre: 'Libro 1', autor: 'Autor', idioma: 'Español', descripcion: 'Descripcion 1' };
    const idDummy = 22;

    service.getBook(idDummy).subscribe((book: Book) => {
      console.log(book);
      expect(bookDummy).toEqual(book);
    });

    const request = httpMock.expectOne(`${environment.api}/books/${idDummy}`);
    expect(request.request.method).toBe('GET');
    request.flush(idDummy);
    request.flush(bookDummy);

  });

  it('Insertar un libro', () => {
    const bookDummy: Book = { id: 1, nombre: 'Libro 1', autor: 'Autor', idioma: 'Español', descripcion: 'Descripcion 1' };
    const responseDummy: any = { success : true };

    service.saveBook(bookDummy).subscribe((res: any) => {
      expect(res).toEqual(responseDummy);
    });

    const request = httpMock.expectOne(`${environment.api}/books`);
    expect(request.request.method).toBe('POST');
    request.flush(bookDummy);
    request.flush(responseDummy);
  });
  */

});
