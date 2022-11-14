import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CredentialsUserModel } from 'src/app/models/credentials-user.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

url:string="http://localhost:3000"
  constructor(
    private http:HttpClient
  ) { }

Login(Credentials:CredentialsUserModel):Observable<any>{
  return this.http.post(`${this.url}/LoginT`,{
    usuario:Credentials.user,
    password:Credentials.password
  });
}

}

