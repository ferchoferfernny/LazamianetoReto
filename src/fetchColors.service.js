import { doc, getDoc} from "firebase/firestore"
import { firestoreDB } from "./config";

export const fetchColorService = async (name) => {
    const teamRef = doc(firestoreDB, "equipos", name)
    const team = await getDoc(teamRef)
    return team.data().color
}