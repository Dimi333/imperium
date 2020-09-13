import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'imp-ingame-left-menu',
  templateUrl: './left-ingame-menu.component.html',
  styleUrls: ['./left-ingame-menu.component.sass']
})
export class LeftIngameMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public travel(destination?: string): void {
	switch(destination) {
		case 'end':
			this.router.navigate(['/welcome-screen']);
			break;
		default:
			break;
	}
  }
}
