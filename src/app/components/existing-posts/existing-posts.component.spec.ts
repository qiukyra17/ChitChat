import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingPostsComponent } from './existing-posts.component';

describe('ExistingPostsComponent', () => {
  let component: ExistingPostsComponent;
  let fixture: ComponentFixture<ExistingPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
