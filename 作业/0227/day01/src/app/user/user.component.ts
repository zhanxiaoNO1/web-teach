import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name='张三';
sex:string="男";
age:number;
 buer:boolean=true;


  constructor() {
    this.age=20;
    let arry:string[];
    enum a{red,blue,dd};
    let aa=a.red;
    
  
   
   }

  ngOnInit() {
  }

}
