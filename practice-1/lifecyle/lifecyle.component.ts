import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ObsService } from 'src/app/service/obs.service';

@Component({
  selector: 'app-lifecyle',
  templateUrl: './lifecyle.component.html',
  styleUrls: ['./lifecyle.component.scss']
})
export class LifecyleComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{
aa = false
  constructor(private obs : ObsService) {
    console.log('Parent : constructor')
  }
  
hi:any
  ngOnInit(): void {
    this.obs.hello.subscribe( (el:any) =>{
      console.log('from query param '+el)
      this.hi = el
    })
    console.log('parent : onInit')
  }
  ngOnChanges(){
    console.log('parent : onChanges')
  }
  ngDoCheck(){
    console.log('parent : doCheck')
  }
  ngAfterContentInit(){
    console.log('parent : After Contet Init')
  }
  ngAfterContentChecked(){
    console.log('parent : After Content Check')
  }
  ngAfterViewInit() {
    console.log('parent : After View Init')
  }
  ngAfterViewChecked() {
    console.log('parent : After View check')
  }
  ngOnDestroy() {
    console.log('parent : Ng Destroy')
  }
  display(){
    this.aa = !this.aa
  }
}
