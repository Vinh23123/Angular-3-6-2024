import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // not limited to selecting by element - put into square brackets to use the attribute selector
  // -> Angular selects the element by attribute and not by the element itself
  // ---------------------------------
  // selector: '.app-servers', // select by class
  // -------------------------------------
  selector: 'app-servers', // by the elements
  templateUrl: './servers.component.html',
  // a inline template - define HTML code in Typescript code - at least one template in a component
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server created';
  serverName: string = '';
  serverCreated = false;
  servers = ['TestServer1', 'TestServer2', 'TestServer3'];
  constructor() {
    // Construtor which is simply a method executor at point of the time, this component is created by angular
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created' + '; Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value; // inform typescript that we know that the type of the HTML element of this event will be an input HTML element
  }
}
