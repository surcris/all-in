import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatZoneComponent } from './combat-zone.component';

describe('CombatZoneComponent', () => {
  let component: CombatZoneComponent;
  let fixture: ComponentFixture<CombatZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombatZoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombatZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
