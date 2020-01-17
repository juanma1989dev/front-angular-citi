import { Component, OnInit } from '@angular/core';
import { AuthorService  } from '../../services/author.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.sass']
})
export class AuthorListComponent implements OnInit {

  authors$;

  constructor(
    private authorService: AuthorService,
    private notifierService: NotifierService
  ) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    this.authors$ = this.authorService.getAuthors();
  }

  deleteAuthor(id: number) {
    this.authorService.deleteAuthor(id).subscribe((res: any) => {
      if (res.success) {
        return this.getAuthors();
      }
      return this.notifierService.notify('danger', 'Hubo un error al eliminar el autor.');
    }, (err) => {
      console.error(err);
    });
  }

}
