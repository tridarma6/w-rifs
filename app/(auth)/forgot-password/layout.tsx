import { Star1, Star2 } from "@/components/starbox";

export default function ForgotPasswordLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Star1 />
			<section className="relative py-8 p-20 md:py-10 max-w-3xl mx-auto z-0">
				<div className="container mx-auto max-w-screen-xl flex-grow">
					{children}
				</div>
			</section>
			<Star2 />
		</>
	);
}
