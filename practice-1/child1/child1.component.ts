import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
@Input() parentMessage :any;
@Output() childmessage = new EventEmitter()
 @Output() second = new EventEmitter()
  constructor() {
  }
  profile = [{
    srno : 1,
    name : 'praful'
  },{
    srno : 2,
    name : 'Rushikesh'
  }]
  ngOnInit(): void {
  this.second.emit('From child')
    
  }
  send(){
    this.childmessage.emit(this.profile)
  }

}
