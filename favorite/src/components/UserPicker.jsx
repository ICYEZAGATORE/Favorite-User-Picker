import React,{useState,useEffect} from "react";
import { useFavoriteUser } from "./FavoriteUserContext";
const UserPicker =() =>{
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

  const handlePickUser = (user) => {
    updateFavoriteUser({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  };

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

}