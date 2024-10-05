import { FcGenericSortingDesc } from "react-icons/fc";
import CommentsCard from "./CommentsCard";
const CommentSection = ()=>{
    return <div className="flex flex-col gap-3">
        <div className="">
            <span className="font-bold text-xl">26,780 comments &nbsp;&nbsp;</span> <FcGenericSortingDesc color="black" className="text-black inline text-xl"/>  Sort By 
        </div>
        <div className="flex gap-4">
            <div>
                <img src="/profile.jpg" alt="" className="rounded-full w-10 h-10"/>
            </div>
            <div className="w-full">
                <input type="text" placeholder="Add a Comment..." className="outline-none border-x-0 bg-transparent border-t-0 border w-full border-opacity-20"/>
            </div>
        </div>
        <div className="flex flex-col gap-5">
            <CommentsCard/>
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
            <CommentsCard />
        </div>
    </div>
}
export default CommentSection