import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
const OtherVideoCard = ({loading}:{loading:boolean})=>{
    return <>
    {
            loading && <div className="w-full  flex gap-2">
                <div className="w-[180px] h-[94px] rounded-lg">
                    <Skeleton className="w-full h-full " baseColor="#202020" highlightColor="#444" />
                </div>
                <div className="flex flex-col w-full">
                    <div className="text-md font-medium overflow-hidden">
                        <Skeleton baseColor="#202020" highlightColor="#444" className="w-full h-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="w-full">
                            <Skeleton baseColor="#202020" highlightColor="#444" className="w-full h-full" />
                        </div>
                        <div className="w-full">
                            <Skeleton baseColor="#202020" highlightColor="#444" className="w-full h-full"/>
                        </div>
                    </div>
                </div>
            </div>
    }
    {
            !loading && <div className="w-full  flex gap-2">
                <div className="">
                    <img src="/thumb.jpeg" alt="" className="rounded-lg  w-[180px] h-[94px]" />
                </div>
                <div className="flex flex-col">
                    <div className="text-md font-medium overflow-hidden">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div className="flex flex-col text-xs text-[#aaa]">
                        <div className="">
                            Channel Name
                        </div>
                        <div>
                            2.5M views . 8 months
                        </div>
                    </div>
                </div>
            </div>
    }
        </>
}
export default OtherVideoCard