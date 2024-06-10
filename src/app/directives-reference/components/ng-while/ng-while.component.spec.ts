import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWhileComponent } from './ng-while.component';

describe('NgWhileComponent', () => {
  let component: NgWhileComponent;
  let fixture: ComponentFixture<NgWhileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgWhileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgWhileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
