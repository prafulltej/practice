import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() { }
imgUrl = 'assets/logo.png'
new1 = ''
imgurl1 = 'assets/images/rajveer.jpg'
 raj = false
 hello:any
  ngOnInit(): void {
   this.setInline()
  }
  click(){
    this.raj = !this.raj
    console.log(this.raj)
    this.setInline()
  }
  setInline(){
    this.hello={
      'font-size': this.raj ? '10px':'50px',
      'background-color' : this.raj ? 'green':'red'
    }
  }
b:any
  submit(a:any){
    console.log(a)
    this.b = a
  }
}

