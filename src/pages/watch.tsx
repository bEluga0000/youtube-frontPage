import AppBar from "@/components/Appbar"
import WatchMain from "@/components/watch/watchMain"
import { SideBarState } from "../atoms/sideBar";
import OpenSideBar from "../components/openSideBar";
import {  useRecoilValue } from "recoil";
const watch = ()=>{
    const sideBarState = useRecoilValue(SideBarState)
    return <div>
        <div>
            <AppBar />
        </div>
        <div className="pt-16">
            {
                sideBarState && <div className="fixed c"><OpenSideBar />
                </div>}
            <WatchMain/>
        </div>
    </div>    
}
export default watch