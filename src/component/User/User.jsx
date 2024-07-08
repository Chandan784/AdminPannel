import React from "react";
import { db } from "../../firebase/firebase";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  Timestamp,
  setDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import UserCard from "./UserCard";

function User() {
  const [users, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "USERS"));
        const categoriesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(categoriesList);
        console.log(users);
      } catch (e) {
        console.error("Error fetching documents: ", e);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="  w-full gap-4 grid grid-cols-3">
        {users.map((data) => {
          return <UserCard data={data} />;
        })}
      </div>
    </div>
  );
}

export default User;
