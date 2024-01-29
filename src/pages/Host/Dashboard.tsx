import React from "react";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type Props = {};
export const loader = () => {
  return null;
};

const Dashboard = (props: Props) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    console.log("🚀 ~ handleRedirect ~ CLICK:");
    // redirect("/");
    navigate("/about");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button className="bg-red-400 p-4" onClick={handleRedirect}>
        Redrect to About programatically
      </button>
    </div>
  );
};

export default Dashboard;
