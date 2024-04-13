"use client";
import { IconButton } from "@/components/ui";
import Image from "next/image";
import { MdOutlineRestartAlt } from "react-icons/md";
import { IoIosSkipForward } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { Timer } from "@/components/features";
import { useEffect, useState } from "react";
import { auth, firestore } from "@/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Home() {
  const [data, setData] = useState({
    email:"",
    name:"Loading"
  });
  const router = useRouter();
  useEffect(() => {
    const fetchUserData = () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          // User is signed in
          const uid = user.uid;
          console.log("signed in");
          let docRef = doc(firestore, "users", uid);
          let docSnapshot = await getDoc(docRef);
          setData(docSnapshot.data());
        } else {
          // No user is signed in
          router.push('/log-in');
        }
      });
    };
    fetchUserData();
  },[]);
  return (
    <main>
      <div className="flex flex-col space-y-20">
        <div className="text-black text-center">
          <h3 className=" text-5xl text-center font-bold">
            Pomodory
          </h3>
          {data.name != "" && <h4>{data.name}</h4>}
        </div>
        <Timer/>
      </div>
    </main>
  );
}
