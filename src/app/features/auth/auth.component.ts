import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  PoButtonModule,
  PoContainerModule,
  PoFieldModule,
} from '@po-ui/ng-components';
import { RouterService } from '../../shared/services/router/routrer.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, PoFieldModule, PoButtonModule, PoContainerModule],
  providers: [RouterService],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  constructor(public routerService: RouterService) {}
}
