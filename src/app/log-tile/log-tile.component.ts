import { Component, Input } from '@angular/core';
import { Log } from './../models/log.model';

@Component({
  selector: 'log-tile',
  templateUrl: './log-tile.component.html',
  styleUrls: ['./log-tile.component.css']
})
export class LogTileComponent {
  @Input() log: Log;
}
