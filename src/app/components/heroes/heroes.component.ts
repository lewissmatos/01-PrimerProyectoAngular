import { Component, OnInit } from '@angular/core';

import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router} from '@angular/router';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[]

  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) { 

  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes()
  }

 verMasHeore(i:number) {
   this.router.navigate(['/heroepage', i])
 }

}
