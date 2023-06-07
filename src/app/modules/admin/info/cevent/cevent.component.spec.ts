/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CeventComponent } from './cevent.component';

describe('CeventComponent', () => {
  let component: CeventComponent;
  let fixture: ComponentFixture<CeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
