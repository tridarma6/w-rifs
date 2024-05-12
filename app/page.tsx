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
			<div className="mt-20">
				<div className="text-center">
					<h1 className="font-bold text-regal-blue text-4xl font-rubik gap-x-6">WHAT IS ITCC?</h1>
				</div>
				<div className="text-center w-1171">
					<p className="font-normal text-2xl text-balance leading-9">Information Technology Creative Competition (ITCC) is the largest competition in the field of Information Technology in Bali, which is organized by the Information Technology Student Association (HMTI) of Udayana University. From year to year, ITCC always raises interesting topics in the world of technology.</p>
				</div>
			</div>
		</>
	);
}
