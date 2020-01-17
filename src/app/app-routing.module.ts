import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent  } from './components/search/search.component';
import { BookDetailComponent  } from './components/book-detail/book-detail.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookListComponent } from './components/book-list/book-list.component';

import { AuthorAddComponent } from './components/author-add/author-add.component';
import { AuthorEditComponent } from './components/author-edit/author-edit.component';
import { AuthorListComponent } from './components/author-list/author-list.component';


const routes: Routes = [
  { path : '', component : SearchComponent },
  { path : 'book-detail/:id', component : BookDetailComponent },
  { path : 'book-add', component: BookAddComponent},
  { path : 'book-edit/:id', component: BookEditComponent},
  { path : 'book-list', component: BookListComponent},

  { path : 'author-add', component: AuthorAddComponent},
  { path : 'author-edit/:id', component: AuthorEditComponent},
  { path : 'author-list', component: AuthorListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
