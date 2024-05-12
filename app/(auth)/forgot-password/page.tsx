import { Button, Card, CardBody, CardFooter, CardHeader, Input, Image } from "@nextui-org/react";

export default function ForgotPassword(){
	return(
		<div className="container static">
			<Box2/>
			<Card className="w-542 h-722 z-20">
				<CardHeader className="flex justify-center items-center">
					<div>
						<h3 className="text-center font-bold text-2xl text-[#328AC9]">Forgot Password</h3>
					</div>
				</CardHeader>
				<CardBody>
					<div className=" my-3 px-4 font-lg">
						<Input type="email" label="Email" labelPlacement={"outside"} variant="bordered" placeholder="Insert your email"/>
					</div>
					<div className="px-4">
						<Button className="w-full my-3 bg-white border border-[#328AC9] border-solid border-2 text-[#328AC9] font-bold text-lg">Back</Button>
						<Button className="w-full my-3 text-lg font-semibold text-white" color="primary">Reset</Button>
					</div>

				</CardBody>
				<CardFooter className="flex justify-start px-4">
					<div className="flex justify-start my-3 px-4">
						<p>We will send the password reset mechanism to your email</p>

					</div>
				</CardFooter>
			</Card>
			<Box1/>
		</div>
	);
}
const Box1 = () => {
	return(
		<div className="absolute bottom-0 left-0 z-10">
			<Image src="/box1.svg" alt="box" width={175} height={175}/>
		</div>
	);
}

const Box2 = () => {
	return(
		<div className="absolute right-0 top-0 z-10">
			<Image src="/box1.svg" alt="box" width={175} height={175}/>
		</div>
	);
}