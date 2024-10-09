import { useEffect, useState } from "react";
import OtherVideos from "./OtherVideos"
import ShowVideo from "./ShowVideo"

const WatchMain = ()=>{
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    return <div className="lg:mx-16 mx-6 sm:mx-8 md:mx-10">
    <div className="lg:grid lg:grid-cols-12 lg:gap-6 flex flex-col">
        <div className="col-span-8">
            <ShowVideo loading={loading}/>
        </div>
        <div className="col-span-4 ">
            <OtherVideos loading={loading}/>
        </div>
    </div>
    </div>
}
export default WatchMain