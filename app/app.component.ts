import { Component } from '@angular/core';
import { CdkDragEnd } from "@angular/cdk/drag-drop";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  selectedElem = {startX: 0, startY: 0}

  onDragEnded(event: CdkDragEnd) {
    const element = event.source.element.nativeElement;
    const transform = element.style.transform;
    let regex = /translate3d\(\s?(?<x>[-]?\d*)px,\s?(?<y>[-]?\d*)px,\s?(?<z>[-]?\d*)px\)/;
    var values = regex.exec(transform);
    this.selectedElem.startX = element.offsetLeft + +values[1];
    this.selectedElem.startY = element.offsetTop + +values[2];
    console.log(this.selectedElem)
  }

  // onDragEnded(event) {
  //   console.log(event.source.dropped);
  //   // console.log(event.source.dropped);
  // }
}
