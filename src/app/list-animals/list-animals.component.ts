import { Component, OnInit, Input } from '@angular/core';
import { Zoo } from '../zoo-model';
@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.scss']
})
export class ListAnimalsComponent implements OnInit {
 @Input() tempTaskList: Zoo[];
  constructor() { }

  ngOnInit() {
  }

}
