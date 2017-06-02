
import {inventors, people, carData} from '../../../data/simpleDataModels.js';

	

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




function filterThis(dataSource) {		
	const fifteen = dataSource.filter(inventor => (
		inventor.year >= 1500 && inventor.year < 1600
		));
	return fifteen;	
};



// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names


const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

	

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const sorted = inventors.sort((a,b) => {
	if (a.year > b.year){
		return 1
	} else {
		return -1
	}
});

const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);



// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

	
// 5. Sort the inventors by years lived
const oldestToYoungest = inventors.sort(function(a,b){		
	const lastInventor = a.last;
	const nextInventor = b.last;

	return lastInventor > nextInventor ? -1 : 1;
});


	

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris




// 7. sort Exercise
// Sort the people alphabetically by last name

const alpha = people.sort((lastOne,nextOne) => {
	const [aLast, aFirst] = lastOne.split(', ');
	const [bLast, bFirst] = nextOne.split(', ');
	return aLast > bLast ? 1 : -1;
});
// console.log(alpha);


// 8. Reduce Exercise
// Sum up the instances of each of these

const transportation = carData.reduce(function(obj, item){
	return obj;	
},{});

