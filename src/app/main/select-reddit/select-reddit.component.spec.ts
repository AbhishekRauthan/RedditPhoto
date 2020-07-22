import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRedditComponent } from './select-reddit.component';

describe('SelectRedditComponent', () => {
  let component: SelectRedditComponent;
  let fixture: ComponentFixture<SelectRedditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRedditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
