import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  username = '';
  password = '';


constructor(private router: Router){}


  iniciarSesion(){
    const datosGuardados = localStorage.getItem('datosRegistro');

    if(datosGuardados){
      const usuario = JSON.parse(datosGuardados);
      if(usuario.numeroIdentificacion == this.username && usuario.contrasena == this.password){
        alert('Inicio de sesion Exitoso')
      } else{
        alert('Credenciales Incorrectas');
      }
    } else{
      alert('No hay usuarios Registrados')
    }
  }
}
