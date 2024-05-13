import {Card, CardHeader, CardBody, CardFooter, Divider, Image} from "@nextui-org/react";
import React from "react";
import {Input, Button} from "@nextui-org/react";
import Link from "next/link";
import { Box2, Box1 } from "@/components/starbox";
export default function Register() {
	return (
		<>
			<ResetPassword />
		</>
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