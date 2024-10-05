import { SearchBarState } from "../atoms/searchBar"
import { useRecoilValue, useSetRecoilState } from "recoil"

const SearchComponent = () => {
    const setSearchBarState = useSetRecoilState(SearchBarState)
    const searchBarState = useRecoilValue(SearchBarState)
    return <div className="grid grid-cols-12  p-1 max-h-16  md:ml-2 fixed w-full bg-black z-50 items-center pt-3">
        <div className="col-span-2 flex justify-center pr-6 cursor-pointer  " onClick={()=>{
            setSearchBarState(!searchBarState)
        }}>
            <div className="hover:bg-zinc-800 hover:rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </div>
           

        </div >
        <div className="col-span-8 ">
            <div className="border border-[#303030] block rounded-full overflow-hidden w-full max-w-[600px]">
                <div className="relative w-full">
                    <input type="search" className="bg-[#202020] px-4 py-2.5 w-full z-20 text-sm text-gray-100 outline-none rounded-full" placeholder="Search" required />
                    <button type="submit" className="absolute top-0 right-0 text-sm h-full px-4 bg-[#303030] rounded-r-full flex justify-center items-center">
                        <svg className="w-5 h-5 text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </div>
        <div className="col-span-2 flex justify-end pr-4">
            <div className="hover:bg-zinc-800 hover:rounded-full p-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
            </svg>
            </div>
        </div>
    </div>
}
export default SearchComponent