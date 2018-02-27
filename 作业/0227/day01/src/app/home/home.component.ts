import { Component, OnInit } from '@angular/core';
import { product } from '../day02/class\u7C7B';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
   let goods=new product();
    console.log(goods.id)
   }

  ngOnInit() {
  }

}
