import React from "react";
import Image from "next/image";
import { NavBarButton } from "@/components/layout";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="flex justify-between bg-blue-300 h-auto">
          {/* //logo */}
          <div className="m-3">
            <Image
              src="/next.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            POMODORY
          </div>
          <div>
            <div className="flex">
              <NavBarButton text={"Iniciar sesión"} href={'/log-in'}></NavBarButton>
              <NavBarButton text={"Regístrate"} href={'/sign-in'}></NavBarButton>
              {/* <FormButton text={'Iniciar sesión'} className='bg-transparent'></FormButton> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
