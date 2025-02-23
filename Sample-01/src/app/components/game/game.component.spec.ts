
import { ComponentFixture, TestBed, waitForAsync, async } from '@angular/core/testing';
import { GameComponent } from './game.component';

describe('GameComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(GameComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ng-tetris'`, async(() => {
    const fixture = TestBed.createComponent(GameComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-tetris');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(GameComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ng-tetris!');
  }));
});
