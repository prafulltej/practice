import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecylechild',
  templateUrl: './lifecylechild.component.html',
  styleUrls: ['./lifecylechild.component.scss']
})
export class LifecylechildComponent implements OnInit,
OnDestroy
{

  constructor() { }

  ngOnInit(): void {
  }
ngOnDestroy(): void {
  console.log('Child : Destroy')
}
}
