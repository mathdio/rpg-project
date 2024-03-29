import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _monsters: (Fighter | SimpleFighter)[];
  constructor(player: Fighter, monsters: ((Fighter | SimpleFighter)[])) {
    super(player);
    this._monsters = monsters;
  }

  fight(): number {
    while (this._monsters.some((monster) => monster.lifePoints > 0)
    && this.player.lifePoints > 0) {
      this._monsters.forEach((monster) => {
        this.player.attack(monster);
        monster.attack(this.player);
      });
    }
    
    return super.fight();
  }
}

export default PVE;