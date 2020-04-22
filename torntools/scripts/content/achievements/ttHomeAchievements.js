window.addEventListener('load', async (event) => {
    console.log("TT - Home | Achievements");

    if(await flying())
        return;

    local_storage.get(["settings", "userdata", "torndata"], function([settings, userdata, torndata]) {
        let show_completed = settings.achievements.show_completed;
        let personalstats = userdata.personalstats;

        if(!settings.achievements.show)
            return;

        // gather all perks
        let perks = 
            userdata.company_perks.length+
            userdata.education_perks.length+
            userdata.enhancer_perks.length+
            userdata.faction_perks.length+
            userdata.job_perks.length+
            userdata.merit_perks.length+
            userdata.property_perks.length+
            userdata.stock_perks.length
        
        
        // object of all the achievements on this page
        let achievements = {
            "Perks": {
                "stats": perks,
                "keyword": "personal perks"
            },
            "Awards": {
                "stats": personalstats.awards,
                "keyword": "total awards"
            },
            "Married (days)": {
                "stats": userdata.married.duration,
                "keyword": "stay married"
            },
            "Points sold": {
                "stats": personalstats.pointssold,
                "keyword": "points on the market"
            },
            "Activity": {
                "stats": secondsToHours(personalstats.useractivity),
                "keyword": "activity"
            },
            "Bazaar buyers": {
                "stats": personalstats.bazaarcustomers,
                "keyword": "customers buy from your bazaar"
            },
            "Donator (days)": {
                "stats": personalstats.daysbeendonator,
                "keyword": "donator"
            },
            "Energy refills": {
                "stats": personalstats.refills,
                "keyword": "refill",
                "incl": ["energy"]
            },
            "Nerve refills": {
                "stats": personalstats.nerverefills,
                "keyword": "refill",
                "incl": ["nerve"]
            },
            "Token refills": {
                "stats": personalstats.tokenrefills,
                "keyword": "refill",
                "incl": ["nerve"]
            },
            "Networth": {
                "stats": personalstats.networth,
                "keyword": "networth"
            }
        }

        displayAchievements(achievements, show_completed, torndata);
    });
});