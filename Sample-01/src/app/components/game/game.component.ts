import {Component, ViewChild} from '@angular/core';
import {Hotkey, HotkeysService} from 'angular2-hotkeys';
import {TetrisCoreComponent} from 'ngx-tetris';
// import {TetrisCoreComponent} from '../../project/tetris-core/dist';
// import {TetrisCoreComponent} from 'ngx-tetris';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent   {

  @ViewChild('game')
  private _tetris: TetrisCoreComponent;

  public bw = false;
  public moveLeft = false;
  public moveDown = false;
  public moveRight = false;
  public rotate = false;
  public start = false;
  public stop = false;
  public reset = false;
  public points = 0;

  constructor(private _hotkeysService: HotkeysService) {
      this._addHotkeys();
  }

  public onLineCleared() {
      this.points++;
      console.log('line cleared');
  }

  public onGameOver() {
      alert('game over');
  }

  public onRotateButtonPressed() {
      this._tetris.actionRotate();
  }

  private _addHotkeys() {
      this._hotkeysService.add(new Hotkey('up', (event: KeyboardEvent): boolean => {
          this._tetris.actionRotate();
          return false; // Prevent bubbling
      }));

      this._hotkeysService.add(new Hotkey('left', (event: KeyboardEvent): boolean => {
          this._tetris.actionLeft();
          return false; // Prevent bubbling
      }));

      this._hotkeysService.add(new Hotkey('down', (event: KeyboardEvent): boolean => {
          this._tetris.actionDown();
          return false; // Prevent bubbling
      }));

      this._hotkeysService.add(new Hotkey('right', (event: KeyboardEvent): boolean => {
          this._tetris.actionRight();
          return false; // Prevent bubbling
      }));
  }
}
