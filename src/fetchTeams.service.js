import { collection, getDocs} from "firebase/firestore"
import { firestoreDB } from "./config";

export const fetchTeamsService = async () => {
    const querySnapshot = await getDocs(collection(firestoreDB, "equipos"));

    return querySnapshot;
}