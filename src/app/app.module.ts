import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogTileComponent } from './log-tile/log-tile.component';
import { NewLogComponent } from './new-log/new-log.component';

@NgModule({
  declarations: [
    AppComponent,
    LogTileComponent,
    NewLogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
