import { Box2, Box1 } from "@/components/starbox";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const RegisterSuccess = () => {
	return(
		<div className="container static">
			<Box2/>
			<Card className="w-542 z-20">
				<CardHeader className="flex justify-center items-center">
					<div>
						<h3 className="text-center font-semibold text-xl text-[#328AC9]">Register Successfully</h3>
					</div>
				</CardHeader>
				<CardBody>
					<div className="pb-4">
						<p className="flex justify-center font-semibold">Check your email for email verifcation!</p>
					</div>
					<div className="px-8 py-3">
						<p className="pb-3 px-1 font-semibold">Not Receive our message for verification?</p>
						<Button className="w-full bg-white border border-[#328AC9] border-solid border-2 text-[#328AC9] font-bold text-lg">Re-send</Button>
					</div>
				</CardBody>
			</Card>
			<Box1/>
		</div>	
	);
}