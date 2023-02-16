import Race from './Race';

class Elf extends Race {
  maxLifePoints: number;
  private static elfCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.addElf();
  }

  public static addElf() {
    Elf.elfCount += 1;
  }

  public static createdRacesInstances() {
    return Elf.elfCount;
  }
}

export default Elf;