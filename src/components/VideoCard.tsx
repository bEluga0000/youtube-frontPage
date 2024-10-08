import { useRouter } from "next/navigation"

interface VideoSchema {
    title: string
    name: string
    thumb: string
    profile: string
    views: string
    timeStamp: string
}
const VideoCard = ({ video }: { video: VideoSchema }) => {
    const router = useRouter()
    return (
        <div className="cursor-pointer w-full flex justify-center flex-col items-center p-2" onClick={()=>{
            router.push("/watch?video=1")
        }}>
            <img src={video.thumb} alt="" className="w-full rounded-3xl" />
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img src={video.profile} alt="profile" className="rounded-full" />
                </div>
                <div className="col-span-10 pl-5">
                    <div>
                        {video.title}
                    </div>
                    <div className="text-gray-400">
                        {video.name}
                    </div>
                    <div className="text-gray-400">
                        {video.views} - {video.timeStamp}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
