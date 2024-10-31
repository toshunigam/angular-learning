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

  it('Recipe Click event', () => {
    let recipe = service.getRecipes()
    console.log('Toshu', recipe)
    recipe.map(item=>{
      console.log('item',item)
      expect(item).toBeTruthy()
    })

    
  });
});
