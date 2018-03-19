import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyStacksComponent } from './technology-stacks.component';

describe('TechnologyStacksComponent', () => {
  let component: TechnologyStacksComponent;
  let fixture: ComponentFixture<TechnologyStacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyStacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyStacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
