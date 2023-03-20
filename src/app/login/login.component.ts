import { HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpService } from '../../services/Http.service';
import {AuthService} from "../../services/Auth.service";
import {UserService} from "../../services/User.service";


@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit{

  get email() { return this.form.get('email'); }

  get password() { return this.form.get('password'); }

  public form: FormGroup = new FormGroup<any>({
    email: new FormControl('', [
      Validators.required, Validators.email
    ]),
    password: new FormControl('', [
      Validators.required, Validators.minLength(8)
    ])
  });

  constructor(private http: HttpService, private auth: AuthService, private user: UserService) {  }

  ngOnInit() {
    console.log(this.auth.isLoggedIn())
  }

  loginOnClick() {
    if (this.form.valid) {
      //TODO send to server
    } else {
      this.form.markAllAsTouched();
    }
  }
}
