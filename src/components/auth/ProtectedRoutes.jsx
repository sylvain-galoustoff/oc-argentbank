import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRoutes() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [navigate, token]);

  return <Outlet />;
}

export default ProtectedRoutes;
