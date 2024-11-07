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
  PoLoadingModule,
} from '@po-ui/ng-components';
import { RouterService } from '../../shared/services/router/routrer.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    PoFieldModule,
    PoButtonModule,
    PoContainerModule,
    PoLoadingModule,
    ReactiveFormsModule,
  ],
  providers: [RouterService, AuthService],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  public reactiveForm!: UntypedFormGroup;
  public loading: boolean = false;

  constructor(
    public routerService: RouterService,
    public authService: AuthService,
    private fb: UntypedFormBuilder
  ) {
    this.createReactiveForm();
  }

  public requestLogin = (): void => {
    this.loading = true;
    const credential = this.reactiveForm.value;
    this.authService.login(credential).subscribe({
      next: () => {
        this.loading = false;
        this.routerService.navigateToPage('/tasks');
      },
      error: (error) => {
        this.loading = false;
        console.log(error);
      },
      complete: () => {
        this.loading = false;
      },
    });
  };

  public createReactiveForm = (): void => {
    this.reactiveForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  };
}
