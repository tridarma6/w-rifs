import {Card, CardHeader, CardBody, CardFooter, Divider, Image} from "@nextui-org/react";
import React from "react";
import {Input, Button} from "@nextui-org/react";
import Link from "next/link";
import { Box2, Box1 } from "@/components/starbox";
export default function Register() {
	return (
		<>
			<RegisterForm />
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
						<p>Already have an account? </p>
						<Link href="/login"> login</Link>
					</div>
				</CardFooter>

			</Card>
			<Box1/>
		</div>

	);
}