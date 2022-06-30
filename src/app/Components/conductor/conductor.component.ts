import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/Interfaces/user';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.scss'],
})
export class ConductorComponent implements OnInit {
  @Input()  usuario:Usuario[];
  
  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {}
  programar:any = {
    direccion:"",
    comuna:"",
    inicio:"",
    hora:"",
    tarifa:""
  };
  
  tarifa:number;
  
  cerrar(){
    this.router.navigate(['/home']);
  }

  cancelar(){
    for(var[key,value] of Object.entries(this.programar)){
      Object.defineProperty(this.programar, key, {value:""})
    }
  }

  iniciar(){
        if (this.programar.direccion !="" && this.programar.comuna !=""&& this.programar.inicio !="" && this.programar.hora !="" && this.programar.tarifa !="") {
        this.presentAlert("Tarifa", "$ "+this.programar.tarifa)
    } else {
      this.presentAlert("Alumno", "No ingresaste datos :(")
    }
  }
  async presentAlert(titulo:string, msg:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

   

 
}
