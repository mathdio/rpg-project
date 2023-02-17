import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player2: Fighter;
  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player2 = player2;
  }

  fight(): number {
    this.player.attack(this._player2);
    this._player2.attack(this.player);
    return super.fight();
  }
}

export default PVP;