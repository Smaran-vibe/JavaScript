// optional chaining + nullish coalescing 

const data = { user: { profile: { name: "Smaran Aryal", city2: "Kathmandu" } } };
const city2 = data.user?.profile.city2 ?? 'Unknown';
console.log(city2);
