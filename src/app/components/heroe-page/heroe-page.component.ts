import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-page',
  templateUrl: './heroe-page.component.html',
  styleUrls: ['./heroe-page.component.css']
})
export class HeroePageComponent implements OnInit {
   
  heroe: Heroe = {
    nombre: '',
    bio: '',
    img: '',
    aparicion: '',
    casa: ''
  };

  constructor(private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {

    this._activatedRoute.params.subscribe(

     params => {
        this.heroe = this._heroesService.getHeroePage(params['id'])
      }
    )
                
  }
  ngOnInit(): void {
  }

}
