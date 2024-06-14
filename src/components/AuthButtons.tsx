import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { Link } from 'react-router-dom';
import authBtn from '../assets/Auth Buttons.png';
const AuthButtons = () => {
  return (
    <NavigationMenu className="">
      <NavigationMenuList>
        <NavigationMenuItem className="">
          <NavigationMenuTrigger className="bg-[#FFF4F4] hover:bg-[#FFF4F4] ">
            <img src={authBtn} alt="Urban Styles" />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute">
            {/* <Link to={'/login'} className="w-full h-full">
              <NavigationMenuLink>
                Already have an account ? Login
              </NavigationMenuLink>
            </Link>
            <Link to={'/register'} className="w-full h-full">
              <NavigationMenuLink>New here? Register</NavigationMenuLink>
            </Link> */}

            <ul className="grid w-64 gap-3 p-2 md:w-96 md:grid-cols-1 lg:w-64 h-20  right-11">
              <li>
                <Link to={'/login'} className="w-full h-full">
                  <NavigationMenuLink>
                    Already have an account ? Login
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link to={'/register'} className="w-full h-full">
                  <NavigationMenuLink>New here? Register</NavigationMenuLink>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default AuthButtons;
