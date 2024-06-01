import { useState } from "react";
import { useFetchApi } from "../utils/Hooks/useFetchApi";

export const Main = () => {
  const { data, loading } = useFetchApi("https://rickandmortyapi.com/api/character");
  const [selectedCharacter, setSelectedCharacter] = useState(null)


  const handleClick = (idx) => {
    setSelectedCharacter(idx)

  }


  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {loading ? "Loading..." : ""}
      {data.map((idx) => (
        <div key={idx.id} className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md">
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">{idx.name}</h1>
            <img src={idx.image}
              onClick={() => handleClick(idx)}
              alt={idx.name}
              className="w-full hover:scale-110 duration-200 rounded-lg h-64 object-cover " />
          </div>
        </div>
      ))}
    </div>
  );
};
