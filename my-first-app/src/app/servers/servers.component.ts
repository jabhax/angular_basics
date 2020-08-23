import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 3000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreationStatus = 'Server was created: ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  // onUpdateServerName(event: Event): void {
  //   this.serverName = event.target.value;
  // }
}
