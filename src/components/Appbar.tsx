import { SideBarState } from "../atoms/sideBar";
import { useEffect, useState } from "react";
import { SearchBarState } from "../atoms/searchBar";
import { useRecoilValue, useSetRecoilState } from "recoil";
import SearchBox from "./SearchBox";
import SearchComponent from "./SearchComponent";

const AppBar = () => {
    const setSideBarState = useSetRecoilState(SideBarState);
    const currentSideBarState = useRecoilValue(SideBarState);
    const setSearchBarState = useSetRecoilState(SearchBarState);
    const searchBarState = useRecoilValue(SearchBarState);
    const [windowWidth,setWidowWidth] = useState(false) 

    useEffect(() => {
        const handleResize = () => {
            console.log(window.innerWidth)
            console.log(searchBarState)
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
                (!searchBarState || !windowWidth)  && <div className="flex justify-center p-1 max-h-16 items-center md:ml-2 fixed w-full bg-black z-50">
                    <div className="w-1/4 flex items-center gap-2 md:gap-5 px-2">
                        <div
                            onClick={() => {
                                setSideBarState(!currentSideBarState);
                            }}
                            className="cursor-pointer"
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
                    <div className="w-4/5">
                        <SearchBox />
                    </div>
                    <div className="w-1/12 items-end flex justify-end  cursor-pointer md:pr-4">
                        <img src="/profile.jpg" alt="" className="rounded-full md:h-12" />
                    </div>
                </div>
            }
        </div>
    );
};

export default AppBar;
