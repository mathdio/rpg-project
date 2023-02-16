import Race from './Race';

class Dwarf extends Race {
  maxLifePoints: number;
  private static dwarfCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.addDwarf();
  }

  public static addDwarf() {
    Dwarf.dwarfCount += 1;
  }

  public static createdRacesInstances() {
    return Dwarf.dwarfCount;
  }
}

export default Dwarf;