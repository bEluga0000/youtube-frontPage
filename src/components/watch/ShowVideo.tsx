import VideoDetailSec from "./VideoDetailSec"

const ShowVideo = ()=>{
    return <div className="flex flex-col gap-2">
        <div className="mt-[24px]  lg:h-[389px] w-full rounded-xl h-[280px] sm:h-[350px] md:h-[400px]">
            <img src="/thumb.jpeg" className="h-full w-full overflow-hidden rounded-xl shadow-lg"></img>
        </div>
        <div>
            <VideoDetailSec/>
        </div>
    </div>

}
export default ShowVideo