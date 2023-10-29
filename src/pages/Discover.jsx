import { Error, SongCard,Loader } from "../components";
import { useSelector } from "react-redux";
import { useState } from "react";
import {genres} from "../assets/constants";
const Discover = () => {
    const [selectedGenre,setGenre] = useState("");
    const data = useSelector(reducer=>reducer.player);
    console.log(data)
    // console.log(genres)
    return(
        <div>
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10 ">
                <p className="text-white font-bold">Discover {selectedGenre}</p>
                <select value={selectedGenre} onChange={(e)=>setGenre(e.target.value)} className="bg-black
                 text-gray-200 p-3 text-sm outline-none rounded-lg sm:mt-0 mt-5">
                    {genres.map((genre,i)=><option key={i} value={genre.title}>{genre.title}</option>)}
                </select>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {[1,2,3,4,5,6,7,8,9,10,11,12].map((song,i)=><SongCard key={song} song={song} i={i}/>)}
            </div>
        </div>
    )
}

export default Discover;
