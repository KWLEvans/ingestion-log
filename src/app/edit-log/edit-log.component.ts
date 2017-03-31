import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Log } from './../models/log.model';

@Component({
  selector: 'edit-log',
  templateUrl: './edit-log.component.html',
  styleUrls: ['./edit-log.component.css']
})
export class EditLogComponent {
  @Input() log: Log;
  @Output() doneSender = new EventEmitter();

  doneEditing() {
    this.doneSender.emit();
  }
}
