import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from './servicios/departamentos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testRegister';

  listaCiudades: any[] = [];

  ciudadSeleccionada = '';

  formulario!: FormGroup;



//servicios
  constructor(
    private service: DepartamentosService,
    private fb: FormBuilder
  ){
    service.obtenerCiudades().subscribe(
      (data) => {
        this.listaCiudades = data;
      },
      (error) =>{
        alert('Error con la API');
      }
    );
  }

  
ngOnInit(): void {
  this.formulario = this.fb.group({
    tipoDocumento: ['',Validators.required],
    numeroIdentificacion: ['',[Validators.required, Validators.minLength(3)]],
    fechaExpedicion: ['', Validators.required],
    lugarExpedicion: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    primerNombre: ['', Validators.required],
    segundoNombre: [''],
    primerApellido: ['', Validators.required],
    segundoApellido: [''],

    nacionalidad: ['COLOMBIA'],
    genero: ['', Validators.required],
    telefono: ['', Validators.required],
    correo: ['', Validators.required],
    direccion: ['', Validators.required],
    municipio: ['', Validators.required],

    contrasena: ['', Validators.required],
    confirmarContrasena: ['', Validators.required]
  })
}


onSubmit():void{
  if(this.formulario.valid){
    console.log(this.formulario.value);
    //Guardar Datos de formulario
    localStorage.setItem('datosRegistro', JSON.stringify(this.formulario.value));
    alert('Registro exitoso')
  } else {
    alert('Formulario invalido');
    this.formulario.markAllAsTouched();
  }
}

}
