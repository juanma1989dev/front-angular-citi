import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BookAddComponent } from './book-add.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Book } from 'src/app/models/book';

describe('BookAddComponent', () => {

  let component: BookAddComponent;
  let fixture: ComponentFixture<BookAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations : [ BookAddComponent ],
      imports : [ ReactiveFormsModule, HttpClientModule, RouterTestingModule ]
    }).compileComponents();

    fixture   = TestBed.createComponent(BookAddComponent);
    component = fixture.debugElement.componentInstance;
    component.ngOnInit();
  }));

  it('Validar que el componente de crea correctament', () => {
    expect(component).toBeTruthy();
  });

  it('Valida que el formulario sea valido', () => {
    expect(component.formBook.valid).toBeFalsy();
  });

  it('Valida que los elmentos del formulario sean validos', () => {
    expect(component.formBook.controls.nombre.valid).toBeFalsy();
    expect(component.formBook.controls.autor.valid).toBeFalsy();
    expect(component.formBook.controls.idioma.valid).toBeFalsy();
    expect(component.formBook.controls.descripcion.valid).toBeFalsy();
  });

  it('Valida el envio del formulario de libros', () => {
    expect(component.formBook.valid).toBeFalsy();

    component.formBook.controls.nombre.setValue('Libro TEST');
    component.formBook.controls.autor.setValue('Autor TEST');
    component.formBook.controls.idioma.setValue('Idioma TEST');
    component.formBook.controls.descripcion.setValue('Descripcion del libro TEST');

    expect(component.formBook.valid).toBeTruthy();
  });


});
