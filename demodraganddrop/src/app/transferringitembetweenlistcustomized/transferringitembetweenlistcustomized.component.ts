import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { container } from '@angular/core/src/render3';
import { any } from 'codelyzer/util/function';
import { Category } from '../model/Category';
import { Designation } from '../model/Designation';

@Component({
  selector: 'app-transferringitembetweenlistcustomized',
  templateUrl: './transferringitembetweenlistcustomized.component.html',
  styleUrls: ['./transferringitembetweenlistcustomized.component.scss']
})
export class TransferringitembetweenlistcustomizedComponent implements OnInit {
  designations = [


  ];

  categorys = [

  ];
  categoryList = [];
  workspaceList = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  dropCategory(event: CdkDragDrop<Category[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

    }
  }
  dropDesignation(event: CdkDragDrop<Designation[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

    }
  }
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

    ///
    ///
    const c1: Category = new Category();
    c1.code = 'TL';
    c1.label = 'Team Leader';
    c1.hierarchyWithingCategory = 'no';
    this.categorys.push(c1);
    //
    const c2: Category = new Category();
    c1.code = 'AG';
    c1.label = 'Agent';
    c1.hierarchyWithingCategory = 'yes';
    this.categorys.push(c1);
    //
    const c3: Category = new Category();
    c3.code = 'UL';
    c3.label = 'Unit Leader';
    c3.hierarchyWithingCategory = 'no';
    this.categorys.push(c3);
    //
    const c4: Category = new Category();
    c4.code = 'BM';
    c4.label = 'Branch Manager';
    c4.hierarchyWithingCategory = 'no';
    this.categorys.push(c4);
    //
    const c5: Category = new Category();
    c5.code = 'RSM';
    c5.label = 'Regional Sales Manager';
    c5.hierarchyWithingCategory = 'no';
    this.categorys.push(c5);
    //
    const c6: Category = new Category();
    c6.code = 'ZSM';
    c6.label = 'Zonal Sales Manager';
    c6.hierarchyWithingCategory = 'no';
    this.categorys.push(c3);
  }

  ngOnInit() {
  }

  deleteDesignation(item: any) {

   this.workspaceList.forEach(ele => {
        console.log('came in');
        if (ele.label === item.label) {
          console.log('equal labels');
          const i = this.workspaceList.indexOf(ele);
          this.workspaceList = this.workspaceList.slice(i, i + 1);

      }
    });
  }
}
