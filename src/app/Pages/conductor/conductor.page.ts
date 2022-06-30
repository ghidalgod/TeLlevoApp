import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage  {

  usuario: string;

  constructor(private router:Router, private activeroute:ActivatedRoute) {
    
    this.router.navigate(['conductor/conductor'])
    this.activeroute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.usuario=this.router.getCurrentNavigation().extras.state.user.usuario;
        console.log(this.usuario)
      }
    });
  } 
    
   segmentChanged($event){
     console.log($event);
     let direccion=$event.detail.value
     this.router.navigate(['conductor/'+direccion])
   }
  }