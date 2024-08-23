import { knight } from "./Knight";
import { monster} from "./monster";

const myKnight:knight = new knight ("Shampas","Nerdola", 5)
const myMonster:monster = new monster("Pinteco")

myKnight.atacar(myMonster)
myMonster.mostraStatus()


//myKnight.atacar()




