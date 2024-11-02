import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  PoButtonModule,
  PoContainerModule,
  PoFieldModule,
} from '@po-ui/ng-components';
import { RouterService } from '../../../shared/services/router/routrer.service';

@Component({
  selector: 'app-create-auth',
  standalone: true,
  imports: [CommonModule, PoFieldModule, PoButtonModule, PoContainerModule],
  templateUrl: './create-auth.component.html',
  styleUrls: ['./create-auth.component.scss'],
})
export class CreateAuthComponent {
  constructor(public routerService: RouterService) {}
}
