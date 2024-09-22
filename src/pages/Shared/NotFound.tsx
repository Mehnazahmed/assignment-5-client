import notFound from "@/assets/notFound.png";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="mx-auto flex justify-center">
      <img src={notFound} alt=" not found page" />
      <Link className="text-center" to="/">
        Go to Home Page
      </Link>
    </div>
  );
}
