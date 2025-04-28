import { FavoriteUserProvider } from "./components/FavoriteUserContext";
import UserPicker from "./components/UserPicker";
import UserDisplay from "./components/UserDisplay";
import UsePick from "./components/UserPick";

function App() {
  return (
    <FavoriteUserProvider>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          Favorite User Picker
        </h1>
        <UserDisplay />
        <UserPicker />
      </div>
    </FavoriteUserProvider>
  );
}

export default App;
