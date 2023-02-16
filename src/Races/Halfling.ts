import Race from './Race';

class Halfling extends Race {
  maxLifePoints: number;
  private static halflingCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.addHalfling();
  }

  public static addHalfling() {
    Halfling.halflingCount += 1;
  }

  public static createdRacesInstances() {
    return Halfling.halflingCount;
  }
}

export default Halfling;