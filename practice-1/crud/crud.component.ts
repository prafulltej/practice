import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
data:any
  constructor(private crud : CrudService, private fb:FormBuilder) { }
 profile = this.fb.group({
  email :[],
  password :[]
 })

  ngOnInit(): void {
    this.getUserInformation()
  }
getUserInformation(){
  this.crud.getUser().subscribe( el =>{
this.data = el
  })
}
submit(){
  let obj = {
    email : this.profile.value.email,
    password : this.profile.value.password,
    id :''
  }
  // console.log(this.profile.value.email +" "+this.profile.value.password)
  this.crud.saveData(obj).subscribe(el =>{
    alert("data saved")
   
  })
  this.getUserInformation()
  this.profile.reset()
  
  
}
delete(item:any){
  console.log(item.id)
  this.crud.delete(item.id).subscribe(el =>{
    alert("deleted")
    this.getUserInformation()
  })
}
editUser:any
edit(a:any){
  this.profile.patchValue(a)
  this.editUser = a
}
update(){
  let obj = {
    email : this.profile.value.email,
    password : this.profile.value.password,
    id : this.editUser.id
  }
  this.crud.editUser(this.editUser.id,obj).subscribe( el =>{
    alert ("Updated Success")
    this.getUserInformation()
  })
  this.profile.reset()
}
}
