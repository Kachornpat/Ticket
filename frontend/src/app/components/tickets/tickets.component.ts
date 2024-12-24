import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CreateTicketComponent } from '../create-ticket/create-ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [
    CreateTicketComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss',
})
export class TicketsComponent {}
