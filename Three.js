// You are building a simple login system . Implement the feature that has two variables: You should check if the username is "admin" and the password is "12345".If both conditions are true , print "Login successful" Otherwise , print "Invalid Credentials."

function loginAuthentication(username , password) {
    if (username === 'admin' && password === '12345') {
        console.log(`username is : ${username} and password is: ${password}`) ;
        console.log('Login Successful');

    }else{
        console.log(`Invlid Credentials`);
    }
}

// Example 1
loginAuthentication(`admin` , `1245`)