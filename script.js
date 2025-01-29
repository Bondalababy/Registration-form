document.getElementById('registrationForm').addEventListener('submit',function(event){
    event.preventDefault();

    const fullName=document.getElementById('fullName').value.trim();
    const username=document.getElementById('username').value.trim();
    const Email=document.getElementById('email').value.trim();
    const password=document.getElementById('password').value;
    const confirmPassword=document.getElementById('confirmPassword').value;
    const phonenum=document.getElementById('phone').value.trim();
    const gender=document.querySelector('input[name="gender"]:checked');

    if(fullName ==="" || fullName.length<3)
{
    alert('characters must be at least 3 characters long');
    return;
}
if(username.length<5){
    alert('your userbname must be atleast 5 characters');
    return;
}
if(phonenum.length<10){
    alert('your phone number must contain atleast 10 numbers');
    return;
}
if(password.length<6){
    alert('your password must be of 6 characters');
    return;
}
if(password!==confirmPassword){
    alert('your password does not match');
    return;
}
if(!gender)
{
    alert('please select your gender');
    return;
}
alert('Registration successful');
});