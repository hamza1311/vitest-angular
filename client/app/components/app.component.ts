import { Component } from '@angular/core';
import {TestsService} from "@n/services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private testsService: TestsService) {

  }

  ngOnInit(): void {
    this.title = this.testsService.doWork(1, 2).toString()
  }
}
