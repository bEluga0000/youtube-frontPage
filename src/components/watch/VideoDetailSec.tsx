import { IoMdShareAlt } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import CommentSection from "./comment";
const VideoDetailSec = ()=>{
    return <div className="flex flex-col gap-2">
        <div className=" text-xl font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, distinctio?
        </div>
        <div className="grid grid-cols-2">
            <div className="flex gap-6 items-center">
                <div className="flex gap-2">
                    <div>
                        <img src="/profile.jpg" alt="" className="h-12 w-12 rounded-full" />
                    </div>
                    <div className="flex flex-col">
                        <div className="">
                            channelName
                        </div>
                        <div className="text-sm text-[#aaa]">
                            146K subscribers
                        </div>
                    </div>
                </div>
                <div className="bg-transparent h-fit bg-zinc-800 rounded-2xl">
                    <button className="px-2 py-1.5"><FaBell  className="inline"/>  Subscribe</button>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex bg-zinc-800 px-5 py-1.5 rounded-2xl items-center">
                    <div className="flex items-center border-r gap-2 pr-2 text-[#f1f1f1] cursor-pointer">
                        <div className="flex">
                            <BiLike fontSize={20}/>
                        </div>
                        <div className="text-sm">
                            210K
                        </div>
                    </div>
                    <div className="text-[#f1f1f1] cursor-pointer pl-3">
                        <BiDislike fontSize={20}/>
                    </div>
                </div>
                <div className="flex bg-zinc-800 px-3 py-1.5 rounded-3xl items-center gap-3 justify-center cursor-pointer">
                    <div>
                        <IoMdShareAlt fontSize={20}/>
                    </div>
                    <div>
                        Share
                    </div>
                </div>
                <div className="bg-zinc-800 p-2  rounded-full cursor-pointer">
                    <IoIosMore fontSize={20} className="font-bold"/>
                </div>
            </div>
        </div>
        <div>
            <div className="text-sm bg-zinc-800 p-2 rounded-lg">
                <div className="font-bold">
                    420 views 11years
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, et? Veniam recusandae dolor assumenda nesciunt eos quia itaque libero aperiam repellendus enim, sapiente obcaecati perspiciatis officia repudiandae nulla consequuntur 
                </div>
                <div className="cursor-pointer">
                    ...more
                </div>
            </div>
        </div>
        <div>
            <CommentSection/>
        </div>
    </div>
}
export default VideoDetailSec