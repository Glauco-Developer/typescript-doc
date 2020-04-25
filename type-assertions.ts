// type assertion doesn't change the type of the variable at runtime
// it's just for intelisense

// type assertion (Way 1)
let message = 'abc';
let endWithC = (<string>message).endsWith('c');

// type assertion (Way 1)
let msg = 'ab';
let endWithB = (msg as string).endsWith('c');
