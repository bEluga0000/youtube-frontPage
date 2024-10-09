import SubscriptionSideCard from "./subscriptionSideCard"
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
// import "@/styles/globals.css";
const OpenSideBar = () => {
    return <>
        <div className="w-screen bg-transparent h-screen max-h-screen z-30 absolute overflow-y-scroll overflow-x-hidden grid grid-cols-12 fixed pb-10 " style={{}} id="scroll-container">
        <div className="col-span-5 px-2 sm:col-span-4 md:col-span-3 lg:col-span-2 flex flex-col items-center pt-2 bg-black overflow-y-auto pb-5 ">
            <div className="flex items-center  hover:bg-zinc-800
        cursor-pointer gap-1 rounded-xl w-11/12 gap-5 mx-2 p-2 hover:rounded-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>
                <div>
                    <p className="text-lg">home</p>
                </div>
            </div>
            <div className="flex items-center  hover:bg-zinc-800
        cursor-pointer gap-1 rounded-xl w-11/12 gap-5 mx-2 p-2 hover:rounded-lg">
                <div>
                        <SiYoutubeshorts size={20}/>
                </div>
                <div>
                    <p className="text-lg">Shorts</p>
                </div>
            </div>
            <div className="flex items-center  hover:bg-zinc-800
        cursor-pointer gap-1 rounded-xl w-11/12 gap-5 mx-2 p-2 hover:rounded-lg">
                <div>
                        <MdOutlineSubscriptions size={20}/>
                </div>
                <div>
                    <p className="text-lg">Subscription</p>
                </div>
            </div>
            <div>
                <hr />
            </div>
            <div className="flex items-center  hover:bg-zinc-800
        cursor-pointer gap-1rounded-xl w-11/12 gap-5 mx-2 p-2 hover:rounded-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </div>
                <div>
                    <p className="text-lg">History</p>
                </div>
            </div>
            <div className="flex items-center  hover:bg-zinc-800
        cursor-pointer gap-1rounded-xl w-11/12 gap-5 mx-2 p-2 hover:rounded-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                    </svg>

                </div>
                <div>
                    <p className="text-lg">Liked</p>
                </div>
            </div>
            <div className="flex items-center  hover:bg-zinc-800
        cursor-pointer gap-1rounded-xl w-11/12 gap-5 mx-2 p-2 hover:rounded-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                </div>
                <div>
                    <p className="text-lg">Downloads</p>
                </div>
            </div>
            <div className="flex items-center  hover:bg-zinc-800
        cursor-pointer gap-1rounded-xl w-11/12 gap-5 mx-2 p-2 hover:rounded-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>

                </div>
                <div>
                    <p className="text-lg">Trending</p>
                </div>
            </div>
            <div className="flex items-center  hover:bg-zinc-800
        cursor-pointer gap-1rounded-xl w-11/12 gap-5 mx-2 p-2 hover:rounded-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                    </svg>

                </div>
                <div>
                    <p className="text-lg">Music</p>
                </div>
            </div>
            <div className="flex items-center  hover:bg-zinc-800
        cursor-pointer gap-1rounded-xl w-11/12 gap-5 mx-2 p-2 hover:rounded-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>



                </div>
                <div>
                    <p className="text-lg">live</p>
                </div>
            </div>
            <div className="flex items-center  hover:bg-zinc-800
        cursor-pointer gap-1rounded-xl w-11/12 gap-5 mx-2 p-2 hover:rounded-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                    </svg>

                </div>
                <div>
                    <p className="text-lg">Sport</p>
                </div>
            </div>
            <div className="flex items-center  hover:bg-zinc-800
        cursor-pointer gap-1rounded-xl w-11/12 gap-5 mx-2 p-2 hover:rounded-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                    </svg>


                </div>
                <div>
                    <p className="text-lg">Poscosts</p>
                </div>
            </div>
            <div className="flex items-center rounded-xl w-11/12 gap-5 mx-2 p-2 hover:rounded-lg">
                {/* <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                    </svg>


                </div> */}
                <div>
                    <p className="text-lg">Subscriptions</p>
                </div>
            </div>
            <div className="w-full">
               <SubscriptionSideCard live/>
                <SubscriptionSideCard live={false}/>
                <SubscriptionSideCard live={false} />
                <SubscriptionSideCard live={false} />
                <SubscriptionSideCard live={false} />
                <SubscriptionSideCard live={false}/>
            </div>
        </div>
        <div className="col-span-8 md:col-span-10 bg-black bg-opacity-50 ">

        </div>
    </div>
    </>

}
export default OpenSideBar