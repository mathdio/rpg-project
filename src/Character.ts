import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  
  constructor(name: string) {
    this._dexterity = Math.floor(Math.random() * 10 + 1);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Math.floor(Math.random() * 10 + 1);
    this._defense = Math.floor(Math.random() * 10 + 1);
    this._energy = {
      type_: this._archetype.energyType,
      amount: Math.floor(Math.random() * 10 + 1),
    };
  }

  public get race(): Race {
    return this._race;
  }
  
  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  public setMaxLifePoints(value: number) {
    this._maxLifePoints += value;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }

    if (this._lifePoints < 1) {
      this._lifePoints = -1;
    }
    
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this.setMaxLifePoints(Math.floor(Math.random() * 10 + 1));
    this._strength += Math.floor(Math.random() * 10 + 1);
    this._dexterity += Math.floor(Math.random() * 10 + 1);
    this._defense += Math.floor(Math.random() * 10 + 1);
    this._energy.amount = 10;
  }
}

export default Character;