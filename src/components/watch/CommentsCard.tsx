import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
const CommonetCard = ()=>{
    return <div>
        <div className="flex gap-4">
            <div>
                <img src="/profile.jpg" alt="" className="rounded-full w-10 h-10"/>
            </div>
            <div className="flex flex-col text-sm gap-1">
                <div className="flex gap-2">
                    <div>
                        @Beluga1000
                    </div>
                    <div>
                        6 years ago
                    </div>
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quam?
                </div>
                <div className="flex text-[#aaa] gap-4 items-center">
                    <div className="flex gap-2">
                        <div className="cursor-pointer">
                            <BiLike fontSize={22} />
                        </div>
                        <div className="">
                            35K
                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <BiDislike fontSize={22} />
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default CommonetCard