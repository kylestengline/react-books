// We write export default so we can access this function in other files to 'wire' it into our application.
// The issue with the below is that it makes our applcation static. 
// The state of our app will always be this list of books.
export default function() {
  return [
    {title: 'Javascript: The Good Parts' },
    {title: 'Harry Potter' },
    {title: 'The Dark Tower' },
    {title: 'Eloquent Ruby' }
  ];
}
