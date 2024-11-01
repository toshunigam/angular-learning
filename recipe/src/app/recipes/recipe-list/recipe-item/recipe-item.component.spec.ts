import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';

import { RecipeItemComponent } from './recipe-item.component';
import { RecipeService } from '../../recipe.service';

describe('RecipeItemComponent', () => {
  let component: RecipeItemComponent;
  let fixture: ComponentFixture<RecipeItemComponent>;
  let injector: TestBed;
  let service: RecipeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeItemComponent ],
      providers:[RecipeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    injector = getTestBed();
    service = injector.get(RecipeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check Recipe data type', () => {
    let recipe = service.getRecipes()
    // console.log('Toshu', recipe)
    recipe.map(item=>{
      // console.log('TOshu', item)
      expect(typeof item).toEqual('object')
    })

    
  });
});
