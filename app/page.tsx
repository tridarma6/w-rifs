import {Card, CardHeader, CardBody, CardFooter, Divider, Image, Link} from "@nextui-org/react";
import React from "react";
import {Input, Button} from "@nextui-org/react";

export default function Home() {
	return (
		<>
			<div className="flex">
				<div className="w-3/5">
					<div className="flex">
						<Image className="w-96" src="icon-maskot-itcc.svg" alt="gambar1"/>
						<Image className="mt-28 mr-80" src="itcc.svg" alt="gambar2"/> 
					</div>
					<div className="flex">
						<Image className="ml-20 mt-32" src="row-icon.svg" alt="icon row" />
						<Image className="ml-16 mr-20 mt-4" src="2024-icon.svg" alt="tulisan itcc"/>
						<p className="text-base text-balance mt-4 leading-9 ml-26 font-medium font-semibold">Innovation of Technology to Build the Digital Capabilities of Indonesia's Generation</p>
					</div>
					<div className="flex">
						<p className="flex justify-start text-primary ml-40 text-4xl font-sans">Scroll Down</p>
					</div>
				</div>

				<div className="static w-3/4 ml-32">
					<Image className="w-max" src="star1.svg" alt="gambar"/>
					<Image className="" src="profile-itcc.png" width={570} height={445} alt="gambar2"/>
					<div className="absolute bottom-28 right-48">
						<Image className="flex w-max bottom-0 right-0" src="star2.svg" width={40} height={40} alt="gambar"/>
					</div>
				</div>
			</div>
			<Image className="flex w-max mt-12" src="star2.svg" width={40} height={40} alt="gambar"/>
			<div className="mt-16">
				<div className="flex flex-row justify-center h-11">
					<h1 className="font-rubik font-bold text-regal-blue text-4xl font-rubik tracking-widest">WHAT IS ITCC?</h1>
				</div>
				<div className="text-center w-1171 h-218 mt-7">
					<p className="font-rubik font-normal text-2xl leading-normal tracking-4 text-black">Information Technology Creative Competition (ITCC) is the largest competition in the field of Information Technology in Bali, which is organized by the Information Technology Student Association (HMTI) of Udayana University. From year to year, ITCC always raises interesting topics in the world of technology.</p>
				</div>
			</div>
			
			<div className="flex w-1260 mt-20">
				<div className="flex flex-col items-start w-489 h-218">
					<div className="flex flex-col">
						<div className="w-font-rubik font-semibold text-32 text-black"><p className="h-24 w-44">Become a Sponsor</p></div>
					</div>
					<p className="mr-20 text-start font-normal tracking-2">As a sponsor, we’re promising reach to thousands of people who are interested in your brand. What better way to get your brand in front of people.</p>
					<Link href="#" className="mt-4" underline="always">Contact Us<Image className="ml-2 w-3 h-3" src="arrow-right-up.svg"/></Link>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-end w-648 left-675 h-323">
					<div className="w-full flex justify-center items-center border-solid border-2 rounded-xl border-black w-200 h-130"><Image src="julias-berger-image.svg"/></div>
      				<div className="w-full flex justify-center items-center border-solid border-2 rounded-xl border-black w-182 h-161"><Image src="julias-berger-image.svg"/></div>
      				<div className="w-full flex justify-center items-center border-solid border-2 rounded-xl border-black w-200 h-130"><Image src="julias-berger-image.svg"/></div>
      				<div className="w-full flex justify-center items-center border-solid border-2 rounded-xl border-black w-200 h-130"><Image src="julias-berger-2.svg"/></div>
      				<div className="w-full flex justify-center items-center border-solid border-2 rounded-xl border-black w-200 h-130"><Image src="julias-berger-2.svg"/></div>
      				<div className="w-full flex justify-center items-center border-solid border-2 rounded-xl border-black w-200 h-130"><Image src="add-image.svg"/></div>
				</div>
			</div>

			<div className="mt-44">
				<div className="flex justify-center ml-[460px]">
					<Image src="star2.svg" width={40} height={40} className="transform rotate-16.82"/>
				</div>
				<h1 className="font-bold text-center text-regal-blue text-4xl">SEE OUR COMPETITION </h1>
			</div>
			<div className="container mt-28">
				<div className="flex w-[1187px] h-[486px] rounded-[20px]">
					<Image src="banner-programming.svg" className="z-20"/>
					<div className="bg-regal-blue w-[593.5px] text-white z-10">
						<p>A community of Influencers and Tech Personalities forging a stage where  the continent’s brightest minds meet new partners, and, the sharpest innovators to share their visions.</p>
					</div>
				</div>
				<div className="w-[1187px] h-[486px]">

				</div>
				<div className="w-[1187px] h-[486px]">

				</div>
				<div className="w-[1187px] h-[486px]">

				</div>
			</div>
		</>
	);
}
