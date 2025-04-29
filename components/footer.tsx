import { APP_NAME } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="flex justify-center items-center p-4 bg-gray-800 text-white">
        <p className="text-sm">
          &copy; {currentYear} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
