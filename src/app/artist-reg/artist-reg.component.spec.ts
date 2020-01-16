import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistRegComponent } from './artist-reg.component';

describe('ArtistRegComponent', () => {
  let component: ArtistRegComponent;
  let fixture: ComponentFixture<ArtistRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
