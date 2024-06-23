import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributGameComponent } from './attribut-game.component';

describe('AttributGameComponent', () => {
  let component: AttributGameComponent;
  let fixture: ComponentFixture<AttributGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttributGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
