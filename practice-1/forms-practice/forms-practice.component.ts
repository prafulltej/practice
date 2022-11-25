import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms-practice',
  templateUrl: './forms-practice.component.html',
  styleUrls: ['./forms-practice.component.scss']
})
export class FormsPracticeComponent implements OnInit {
name:any
pass:any
isapply:any;

hi = false
  constructor() { }
username = new FormControl
  ngOnInit(): void {
    this.setInline1()
  }
  submit(a:any){
    this.name = a.name
    this.pass = a.password
  }
  click(){
    this.username.setValue('Praful')
  }
  a:any
  update(){
this.a = this.username.value
  }
  setInline1(){
    this.isapply={
      'color': this.hi ? 'aqua' : 'brown',
      'font-size':this.hi ? '30px' : '40px'
    }
  }
}
