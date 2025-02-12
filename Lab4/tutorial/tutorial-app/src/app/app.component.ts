// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-user',
//   template: `
//     Username: {{ username }}
//   `,
// })
// export class UserComponent {
//   username = 'youngTech';
// }

// @Component({
//   selector: 'app-root',
//   template: `
//     <section>
//       <app-user />
//     </section>
//   `,
//   imports: [UserComponent],
// })
// export class AppComponent {}



// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     @if (isServerRunning) {
//     <span>Yes, the server is running</span>
//     } @else {
//     <span>No, the server is not running</span>
//     }
//   `,
// })
// export class AppComponent {
//   isServerRunning = true;
// }



// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     @for(user of users; track user.id) {
//     <p>{{ user.name }}</p>
//     }
//   `,
// })
// export class AppComponent {
//   users = [
//     {id: 0, name: 'Sarah'},
//     {id: 1, name: 'Amy'},
//     {id: 2, name: 'Rachel'},
//     {id: 3, name: 'Jessica'},
//     {id: 4, name: 'Poornima'},
//   ];
// }


// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   styleUrls: ['app.component.css'],
//   template: `
//     <div [contentEditable]="isEditable"></div>
//   `,
// })
// export class AppComponent {
//   isEditable = true;
// }


// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <section (mouseover)="onMouseOver()">
//       There's a secret message for you, hover to reveal:
//       {{ message }}
//     </section>
//   `,
// })
// export class AppComponent {
//   message = '';

//   onMouseOver() {
//     this.message = 'Way to go 🚀';
    
//   }
// }

// import {Component} from '@angular/core';
// import {UserComponent} from './user.component';

// @Component({
//   selector: 'app-root',
//   template: `
//     <app-user name="Simran" />
//   `,
//   imports: [UserComponent],
// })
// export class AppComponent {}

import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <router-outlet />
  `,
  imports: [RouterOutlet],
})
export class AppComponent {}

