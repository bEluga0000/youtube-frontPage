import Categories from "./Categories"
import OtherVideoCard from "./OtherVIdeoCard"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
const OtherVideos = ({loading}:{loading:boolean})=>{
    return <div className="mt-[24px]  flex flex-col px-2 gap-3">
        <div>
            <Categories size1={3} size2={7} size3={6} size4={4} loading={loading}/>
        </div>
        <div className="flex flex-col gap-3">
            <OtherVideoCard loading={loading}/>
            <OtherVideoCard loading={loading} />
            <OtherVideoCard loading={loading} />
            <OtherVideoCard loading={loading} />
            <OtherVideoCard loading={loading} />
            <OtherVideoCard loading={loading} />
            <OtherVideoCard loading={loading} />
            <OtherVideoCard loading={loading} />
            <OtherVideoCard loading={loading} />
            <OtherVideoCard loading={loading} />
            <OtherVideoCard loading={loading} />
        </div>
    </div>
}
export default OtherVideos