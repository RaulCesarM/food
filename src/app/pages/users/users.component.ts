import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'ngf-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  formUsuario!: FormGroup;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
    this.createForm(new Usuario());

  }

  createForm(User: Usuario) {
    this.formUsuario = new FormGroup({
      nome: new FormControl(User.nome),
      usuario: new FormControl(User.usuario),
      endereco: new FormControl(User.endereco),
      telefone: new FormControl(User.telefone),
      cidade: new FormControl(User.cidade),
      email: new FormControl(User.email),
      categoria: new FormControl(User.categoria="User")
    })
  }
  public postUsuario(formUsuario: Usuario): void {
    console.log(formUsuario);
    this.http.post<Usuario>('http://localhost:3000/users/', formUsuario).subscribe();
     
  } 
  onSubmit() {
    this.postUsuario(this.formUsuario.value);
    console.log(this.formUsuario.value);  
    this.formUsuario.reset();
    alert("Usuario cadastrado com sucesso!");
  }

}

