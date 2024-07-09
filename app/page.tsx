import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import Image from "next/image";

export default function Page() {
  return (
    // Container
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-top">
          <div className="logo">
            <Image src="/Bed-logo.png" alt="logo" width={80} height={80} />
            <span>FURNITURE</span>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="What are you looking for?" />
            <Image src="/2.png" alt="search" width={20} height={20} />
          </div>
        </div>
      </nav>
    </div>
  );
}
