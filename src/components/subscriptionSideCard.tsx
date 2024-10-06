const SubscriptionSideCard = ({live}:{live:boolean})=>{
    return <div className="flex items-center  hover:bg-zinc-800
        cursor-pointer gap-1rounded-xl w-11/12 gap-1.5 p-2 hover:rounded-lg ">
        <div className="w-1/4  ">
            <img src="/profile.jpg" alt="" className="w-8 h-8 rounded-full"/>
        </div>
        <div className="flex items-center w-3/4 justify-between ">
            <div className={`${live ? "w-9/12" :"" } overflow-hidden`}>
                <p className="">Poscostsdsfafdafafafdafd</p>
            </div>
            {
                live && <div className="text-red-700 gap-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </div>
            }
        </div>
    </div>
}
export default SubscriptionSideCard