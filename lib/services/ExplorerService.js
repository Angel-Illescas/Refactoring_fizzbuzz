class ExplorerService{

    static filterByMission(explorers, mission){
        const explorerByMisssion = explorers.filter((explorer) => explorer.mission === mission)
        return explorerByMisssion

    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorerAmoung = explorers.filter((explorer) => explorer.mission === mission)
        return explorerAmoung
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorerUsername = explorers.filter((explorer) => explorer.mission === mission).map((explorer) => explorer.githubUsername);
        return explorerUsername
    }

}

module.exports = ExplorerService