import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form1',
  templateUrl: './reactive-form1.component.html',
  styleUrls: ['./reactive-form1.component.scss']
})
export class ReactiveForm1Component implements OnInit {
profile = new FormGroup({
  firstname : new FormControl(),
  lastname : new FormControl(),
  
  adress : new FormGroup({
    street : new FormControl(),
    state : new FormControl()
  })
})

userprofile =[{
firstname : '',
lastname : '',
street : '',
state : ''
}]
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.profile)
    this.userprofile.push({
      firstname : this.profile.value.firstname,
      lastname : this.profile.value.lastname,
      street : this.profile.value.adress?.street,
      state : this.profile.value.adress?.state
    })
  }
  update(){
    this.profile.patchValue({
      firstname : 'Gajanan',
      lastname : 'Thote',

      adress:{
        street: 'varcha mala',
        state : 'maharashtra'
      }
    })
  }
  update1(item:any, i:any){
    this.profile.patchValue({
      firstname : item.firstname,
      lastname : item.lastname,
       
      adress:{
        street : item.street,
        state : item.state
      }
      

    })
  }
  update2(){

  }
}
