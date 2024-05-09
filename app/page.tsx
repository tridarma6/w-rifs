import {Card, CardHeader, CardBody, CardFooter, Divider, Image, Link} from "@nextui-org/react";
import React from "react";
import {Input, Button} from "@nextui-org/react";

export default function Home() {
	return (
		<>
			<Star1 />
				<section className="relative py-8 p-20 md:py-10 max-w-3xl mx-auto z-0">
					<RegisterForm />
				</section>
			<Star2 />
		</>

	);
}

const RegisterForm = () => {
	return(
		<div className="container static">
			<Box2/>
			<Card className="w-542 h-722 z-20">
				<CardHeader className="flex justify-center items-center">
					<div>
						<h3 className="text-center font-semibold text-xl text-[#328AC9]">Register</h3>
					</div>
				</CardHeader>
				<CardBody>
					<div className="mx-3 mb-2">
						<Input type="text" label="Name" labelPlacement={"outside"} variant="bordered" placeholder="Insert your name"/>
					</div>
					<div className=" mt-2 mx-3 mb-2">
						<Input type="email" label="Email" labelPlacement={"outside"} variant="bordered" placeholder="Insert your email"/>
					</div>
					<div className=" mt-2 mx-3 mb-2">
						<Input type="password" label="Password" labelPlacement={"outside"} variant="bordered" placeholder="Insert your password"/>
					</div>
					<div className=" mt-2 mx-3 mb-2">
						<Input type="password" label=" Confirm Password" labelPlacement={"outside"} variant="bordered" placeholder="Insert your password confirmation"/>
					</div>
					<Button className="mt-7 mb-1 mx-3 text-l font-semibold text-white" color="primary">Register</Button>
					<Button className="mt-4 mx-3 shadow-md bg-white text-black">
						
						<Image src="/google.svg" alt="G" width={24} height={24}/>	
						Continue with Google
						
					</Button>
				</CardBody>
				<CardFooter className="flex justify-center text-center">
					<div className="flex justify-center text-center my-3 ">
						<p>Already have an account?</p> 
						<Link href="#"> login</Link>
					</div>
				</CardFooter>

			</Card>
			<Box1/>
		</div>

	);
}

const Star1 = () => {
	return(
		<div className="pl-60">
			<Image src="/star1.svg" alt="star" width={40} height={40}/>
		</div>
	);
}

const Star2 = () => {
	return(
		<div className="flex justify-end pr-60">
			<Image src="/star2.svg" alt="star" width={40} height={40}/>
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