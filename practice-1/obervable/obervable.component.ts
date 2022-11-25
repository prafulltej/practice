import { Component, OnInit } from '@angular/core';
import { Observable,map,filter } from 'rxjs';
import { ObsService } from 'src/app/service/obs.service';

@Component({
  selector: 'app-obervable',
  templateUrl: './obervable.component.html',
  styleUrls: ['./obervable.component.scss']
})
export class ObervableComponent implements OnInit {
// aa = new Observable((ele)=>{
//   ele.next(1)
//   ele.next(this.random())
//   setTimeout(() => {
//     ele.next('Theurkar')
   
//   }, 5000);
//   ele.next('Praful')
//   setTimeout(() => {
    
//      ele.error()
//      ele.complete()
//   }, 6000);
// })

// random(){
//   return Math.random()
// }
num = new Observable(ele =>{
  ele.next(1)
  ele.next(3)
  ele.next(4)
})
  constructor( private obs :ObsService) { }

  ngOnInit(): void {
    this.obs.hello.next('Praful')

    this.num.pipe(map((el :any) => el *3),map((val:any)=> val% 2 == 0)).subscribe(val =>{
      console.log("even no1 = "+val)
    })

   this.num.pipe(map((ele:any)=> ele *10)).subscribe(val =>{
    console.log(val)
   })
this.num.pipe(map((el:any) => el*5),filter((val:any)=> val%2 == 0)).subscribe( value =>{
  console.log("even number = "+value)
})
    // this.aa.subscribe({
    //   next(value) {
    //     console.log(value)
    //   },
    //   complete() {
    //     console.log("complete")
    //   },
      
    //   error(err) {
    //     console.log("error occur "+err)
    //   },
    // })

    // this.aa.subscribe(ele =>{
    //   console.log('from obs = '+ele)
    // })
  }

}
