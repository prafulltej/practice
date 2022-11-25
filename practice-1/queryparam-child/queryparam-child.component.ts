import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparam-child',
  templateUrl: './queryparam-child.component.html',
  styleUrls: ['./queryparam-child.component.scss']
})
export class QueryparamChildComponent implements OnInit {

  constructor(private router : ActivatedRoute) { }

 receive : any


// name :any
// location:any
// education :any
receive1:any
  ngOnInit(): void {
    // this.router.queryParamMap.subscribe(el =>{
    //   this.education = el.get('education')
    //   this.name = JSON.parse(this.education)
    // })
     this.receive = history.state
    //  this.receive1 = JSON.parse(this.receive)
     console.log(this.receive)
    
   
  
  }

}
