import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrl: './bottom-navbar.component.css'
})
export class BottomNavbarComponent implements OnInit {

  clockNow: Date = new Date() 



  ngOnInit(): void {
      
  }
}
