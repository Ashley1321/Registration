




document.getElementById('registrationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password =document.getElementById('password').value;
    const valPassword = document.getElementById('valPassword').value;
    console.log({email:email, password:password, valPassword:valPassword});
    if((email !== '') && (password !== '') && (valPassword !== '')){
        console.log('no error');
        if(password === valPassword){
            console.log('matching password');
            document.getElementById('confirmPass').classList.add('hidden');
        }else{
            console.log('passwords not matching');
            document.getElementById('confirmPass').classList.remove('hidden');
    }   
    }else{
        console.log('invalid input');
        if(email === ''){
            document.getElementById('emailError').classList.remove('hidden');
           
        }
        if(valPassword === ''){
            document.getElementById('confirmPass').classList.remove('hidden')  
        }
    }
    window.location.href='landing.html';

})
function handleImage(e){
    console.log(e);

    //target the image 
    const img = e.target.files[0];
    console.log(img);

    //read the image
    const fileReader = new FileReader();

    //get the image url
    fileReader.readAsDataURL(img);
    fileReader.onloadend = (e) => {
        console.log(e);

        //image results(should give you the long url on the console)
        const src = e.target.result;
        console.log(src);

        //get the image by id(displaying it)
        document.getElementById('img').src = src;
        console.log(document.getElementById('img'));

        //set the picture in the local storage
        localStorage.setItem('image',src);
        console.log('from storage:', localStorage.getItem('image'));
        document.getElementById('img').src = localStorage.getItem('image');

    
    }
}




document.getElementById('email').addEventListener('keypress', () => {
    console.log('changing');
    console.log(document.getElementById('email').value);
    document.getElementById('emailError').classList.add('hidden') 
    
})
// document.getElementById('valPassword').addEventListener('keypress', () => {
//     document.getElementById('confirmPass').classList.add('hidden')
// })
