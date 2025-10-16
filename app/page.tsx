"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">

      {/* Simple Shadcn Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <div>
                <Link href="/about">
                  About
                </Link>
              </div>
              
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <div>
                <Link href="/portfolio">
                  Portfolio
                </Link>
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <div>
                <Link href="/publications">
                  Publications
                </Link>
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <div>
                <Link href="/community">
                  Community
                </Link>
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <div>
                <Link href="/contacts">
                  Contacts
                </Link>
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>


        </NavigationMenuList>
      </NavigationMenu>
    </main>
  );
}
