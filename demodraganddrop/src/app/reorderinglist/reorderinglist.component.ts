import { Component, OnInit } from '@angular/core';
import { Designation } from '../model/Designation';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-reorderinglist',
  templateUrl: './reorderinglist.component.html',
  styleUrls: ['./reorderinglist.component.scss']
})
export class ReorderinglistComponent implements OnInit {

  private designations: Designation[] = [];
  constructor() {
    const d1: Designation = new Designation();
    d1.code = 'MGR';
    d1.status = 1;
    d1.label = 'Manager';
    this.designations.push(d1);
    const d2: Designation = new Designation();
    d2.code = 'SMGR';
    d2.status = 1;
    d2.label = 'Senior Manager';
    this.designations.push(d2);

    const d3: Designation = new Designation();
    d3.code = 'ZMGR';
    d3.status = 1;
    d3.label = 'Zonal Manager';
    this.designations.push(d3);

    const d4: Designation = new Designation();
    d4.code = 'RMGR';
    d4.status = 1;
    d4.label = 'Regeonal Manager';
    this.designations.push(d4);

    const d5: Designation = new Designation();
    d5.code = 'NMGR';
    d5.status = 1;
    d5.label = 'National Manager';
    this.designations.push(d5);
   }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.designations, event.previousIndex, event.currentIndex);
  }

}
