import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {
  public isLogged = false;

  constructor(private authSvc : AuthService, private router: Router) { }

  async ngOnInit()
  {
    console.log('Navbar');
    const user = await this.authSvc.getCurrentUser();
    if(user)
    {
      this.isLogged = true;
      console.log('User',user);
    }
    
  }

  async onLogout()
  {
    try
    {
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    }
    catch(error)
    {
      console.log(error);
      alert(error);
    }
    

  }

}
