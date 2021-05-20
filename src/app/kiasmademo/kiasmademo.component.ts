import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kiasmademo',
  templateUrl: './kiasmademo.component.html',
  styleUrls: ['./kiasmademo.component.css']
})
export class KiasmademoComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  returnToFrontPage() {
    this.router.navigateByUrl("/");
  }

}
