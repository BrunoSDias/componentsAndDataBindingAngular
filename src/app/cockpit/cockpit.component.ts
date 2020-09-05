import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Server } from '../../app/server';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output ('srvCreated') serverCreated = new EventEmitter<Server>() // Access the event in the parent template
  @Output ('bpCreated') blueprintCreated = new EventEmitter<Server>() // Access the event in the parent template

  // serverName :string
  // serverContent :string
  server :Server;
  
  @ViewChild('serverNameInput', {static: true}) serverName :ElementRef;
  @ViewChild('serverContentInput', {static: true}) serverContent :ElementRef;


  onAddServer(serverNameInput :HTMLInputElement, serverContent :HTMLInputElement) {
      this.server = new Server (
      // this.serverName, // By two-way binding interpolation
      // this.serverContent, // By two-way binding interpolation
      // serverNameInput.value, // By Element Reference sended as method property value
      // serverContent.value, // By Element Reference sended as method property value
        this.serverName.nativeElement.value, // By Element Reference accessed directly by  typescript code
        this.serverContent.nativeElement.value, // By Element Reference accessed directly by  typescript code
      ''
    )
    
    this.serverCreated.emit(this.server)
  }

  onAddBlueprint(serverNameInput :HTMLInputElement, serverContent :HTMLInputElement) {
      this.server = new Server (
      // this.serverName, // By two-way binding interpolation
      // this.serverContent, // By two-way binding interpolation
      // serverNameInput.value, // By Element Reference sended as method property value
      // serverContent.value, // By Element Reference sended as method property value
        this.serverName.nativeElement.value, // By Element Reference accessed directly by  typescript code
        this.serverContent.nativeElement.value, // By Element Reference accessed directly by  typescript code
      ''
    )

    this.blueprintCreated.emit(this.server)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
