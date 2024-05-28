import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCultFormComponent } from './header-cult-form.component';

describe('HeaderCultFormComponent', () => {
  let component: HeaderCultFormComponent;
  let fixture: ComponentFixture<HeaderCultFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCultFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderCultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
