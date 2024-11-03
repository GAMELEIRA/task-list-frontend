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
  PoNotificationService,
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
    PoLoadingModule,
  ],
  templateUrl: './create-auth.component.html',
  styleUrls: ['./create-auth.component.scss'],
})
export class CreateAuthComponent {
  public reactiveForm!: UntypedFormGroup;
  public loading = false;

  constructor(
    public routerService: RouterService,
    private authService: AuthService,
    private fb: UntypedFormBuilder,
    public poNotification: PoNotificationService
  ) {
    this.createReactiveForm();
  }

  public requestCreateAccount(): void {
    this.loading = true;
    const user = this.reactiveForm.value;
    this.authService.createAccount(user).subscribe(
      (account) => {
        this.poNotification.success('Sua conta foi cadastrada com sucesso!');
        this.routerService.navigateToPage('/auth');
      },
      (error) => {
        console.log(error);
        this.poNotification.error(
          `Não foi cadastrar sua conta! Contate o administrador do sistema informando o erro: ${error.message}`
        );
      },
      () => {
        this.loading = false;
      }
    );
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
