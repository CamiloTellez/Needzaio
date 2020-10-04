import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticateService } from '../../../core/services/user/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private authenticateService: AuthenticateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.frmLogin = this.formBuilder.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.email,
        ]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }
  get email() {
    return this.frmLogin.get('email');
  }
  get password() {
    return this.frmLogin.get('password');
  }

  async onSubmit() {
    if (this.submitted) return;
    this.submitted = true;

    Swal.fire({
      title: 'Validando ...',
      text: `Un momento por favor, estamos procesando tu solicitud.`,
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok',
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    let formulario = this.frmLogin.value;

    let res: any = await this.authenticateService.login(
      formulario.email,
      formulario.password
    );

    if (res.token !== '') {
      Swal.close();
      this.router.navigate(['/home']);
    } else {
      Swal.fire(
        'Error',
        'Lo sentimos, los datos no son validos, verifica la información',
        'warning'
      );
    }
  }
}
