import Categories from "./Categories"
import OtherVideoCard from "./OtherVIdeoCard"

const OtherVideos = ()=>{
    return <div className="mt-[24px]  flex flex-col px-2 gap-3">
        <div>
            <Categories/>
        </div>
        <div className="flex flex-col gap-3">
            <OtherVideoCard/>
            <OtherVideoCard />
            <OtherVideoCard />
            <OtherVideoCard />
            <OtherVideoCard />
            <OtherVideoCard />
            <OtherVideoCard />
            <OtherVideoCard />
            <OtherVideoCard />
            <OtherVideoCard />
            <OtherVideoCard />
        </div>
    </div>
}
export default OtherVideos