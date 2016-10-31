import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <nav>
             <a routerLink="/dashboard" routerLinkActive="active">仪表盘</a>
             <a routerLink="/heroes" routerLinkActive="active">英雄列表</a>
        </nav>
         <router-outlet></router-outlet>
    `,
    styleUrls: ['../app/app.component.css'],
})

export class AppComponent{
    title = '自杀小分队';
}