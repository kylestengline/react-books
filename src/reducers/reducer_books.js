// We write export default so we can access this function in other files to 'wire' it into our application.
// The issue with the below is that it makes our applcation static. 
// The state of our app will always be this list of books.
export default function() {
  return [
    {title: 'Javascript: The Good Parts', pages: 101 },
    {title: 'Harry Potter', pages: 100 },
    {title: 'The Dark Tower', pages: 20 },
    {title: 'Eloquent Ruby', pages: 5 }
  ];
}
