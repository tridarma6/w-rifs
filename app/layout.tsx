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
						<div className="h-max bg-regal-blue">
							<footer className="flex static flex-wrap gap-6">
								<div className="pt-4 flex-1 flex-grow flex-shrink text-white">
									<h1>ITCC 2024</h1>
									<p className="text-base text-white py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio architecto omnis soluta sapiente laborum molestias id quaerat consectetur maiores nam!</p>
									<div className="flex p-0 h-16 w-16 leading-16 justify-content-between">
										<Image className="block py-2 px-0 mx-1" src="/instagram.svg" alt="Instagram" width={24} height={24}/>
										<Image className="block py-2 px-0 mx-1" src="/twitter.svg" alt="twitter" width={24} height={24}/>
										<Image className="block py-2 px-0 mx-1" src="/facebook.svg" alt="facebook" width={24} height={24}/>
										<Image className="block py-2 px-0 mx-1" src="/youtube.svg" alt="youtube" width={24} height={24}/>
									</div>
								</div>

								<div className="pt-4 flex-1 flex-grow flex-shrink w-25rem text-white pl-10">
									<h2 className="text-2xl">Competition</h2>
									<div className="p-0 h-16 w-16 leading-16 text-start px-0">
										<Link href="#" className="block py-2 px-0 text-lg  text-white">Programming</Link>
										<Link href="#" className="block py-2 px-0 text-lg  text-white">KGP</Link>
										<Link href="#" className="block py-2 px-0 text-lg  text-white">WebDesign</Link>
										<Link href="#" className="block py-2 px-0 text-lg  text-white">UI UX</Link>
									</div>
								</div>
								<div className="pt-4 flex-1 flex-grow flex-shrink w-25rem text-white">
									<h2 className="text-2xl">Other</h2>
									<div className="p-0 h-16 w-16 leading-16 text-start px-0">
										<Link href="#"className="block py-2 px-0 text-lg  text-white">SeminarNasional</Link>
										<Link href="#" className="block py-2 px-0 text-lg  text-white">WorkshopPcozzy</Link>
									</div>
								</div>
							</footer>
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
