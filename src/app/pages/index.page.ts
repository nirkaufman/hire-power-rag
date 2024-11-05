import { Component } from '@angular/core';
import {NavbarComponent} from "../components/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <navbar />
    <h1>Hire Power</h1>
    <h3>Your HR AI Assistant</h3>
  `,
  imports: [
    NavbarComponent
  ]
})
export default class HomeComponent {}
