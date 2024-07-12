const OpenSideBar = () => {
    return <div className="w-screen bg-transparent h-screen max-h-screen z-30 absolute overflow-y-scroll overflow-x-hidden  grid grid-cols-12 fixed">
        <div className="col-span-4  md:col-span-3 flex flex-col items-center pt-2 bg-gray-600">
            <div className="flex items-center  hover:bg-zinc-800
        cursor-pointer gap-1rounded-xl w-11/12 gap-5 mx-2 p-2 hover:rounded-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>
                <div>
                    <p className="text-lg">home</p>
                </div>
            </div>
            
        </div>
        <div className="col-span-8 md:col-span-9 bg-black bg-opacity-50 ">

        </div>
    </div>

}
export default OpenSideBar