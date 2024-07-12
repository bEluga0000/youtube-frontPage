import { SideBarState } from "../atoms/sideBar";
import OpenSideBar from "../components/openSideBar";
import SideBar from "../components/SideBar";
import VideoDashboard from "../components/VideosDashboard";
import { RecoilRoot, useRecoilValue } from "recoil";
const Main = ()=>{
    const sideBarState = useRecoilValue(SideBarState)
    return <div className="grid grid-cols-1 justify-center md:grid-cols-12">
        {
            sideBarState && <div className="fixed"><OpenSideBar />
        </div>}
        <div className="hidden md:col-span-1 md:block">
            <SideBar />
        </div>
        <div className="md:col-span-11">
            <VideoDashboard></VideoDashboard>
        </div>
    </div>
}
export default Main