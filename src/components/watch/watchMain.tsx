import OtherVideos from "./OtherVideos"
import ShowVideo from "./ShowVideo"

const WatchMain = ()=>{
    return <div className="mx-16">
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
            <ShowVideo/>
        </div>
        <div className="col-span-4 ">
            <OtherVideos/>
        </div>
    </div>
    </div>
}
export default WatchMain