const list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

const uniqueUsersInList1 = new Set(list1.filter(user => !list2.includes(user)));

const uniqueUsersInList2 = new Set(list2.filter(user => !list1.includes(user)));

const intersectionUsers = new Set(list1.filter(user => list2.includes(user)));

console.log('Unique Users in List1 which are not in List2:');
console.log(Array.from(uniqueUsersInList1)); 

console.log('Unique Users in List2 which are not in List1:');
console.log(Array.from(uniqueUsersInList2)); 

console.log('Intersection of List1 and List2:');
console.log(Array.from(intersectionUsers)); 
