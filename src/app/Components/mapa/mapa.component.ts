import { Component, Input, OnInit} from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { ViewChild, ElementRef } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';





//declarar variable google, para llamar a la api de google
declare var google:any;
//usar api del buscador

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent {

  map:any;
  service:any
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  lat:number;
  lon: number;
  total:string;
  origin = { lat:  -33.03343733392729, lng: -71.53323774706229 };  
 
  destination = { lat: -33.038186326950125, lng:  -71.52422552479212 }; 

  direccion:any = {
      destino:''};


  // tomar el mapa desde html
  @ViewChild('map',{read:ElementRef, static:false}) mapRef:ElementRef;
  @Input() isSolicitarViaje:boolean;
  
  infoWindow: any=[];

//geolocalización
constructor(private router:Router,private geolocation: Geolocation, private alertController:AlertController) {}
ngAfterViewInit(){
  this.geolocationNative();
}




geolocationNative(){
  this.geolocation.getCurrentPosition().then((geoposition:Geoposition) =>{
    this.showMap(geoposition);
    this.lat = geoposition.coords.latitude;
    this.lon = geoposition.coords.longitude;
    console.log(geoposition);
    

  })
}
//cada vez q se abre la pag, llama al método, para ver el mapa
ionViewDidEnter(){

}
 //mostrar google map
 showMap(position){
  const location = new google.maps.LatLng(this.origin) 
   const options ={
     center: location,
     zoom: 15,
     disableDefaultUI: true //zoom in o zoom out del mapa
   }
   this.map = new google.maps.Map(this.mapRef.nativeElement,options);
   this.infoWindow = new google.maps.InfoWindow();
   this.directionsDisplay.setMap(this.map); //para mostrar los puntos edl mapa
   this.calculateRoute();
}

calculateRoute(){   //calcular ruta óptima
  this.directionsService.route({
    origin: this.origin,
    destination: this.destination,
    travelMode: google.maps.TravelMode.DRIVING,
  }, (response, status)  => {
    if (status === google.maps.DirectionsStatus.OK) {
      this.directionsDisplay.setDirections(response);
    } else {
      alert('No se puede mostrar tu posición: ' + status);
    }
  });
}
  async confirmarViaje(){
    //almacenamiento de datos del formulario en el localStorage
    localStorage.setItem('destino',this.direccion.destino);
    const alert = await this.alertController.create({
      message: 'Viaje generado!',
      buttons: [{
        text: 'Aceptar'       
      }]
    });
    await alert.present();
  this.limpiarDestino();
  this.isSolicitarViaje=true;
  this.enviarCorreo();
}


limpiarDestino(){
  console.log("Dirección borrada");
  this.direccion.reset;
}

cancelarViaje(){
  this.isSolicitarViaje=false;
}

enviarCorreo(){
  var feedback = document.createElement('a');
  feedback.setAttribute('href',
//cambiar mail de prueba!!!!!!!! nan.bernal@profesor.duoc.cl
  'mailto:gabydalgo@gmail.com?subject=Detalles%20del%20viaje&cc=g.hidalgo@duocuc.cl&body=Tu%20viaje%20ha%20sido%20notificado.'
  +'%20Destino:%20'+localStorage.getItem(this.direccion.destino)

  );
  feedback.click();
  console.log('mail enviado');
} 

cerrar(){
  //navegar hacia home
  this.router.navigate(["/home"]);
}

}

