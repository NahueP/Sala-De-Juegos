import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {

  public user$ : Observable<any>= this.authSvc.afAuth.user;
  
  constructor(private authSvc : AuthService, private router: Router) { 
  }

  

  async ngOnInit()
  {
    
  }

  async onLogout()
  {
    try
    {
      await this.authSvc.logout();
      
    }
    catch(error)
    {
      console.log(error);
      alert(error);
    }
    

  }

}
