import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase-init";
import Loading from "../Shared/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  useEffect(() => {
    if (gUser) {
      navigate("/");
      console.log(gUser.user);
    }
  }, [gUser, navigate]);

  if (gError) {
    <p className="text-red-500">{gError.message}</p>;
  }

  if (gLoading) {
    return <Loading />;
  }

  return (
    <div>
      <button
        className="btn btn-outline btn-success w-full"
        onClick={() => signInWithGoogle()}
      >
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
