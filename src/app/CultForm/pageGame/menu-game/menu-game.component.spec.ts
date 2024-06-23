import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGameComponent } from './menu-game.component';

describe('MenuGameComponent', () => {
  let component: MenuGameComponent;
  let fixture: ComponentFixture<MenuGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
