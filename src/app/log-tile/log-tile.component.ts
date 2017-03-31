import { Component, Input } from '@angular/core';

@Component({
  selector: 'log-tile',
  templateUrl: './log-tile.component.html',
  styleUrls: ['./log-tile.component.css']
})
export class LogTileComponent {
  @Input() log: Log;
}
