import { HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpService } from '../services/Http.service';


@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/v1/users').subscribe((data) => {
      console.log(data);
    });
  }
}
