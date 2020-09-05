import { Component, ViewEncapsulation } from '@angular/core';
import { Server } from '../app/server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None // ShadowDom, Native, Emulated
})
export class AppComponent { 
  serverElements :Server[] = [new Server('testServerName', 'testServerContent', 'server')]

  onServerAdded(server :Server) {
    server.type = 'server'
    this.serverElements.push(server)
  }

  onBlueprintAdded(server :Server) {
    server.type = 'blueprint'
    this.serverElements.push(server)
  }

  onChangeFirst() {
    this.serverElements[0].name = "Changed!"
  }

  onDestroyFirst() {
    debugger;
    this.serverElements.splice(0,1)
  }
}
