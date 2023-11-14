import { playlists } from "@/data/data";
import { NavegationButtonsMac } from "./NavegationButtonsMac";
import { Navegation } from "./Navegation";
import { Playlists } from "./Playlists";

export function Sidebar(){

    return(
        <aside className="w-72 bg-black p-6">
          <NavegationButtonsMac />
          <Navegation />
          <Playlists />
        </aside>
    )
}