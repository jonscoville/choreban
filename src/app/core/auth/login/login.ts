import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../auth';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  host: {
    class: 'flex justify-center items-center h-full bg-indigo-50',
  }
})
export class Login {

  private readonly authService = inject(Auth);

  protected readonly loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login(form: FormGroup) {
    if (form.invalid) {
      console.error('Form is invalid');
      return;
    }
    this.authService.login({
      username: form.value.username,
      password: form.value.password
    });
    console.log('Login form submitted:', form);
  }
}
