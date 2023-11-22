import { Component } from '@angular/core';
import { ParentUser } from './parent-user.interface';
import { ChildUser } from './child-user.interface';
import { DisplayService } from './display.service';
@Component({
  selector: 'app-root',
  template: `
    <div *ngFor="let user of users">
      <div *ngIf="user.age > 20">
        {{ user.firstname }} {{ user.lastname }} - {{ user.age }} years old
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  users = [
    { firstname: 'Luka', lastname: 'Begashvili', age: 24 },
    { firstname: 'Jajo', lastname: 'jajanidze', age: 30 },
    { firstname: 'Ruska', lastname: 'Budagovi', age: 30 },
    { firstname: 'Ana', lastname: 'Osepashvili', age: 42 },
    { firstname: 'Maia', lastname: 'jajanidze', age: 12 },
    { firstname: 'Nikolozi', lastname: 'Budagovi', age: 23 },
    { firstname: 'Ana', lastname: 'Osepashvili', age: 14 },
    
  ];
  parentUsers: ParentUser[] = [
    { Id: 1, Firstname: 'Luka', Lastname: 'Begashvili', DateOfBirth: '1992-01-11', PhoneNumber: '1232456789', Email: 'lukaibsu@gmail.com' },
    { Id: 2, Firstname: 'Jajo', Lastname: 'jajanidze', DateOfBirth: '1999-02-22', PhoneNumber: '98765432321', Email: 'jajoibsu@gmail.com' },
    { Id: 4, Firstname: 'Maia', Lastname: 'Jajanidze', DateOfBirth: '1992-01-11', PhoneNumber: '1232456789', Email: 'maiaibsu@gmail.com' },
    { Id: 3, Firstname: 'Nikoloz', Lastname: 'Begashvili', DateOfBirth: '1999-02-22', PhoneNumber: '98765432321', Email: 'nikolozibsu@gmail.com' },
  ];

  childUsers: ChildUser[] = [
    { Id: 2, Firstname: 'Maia', Lastname: 'jajanidze', DateOfBirth: '2011-08-03', PhoneNumber: '11124323', Email: 'ibsu@gmail.com', ParentId: 2, IsMinor: true },
    { Id: 2, Firstname: 'Nikolozi', Lastname: 'Budagovi', DateOfBirth: '2000-03-11'
  }]

  title: any;
}



