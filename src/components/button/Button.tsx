"use client";

type propTypes = {
	click: Function;
	children: React.ReactNode;
};

export default function Button({ click, children }: propTypes) {
	return (
		<button style={{ all: "unset", cursor: "pointer" }} onClick={() => click()}>
			{children}
		</button>
	);
}
