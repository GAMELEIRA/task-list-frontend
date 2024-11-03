import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import {
  PoButtonModule,
  PoContainerModule,
  PoFieldModule,
} from '@po-ui/ng-components';
import { RouterService } from '../../../shared/services/router/routrer.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-auth',
  standalone: true,
  imports: [
    CommonModule,
    PoFieldModule,
    PoButtonModule,
    PoContainerModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-auth.component.html',
  styleUrls: ['./create-auth.component.scss'],
})
export class CreateAuthComponent {
  public reactiveForm!: UntypedFormGroup;

  constructor(
    public routerService: RouterService,
    private authService: AuthService,
    private fb: UntypedFormBuilder
  ) {
    this.createReactiveForm();
  }

  public requestCreateAccount(): void {
    const user = {
      user: this.reactiveForm.value,
    };
    console.log(user);
    this.authService.createAccount(user);
  }

  public createReactiveForm = (): void => {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      credential: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(1)]],
      }),
    });
  };
}
