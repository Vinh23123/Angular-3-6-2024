import { Component } from '@angular/core';

@Component({
  selector: 'app-server', // HTML tag - This is my own selector by which I can now later use this component in my other components HTML files
  templateUrl: './server.component.html', // This is pointing to this file server.component.html
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
