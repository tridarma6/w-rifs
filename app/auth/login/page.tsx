import {Card, CardHeader, CardBody, CardFooter, Divider, Image, Link} from "@nextui-org/react";
import React from "react";
import {Input, Button} from "@nextui-org/react";

export default function Login() {
	return (
		<>
			<Star1 />
				<section className="relative py-8 p-20 md:py-10 max-w-3xl mx-auto z-0">
					<LoginForm />
				</section>
			<Star2 />
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
						<Link className="flex justify-end mx-3">Forgot password?</Link>
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
						<Link href="register"> Register</Link>
					</div>
				</CardFooter>
			</Card>
			<Box1/>
		</div>
	);
}

const ForgotPassword = () => {
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