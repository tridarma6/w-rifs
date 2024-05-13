import { Box2, Box1 } from "@/components/starbox";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";

const RequestSent = () => {
	return(
		<div className="container static">
			<Box2/>
			<Card className="w-542 h-722 z-20">
				<CardHeader className="flex justify-center items-center">
					<div>
						<h3 className="text-center font-bold text-2xl text-[#328AC9]">Request Sent!</h3>
					</div>
				</CardHeader>
				<CardBody>
					<div className="pb-4">
						<p className="flex justify-center font-semibold">Check your email for email verifcation!</p>
					</div>
					<div className="px-4">
						<Button className="w-full my-3 bg-white border border-[#328AC9] border-solid border-2 text-[#328AC9] font-bold text-lg">Back to Login</Button>
					</div>
				</CardBody>
			</Card>
			<Box1/>
		</div>
	);
}

