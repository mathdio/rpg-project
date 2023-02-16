import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _mageCount = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.addMage();
  }

  public static addMage() {
    this._mageCount += 1;
  }

  public static createdArchetypeInstances() {
    return Mage._mageCount;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;