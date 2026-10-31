import Link from "next/link";
import { CgEventbrite } from "react-icons/cg";
import LoginAndTheme from "./NavRightSide";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Avatar from "../../../(userDashboard)/_components/Navbar/Avatar";
import UpComingEvents from "./up-comming";


export default async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-navbar/80 backdrop-blur-md transition-colors duration-300">
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-semibold tracking-tight text-foreground"
          >
            <CgEventbrite className="size-6 text-primary transition-transform duration-300 group-hover:rotate-90" />
            <span className="hidden sm:inline">Social Event Management System</span>
            <span className="sm:hidden">SEMS</span>
          </Link>

          {/* Desktop links */}
          
          <UpComingEvents/>
          {/* Right side */}

          {
            session?.user ?
            <Avatar userData={session.user}/>

            :
            <LoginAndTheme/>
          }

          
        </div>

        {/* Mobile menu (animated height) */}
        
      </nav>
    </header>
  );
}