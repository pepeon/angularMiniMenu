import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div style="padding:40px">
      <h1>Добро пожаловать</h1>
      <p>Это тестовое задание по Frontend-разработке</p>
      <a routerLink="/menu">Перейти к меню</a>
    </div>
  `,
})
export class HomeComponent {}
