// todo need to add the onclick color change
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const CategorieCard = ({loading}:{loading:boolean})=>{
    return <div>
        {
            loading && <Skeleton className='px-10 py-1  rounded-lg text-sm   flex  items-center cursor-pointer  text-center  h-[30px]' baseColor="#202020" highlightColor="#444" />
        }
        {
            !loading && <div className="bg-zinc-800 font-medium  px-2 py-1  rounded-lg text-sm   flex  items-center cursor-pointer  text-center lg:w-[80px] ">
                <p >All Videos</p>
            </div> 
        }
        
        </div>
}
export default CategorieCard