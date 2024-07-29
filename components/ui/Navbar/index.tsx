import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { links } from "@/lib/links";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (router.asPath.includes("#")) {
      const anchor = router.asPath.substring(router.asPath.indexOf("#") + 1);
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.asPath]);

  const handleCloseMenu = () => setShowMenu(false);

  return (
    <nav className="navbar flex items-centerabsolute w-full">
      <div className="container absolute right-5 pt-5 flex items-center justify-end gap-8">
        <div className="hidden lg:flex justify-end mr-10">
          <ul className="flex space-x-7 text-base list-none">
            {links.map((link, index) => (
              <li key={index} className={styles.headers} data-text={link.text}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`${showMenu ? "flex" : "hidden"} lg:!hidden items-center justify-center flex-col gap-4 fixed w-full h-full top-0 left-0 bg-[rgb(11,46,60)] z-[2000]`}
      >
        <ul className="flex flex-col items-center gap-6 text-base list-none">
          {links.map((link, index) => (
            <li key={index} className={styles.headers} data-text={link.text}>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCloseMenu}
                >
                  {link.text}
                </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
