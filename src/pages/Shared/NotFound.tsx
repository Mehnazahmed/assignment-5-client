import notFound from "@/assets/notFound.png";
export default function NotFound() {
  return (
    <div className="mx-auto flex justify-center">
      <img src={notFound} alt=" not found page" />
    </div>
  );
}
