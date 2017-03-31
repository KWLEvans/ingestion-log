import { Component, Output, EventEmitter } from '@angular/core';
import { Log } from './../models/log.model';

@Component({
  selector: 'new-log',
  templateUrl: './new-log.component.html',
  styleUrls: ['./new-log.component.css']
})
export class NewLogComponent {
  @Output() logSender = new EventEmitter();

  submitLog(name: string, calories: number, details: string) {
    const newLog: Log = new Log(name, calories, details);
    this.logSender.emit(newLog);
  }
}
