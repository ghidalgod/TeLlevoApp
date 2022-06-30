import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, AnimationController, NavController } from '@ionic/angular';
import { Usuario } from 'src/app/Interfaces/user';
import { AutenService } from 'src/app/Services/auten.service';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  @ViewChild('imagen', { read: ElementRef, static: true }) imagen: ElementRef;



  user: any={
    nombre: "",
    contrasena: ""
  }

  form: FormGroup;

  constructor(private router: Router, public fb: FormBuilder, public alertController: AlertController, public autenService: AutenService, private animationCtrl: AnimationController, public navController: NavController) {

    this.form = this.fb.group({
      'nombre': new FormControl('', [Validators.required]),
      'contrasena': new FormControl('', [Validators.required]),
    });
  }

  ionViewWillEnter() {
    this.getUsuarios();
  }
  

  getUsuarios() {
    this.autenService.getUsuarios().subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  
  }
  async ingresar() {
   

    if (this.form.invalid) {
      const alert = await this.alertController.create({
        header: 'Alumno',
        message: 'Ingresa todo los datos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
    else {
      let navigationExtras: NavigationExtras = {
        state: {
          user: this.form.value
        }

      }
      this.router.navigate(['/pag2'], navigationExtras);
    };
  }

  recuperar() {
    this.router.navigate(['/form']);
  }

 

  ngAfterViewInit() {
    const imagen1 = this.animationCtrl
      .create()
      .addElement(this.imagen.nativeElement)
      .fill('none')
      .duration(5000)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
        { offset: 1, transform: 'scale(1) rotate(0)' }
      ]);

    imagen1.play();
  }

}





