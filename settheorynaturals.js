// This function takes in a natural number and 
// produces the string that represents its recursively
// defined Zermelo-Fraenkel set theory notation (I think that's what it is called).

/* Each number contains all of the number coming before it,
 * starting with zero as the empty set, one is the set containing zero,
 * two contains zero and one, etc. 
 */
function set_naturals(n) {
    // A couple of base-cases
    if (n==0) {
        return '{}';    // Zero is the empty set
    } else if (n==1) {
        return '{{}}';  // One contains Zero
    }

    // n+1 = n U {n}
    let previous = set_naturals(n-1);

    // Remove outer braces from the previous set and combine strings
    return '{' + previous.slice(1, previous.length - 1) + ',' + previous + '}';
}

// Show the first 10 naturals (0-9)
for (let i=0; i<10; i++) {
    console.log(i + ': ' + set_naturals(i) + '\n');
}