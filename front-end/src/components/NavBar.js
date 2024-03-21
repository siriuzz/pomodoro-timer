import React from "react";
import Image from "next/image";
import { FormButton } from "./FormButton";
import { NavBarButton } from "./NavBarButton"

function NavBar() {
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
                <NavBarButton text={'Iniciar sesión'} ></NavBarButton>
                <NavBarButton text={'Regístrate'} ></NavBarButton>
                {/* <FormButton text={'Iniciar sesión'} className='bg-transparent'></FormButton> */}
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default NavBar;
