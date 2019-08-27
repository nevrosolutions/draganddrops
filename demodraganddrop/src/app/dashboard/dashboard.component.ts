import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private showBasic = false;
  private showReordering = false;
  private showAttachingData = false;
  private showTransferringBetweenTwoList = false;
  private showDragAndDropUsingHandlers = false;
  private showDragAndDropPreview = false;
  private showDragAndDropCustomizedPlaceHolder = false;
  private showTransferringBetweenTwoListCustomized = false;

  constructor() { }

  ngOnInit() {

  }

  private showBasicFunction() {
    this.flag(false);
    this.showBasic = true;
  }

  private showReorderingFunction() {
    this.flag(false);
    this.showReordering = true;
  }

  private showAttachingDataFunction() {
    this.flag(false);
    this.showAttachingData = true;
  }

  private showDragAndDropUsingHandlersFunction() {
    this.flag(false);
    this.showDragAndDropUsingHandlers = true;
  }

  private showTransferringBetweenTwoListFunction() {
    this.flag(false);
    this.showTransferringBetweenTwoList = true;
  }
private  showTransferringBetweenTwoListCustomizedFunction() {
  this.flag(false);
  this.showTransferringBetweenTwoListCustomized = true;
}
  private showDragAndDropPreviewFunction() {
    this.flag(false);
    this.showDragAndDropPreview = true;
  }

  private showDragAndDropCustomizedPlaceHolderFunction() {
    this.flag(false);
    this.showDragAndDropCustomizedPlaceHolder = true;
  }

  private flag(flag: boolean) {
    this.showBasic = flag;
    this.showReordering = flag;
    this.showAttachingData = flag;
    this.showDragAndDropUsingHandlers = flag;
    this.showDragAndDropPreview = flag;
    this.showDragAndDropCustomizedPlaceHolder = flag;
    this.showTransferringBetweenTwoList = flag;
    this.showTransferringBetweenTwoListCustomized = flag;
  }
}
