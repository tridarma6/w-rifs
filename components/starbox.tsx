import {Image} from "@nextui-org/react";

export const Star1 = () => {

	return(
		<div className="pl-60">
			<Image src="/star1.svg" alt="star" width={40} height={40}/>
		</div>
	);
}

export const Star2 = () => {

	return(
		<div className="flex justify-end pr-60">
			<Image src="/star2.svg" alt="star" width={40} height={40}/>
		</div>
	);
}

export const Box1 = () => {
	return(
		<div className="absolute bottom-0 left-0 z-10">
			<Image src="/box1.svg" alt="box" width={175} height={175}/>
		</div>
	);
}

export const Box2 = () => {
	return(
		<div className="absolute right-0 top-0 z-10">
			<Image src="/box1.svg" alt="box" width={175} height={175}/>
		</div>
	);
}