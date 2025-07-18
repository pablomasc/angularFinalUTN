import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-contacto',
  imports: [FormsModule, RouterLink],
  templateUrl: './form-contacto.html',
  styleUrl: './form-contacto.css'
})
export class FormContacto {

  estadoForm = {
      nombre: "",
      email: "",
      mensaje: ""
  }
  
  enviarForm()
    {
      alert("Formulario Enviado " + this.estadoForm.nombre );

      this.estadoForm.nombre = "";
      this.estadoForm.email = "";
      this.estadoForm.mensaje = "";


    }
}
