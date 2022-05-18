import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (user) {
      fetch(`https://caring-doctors-portal.herokuapp.com/user/${user?.user?.uid}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          setToken(accessToken);
          localStorage.setItem("accessToken", data.token);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
