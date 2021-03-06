import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorService } from '../../services/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.sass']
})
export class AuthorAddComponent implements OnInit {

  authorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authorService: AuthorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authorForm = this.fb.group({
      nombre: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required]
    });
  }

  /**
   * Se realiza la funcionalidad para agregar autor
   * @param authorForm FormGroup
   */
  saveAuthor(authorForm: FormGroup) {
    if (authorForm.valid) {
      const data = authorForm.value;
      this.authorService.saveAuthor(data).subscribe((res: any) => {
        if (res.success) {
          return this.router.navigate(['/author-list']);
        }
        console.log(res);
      }, (err) => {
        console.error(err);
      });
    }
  }


}
