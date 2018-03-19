import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicLandscapeComponent } from './topic-landscape.component';

describe('TopicLandscapeComponent', () => {
  let component: TopicLandscapeComponent;
  let fixture: ComponentFixture<TopicLandscapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicLandscapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicLandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
