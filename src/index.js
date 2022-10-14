import {fetchTeamsService} from "./fetchTeams.service"
import { fetchColorService} from "./fetchColors.service"

const main = async () => {
    //await fetchTeamsService()
    await fetchColorService("AC-DW")
}

main()