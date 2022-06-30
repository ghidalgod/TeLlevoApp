import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
 

  ngOnInit() {}
  

  constructor(public alertController: AlertController, private router: Router) { }
  
  cerrar(){
    //navegar hacia home
    this.router.navigate(['/home']);
  }

  async mail() {
    const alert = await this.alertController.create({
      message: 'Tu contraseña se ha enviado a tu mail Duoc',
      buttons: ['OK']
    });

    await alert.present();
  }
}
