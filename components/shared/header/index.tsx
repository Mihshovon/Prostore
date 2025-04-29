import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

export default function Header() {
  return (
    <header className="border-b w-full">
      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 w-full flex justify-between items-center">
        <Link href="/" className="flex items-center justify-start p-3">
          <Image
            src="/images/logo.svg"
            alt={`${APP_NAME} logo`}
            width={48}
            height={48}
            priority={true}
          />
          <span className="hidden lg:block font-bold text-2xl ml-3">
            {APP_NAME}
          </span>
        </Link>
        <div>
          <Menu />
        </div>
      </div>
    </header>
  );
}
