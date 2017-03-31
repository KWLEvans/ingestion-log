import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogTileComponent } from './log-tile/log-tile.component';
import { NewLogComponent } from './new-log/new-log.component';
import { LogSortPipe } from './log-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LogTileComponent,
    NewLogComponent,
    LogSortPipe
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
