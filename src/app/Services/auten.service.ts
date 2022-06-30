import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../Interfaces/user';
import { retry} from'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AutenService {
  httpOptions = { headers: new HttpHeaders({ 
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin' :'*' }) }



  apiURL= 'http://192.168.0.5:3000';

  constructor(private http:HttpClient) { }

  getAPI(){
    return this.http.get<Alumno>(this.apiURL).pipe(
      retry(3)
    );
  }

//obtener todos los usuarios
getUsuarios():Observable<any>{ 
return this.http.get(this.apiURL+'/usuario/')
.pipe( retry(3) ); }

//obtener un usuario
getUsuario(nombre:any){ 
  return this.http.get<Alumno>('http://192.168.0.5:3000=${nombre}');
 }
  

  //actualizar contrasena
  updateContrasena(contrasena):Observable<any>
  { return this.http.put(this.apiURL+'/usuario/'+contrasena,this.httpOptions)
  .pipe(retry(3));
}


}