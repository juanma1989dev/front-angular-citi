import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../models/author';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private client: HttpClient
  ) { }

  /**
   * Obtine todos los autores
   */
  getAuthors() {
    return this.client.get(`${environment.api}/authors`);
  }

  /**
   * Obtiene un autor (API)
   * @param id number
   */
  getAuthor(id: number) {
    return this.client.get(`${environment.api}/authors/${id}`);
  }

  /**
   * Guarda un author (API)
   * @param author Author
   */
  saveAuthor(author: Author) {
    return this.client.post(`${environment.api}/authors`, author);
  }

  /**
   * Actauliza un author (API)
   * @param id number
   * @param author Author
   */
  updateAuthor(id: number, author: Author) {
    return this.client.put(`${environment.api}/authors/${id}`, author);
  }

  /**
   * Elimina un author (API)
   * @param id number
   */
  deleteAuthor(id: number) {
    return this.client.delete(`${environment.api}/authors/${id}`);
  }
}
