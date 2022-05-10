const FizzbuzzService = require("../../lib/services/FizzbuzzService")

describe("Test for static method Apply Validation ", () => {
    test('Case 1, explorer1', () => {
    const explorer1 = {name: "Explorer1", score: 1}
    const explorerValid = FizzbuzzService.applyValidationInExplorer(explorer1);
    expect(explorerValid).toStrictEqual({name: "Explorer1", score: 1, trick: 1});
    });
    test('Case 2, explorer3', () => {
    const explorer3 = {name: "Explorer3", score: 3}
    const explorerValid = FizzbuzzService.applyValidationInExplorer(explorer3);
    expect(explorerValid).toStrictEqual({name: "Explorer3", score: 3, trick: "FIZZ"});
    });
    test('Case 3, explorer5', () => {
    const explorer5 = {name: "Explorer5", score: 5}
    const explorerValid = FizzbuzzService.applyValidationInExplorer(explorer5);
    expect(explorerValid).toStrictEqual({name: "Explorer5", score: 5, trick: "BUZZ"});
    });
    test('Case 4, explorer15', () => {
        const explorer15 = {name: "Explorer15", score: 15}
        const explorerValid = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorerValid).toStrictEqual({name: "Explorer15", score: 15, trick: "FIZZBUZZ"});
        });
    
  })