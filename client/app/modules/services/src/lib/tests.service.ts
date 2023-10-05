import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  constructor() { }

  public doWork(x: number, y: number): number {
    return x + y
  }
}
