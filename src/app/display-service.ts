import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
    constructor() {}

  displayUsers(users: any[]): void {
    console.log('');
    console.log(users);
  }
}