import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage  {
  
    usuario:string;
   

  constructor(private router:Router, private activeroute:ActivatedRoute) {
    
    this.router.navigate(['pasajero/pasajero'])
    this.activeroute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.usuario=this.router.getCurrentNavigation().extras.state.user.usuario;
        console.log(this.usuario)
      }
    });
  }

  segmentChanged($event){
    console.log($event);
    let direccion =$event.detail.value
    this.router.navigate(['pasajero/'+direccion])
  }

  

}
