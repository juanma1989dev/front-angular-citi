import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorService } from '../../services/author.service';
import { Author } from 'src/app/models/author';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.sass']
})
export class AuthorEditComponent implements OnInit {

  authorForm: FormGroup;

  author$;

  author: Author;

  constructor(
    private fb: FormBuilder,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router,
    private notifierService: NotifierService
  ) { }

  ngOnInit() {
    this.authorForm = this.fb.group({
      nombre: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required]
    });

    this.getAuthor();
  }

  /**
   * Obtiene un autor apartir de un ID
   */
  getAuthor() {
    const idAutor: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.author$ = this.authorService.getAuthor(idAutor)
      .pipe(tap((author: Author) => {
        this.authorForm.patchValue(author);
        this.author = author;
      }));
  }

  /**
   * Realiza la funcionalidad para valida la actualizacion de un libro
   * @param authorForm:FormGroup
   */
  updateAuthor(authorForm: FormGroup) {
    if (authorForm.valid) {
      const data = authorForm.value;
      this.authorService.updateAuthor(this.author.id, data).subscribe((res: any) => {
        if (res.success) {
          this.notifierService.notify('success', 'Se actualizo correctament el autor.');
          return this.router.navigate(['/author-list']);
        }
        return this.notifierService.notify('danger', 'Hubo un error al editar el autor.');
      }, (err) => {
        console.error(err);
      });
    }
  }

}
