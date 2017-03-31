import { Component, Input } from '@angular/core';
import { Log } from './../models/log.model';
import { EditLogComponent } from './../edit-log/edit-log.component';

@Component({
  selector: 'log-tile',
  templateUrl: './log-tile.component.html',
  styleUrls: ['./log-tile.component.css']
})
export class LogTileComponent {
  @Input() log: Log;
  editMode: boolean = false;

  editToggle(input: boolean) {
    this.editMode = input;
  }
}
