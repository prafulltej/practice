import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  profile = this.fb.group({
    firstname: [''],
    lastname: [''],

    address: this.fb.group({
      flatno: [''],
      street: [''],

    }),
    contacts: this.fb.array([
      this.fb.group({
        name: ['',Validators.required],
        phone: [''],
      })
    ])

  })
  get contacts() {
    return this.profile.get('contacts') as FormArray
  }

  ngOnInit(): void {
  }
  addcontact(){
    let aa =  this.profile.controls['contacts']
    aa.push(
      this.fb.group({
        name: [''],
        phone: [''],
      })
    )
  }
  delete(){
    let aa =  this.profile.controls['contacts']
    aa.removeAt(0)
  }
}
