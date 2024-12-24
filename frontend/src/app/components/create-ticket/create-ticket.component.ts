import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  NgForm,
} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { Ticket } from '../../models/Ticket';

@Component({
  selector: 'app-create-ticket',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './create-ticket.component.html',
  styleUrl: './create-ticket.component.scss',
})
export class CreateTicketComponent implements OnInit {
  @ViewChild('formDirective') formDirective?: NgForm;

  form: FormGroup;

  constructor() {
    this.form = this.createFormGroup();
  }

  ngOnInit(): void {}

  createFormGroup(): FormGroup {
    return new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      body: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit(formData: Pick<Ticket, 'title' | 'body'>): void {
    console.log(formData);
    this.form.reset();
    if (this.formDirective != undefined) this.formDirective.resetForm();
  }
}
