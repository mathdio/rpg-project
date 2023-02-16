import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _necromancerCount = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.addNecromancer();
  }

  public static addNecromancer() {
    this._necromancerCount += 1;
  }

  public static createdArchetypeInstances() {
    return Necromancer._necromancerCount;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;