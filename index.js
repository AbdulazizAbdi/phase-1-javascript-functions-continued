function saturdayFun(saturdayActivity = 'roller-skate'){
    return `This Saturday, I want to ${saturdayActivity}!`;
}

const mondayWork = function (mondayActivity = "go to the office"){
    return `This Monday, I will ${mondayActivity}.`;
}

function wrapAdjective(visualParameter = "*"){
    return function(adjectiveParameter = "special"){
        return `You are ${visualParameter}${adjectiveParameter}${visualParameter}!`
    };
}