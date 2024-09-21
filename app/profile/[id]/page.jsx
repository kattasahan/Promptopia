"use client";

import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function UserProfile({ params }) {
  const searchParams = useSearchParams();
  const [userPosts, setUserPosts] = useState([]);

  async function fetchPosts() {
    const response = await fetch(`/api/users/${params?.id}/posts`);
    const posts = await response.json();
    setUserPosts(posts);
  }

  useEffect(() => {
    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <Profile
      name={`${searchParams.get("name")}'s`}
      desc={"description"}
      data={userPosts}
    />
  );
}

export default UserProfile;
