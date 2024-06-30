const array = new Array(145879).fill(0)
const portion = Math.floor(array.length / 100)

console.log(array.length);

for (let i=0; i<=100; i++) {
	const start = i*portion, end = start + portion

	if (i===100) console.log(array.slice(start).length)
	else console.log(array.slice(start , end).length)
}