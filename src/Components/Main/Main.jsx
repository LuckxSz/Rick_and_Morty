import { useState } from "react";
import { useFetchApi } from "../utils/Hooks/useFetchApi";

export const Main = () => {
  const [page, setPage] = useState(1);
  const { results: data, info, loading } = useFetchApi(`/character?page=${page}`);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleNextPage = () => {
    if (info.next) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (info.prev) {
      setPage(page - 1);
    }
  };

  return (
    <div className="flex flex-col items-center mt-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {loading ? "Loading..." : ""}
        {data.map((character) => (
          <div key={character.id} className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="p-4">
              <h1 className="text-lg font-semibold mb-2 text-center">{character.name}</h1>
              <img
                src={character.image}
                onClick={() => handleClick(character)}
                alt={`${character.name} image`}
                className="cursor-pointer w-full rounded-t-lg h-64 object-cover transition-transform duration-300 hover:scale-110 hover:opacity-90"
              />
            </div>
          </div>
        ))}
      </div>
      {selectedCharacter && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
          <div className="bg-white p-8 rounded-lg">
            <h1 className="text-xl font-semibold mb-4">{selectedCharacter.name}</h1>
            <img className="w-full rounded-lg mb-4" src={selectedCharacter.image} alt={`${selectedCharacter.name} image`} />
            <div className="flex items-center flex-col justify-center tracking-widest">
              <p className="text-lg font-semibold text-gray-800">Status: {selectedCharacter.status}</p>
              <p className="text-lg font-semibold text-gray-800">Species: {selectedCharacter.species}</p>
              <p className="text-lg font-semibold text-gray-800">Gender: {selectedCharacter.gender}</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4" onClick={() => setSelectedCharacter(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
      <div className="flex gap-4 p-6 justify-between mt-4 w-full px-4">
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 ${!info.prev ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
            }`}
          onClick={handlePreviousPage}
          disabled={!info.prev}
        >
          Previous Page
        </button>
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 ${!info.next ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
            }`}
          onClick={handleNextPage}
          disabled={!info.next}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};
