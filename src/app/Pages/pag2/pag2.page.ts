import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  NavigationExtras,  Router } from '@angular/router';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.page.html',
  styleUrls: ['./pag2.page.scss'],
})
export class Pag2Page implements OnInit {
     user: any= {
      nombre: "",
      contrasena: ""
    };

   
  ngOnInit(){}

constructor(  public toastController: ToastController, private router: Router, private activeroute: ActivatedRoute ) {

  this.activeroute.queryParams.subscribe(params => { 
    if (this.router.getCurrentNavigation().extras.state) { 
      this.user = this.router.getCurrentNavigation().extras.state.user; 
      console.log(this.user);
      this.presentToast("Bienvenido " + this.user.nombre); 
    }else{this.router.navigate(['/home'])} 
  });

}
 
pasajero(){
  let navigationExtras:NavigationExtras={
  state:{ user:this.user}
  };
  this.router.navigate(['/pasajero'], navigationExtras)
};

conductor(){
  let navigationExtras:NavigationExtras={
    state:{ user:this.user}
    };
  this.router.navigate(['/conductor'], navigationExtras);
};

async presentToast(msg:string) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 2000
  });
  toast.present();  
}

}


