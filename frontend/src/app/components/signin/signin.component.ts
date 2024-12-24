import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  signinForm: FormGroup;

  constructor( private authService: AuthService){
    this.signinForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup(
      {
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(7)]),
      }
    )
  }

  signin(){
    this.authService.signin(
      this.signinForm.value.email, 
      this.signinForm.value.password
    ).subscribe();
  }

}
