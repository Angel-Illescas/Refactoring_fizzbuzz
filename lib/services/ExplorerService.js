class ExplorerService{

    static filterByMission(explorers, mission){
        const explorerByMisssion = explorers.filter((explorer) => explorer.mission === mission)
        return explorerByMisssion

    }

    static getAmountOfExplorersByMission(explorers, mission){
         
    }

    static getExplorersUsernamesByMission(explorers, mission){

    }

}

module.exports = ExplorerService