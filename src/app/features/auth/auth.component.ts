import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PoButtonModule, PoContainerModule, PoFieldModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule, 
    PoFieldModule,
    PoButtonModule,
    PoContainerModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
