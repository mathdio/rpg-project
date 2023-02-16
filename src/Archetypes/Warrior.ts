import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _warriorCount = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.addWarrior();
  }

  public static addWarrior() {
    this._warriorCount += 1;
  }

  public static createdArchetypeInstances() {
    return Warrior._warriorCount;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;