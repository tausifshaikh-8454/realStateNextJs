import Link from "next/link";
import logo from "../assets/logo_white_svg_fill.webp";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const itemSubmenu: { title: string; href: string }[] = [
  {
    title: "item 1",
    href: "#",
  },
  {
    title: "item 2",
    href: "#",
  },
  {
    title: "item 3",
    href: "#",
  },
];

export default function Head() {
  return (
    <header className="bg-transparent z-99 relative">
      <div className="flex flex-row mx-auto max-w-[1440px] w-full py-5 px-[20px]">
        <div className="w-[50%]">
          <Image src={logo} alt="Next.js logo" />
        </div>
        <div className="w-[50%] flex justify-end">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-row gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    className="font-Roboto font-medium text-[16px]"
                    href="/"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    className="font-Roboto font-medium text-[16px]"
                    href="/about-us"
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-Roboto font-medium text-[16px]">Items</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="w-100">
                    {itemSubmenu.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink>
                          <Link href={item.href}>{item.title}</Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    className="font-Roboto font-medium text-[16px]"
                    href="/about-us"
                  >
                    Events
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    className="font-Roboto font-medium text-[16px]"
                    href="/about-us"
                  >
                    Contact Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
