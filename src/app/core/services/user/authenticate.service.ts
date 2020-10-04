import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticateService {
  urlBackend = 'https://reqres.in/api/login';
  constructor(private httpClient: HttpClient) {}

  login(email, password) {
    email = 'george.bluth@reqres.in';
    let body = {
      email: email,
      password: password,
    };
    return this.httpClient.post(this.urlBackend, body).toPromise();
  }
}
