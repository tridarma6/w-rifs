import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";

export const Navbar = () => {

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full flex justify-between items-center"> {/* Mengubah justify="start" menjadi justify="between" dan menambahkan items-center */}
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1 ml-10" href="/">
						<p className="font-bold text-inherit text-xl">Logo</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className=" justify-center items-center hidden lg:flex">
				<ul className="hidden lg:flex gap-10 flex-grow m-15" style={{ fontFamily: 'Poppins, sans-serif' }}>
					{siteConfig.navItems.map((item, index) => (
						index !== 0 &&
						<NavbarItem key={item.href} className="m-15">
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden sm:flex gap-2">
					<Image src="/user.svg" alt="account" width={26} height={26}/>
				</NavbarItem>
				
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-2 pl-0" justify="end">
				<ThemeSwitch />
				<Image src="/user.svg" alt="account" width={26} height={26}/>
			</NavbarContent>

			<NavbarMenu>
			</NavbarMenu>
		</NextUINavbar>
	);
};
