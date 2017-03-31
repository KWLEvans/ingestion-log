import { Component } from '@angular/core';
import { Log } from './models/log.model';
import { LogSortPipe } from './log-sort.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sortType: string = 'all';

  appendLog(log: Log) {
    this.logList.push(log);
  }

  setSortType(type) {
    this.sortType = type;
  }

  logList: Log[] = [
    {
      'name': 'Burger: Ham',
      'calories': 465,
      'details': 'Subject seemed excited about Burger despite very apparent lack of nutritional value. After completing ingestion it requested another multiple times before becoming comatose.'
    }, {
      'name': 'Sand Witch',
      'calories': 20000,
      'details': 'After repeatedly demanding a Sand Witch, subject seemed put off at the prospect of eating another of its species. After several days, it acquiesced and devoured the Witch of the Sands in its entirety. Subject has been lethargic and in a near catatonic state since.'
    }, {
      'name': 'Toast',
      'calories': 50,
      'details': 'Subject responded positively to toasted bread, but began to lament upon noticing that it did not contain \"butter\".'
    }, {
      'name': 'Celery',
      'calories': -25,
      'details': 'I regret the choice of celery. It has negatively impacted overall specimen growth.'
    }
  ];
}
