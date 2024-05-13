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
						<p className="text-base text-balance mt-4 leading-9 ml-26 font-medium font-semibold">Innovation of Technology to Build the Digital Capabilities of Indonesia Generation</p>
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
      				<div className="w-full flex justify-center items-center border-solid border-2 rounded-xl border-regal-blue w-200 h-130"><Image src="add-image.svg"/></div>
				</div>
			</div>

			<div className="mt-44">
				<div className="flex justify-center ml-[550px]">
					<Image src="star2.svg" width={40} height={40} className="transform rotate-16.82"/>
				</div>
				<h1 className="font-bold text-center text-regal-blue text-4xl tracking-[0.16em]">SEE OUR COMPETITION </h1>
			</div>
			<div className="container mt-28">
				<div className="w-[1187px] h-[486px] flex justify-between bg-regal-blue border-hidden border-2 border-regal-blue rounded-[20px]">
						<div className="relative bg-regal-blue w-[593.5px] text-white m-0 rounded-l-[20px]">
						<Image src="banner-blue.svg" className="z-0"/>
						<div className="absolute inset-0 bottom-0 flex justify-center items-stretch">
							<p className="text-white text-[48px] font-bold z-10 self-end mx-10 my-10 tracking-[0.1em]">Programming</p>
						</div>
					</div>
					<div className="relative bg-regal-blue w-[593.5px] text-white m-0 rounded-r-[20px]">
						<div className="ml-[52.1px] mr-10 mt-[-0.21px] mt-[49.93px]">
							<p className="font-rubik font-normal text-[20px] text-white flex items-center leading-9">A community of Influencers and Tech Personalities forging a stage where  the continent’s brightest minds meet new partners, and, the sharpest innovators to share their visions.</p>
						</div>
						<div className="static flex gap-6">
							<div className="absolute bottom-0 left-0 mx-10 my-10">
								<Link href="#" color="foreground" className="text-white text-[32px]">Join <Image src="arrow-right-up.svg"/></Link>
							</div>
							<div className="absolute bottom-0 right-0 mx-10 my-10">
								<Image src="image.png"/>
							</div>
						</div>
					</div>
				</div>

				<div className="w-[1187px] h-[486px] flex justify-between bg-biru-hijau border-hidden border-2 border-biru-hijau rounded-[20px] mt-16">
						<div className="relative bg-biru-hijau w-[593.5px] text-white m-0 rounded-l-[20px]">
						<Image src="banner-green.svg" className="z-0"/>
						<div className="absolute inset-0 bottom-0 flex justify-center items-stretch">
							<p className="text-white text-[48px] font-bold z-10 self-end mx-10 my-10 tracking-[0.1em]">Web Design</p>
						</div>
					</div>
					<div className="relative bg-biru-hijau w-[593.5px] text-white m-0 rounded-r-[20px]">
						<div className="ml-[52.1px] mr-10 mt-[-0.21px] mt-[49.93px]">
							<p className="font-rubik font-normal text-[20px] text-white flex items-center leading-9">A community of Influencers and Tech Personalities forging a stage where  the continent’s brightest minds meet new partners, and, the sharpest innovators to share their visions.</p>
						</div>
						<div className="static flex gap-6">
							<div className="absolute bottom-0 left-0 mx-10 my-10">
								<Link href="#" color="foreground" className="text-white text-[32px]">Join <Image src="arrow-right-up.svg"/></Link>
							</div>
							<div className="absolute bottom-0 right-0 mx-10 my-10">
								<Image src="image.png"/>
							</div>
						</div>
					</div>
				</div>

				<div className="w-[1187px] h-[486px] flex justify-between bg-regal-blue border-hidden border-2 border-regal-blue rounded-[20px] mt-16">
					<div className="relative bg-regal-blue w-[593.5px] text-white m-0 rounded-l-[20px]">
						<Image src="banner-blue.svg" className="z-0"/>
						<div className="absolute inset-0 bottom-0 flex justify-center items-stretch">
							<p className="text-white text-[48px] font-bold z-10 self-end mx-10 my-10 tracking-[0.1em]">UI UX</p>
						</div>
					</div>
					<div className="relative bg-regal-blue w-[593.5px] text-white m-0 rounded-r-[20px]">
						<div className="ml-[52.1px] mr-10 mt-[-0.21px] mt-[49.93px]">
							<p className="font-rubik font-normal text-[20px] text-white flex items-center leading-9">A community of Influencers and Tech Personalities forging a stage where  the continent’s brightest minds meet new partners, and, the sharpest innovators to share their visions.</p>
						</div>
						<div className="static flex gap-6">
							<div className="absolute bottom-0 left-0 mx-10 my-10">
								<Link href="#" color="foreground" className="text-white text-[32px]">Join <Image src="arrow-right-up.svg"/></Link>
							</div>
							<div className="absolute bottom-0 right-0 mx-10 my-10">
								<Image src="image.png"/>
							</div>
						</div>
					</div>
				</div>

				<div className="w-[1187px] h-[486px] flex justify-between bg-biru-hijau border-hidden border-2 border-biru-hijau rounded-[20px] mt-16">
					<div className="relative bg-biru-hijau w-[593.5px] text-white m-0 rounded-l-[20px]">
						<Image src="banner-green.svg" className="z-0"/>
						<div className="absolute inset-0 bottom-0 flex justify-center items-stretch">
							<p className="text-white text-[48px] font-bold z-10 self-end mx-10 my-10 tracking-[0.1em]">KGP</p>
						</div>
					</div>
					<div className="relative bg-biru-hijau w-[593.5px] text-white m-0 rounded-r-[20px]">
						<div className="ml-[52.1px] mr-10 mt-[-0.21px] mt-[49.93px]">
							<p className="font-rubik font-normal text-[20px] text-white flex items-center leading-9">A community of Influencers and Tech Personalities forging a stage where  the continent’s brightest minds meet new partners, and, the sharpest innovators to share their visions.</p>
						</div>
						<div className="static flex gap-6">
							<div className="absolute bottom-0 left-0 mx-10 my-10">
								<Link href="#" color="foreground" className="text-white text-[32px]">Join <Image src="arrow-right-up.svg"/></Link>
							</div>
							<div className="absolute bottom-0 right-0 mx-10 my-10">
								<Image src="image.png"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
