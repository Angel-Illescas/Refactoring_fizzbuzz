const ExplorerService = require("../services/ExplorerService")
const FizzbuzzService = require("../services/FizzbuzzService")
const Reader = require("../utils/Reader")


class ExplorerController{

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonPath("../../explorers.json");
        const expByMission = ExplorerService.filterByMission(explorers,mission);
        return expByMission;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonPath("../../explorers.json");
        const expByUsersByMission = ExplorerService.getExplorersUsernamesByMission(explorers,mission);
        return expByUsersByMission;
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonPath("../../explorers.json");
        const expAmoByMission = ExplorerService.getAmountOfExplorersByMission(explorers,mission);
        return expAmoByMission;
    }

}

module.exports = ExplorerController