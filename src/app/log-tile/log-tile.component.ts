import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './../models/log.model';
import { EditLogComponent } from './../edit-log/edit-log.component';

@Component({
  selector: 'log-tile',
  templateUrl: './log-tile.component.html',
  styleUrls: ['./log-tile.component.css']
})
export class LogTileComponent {
  @Input() log: Log;
  @Output() deleter = new EventEmitter();
  editMode: boolean = false;

  editToggle(input: boolean) {
    this.editMode = input;
  }

  delete() {
    this.deleter.emit(this.log);
  }
}
