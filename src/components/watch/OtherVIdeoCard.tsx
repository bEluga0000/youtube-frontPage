const OtherVideoCard = ()=>{
    return <div className="w-full  flex gap-2">
        <div className="">
            <img src="/thumb.jpeg" alt="" className="rounded-lg  w-[180px] h-[94px]"/>
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
export default OtherVideoCard