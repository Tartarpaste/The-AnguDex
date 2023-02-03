import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAttributesComponent } from './pokemon-attributes.component';

describe('PokemonAttributesComponent', () => {
  let component: PokemonAttributesComponent;
  let fixture: ComponentFixture<PokemonAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonAttributesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
