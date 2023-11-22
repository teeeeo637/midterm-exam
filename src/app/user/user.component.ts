import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <div *ngFor="let user of users">
      {{ user.firstname }} {{ user.lastname }} - {{ user.dateOfBirth }}
    </div>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() users: any[] | undefined; 
}

