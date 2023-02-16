import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _rangerCount = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.addRanger();
  }

  public static addRanger() {
    this._rangerCount += 1;
  }

  public static createdArchetypeInstances() {
    return Ranger._rangerCount;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;