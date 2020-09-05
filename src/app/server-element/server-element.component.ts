import { 
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

import { Server } from '../../app/server';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  @Input('srvElement') element :Server
  @Input () name :string
  @ViewChild ('heading', {static: true}) header :ElementRef
  @ContentChild ('paragraphContent', {static: true}) paragraph :ElementRef

  constructor() { 
    console.log("constructor called!")
  }

  ngOnChanges(changes :SimpleChanges) {
    console.log("ngOnChanges called!")
    console.log(changes)
  }

  ngOnInit(): void {
    console.log("ngOnInit called!")
    console.log("Template Content OnInit:" + this.header.nativeElement.textContent)
    console.log("Template Content on paragraph property:" + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log("ngDoCheck called!")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called!")
    console.log("Template Content on paragraph property:" + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called!")
    console.log("Template Content AfterViewInit:" + this.header.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!")
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!")
  }
}
