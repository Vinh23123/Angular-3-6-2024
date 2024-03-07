import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//import components
import { AppComponent } from './app.component'; // tell to typescript know the place where they can find this type
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AppAssignment1 } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AppAssignment1,
    Assignment2Component,
    Assignment3Component,
  ], // angular know ServerComponent which is a part of our app
  imports: [BrowserModule, FormsModule], // import simply allows to add some other modules
  providers: [],
  bootstrap: [AppComponent], // lists all the components
})
export class AppModule {}
