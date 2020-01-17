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

  getAuthors() {
    return this.client.get(`${environment.api}/authors`);
  }

  getAuthor(id: number) {
    return this.client.get(`${environment.api}/authors/${id}`);
  }

  saveAuthor(author: Author) {
    return this.client.post(`${environment.api}/authors`, author);
  }

  updateAuthor(id: number, author: Author) {
    return this.client.put(`${environment.api}/authors/${id}`, author);
  }

  deleteAuthor(id: number) {
    return this.client.delete(`${environment.api}/authors/${id}`);
  }
}
