import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallPostsComponent } from './overall-posts.component';

describe('OverallPostsComponent', () => {
  let component: OverallPostsComponent;
  let fixture: ComponentFixture<OverallPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
