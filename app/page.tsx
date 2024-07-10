import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import Image from "next/image";
import { kenia } from "./ui/fonts";

export default function Page() {
  return (
    // Container
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarTop}>
          <div className={styles.logo}>
            <Image src="/Bed-logo.png" alt="logo" width={180} height={180} />
            <span className={`${kenia.className}`}>FURNITURE</span>
          </div>
          <div className={styles.searchBar}>
            <input type="text" placeholder="What are you looking for?" />
            <Image src="/2.png" alt="search" width={20} height={20} />
          </div>
          <div className={styles.user}>
            <Image src="/4.png" alt="user" width={30} height={20} />
            <span>$0.00</span>
            <Image src="/9.png" alt="cart" width={30} height={20} />
            <span>Express</span>
          </div>
        </div>
        <div className={styles.navList}>
          <div>
            <Image src="/10.png" alt="menu" width={50} height={50} />
            <p>Home</p>
          </div>
          <div>
            <Image src="/1.png" alt="menu" width={50} height={50} />
            <p>Products</p>
          </div>
          <div>
            <Image src="/7.png" alt="menu" width={70} height={60} />
            <p>Pricing</p>
          </div>
          <div>
            <Image src="/11.png" alt="menu" width={50} height={50} />
            <p>Blog</p>
          </div>
          <div>
            <Image src="/5.png" alt="menu" width={70} height={50} />
            <p>Sales</p>
          </div>
          <div>
            <Image src="/3.png" alt="menu" width={50} height={50} />
            <p>Contact</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
