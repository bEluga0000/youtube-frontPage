import Skeleton from "react-loading-skeleton"
import VideoDetailSec from "./VideoDetailSec"
import 'react-loading-skeleton/dist/skeleton.css'
const ShowVideo = ({loading}:{loading:boolean})=>{
    return <>
    {
            loading && <div className="flex flex-col gap-2">
                <div className="mt-[24px]  lg:h-[389px] w-full rounded-xl h-[280px] sm:h-[350px] md:h-[400px]">
                    <Skeleton className="h-full w-full overflow-hidden rounded-xl shadow-lg " baseColor="#202020" highlightColor="#444" />
                </div>
                <div>
                    <VideoDetailSec/>
                </div>
            </div>
    }
    {
            !loading && <div className="flex flex-col gap-2">
                <div className="mt-[24px]  lg:h-[389px] w-full rounded-xl h-[280px] sm:h-[350px] md:h-[400px]">
                    <img src="/thumb.jpeg" className="h-full w-full overflow-hidden rounded-xl shadow-lg"></img>
                </div>
                <div>
                    <VideoDetailSec />
                </div>
            </div>
    }
    </>
    

}
export default ShowVideo