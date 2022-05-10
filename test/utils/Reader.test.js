const Reader = require("../../lib/utils/Reader")


describe("Test for Reader class", () => {
    test('Case 1', () => {
      const explorers = Reader.readJsonFile("explorers.json")
      expect(explorers[0].name).toBe("Woopa1");
    });
  })