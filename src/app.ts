import { getWainwrights } from "./helpers/getWainwrights";
import { setMountainCompletion } from "./helpers/setMountainCompletion";
import { saveWainwrights } from "./helpers/saveWainwrightsWithCompleted";

const mountains = getWainwrights();

const completedMountains = ["Long side", "Carl Side", "Ullock pike", "Skiddaw", "Place fell", "High street", "Thornthwaite Crag", "Froswick", "Ill bell", "Yoke", "Sallows", "Sour Howes", "Baystones [Wansfell]", "Birks", "St Sunday Crag", "Fairfield", "Hart Crag", "Dove Crag", "Little Hart Crag West Top", "High Hartsop Dodd", "Middle Dodd", "Red Screes", "Great Rigg", "Heron Pike (Rydal)", "Nab Scar", "Helm Crag", "Gibson Knott", "Calf Crag", "Steel Fell [Dead Pike - Steel Fell]", "Lingmoor Fell [Lingmoor Fell - Brown How]", "Wetherlam", "The Old Man of Coniston", "Dow Crag", "High Crag (Buttermere)", "High Stile", "Red pike (buttermere)", "Catbells", "Maiden Moor", "High Spy", "Dale Head", "Hindscarth", "Robinson", "Grisedale pike", "Hopegill head", "Crag Hill [Eel Crag]", "Sail", "Causey Pike" ];

//TODO: Add handling of [] alternative names!

completedMountains.forEach((mountain) => {
    try {
    setMountainCompletion(mountains, mountain, true);
    } catch {
        console.log(mountain);
    }
})

//setMountainCompletion(mountains, 'High Crag', true);
const mountain = "High Crag [(Buttermere)]"
console.log(mountain.split(/[()\[\]]/)[1].toLowerCase())

saveWainwrights(mountains);
