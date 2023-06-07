/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CclubComponent } from './cclub.component';

describe('CclubComponent', () => {
  let component: CclubComponent;
  let fixture: ComponentFixture<CclubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CclubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
