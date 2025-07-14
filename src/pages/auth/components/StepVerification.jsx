import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createBusiness } from "../../../services/business.service";
import { account } from "../../../lib/appwriteConfig";
import Splash from "../../../components/splash/Splash";

const StepVerification = ({ data }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const finish = async () => {
      try {
        await account.create(
          "unique()",
          data.ownerEmail,
          data.password,
          data.ownerName
        );
        await account.createEmailPasswordSession(
          data.ownerEmail,
          data.password
        );
        await createBusiness(data);
        navigate("/Storebook/dashboard", { replace: true });
      } catch (err) {
        alert("Sign-up failed: " + err.message);
        console.error(err);
      }
    };
    finish();
  }, [data, navigate]);

  return <Splash text="Setting up your dashboard…" />;
};

export default StepVerification;