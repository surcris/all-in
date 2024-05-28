import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCultFormComponent } from './home-cult-form.component';

describe('HomeCultFormComponent', () => {
  let component: HomeCultFormComponent;
  let fixture: ComponentFixture<HomeCultFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCultFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
