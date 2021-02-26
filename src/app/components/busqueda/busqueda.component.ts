import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
 
  heroes: any[] = []
  termino: string = ''
  constructor(private ativatedRoute: ActivatedRoute,
    private _heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {

    this.ativatedRoute.params.subscribe(

      params => {
      this.termino = params ['termino']
      this.heroes = this._heroesService.buscarHeroes(params['termino'])
      }
    )

  }
  

}
