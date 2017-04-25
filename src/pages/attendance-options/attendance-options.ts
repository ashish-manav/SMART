import { Component } from '@angular/core';

@Component({
  selector: 'page-attendance-options',
  templateUrl: 'attendance-options.html'
})
export class AttendanceOptionsPage {
    public users = [
    { name: 'Jilles', age: 21 },
    { name: 'Todd', age: 24 },
    { name: 'Lisa', age: 18 },
        { name: 'Jilles', age: 21 },
    { name: 'Todd', age: 24 },
    { name: 'Lisa', age: 18 },
        { name: 'Jilles', age: 21 },
    { name: 'Todd', age: 24 },
    { name: 'Lisa', age: 18 },
        { name: 'Jilles', age: 21 },
    { name: 'Todd', age: 24 },
    { name: 'Lisa', age: 18 }
  ];

public months =  [ 
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    
    ];
  constructor() {
 
  }

}
