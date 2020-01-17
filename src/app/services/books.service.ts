import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private client: HttpClient
  ) { }

  /**
   * Realiza la busqueda de libros
   * @param term string
   */
  searchBook(term: string) {
    return this.client.get(`${environment.api}/books-search?term=${term}`);
  }

  /**
   * Obtiene un libro (API)
   * @param id number
   */
  getBook(id: number) {
    return this.client.get(`${environment.api}/books/${id}`);
  }

  /**
   * Registra un libro  (API)
   * @param book Book
   */
  saveBook(book: Book) {
    return this.client.post(`${environment.api}/books`, book);
  }

  /**
   * Actualiza un libro  (API)
   * @param id: number
   * @param book Book
   */
  updateBook(id: number, book: Book) {
    return this.client.put(`${environment.api}/books/${id}`, book);
  }

  /**
   * Obtiene todos los libros (API)
   */
  getBooks() {
    return this.client.get(`${environment.api}/books`);
  }

  /**
   * Elimina un libor  (API)
   * @param id number
   */
  deleteBook(id: number) {
    return this.client.delete(`${environment.api}/books/${id}`);
  }
}
