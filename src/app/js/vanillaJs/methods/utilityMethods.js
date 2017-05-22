export function pretty(object, color) {
	let bgColor = color || "dodgerblue";
	// console.log(JSON.stringify(object, null, 2));
	console.log(`%c 🏄 JSON Object: ${JSON.stringify(object, null, 2)}`, `background: ${bgColor}; color:white; font-size: 14px;`);
	console.trace('%c 🔎 Stack Trace: ', 'background:orange;');
};

export function radLog(whatIsThisThing, backgroundColor, fontColor) {
	
	let bgColor = backgroundColor || "dodgerblue";
	let ftColor = fontColor || "white";

	console.log(`%c 🏹 Console Log: ${whatIsThisThing}`, `background: ${bgColor}; color:${ftColor}; font-size: 14px;`);

	console.trace('%c 🔎 Stack Trace: ', 'background:orange;');
};