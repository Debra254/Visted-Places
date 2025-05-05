const { Destination, TravelJournal } = require('./places');

describe('Places Youve Been', () => {
  let testDest, testJournal;

  beforeEach(() => {
    testDest = new Destination("Paris", ["Eiffel Tower", "Louvre"], "Spring", "Loved it!");
    testJournal = new TravelJournal();
  });

  test('Destination is created with correct properties', () => {
    expect(testDest.location).toBe("Paris");
    expect(testDest.landmarks.length).toBe(2);
  });

  test('Destination landmarksList() returns comma-separated string', () => {
    expect(testDest.landmarksList()).toBe("Eiffel Tower, Louvre");
  });

  test('Destination details() returns formatted string', () => {
    expect(testDest.details()).toContain("Paris");
    expect(testDest.details()).toContain("Spring");
    expect(testDest.details()).toContain("Eiffel Tower");
  });

  test('TravelJournal starts empty', () => {
    expect(testJournal.destinations.length).toBe(0);
  });

  test('TravelJournal adds destination', () => {
    testJournal.addDestination(testDest);
    expect(testJournal.destinations.length).toBe(1);
  });

  test('TravelJournal finds destination by location', () => {
    testJournal.addDestination(testDest);
    const found = testJournal.findDestination("Paris");
    expect(found).toEqual(testDest);
  });

  test('TravelJournal removes destination by location', () => {
    testJournal.addDestination(testDest);
    expect(testJournal.removeDestination("Paris")).toBe(true);
    expect(testJournal.destinations.length).toBe(0);
  });
});