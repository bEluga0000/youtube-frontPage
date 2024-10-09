import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import CategorieCard from "./CategorieCard";
const Categories = ({ size1, size2, size3, size4,loading }: { size1: number, size2:number, size3:number, size4:number,loading:boolean })=>{
    return <div className="flex justify-between items-center">
        <div className="cursor-pointer">
            <FaChevronLeft size={20}/>
        </div>
        <div className=" ">
            <div className="lg:flex hidden gap-4 overflow-y-auto ">
                {
                    Array(size1).fill(0).map((_, index) => {
                        return <CategorieCard loading={loading}/>
                    })
                }
            </div>
            <div className="md:flex hidden lg:hidden gap-4 overflow-y-auto">
                {
                    Array(size2).fill(0).map((_, index) => {
                        return <CategorieCard loading={loading}/>
                    })
                }
            </div>
            <div className="sm:flex hidden md:hidden gap-4 overflow-y-auto">
                {
                    Array(size3).fill(0).map((_, index) => {
                        return <CategorieCard loading={loading}/>
                    })
                }
            </div>
            <div className="flex sm:hidden gap-4 overflow-y-auto">
                {
                    Array(size4).fill(0).map((_, index) => {
                        return <CategorieCard loading={loading} />
                    })
                }
            </div>

            {/* <CategorieCard/>
            <CategorieCard />
            <CategorieCard /> */}
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