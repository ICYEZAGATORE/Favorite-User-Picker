import React,{useEffect, useState} from "react";
import { useFavoriteUser } from "./FavoriteUserContext";
export default function UsePick(){
        const[loading,setLoading] =useState(true)
        const[error,setError] = useState(null)
        const[users,setUsers] = useState([])
        const { updateFavoriteUser, favoriteUser } = useFavoriteUser();
 useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Could not fetch users");
        }

        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
const handlePickUser =(user) =>{
  updateFavoriteUser({
    name: user.name,
    id: user.id,
    email:user.email

  });
  
};
if(loading){
   return <div>Loading Users.....</div>;
}  
if(error){
    return <div>Error:{error}</div>;
}
return (
  <div className="">
    <h2>Select a class name</h2>
    <ul>
      {users.map((user) => (
        <li
          key={user.id}
          className={`p-3 border rounded cursor-pointer 
              ${
                favoriteUser?.id === user.id
                  ? "bg-blue-100 border-blue-300"
                  : "bg-white hover:bg-gray-50"
              }`}
          onClick={() => handlePickUser(user)}
        >
          <div className="font-bold">{user.name}</div>
          <div className="text-gray-600">{user.email}</div>
        </li>
      ))}
    </ul>
  </div>
);
}