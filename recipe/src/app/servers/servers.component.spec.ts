import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersComponent } from './servers.component';
import { FilterPipe } from '../shared/filter.pips';
import { ShortenPipe } from '../shared/shorten.pipe';
import { Translation } from '../shared/translation.pipe';

describe('ServersComponent', () => {
  let component: ServersComponent;
  let fixture: ComponentFixture<ServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersComponent, FilterPipe, ShortenPipe, Translation ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('server object should create', () => {
    expect(typeof component.servers).toEqual('object');
  });
});
