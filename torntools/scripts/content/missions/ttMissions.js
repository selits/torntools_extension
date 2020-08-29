const MISSIONS = {
	"Introduction: Duke": {
		task: "Complete 10 Duke contracts, gain Protégé Honor Bar",
		hint: "This will take a minimum of 7 days. You start with 3 contracts in the beginning, and get 1 new contract per day. Maximum 3 contracts at a time, or 5 in a  3* or higher Logistics Company."
	},
	"Show Some Muscle": { task: "Attack (P)", hint: "Can use any weapon to defeat the named target." },
	"Battering Ram": { task: "Attack (P) 3 times", hint: "Can use any weapon to defeat the named target." },
	"New Kid on the Block": { task: "Defeat any 5 players", hint: "Can use any weapon to defeat the named target." },
	"Against the Odds": { task: "Defeat 2 (P)", hint: "Can use any weapon to defeat the named targets." },
	"A Good Day to Get Hard": {
		task: "Achieve a killstreak of 10",
		hint: "Buying 10 defends works just as well as doing the attacks yourself. If you lose or are killed, you have to start over."
	},
	"A Kimpossible Task": {
		task: "Defeat (P) using only melee and temp weapons",
		hint: "Guns don't have to be unequipped. DO NOT USE primary or secondary weapons."
	},
	"An Honorary Degree": { task: "Defeat (P) without using any guns", hint: "Guns don't have to be unequipped. DO NOT USE primary or secondary weapons." },
	"A Problem at the Tracks": { task: "Defeat 3 (P) without using guns", hint: "Unequip your guns. You can attack with melee, fists, kick, and temporary." },
	"Army of One": {
		task: "Attack (P) 3 times as normal, with mask, with different mask",
		hint: "Duke sends you 2 random masks to wear. Make sure one of the attacks has no mask on."
	},
	"A Thor Loser": {
		task: "Use Duke's hammer and hit 15 different body parts",
		hint: "Body Parts = Head, Throat, Chest, Heart, Stomach, Groin, Right and Left Arms, Right and Left Hands, Right and Left Legs, Right and Left Feet"
	},
	"Bakeout Breakout": {
		task: "Buy a fruitcake, use cake frosting & lock-picking kits from inventory sent by Duke, then send special fruitcake to any player in jail. Player does not actually receive the item.",
		hint: "Fruitcake is non tradeable, non sellable. If using a PC, a good way to do this is to have the Jail open in one tab and items in another. Send special fruitcake to the person with the highest # of hours in jail."
	},
	"Bare Knuckle": {
		task: "Defeat (P) with no weapons or armour equipped",
		hint: "Unequip everything and fight only with fists or kicks. Residual temps from previous fight WILL FAIL THIS MISSION!"
	},
	"Batshit Crazy": {
		task: "Inflict approx 17k, 45K damage using Duke's Bat",
		hint: "Duke sends you the bat Penelope, best to chain with or set defense to melee, equip Penelope and buy defends."
	},
	"Big Tub of Muscle": {
		task: "Defeat (P) despite their gargantuan strength",
		hint: "If you have booster capability, serotonin may help. Stacking boosters by attacking easy targets with different temporary boosters consecutively will really help, but may be overkill in terms of cost."
	},
	"Birthday Surprise": {
		task: "Obtain afro comb/edvd/laptop, place in empty box, gift wrap, send to Duke. Item may vary.",
		hint: "Cash prize is usually the average market price of the item. Empty box and gift wrap can be purchased from the Post Office, if you have not bought your daily 100 item maximum."
	},
	"Bonnie & Clyde": { task: "Defeat (P) and spouse of (P)", hint: "Can use any weapon to defeat the named targets." },
	"Bountiful": { task: "Claim 2,3, or 5 bounties", hint: "Bounties are in Newspaper > Bounties tab. To claim a bounty, hospitalize target after defeating." },
	"Bounty on the Mutiny": {
		task: "Bounty (P) and wait for bounty to be fulfilled",
		hint: "Cash prize is still calculated based on old bounty system. Cannot claim your own."
	},
	"Bring It!": {
		task: "Defeat Duke within 7 days of activating this mission.",
		hint: "Requirement to Unlock Expert Missions. Jump in when he gets looted 5-6 times a day, do not have to land finishing hit."
	},
	"Candy from Babies": {
		task: "Collect $150k or $250k in bounties",
		hint: "Bounties are in Newspaper > Bounties tab. To claim a bounty, hospitalize target after defeating."
	},
	"Charity Work": {
		task: "Mug 2 (P)",
		hint: "Must be a successful mug. If target was recently mugged, I suggest sending $1,000 to the target, then mugging."
	},
	"Cracking Up": {
		task: "Defeat & Interrogate (P) to find the code for Duke's safe",
		hint: "Can take 5 times to get target to talk. Contents of the safe will vary. Send contest to Duke afterwards."
	},
	"Critical Education": { task: "Achieve 8 critical hits", hint: "A critical hit mod can help with this." },
	"Cut Them Down to Size": {
		task: "Defeat someone your level or higher",
		hint: "A friend can help by unequipping, dropping to 1 hp and/or turning all defending actions to 0%."
	},
	"Dirty Little Secret": {
		task: "Put a bounty on (P), wait for it to be claimed, attack the person who claimed the bounty",
		hint: "Cash prize is still calculated based on old bounty system. If the claimer is anonymous, their ID # still shows up in the mission screen. I usually just put a 100K bounty, so I can pocket most of the prize."
	},
	"Double Jeopardy": {
		task: "Put a bounty on someone, then defeat them.",
		hint: "You cannot claim your own bounties, so may as well just put the bounty, then leave or mug."
	},
	"Drug Problem": { task: "Defeat 4-7 (P)", hint: "Can use any weapon to defeat the named targets." },
	"Emotional Debt": {
		task: "Hit (P) with tear gas or pepper spray",
		hint: "Equip a tear gas or pepper spray. Hazmat Suit and the unreleased Delta Helmet blocks tear gas.  Every helmet except Combat blocks pepper spray. If the temporary weapon misses, it still counts for this mission."
	},
	"Estranged": { task: "Injure one of (P) legs", hint: "I use a pillow and smoke grenade" },
	"Family Ties": { task: "Hospitalize (P) 3 times", hint: "If the target can be revived, this mission will be much faster." },
	"Field Trip": {
		task: "Win $100, $1k, $10k or 1M on 3 named Casino Games*",
		hint: "BJ=Blackjack,C=Craps, HL=High Low,K=Keno, R=Roulette,S=Slots [Easy=C/HL/R] [Med=BJ/K/S] [VHard=HL/K/BJ or R] [Expert=BJ/C/HL]"
	},
	"Fireworks": {
		task: "Expend 250, 500, 750, 1250 rounds of ammunition",
		hint: "Use a gun with lots of ammo such as minigun, M249 PARA LMG, or Rheinmettall MG 3 and chain or participate in NPC attacks on Duke, Jimmy or Leslie."
	},
	"Forgotten Bills": { task: "Defeat (P)", hint: "Can use any weapon to defeat the named target." },
	"Frenzy": {
		task: "Defeat any 5, 7, 11, 11, or 15 players",
		hint: "Can use any weapon to defeat your targets. Could claim bounties or mug people for this one."
	},
	"Get Things Jumping": { task: "Cause 2k, 8k, 10k, 50k dmg, receive 1k, 4k, 5k, 25k", hint: "Need info for below Expert level" },
	"Graffiti": { task: "Hit (P) with pepper spray", hint: "Equip pepper spray temp item. If you miss, must retry mission." },
	"Guardian": { task: "Defeat (P)", hint: "Can use any weapon to defeat the named target." },
	"Hammer Time": {
		task: "Defeat (P) using only a hammer",
		hint: "Dual Hammers don't count, don't have to unequip other gear, non damaging temps ARE allowed, ie: stat booster, smoke, flash"
	},
	"Hands Off": { task: "Defeat 3-5 (P)", hint: "Can use any weapon to defeat the named targets." },
	"Hare, Meet Tortoise": {
		task: "Defeat (P) despite their lightening fast speed",
		hint: "Flash Grenade and Smoke Grenade will reduce their speed. Welding Helmet blocks Flash, but nothing blocks Smoke."
	},
	"Hide and Seek": {
		task: "Defeat correct (P) of 4 players, clues given",
		hint: "Can use any weapon to defeat the named target. Often the clue is for example: The only player not travelling, or the only player that is level 70 or the only player not in a faction."
	},
	"Hiding in Plain View": {
		task: "Travel to (country) and defeat (P)",
		hint: "Other people with same mission can also attack target. Medicine cannot be used overseas, so plan your gear carefully."
	},
	"High Fliers": {
		task: "Defeat 3 (P) in 3 foreign (countries)",
		hint: "Other people with same mission can also attack target. Medicine cannot be used overseas, so plan your gear carefully. Give yourself plenty of time in the 72 hour window to fly to 3 different countries. If running out of time, can use Business Class Tickets to fly the fastest round trip."
	},
	"Hobgoblin": {
		task: "Defeat a player of your choice 5 times",
		hint: "Fast way: Pick a target that is easy & revivable, and beat them 5 times. Patient way: Pick a target that is easy and beat them 5 times as they come out of hospital."
	},
	"Immovable Object": {
		task: "Defeat (P) despite their impenetrable defense",
		hint: "Can use Epinephrine to increase your strength to counter their defense. Can get a friend to join in attack, throw a smoke, and take the defending temporary if there is one."
	},
	"Inside Job": {
		task: "Attack someone and secrete the Item into or onto them",
		hint: "Duke sends you an Item. A secrete option shows up below leave/mug/hosp"
	},
	"Keeping Up Appearances": {
		task: "Successfully mug (P) then give everything you mugged back to them.",
		hint: "If target was attacked recently and you aren't sure if they were mugged, could send like $1,000, then mug, then send what you mugged back."
	},
	"Kiss of Death": { task: "Defeat (P) and use only the kiss option", hint: "A kiss option shows up below leave/mug/hosp" },
	"Lack of Awareness": { task: "Defeat (P)", hint: "Can use any weapon to defeat the named target." },
	"Lost and Found": { task: "Put (P) in hospital for 12 hours", hint: "Takes at minimum 3 attacks, unless player has max merits/faction perks." },
	"Loud and Clear": { task: "Use 5,7 or 11 explosive grenades", hint: "Grenades must be a type that causes damage." },
	"Loyal Customer": { task: "Defeat (P)", hint: "Can use any weapon to defeat the named target." },
	"Make it Slow": { task: "Defeat (P) in no fewer than 9 turns in a single attack*", hint: "Survive for at least 9 turns then defeat the target" },
	"Marriage Counselling": { task: "Defeat the spouse of (P)" },
	"Massacrist": { task: "Defeat (P)" },
	"Meeting the Challenge": {
		task: "Mug people for a listed total amount. Expert level tends to be 16m",
		hint: "Amount varies. You could offer mug protection service to make this faster or get a trusted friend to hold X amount about 50 times higher than the amount needed. 50 times should more than cover if you have no merits in mugging."
	},
	"Motivator": {
		task: "Lose or stalemate to (P)",
		hint: "If it looks like you're about to win, time out so this mission doesn't fail. To make losing easier, if you have the ability, you can use the wrong blood bag to drop your health to 1 or fill up empty blood bags until 1 HP."
	},
	"No Man is an Island": { task: "Mug at least 2 of 3 (P)" },
	"No Second Chances": { task: "Defeat (P) on first attempt", hint: "Get help if needed." },
	"Out of the Frying Pan": {
		task: "Use Felovax while in jail, Zylkene while in hospital",
		hint: "Duke sends you the items needed. To help the memory you could remember that F comes before Z, or felovax sounds like it has felon in it haha."
	},
	"Painleth Dentitht": {
		task: "Defeat (P) with a baseball bat",
		hint: "Using any other weapon results in failure. Cannot use any damaging temporary weapons."
	},
	"Party Tricks": { task: "Defeat (P) despite their nimble dexterity" },
	"Pass the Word": {
		task: "Send (P) a mail message with keyword included",
		hint: "Needs to be at least a paragraph with proper words and not gibberish. Tip: Copy and send the mission text."
	},
	"Peak Experience": { task: "Defeat (P) despite their high level" },
	"Proof of the Pudding": {
		task: "Acquire a named gun, shoot (P) with it, send it to (P)",
		hint: "You don't have to send the exact same gun you used to attack with, just same type."
	},
	"Rabbit Response": {
		task: "Defeat 3 (P) within 30 minutes, 20, 20, 15, and 10",
		hint: "Make sure they're all out of hosp, activate mission and line them all up in tabbed screens to attack"
	},
	"Reconstruction": {
		task: "Equip kitchen knife/leather gloves, defeat (P) then dump both items.",
		hint: "Don't have to actually use the kitchen knife."
	},
	"Red Faced": {
		task: "Defeat (P) using a trout as finishing hit",
		hint: "This mission is highly annoying. I recommend teaming up with someone who can throw a smoke grenade or some other temp, and can stay in the attack if your trout misses so you can escape and jump back in again for a second attempt."
	},
	"Rising Costs": {
		task: "Hit (P) with a brick",
		hint: "If the brick misses, you will have to retry this mission. Could get a friend to throw a smoke so the chance of the brick hitting is greater."
	},
	"Rolling in It": {
		task: "Mug (P)",
		hint: "Must be a successful mug. If target was recently mugged, I suggest sending $1,000 to the target, then mugging."
	},
	"Safari": { task: "Travel to South Africa and defeat (P) with a rifle", hint: "Accept contract, equip rifle, buy abundant ammo, use ONLY the rifle" },
	"Scammer": { task: "Defeat (P)", hint: "Can use any weapon to defeat the named target." },
	"Sellout Slayer": {
		task: "Buy a gun from item market or bazaar, use gun on any 3, 6 players, sell gun in item market or bazaar",
		hint: "Does not matter if the gun is primary or secondary."
	},
	"Sending a Message": { task: "Defeat (P)", hint: "Can use any weapon to defeat the named target." },
	"Sleep Aid": { task: "Defeat (P)", hint: "Can use any weapon to defeat the named target." },
	"Some People": {
		task: "Send any item (found in the dump) as a parcel to (P)",
		hint: "Search the dump, and if it's junk, box it up and send it to the target. To box an item, go to the Post Office, buy an empty box, open empty box, add item you found then close it."
	},
	"Standard Routine": { task: "Defeat (P) with a clubbed weapon, fists or kick", hint: "Non damaging temps ARE allowed, ie: stat booster, smoke, flash" },
	"Stomach Upset": { task: "Injure (P) stomach", hint: "Easiest with a pillow." },
	"Swan Step Too Far": {
		task: "Search the dump for any previously owned item and defeat the previous owner",
		hint: "You can keep searching till you find an item previously owned by someone you can actually defeat. *Now starts at Hard Difficulty level"
	},
	"The Executive Game": { task: "Defeat (P) using only fists or kick", hint: "Unequip all weapons." },
	"The Tattoo Artist": {
		task: "Defeat (P) using only a slashing or piercing weapon",
		hint: "Equip only a slashing or piercing weapon, armor can remain equipped."
	},
	"Three-Peat": { task: "Defeat any 3 players by leave 1, mug 1, hosp 1", hint: "Can use any weapon to defeat your targets." },
	"Training Day": {
		task: "Spend 250e, 500e, 750e, 1000e, 1250e gym training",
		hint: "Training with natural energy max 100-150, LSD 50, Xanax 250, Points Refill 100-150, FHC 100-150, Cans 5 to 30. Results may increase with the use of Company/Faction/Book perks. 100 = non donator, 150 = donator"
	},
	"Tree Huggers": { task: "Defeat 6-8 (P)", hint: "Can use any weapon to defeat the named targets." },
	"Undercutters": { task: "Defeat 3 (P)", hint: "Can use any weapon to defeat the named targets." },
	"Unwanted Attention": {
		task: "Hospitalize 4 (P)",
		hint: "Can use any weapon to defeat the named targets. Must Hospitalize all targets. Leave or Mug will not complete this contract."
	},
	"Withdrawal": { task: "Injure (P) both arms", hint: "Can be easier with a pillow. Hands count as arms." },
	"Wrath of Duke": { task: "Defeat 3 or 4 (P) ", hint: "Can use any weapon to defeat the named targets." },
};

requireDatabase().then(() => {
	if (!settings.pages.missions.rewards) return;

	addXHRListener((event) => {
		const { page, xhr } = event.detail;
		if (page !== "loader") return;

		const params = new URLSearchParams(xhr.requestBody);
		const sid = params.get("sid");

		if (sid === "missionsRewards") missionsLoaded().then(showRewards);
	});

	missionsLoaded().then(() => {
		console.log("TT - Missions");

		showMissionInformation();
		showRewards();
	});
});

function missionsLoaded() {
	return requireElement("ul.rewards-list li");
}

function showRewards() {
	let user_points = parseInt(doc.find(".total-mission-points").innerText.replace(",", ""));
	let reward_items = doc.findAll(".rewards-list li");

	for (let item of reward_items) {
		let info = JSON.parse(item.getAttribute("data-ammo-info"));

		let price_points = info.points;

		// Show if user can buy
		let actions_wrap = item.find(".act-wrap");
		actions_wrap.style.boxSizing = "border-box";
		actions_wrap.style.borderColor = "black";
		actions_wrap.style.borderImage = "none";
		actions_wrap.style.borderTop = user_points < price_points ? "1px solid red" : "1px solid #2ef42e";

		if (info.basicType === "Ammo") {
			let wrapper = doc.new("div");

			const foundAmmo = findItemsInList(userdata.ammo, {
				size: info.title,
				type: info.ammoType,
			});
			const ammo = foundAmmo.length ? foundAmmo[0].quantity : 0;

			let divAlreadyOwned = doc.new({ type: "div", text: "Owned: ", class: "tt-total-value" });
			if (mobile) divAlreadyOwned.style.marginTop = "66px";
			let spanAlreadyOwned = doc.new("span");
			spanAlreadyOwned.innerText = `${numberWithCommas(ammo, false)}`;

			divAlreadyOwned.appendChild(spanAlreadyOwned);
			wrapper.appendChild(divAlreadyOwned);
			actions_wrap.insertBefore(wrapper, actions_wrap.find(".actions"));
		} else if (info.basicType === "Item") {
			let item_id = info.image;
			let quantity = info.amount;

			if (!item_id || typeof item_id == "string")
				continue;

			let market_price = itemlist.items[item_id].market_value;
			item.style.height = "160px";  // to fit value info

			// Show one item price
			let one_item_price = doc.new("span");
			one_item_price.innerText = `$${numberWithCommas(market_price)}`;
			one_item_price.setClass("tt-one-item-price");

			item.find(".img-wrap").appendChild(one_item_price);

			// Show total & point value
			let value_div = doc.new("div");
			const totalValue = quantity * market_price;

			let div_total_value = doc.new({ type: "div", text: "Total value: ", class: "tt-total-value" });
			if (mobile) div_total_value.style.marginTop = "66px";
			let span_total_value = doc.new("span");
			span_total_value.innerText = `$${numberWithCommas(totalValue, totalValue > 10E6 ? 2 : true)}`;

			let div_point_value = doc.new("div");
			div_point_value.innerText = "Point value: ";
			div_point_value.setClass("tt-point-value");
			let span_point_value = doc.new("span");
			span_point_value.innerText = `$${numberWithCommas((totalValue / price_points).toFixed())}`;

			div_total_value.appendChild(span_total_value);
			div_point_value.appendChild(span_point_value);
			value_div.appendChild(div_total_value);
			value_div.appendChild(div_point_value);
			actions_wrap.insertBefore(value_div, actions_wrap.find(".actions"));
		}
	}
}

function showMissionInformation() {
	for (let mission of doc.findAll(".giver-cont-wrap > div[id^=mission]:not(.tt-modified)")) {
		let title = mission.find(".title-black").innerText.split("\n");
		if (title.length === 2) title = title[0];
		else {
			title = title[1].split(" ");

			const char = title[title.length - 1][0];
			if (char === char.toUpperCase()) title = title.splice(0, title.length - 1);
			else title = title.splice(0, title.length - 2);

			title = title.join(" ").trim();
		}
		let task, hint;

		let miss = MISSIONS[title];
		if (miss) {
			task = miss.task;
			hint = miss.hint;
		} else {
			task = "Couldn't find information for this mission.";
			hint = "Contact the developers.";
		}

		let children = [doc.new({ type: "span", html: `<b>Task:</b> ${task}` })];
		if (hint) {
			children.push(
				doc.new("br"),
				doc.new({ type: "span", html: `<b>Hint:</b> ${hint}` }),
			);
		}

		mission.find(".max-height-fix").appendChild(doc.new({ type: "div", class: "tt-mission-information", children }));
		mission.classList.add("tt-modified");
	}
}
