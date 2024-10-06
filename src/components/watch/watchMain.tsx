import OtherVideos from "./OtherVideos"
import ShowVideo from "./ShowVideo"

const WatchMain = ()=>{
    return <div className="lg:mx-16 mx-6 sm:mx-8 md:mx-10">
    <div className="lg:grid lg:grid-cols-12 lg:gap-6 flex flex-col">
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