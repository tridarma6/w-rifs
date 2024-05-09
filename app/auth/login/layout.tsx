export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
			<div className="container mx-auto max-w-screen-xl flex-grow">
				{children}
			</div>
	);
}
