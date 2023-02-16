import Race from './Race';

class Orc extends Race {
  maxLifePoints: number;
  private static orcCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.addOrc();
  }

  public static addOrc() {
    Orc.orcCount += 1;
  }

  public static createdRacesInstances() {
    return Orc.orcCount;
  }
}

export default Orc;