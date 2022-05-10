const ExplorerService = require("../../lib/services/ExplorerService")

describe("Test for static method filterbymission ", () => {
    test('Case 1', () => {
      const explorers = [{mission: "node"}];
      const explorersInNode = ExplorerService.filterByMission(explorers, "node");
      expect(explorersInNode.length).toBe(1);
    });
  })