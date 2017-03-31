/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogTileComponent } from './log-tile.component';

describe('LogTileComponent', () => {
  let component: LogTileComponent;
  let fixture: ComponentFixture<LogTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
