import { SideBarState } from "../atoms/sideBar";
import { useEffect, useState } from "react";
import { SearchBarState } from "../atoms/searchBar";
import { useRecoilValue, useSetRecoilState } from "recoil";
import SearchBox from "./SearchBox";
import SearchComponent from "./SearchComponent";
import { MdVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
const AppBar = () => {
    const setSideBarState = useSetRecoilState(SideBarState);
    const currentSideBarState = useRecoilValue(SideBarState);
    const setSearchBarState = useSetRecoilState(SearchBarState);
    const searchBarState = useRecoilValue(SearchBarState);
    const [windowWidth,setWidowWidth] = useState(false) 

    useEffect(() => {
        const handleResize = () => {
            // console.log(window.innerWidth)
            // console.log(searchBarState)
            if (window.innerWidth <= 768) {
                setWidowWidth(true);
            } else {
                setWidowWidth(false);
            }
        };
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setSearchBarState])

    return (
        <div>
            {(searchBarState && windowWidth)  &&  (<SearchComponent/>
            )}
            {
                (!searchBarState || !windowWidth)  && <div className="flex justify-center  max-h-16 items-center md:ml-2 fixed w-full bg-black z-50">
                    <div className="w-1/4 flex items-center gap-1 md:gap-5 px-1">
                        <div
                            onClick={() => {
                                setSideBarState(!currentSideBarState);
                            }}
                            className="cursor-pointer hover:bg-zinc-800 hover:rounded-full p-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6 text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                                />
                            </svg>
                        </div>
                        <div>
                            <img src="/youtube.png" alt="" className="h-16" />
                        </div>
                    </div>
                    <div className="w-full ">
                        <SearchBox />
                    </div>
                    <div className="w-1/4  md:flex justify-end items-center cursor-pointer md:pr-4 gap-5 hidden">
                        <div className="hover:bg-zinc-800 hover:rounded-full p-2 cursor-pointer  flex justify-center">
                            <MdVideoCall fontSize={26}/>
                    </div>
                        <div className="hover:bg-zinc-800 hover:rounded-full p-2 cursor-pointer  md:flex justify-center hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                            </svg>
                    </div>
                    <div className="">
                        <img src="/profile.jpg" alt="" className="rounded-full h-10" />
                    </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default AppBar;
