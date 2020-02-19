import { Component } from '@angular/core';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public facebookId = FacebookLoginProvider.PROVIDER_ID;
  public googleId = GoogleLoginProvider.PROVIDER_ID;

  constructor(
    private authService: AuthService
  ) {
  }

  public login(providerId: string): void {
    this.authService.signIn(providerId).then(test => console.log(JSON.stringify(test)));
  }

}
