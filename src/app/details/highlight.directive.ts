import { Directive, ElementRef, Input, HostListener } from "@angular/core";

@Directive({
  selector: '[appHightLight]'
})
export default class HightLight {

  @Input("appHightLight") highlightClr: String;

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter") onEnter() {
    console.log("hight directive ", this.highlightClr);
    this.hightlight();
  }

  private hightlight() {
    this.el.nativeElement.style.backgroundColor = this.highlightClr;
  }
}
