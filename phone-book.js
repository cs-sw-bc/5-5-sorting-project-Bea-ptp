let phoneBook = [
  { name: "Jasmine", phone: "4165559999", city: "Detroit" },
  { name: "Dan", phone: "6475551234", city: "Calgary" },
  { name: "Cory", phone: "9051112222", city: "Caledonia" },
  { name: "Wilmer", phone: "4378887777", city: "Wilmington" }, 
  { name: "Sophie", phone: "4165554321", city: "Toronto" },
  { name: "Liam", phone: "6475555678", city: "Vancouver" },
  { name: "Olivia", phone: "9055556789", city: "Montreal" },
  { name: "Ethan", phone: "4375553456", city: "Ottawa" },
  { name: "Ava", phone: "4165557890", city: "Calgary" },
  { name: "Noah", phone: "6475559012", city: "Edmonton" },
  { name: "Isabella", phone: "9055552345", city: "Halifax" },
  { name: "Mason", phone: "4375556789", city: "Winnipeg" },
  { name: "Mia", phone: "4165553456", city: "Quebec City" },
  { name: "Logan", phone: "6475557890", city: "Saskatoon" },
  { name: "Charlotte", phone: "9055559012", city: "Regina" },
  { name: "Lucas", phone: "4375552345", city: "St. John's" },
  { name: "Amelia", phone: "4165556789", city: "Victoria" },
  { name: "Benjamin", phone: "6475553456", city: "Halifax" },
  { name: "Evelyn", phone: "9055557890", city: "Winnipeg" },
  { name: "Elijah", phone: "4375559012", city: "Quebec City" },
  { name: "Harper", phone: "4165552345", city: "Saskatoon" },
  { name: "Alexander", phone: "6475556789", city: "Regina" },
  { name: "Abigail", phone: "9055553456", city: "St. John's" },
]

// CRUD functions ( create, read, update and delete )

// Create
function addContact(name, phone, city) {
    phoneBook.push({ name, phone, city }); // add a new object to the phoneBook array

  // Update Entry  change the phone number of an existing contact
function updateContact(name, newPhone) {
    const contact = phoneBook.find(contact => contact.name === name); // find the contact by name 
    if (contact) {
        const index = phoneBook.indexOf(contact);
        phoneBook[index].phone = newPhone;
    }}
  
}

// Delete function to delete a contact by name // Remove a contact by name 
function deleteContact(name){} { // name is the parameter that represents the name of the contact to be deleted
    const index = phoneBook.findIndex(contact => contact.name === name); // find the index of the contact by name searches inside the phonebook array of the first contact whose name matches the name you passed
    if (index !== -1) { // if the index is not -1, it means the contact was found, if the index is -1, it means the contact was not found
        phoneBook.splice(index, 1); // go to position index and remove the contact from the phoneBook array}
    
    }
function deleteEntry (book, name) // book is the phoneBook array, name is the name of the contact to be removed
    for (let i = 0; i < book.length; i++) { // loop through the phoneBook array i is the index of the current contact the loop checks each contact one by one until it finds a contact with the matching name
        if (book[i].name === name) { // if the name of the current contact matches the name we want to delete  ( if yes, we found the contact to delete, if no the loop continues
        book.splice (i, 1); // remove  1 element 
        // the contact at index i from the phoneBook array} } 

    }

// Read ?? function to get a contact by name // Retrieve a contact by name // not in the README but added for completeness
function getContact(name) { // name is the parameter that represents the name of the contact to be retrieved
    return phoneBook.find(contact => contact.name === name); // find the contact by name searches inside the phoneBook array of the first contact whose name matches the name you passed and returns that contact object if found, otherwise it returns undefined
}
// Part A Sort function to sort the phone book by name using bubble sort algorithm

function bubbleSortByName(book) {
    for (let i = 0; i < book.length - 1; i++) { // loop through the phoneBook array from the first contact to the second last contact, outer loop that controls the number of passes needed to sort the array, it runs book.length - 1 times because after book.length - 1 passes, the array will be fully sorted
        for (let j = 0; j < book.length - i - 1; j++) { // loop through the phoneBook array from the first contact to the last unsorted contact , inner loop that compares adjacent contacts and swaps them if they are in the wrong order, it runs book.length - i - 1 times because after each pass, the last i contacts are already sorted and do not need to be compared-
} // book is the phoneBook array

//swap entire objects 
let temp = book[j]; // store the current contact in a temporary variable temp holds the entire object . save object at index j.
book[j] = book[j + 1]; // replace the current contact with the next contact
book[j + 1] = temp; // replace the next contact with the original current contact stored in temp

// Part B Sort function to sort the phone book by city using selection sort algorithm

function selectionSortByPhone(book) {{
    for (let i = 0; i < book.length - 1; i++) { // loop through the phoneBook array from the first contact to the second last contact, outer loop that controls the number of passes needed to sort the array, it runs book.length - 1 times because after book.length - 1 passes, the array will be fully sorted
        let minIndex = i; // assume the current contact is the minimum (smallest) contact in terms of phone number, at position i 
        for (let j = i + 1; j < book.length; j++) { // look for a smaller phone number in the rest of the array // 

// Convert phone number to numbers before comparing 
   const currentPhone = Number(book[j].phone); // convert the phone number of the current contact to a number for comparison
    const minPhone = Number(book[minIndex].phone); // convert the phone number of the minimum contact to a number for comparison
}
 
// Part C Merge sort by name  (classic merge pattern : recursion, array into halves, helper merge(), a new sorted array  )
function mergeSortByName(book) {
    if (book.length <= 1) { // if array has 0 to 1, return as it is
    return book;}  //function calls itself , divide function into 2, sort left , then right , then back together in order
 // divide the array into halves  (step 1 : divide)
 const mid = Math.floor (book.length/2); // find the middle of the array
 const left = mergeSortByName (book.slice(0,mid))
 const right= mergeSortByName (book.slice(mid))
 return (merge( left, right)) // merge the sorted halves together

}
function merge(left, right) {
    const result= [] // create an empty array to hold the merged result (the new sortedd array)
}   // merge so get one sorted array
    let i = 0; //the current element in the left array
    let j = 0; // the current element in the right array  
 // compare elments from both arrays  ( step 2 : compare ) both arrays should fill the same condition , have elements to compare for the loop to keep going

while ({
    }
    i <left.length) // while the left array still has elements 
while (j < right.length) { // while the right array still has elements

while 
    if (i  >= left.length) {// if reach the end of the left array, the comparaison stops. 
        break; // stop the loop
        } }

    if (j >= right.length) { // if reach the end of the right array, the comparaison stops. 
        break; // stop the loop
        } }
// Both arrays can still be compared (have elements) 
    if (left[i].name < right[j].name) { // compare names , if name on the left is smaller (alphab) than the name in the right array , push into result 
        result.push (left [i]);  //add 1 to move forward
        i++;
  } else { // if name on the right is smaller (alphab) than the name in the left array , push into result
        result.push (right [j]); // add the right element to the result array
        j++;
  }
}
return result;

//Comments 
//1. Bubble sort is the simpliest sorting algorythm
//2. Merge sort was the hardest to understand because it is a recursive algorythm ( have to understnd recursion first, then recursion algorythm )
//3. Sorting algorythms that modify the original array 
   // a. Bubble sort
   // b. Selection sort as a and b modify the original array directly. 
   //  It can't be Merge sort  as you split the array into halves, add a new function and then turn the two alves into new sorted arrays but the original one is not modified.  
 //4. Merge  Sort returns a brznd new array instead of modifying the original one.
 //Bubble sort, Selection sort and Merge sort are sorting algorythms that : work inside the same Array, swaps or shifts  and uses loops compare to Merge algorythm that uses a recursive case, splits tha arrays into halves ( slice, concat), merges the sorted arrays into a single sorted array. 