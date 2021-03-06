import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(( {id} ) => this.paisService.buscarPaisPorCodigo(id))
      )
      .subscribe( resp => {
        console.log(resp);
      })


    // this.activatedRoute.params
    //   .subscribe(({id}) => {
    //     console.log(id)
    //     this.paisService.buscarPaisPorCodigo(id)
    //       .subscribe(pais => console.log(pais));
    //   });

    // this.activatedRoute.params
    // .subscribe( params  => {
    //   console.log(params)
    // });
  }    
}
