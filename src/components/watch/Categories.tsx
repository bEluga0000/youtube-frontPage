import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import CategorieCard from "./CategorieCard";
const  Categories = ()=>{
    return <div className="flex justify-between items-center">
        <div className="cursor-pointer">
            <FaChevronLeft size={20}/>
        </div>
        <div className=" gap-4 overflow-y-auto flex">
            <CategorieCard/>
            <CategorieCard />
            <CategorieCard />
            {/* <CategorieCard /> */}
            {/* <CategorieCard /> */}
            {/* <CategorieCard /> */}
        </div>
        <div className="cursor-pointer">
            <FaChevronRight size={20} />
        </div>
    </div>
}
export default Categories