import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface Props {
  children: React.ReactNode;
}
export const PrivateRoute = ({ children }: Props) => {
  const { currentUser } = useAuth();
  return <>{currentUser ? children : <Navigate to="/home" />}</>;
};
