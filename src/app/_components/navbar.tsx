import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export function Navbar() {
    return (
        <NavigationMenu className="flex mx-auto px-4 ">
            <NavigationMenuList className="flex lg:space-x-20 md:space-x-5  justify-between">
                <NavigationMenuItem>
                    <NavigationMenuLink href="">Quem somos?</NavigationMenuLink>
                </NavigationMenuItem>
                                <NavigationMenuItem>
                    <NavigationMenuLink href="">Assine</NavigationMenuLink>
                </NavigationMenuItem>
                                <NavigationMenuItem>
                    <NavigationMenuLink href="">Redes sociais</NavigationMenuLink>
                </NavigationMenuItem>
                                <NavigationMenuItem>
                    <NavigationMenuLink href="">Fotos</NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}