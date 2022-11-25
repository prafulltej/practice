import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-queryparam-parent',
  templateUrl: './queryparam-parent.component.html',
  styleUrls: ['./queryparam-parent.component.scss']
})
export class QueryparamParentComponent implements OnInit {
profile =[{
  srno:1,
  name:'Praful',
  imgurl :'assets/images/rajveer.jpg'
},{
    srno:2,
    name:'Gajanan'
  }]
  constructor( private route : Router) { }

  ngOnInit(): void {
  }
//   data1:any
//   data(item :any){
// this.data1 = JSON.stringify(item)
//     this.route.navigate(['/queryparent/querychild'], {queryParams :{ education : this.data1}})
//   }
profile1:any
transper(){
  // this.profile1 = JSON.stringify(this.profile)
  this.route.navigate(['/queryparent/querychild'], {state :{data : this.profile}})
}
}
