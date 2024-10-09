import { SideBarState } from "../atoms/sideBar";
import OpenSideBar from "../components/openSideBar";
import SideBar from "../components/SideBar";
import VideoDashboard from "../components/VideosDashboard";
import { RecoilRoot, useRecoilValue } from "recoil";
import Categories from "./watch/Categories";
import { useEffect, useState } from "react";
const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    const sideBarState = useRecoilValue(SideBarState)
    return <div className="grid grid-cols-1 justify-center md:grid-cols-12">
        {
            sideBarState && <div className="fixed"><OpenSideBar />
            </div>}
        <div className="hidden md:col-span-1 md:block place-items-start">
            <SideBar />
        </div>
        <div className="md:col-span-11">
            <div className="px-2">
                <Categories size1={11} size2={7} size3={6} size4={4} loading={loading}/> 
            </div>
            <div>
                <VideoDashboard loading={loading}/>
            </div>
        </div>
    </div>
}
export default Main