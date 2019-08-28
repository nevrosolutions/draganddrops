import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { container } from '@angular/core/src/render3';
import { any } from 'codelyzer/util/function';
import { BusinessUnit } from '../model/BusinessUnit';
import { Category } from '../model/Category';
import { Designation } from '../model/Designation';
import { HierarchyNode } from '../model/HierarchyNode';

@Component({
  selector: 'app-transferringitembetweenlistcustomized',
  templateUrl: './transferringitembetweenlistcustomized.component.html',
  styleUrls: ['./transferringitembetweenlistcustomized.component.scss']
})
export class TransferringitembetweenlistcustomizedComponent implements OnInit {
  private designations = [];
  private categorys = [];
  private builtHierarchyNodeList = [];
  private alreadyExistHierarchyNodeList = [];
  private workspaceList = [];
  private showMessage = false;
  private MESSAGE_SAME_ITEM_PROCESS = 'Same items cannot be processed...!';
  private MESSAGE_ALREADY_EXIST = 'Hierarchy already exist...!';
  private message: string;

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.showMessage = false;
      if (event.container.data.length === 2) {
        const firstElement = event.container.data[0];
        const secondElement = event.container.data[1];
        if (((firstElement.isDesignation && secondElement.isDesignation) || (firstElement.isCategory && secondElement.isCategory))) {
          this.showMessage = true;
          this.message = this.MESSAGE_SAME_ITEM_PROCESS;
          this.workspaceList = [];
        } else {
          const h = new HierarchyNode();
          const b = new BusinessUnit();
          b.businessUnitId = 1;
          h.businessUnit = b;
          if (secondElement.isCategory === true) {
            h.agentGroupCategory = secondElement;
          } else {
            h.designation = secondElement;
          }
          if (firstElement.isDesignation === true) {
            h.designation = firstElement;
          } else {
            h.agentGroupCategory = firstElement;
          }
          h.hierarchyType = 'p';
          if (this.validateExistance(h)) {
            this.showMessage = true;
            this.message = this.MESSAGE_ALREADY_EXIST;
          } else {
            this.builtHierarchyNodeList.push(h);
          }
          this.workspaceList = [];
        }

      }
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
    d3.isDesignation = true;
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
  deleteItem(item: any) {
    const newWorkplaceList = [];
    this.workspaceList.forEach(ele => {
      if (ele.label === item.label) {
      } else {
        newWorkplaceList.push(ele);
      }
    });
    this.workspaceList = newWorkplaceList;
  }

  deleteCategory(item: any) {

  }

  private validateExistance(h: HierarchyNode) {
    console.log(h);
    const is =  this.builtHierarchyNodeList.
      some(item => item.designation.label.trim() === h.designation.label.trim() &&
        item.agentGroupCategory.label.trim() === h.agentGroupCategory.label.trim())
      || this.alreadyExistHierarchyNodeList.
      some( item => item.designation.label.trim() === h.designation.label.trim() &&
        item.agentGroupCategory.lable.trim() === h.agentGroupCategory.label.trim());
    console.log(is);
    return is;
  }
}
