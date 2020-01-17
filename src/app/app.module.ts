import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { BookComponent } from './components/book/book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { AuthorAddComponent } from './components/author-add/author-add.component';
import { AuthorEditComponent } from './components/author-edit/author-edit.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookListComponent } from './components/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    BookComponent,
    BookDetailComponent,
    BookAddComponent,
    AuthorAddComponent,
    AuthorEditComponent,
    AuthorListComponent,
    BookEditComponent,
    BookListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
