import {Card, CardHeader, CardBody, CardFooter, Divider, Image} from "@nextui-org/react";
import React from "react";
import {Input, Button} from "@nextui-org/react";
import Link from 'next/link';
import { Box2, Box1 } from "@/components/starbox";

export default function Login() {
	return (
		<>
			<LoginForm />
		</>
	);
}

const LoginForm = () => {
	return(
		<div className="container static">
			<Box2/>
			<Card className="w-542 h-722 z-20">
				<CardHeader className="flex justify-center items-center">
					<div>
						<h3 className="text-center font-bold text-2xl text-[#328AC9]">Login</h3>
					</div>
				</CardHeader>
				<CardBody>
					<div className=" mt-2 mx-3 mb-2">
						<Input type="email" label="Email" labelPlacement={"outside"} variant="bordered" placeholder="Insert your email"/>
					</div>
					<div className=" mt-2 mx-3 mb-2">
						<Input type="password" label="Password" labelPlacement={"outside"} variant="bordered" placeholder="Insert your password"/>
					</div>
					<div>
						<Link href="/forgot-password" className="flex justify-end mx-3 text-blue">Forgot password?</Link>
					</div>
					<Button className="mt-7 mb-1 mx-3 text-lg font-semibold text-white" color="primary">Login</Button>
					<Button className="mt-4 mx-3 shadow-md bg-white text-black">
						
						<Image src="/google.svg" alt="G" width={24} height={24}/>	
						Continue with Google
						
					</Button>
				</CardBody>
				<CardFooter className="flex justify-center text-center">
					<div className="flex justify-center text-center my-3 ">
						<p>Don’t have an account? </p>
						<Link href="/register" className="text-blue"> Register</Link>
					</div>
				</CardFooter>
			</Card>
			<Box1/>
		</div>
	);
}




const ResetPassword = () => {
	return(
		<div className="container static">
			<Box2/>
			<Card className="w-542 h-722 z-20">
				<CardHeader className="flex justify-center items-center">
					<div>
						<h3 className="text-center font-bold text-2xl text-[#328AC9]">Reset Password</h3>
					</div>
				</CardHeader>
				<CardBody>
					<div className=" my-2 mx-3">
						<Input type="password" label="New Password" labelPlacement={"outside"} variant="bordered" placeholder="Insert your new password"/>
					</div>
					<div className=" my-2 mx-3">
						<Input type="password" label="Confirm New Password" labelPlacement={"outside"} variant="bordered" placeholder="Insert your confirm new password"/>
					</div>
					<div className="px-4">
						<Button className="w-full my-6 text-lg font-semibold text-white" color="primary">Submit</Button>
					</div>
				</CardBody>
			</Card>
			<Box1/>
		</div>
	);
}
