
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { PessoaUsuaria } from '../types/type';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl = environment.apiUrl


  constructor(private http: HttpClient) {  }

  cadastrar(pessoaUsuaria: PessoaUsuaria):Observable<PessoaUsuaria>{
    return this.http.post<PessoaUsuaria>(`${this.apiUrl}/auth/cadastro`, pessoaUsuaria)
  }

  buscarCadastro():Observable<PessoaUsuaria>{

    return this.http.get<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`)
  }

  editarCadastro(pessoaUsuaria: PessoaUsuaria):Observable<PessoaUsuaria>{
    return this.http.patch<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`, pessoaUsuaria)
  }
}
