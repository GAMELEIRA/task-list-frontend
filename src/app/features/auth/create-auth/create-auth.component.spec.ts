import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAuthComponent } from './create-auth.component';

describe('CreateAuthComponent', () => {
  let component: CreateAuthComponent;
  let fixture: ComponentFixture<CreateAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
