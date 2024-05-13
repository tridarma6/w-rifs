import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import {Image} from "@nextui-org/react";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
							<main className="container mx-auto max-w-screen-xl pt-16 px-12 flex-grow">
								{children}
							</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}

const Footer = () => {
	return(
		<div className="h-max w-full bg-regal-blue mt-6 bottom-0">
			<footer className="flex justify-center static flex-wrap gap-6 mt-6 ml-24 py-6 mb-10">
				<div className="flex-1 flex-grow flex-shrink text-white w-48">
					<p className="text-white text-2xl font-bold">ITCC 2024</p>
					<p className="text-white mt-2.5 w-96 text-sm/[18px] text-balance">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nobis cum voluptate necessitatibus dolores aliquid assumenda cumque eligendi, esse natus ratione in voluptates veritatis ipsam.</p>
					<div className="flex h-16 w-16 gap-x-5 mt-5">
						<Image className="block py-2 px-0 mx-3" src="/instagram.svg" alt="Instagram" width={24} height={24}/>
						<Image className="block py-2 px-0 mx-3" src="/twitter.svg" alt="twitter" width={24} height={24}/>
						<Image className="block py-2 px-0 mx-3" src="/facebook.svg" alt="facebook" width={24} height={24}/>
						<Image className="block py-2 px-0 mx-3" src="/youtube.svg" alt="youtube" width={24} height={24}/>
					</div>
				</div>

				<div className="flex-1 flex-grow flex-shrink text-white pl-10">
					<h2 className="text-2xl font-semibold">Competition</h2>
					<div className="p-0 h-16 leading-16 text-start px-0 text-base">
						<Link href="#" className="block py-3 px-1 text-lg  text-white flex gap-[7px]">Programming <Image src="arrow-right.svg"/></Link>
						<Link href="#" className="block py-3 px-1 text-lg  text-white flex gap-[7px]">KGP <Image src="arrow-right.svg"/></Link>
						<Link href="#" className="block py-3 px-1 text-lg  text-white flex gap-[7px]">Web Design <Image src="arrow-right.svg"/></Link>
						<Link href="#" className="block py-3 px-1 text-lg  text-white flex gap-[7px]">UI UX <Image src="arrow-right.svg"/></Link>
					</div>
				</div>
				<div className="flex-1 flex-grow flex-shrink text-white pl-0">
					<h2 className="text-2xl font-semibold">Other</h2>
					<div className="p-0 h-16 leading-16 text-start px-0 text-base">
						<Link href="#"className="block py-3 px-0 text-lg  text-white flex gap-[7px]">Seminar Nasional <Image src="arrow-right.svg"/></Link>
						<Link href="#" className="block px-0 text-lg  text-white flex gap-[7px]">Workshop P&apos;cozzy <Image src="arrow-right.svg"/></Link>
					</div>
				</div>
			</footer>
			<div className="ml-24 flex w-11/12 border-t-1 border-gray-100">
					<p className="ml-15 px-4 py-4 w-11/12 font-bold text-3xl text-white justify-start">Logo</p>
					<Image className="flex justify-end w-14 h-12 mr-5 m-5" src="/dropdown-icon.svg" alt="dropdown" />
			</div>
		</div>
	);
}
