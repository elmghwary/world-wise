import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/FakeAuthContext";

function ProtectedRoute({ children }) {
  const { isAuthed } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthed) navigate("/");
    },
    [isAuthed, navigate]
  );

  return isAuthed ? children : null;
}

export default ProtectedRoute;
