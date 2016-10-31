import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Hero } from './models/hero';
import { HeroService } from './hero.service';
 
@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: '/app/heroes.component.html',
    styleUrls: ['../app/heroes.component.css']

})
export class HeroesComponent implements OnInit{
    title = '英雄列表';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService, private router: Router,){

    }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void{
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}