const ExplorerService = require("../../lib/services/ExplorerService")

describe("Test for static method filterbymission ", () => {
    test('Case 1', () => {
      const explorers = [{mission: "node"}];
      const explorersInNode = ExplorerService.filterByMission(explorers, "node");
      expect(explorersInNode.length).toBe(1);
    });
  })

  describe("Test for static method GetAmoung ", () => {
    test('Case 2', () => {
      const explorers = [{mission: "node"}];
      const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
      expect(explorersInNode.length).toBe(1);
    });
  })

  describe("Test for static method GetforUsername ", () => {
    test('Case 3', () => {
      const explorers = [{mission: "node", githubUsername: "ajolonauta1"}];
      const explorersInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
      expect(explorersInNode).toStrictEqual(["ajolonauta1"]);
    });
  })