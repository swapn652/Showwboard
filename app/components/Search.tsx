const Search = () => {
    return (
        <div className="flex flex-col">
            <div className="
                flex 
                justify-center 
                mt-20 
                text-5xl 
                md:text-7xl"
            >
                Showwboard
            </div>
            <input className="
                flex
                self-center 
                md:w-[600px] 
                md:h-[50px] 
                border-2 
                border-black 
                rounded-md 
                text-3xl 
                mt-20 
                p-2" 
                placeholder="Enter your username..."
            />
            <button className="
                flex 
                self-center 
                justify-center 
                items-center 
                h-[50px] 
                w-[200px] 
                bg-black 
                text-white 
                border-2 
                border-gray-400 
                rounded-md mt-10
            ">
                Enter
            </button>
        </div>
    )
}

export default Search