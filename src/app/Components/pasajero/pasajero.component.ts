import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Alumno, Usuario } from 'src/app/Interfaces/user';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.scss'],
})
export class PasajeroComponent implements OnInit {

@Input()  usuario:Usuario[];
  dato:any={
    escribibr:""
  };
  constructor( private alertController:AlertController, private router: Router) { 
 
  }

  ngOnInit() {}

  cerrar(){
    //navegar hacia home
    this.router.navigate(["/home"]);
  }

  cancelar(){
    for(var[key, value] of Object.entries(this.dato)){
      Object.defineProperty(this.dato, key, {value:""})
    }
  }

  compartir(){
    if (this.dato.escribir !="") {
        this.presentAlert("Sobre tí", ""+this.dato.escribir)
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
