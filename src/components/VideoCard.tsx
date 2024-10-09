import { useRouter } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

interface VideoSchema {
    title: string;
    name: string;
    thumb: string;
    profile: string;
    views: string;
    timeStamp: string;
}

const VideoCard = ({ video, loading }: { video: VideoSchema; loading: boolean }) => {
    const router = useRouter();

    return (
        <>
            {!loading ? (
                <div
                    className="cursor-pointer w-full flex justify-center flex-col items-center p-2"
                    onClick={() => {
                        router.push("/watch?video=1");
                    }}
                >
                    {/* Video thumbnail */}
                    <img src={video.thumb} alt={video.title} className="w-full rounded-3xl" />

                    <div className="grid grid-cols-12 pt-2 w-full">
                        {/* Profile image */}
                        <div className="md:col-span-2 col-span-1">
                            <img src={video.profile} alt="profile" className="rounded-full h-10 w-10" />
                        </div>

                        {/* Video details */}
                        <div className="md:col-span-10 col-span-11 pl-5 md:pl-0">
                            <div className="font-semibold">{video.title}</div>
                            <div className="text-[#aaa] text-sm">{video.name}</div>
                            <div className="text-[#aaa] text-sm">{video.views} - {video.timeStamp}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full flex justify-center flex-col items-center m-2 overflow-hidden">
                    <div className="md:block hidden">
                            <Skeleton className="rounded-3xl" height={200} width={350} baseColor="#202020" highlightColor="#444" />
                    </div>
                    <div className=" md:hidden sm:block hidden">
                            <Skeleton className="rounded-3xl" height={300} width={600} baseColor="#202020" highlightColor="#444" />
                    </div>
                        <div className=" sm:hidden ">
                            <Skeleton className="rounded-3xl" height={250} width={550} baseColor="#202020" highlightColor="#444" />
                        </div>
                    <div className="grid grid-cols-12 pt-2 w-full">
                        <div className="col-span-1 ">
                                <Skeleton circle={true} height={40} width={40}  baseColor="#202020" highlightColor="#444" />
                        </div>
                        <div className="col-span-10 pl-5 w-full">
                                <Skeleton width="70%" height={20} baseColor="#202020" highlightColor="#444"/>
                                <Skeleton width="50%" height={15} className="mt-2"  baseColor="#202020" highlightColor="#444"/>
                                <Skeleton width="40%" height={15} className="mt-2"  baseColor="#202020" highlightColor="#444"/>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default VideoCard;
