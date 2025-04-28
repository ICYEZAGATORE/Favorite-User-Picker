import { FavoriteUserProvider } from "./components/FavoriteUserContext";
import UserPicker from "./components/UserPicker";
import UserDisplay from "./components/UserDisplay";
 

 export default function App() {
  return (
    <FavoriteUserProvider>
      <div className=" p-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          Favorite User Picker
        </h1>
        <UserDisplay />
        <UserPicker />
      </div>
    </FavoriteUserProvider>
  );
}

 
