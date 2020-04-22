window.addEventListener('load', async (event) => {
    console.log("TT - Gym | Achievements");

    if(await flying())
        return;

    local_storage.get(["settings", "userdata", "torndata"], function([settings, userdata, torndata]) {
        let show_completed = settings.achievements.show_completed;

        if(!settings.achievements.show)
            return;
        
        // object of all the achievements on this page
        let achievements = {
            "Strength": {
                "stats": parseInt(userdata.strength),
                "keyword": "strength",
                "incl": ["gain"]
            },
            "Speed": {
                "stats": parseInt(userdata.speed),
                "keyword": "speed",
                "incl": ["gain"]
            },
            "Defense": {
                "stats": parseInt(userdata.defense),
                "keyword": "defense",
                "incl": ["gain"]
            },
            "Dexterity": {
                "stats": parseInt(userdata.dexterity),
                "keyword": "dexterity",
                "incl": ["gain"]
            },
            "Total": {
                "stats": parseInt(userdata.total),
                "keyword": "total stats"
            },
        }

        displayAchievements(achievements, show_completed, torndata);
    });
});