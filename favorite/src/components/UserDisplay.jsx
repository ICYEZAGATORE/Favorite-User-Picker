import { useFavoriteUser } from "./FavoriteUserContext";

const UserDisplay = () => {
  const { favoriteUser, clearFavoriteUser } = useFavoriteUser();

  if (!favoriteUser) {
    return (
      <div className="p-4 bg-gray-100 rounded mb-4">
        <p>You haven't selected a favorite user yet. Click on a user below!</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-blue-50 rounded mb-4">
      <h2 className="text-xl font-bold mb-2">Your Favorite User</h2>
      <div className="mb-3">
        <p>
          Your favorite user is{" "}
          <span className="font-bold">{favoriteUser.name}</span> (
          {favoriteUser.email})
        </p>
      </div>
      <button
        onClick={clearFavoriteUser}
        className="bg-green-900 text-white px-4 py-2 rounded"
      >
        Clear Favorite
      </button>
    </div>
  );
};

export default UserDisplay;
