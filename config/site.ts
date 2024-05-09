export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "ITCC 2024",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Competition",
      href: "app/Competition",
    },
    {
      label: "Semnas",
      href: "app/Semnas",
    },
    {
      label: "P'cozzy",
      href: "app/P'cozzy",
    },
    {
      label: "Merchandise",
      href: "app/Merchandise",
    }
	],
};
