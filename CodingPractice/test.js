let err={"status":"failed","errors":{"email":{"name":"ValidatorError","message":"email must be at least 5 chars","properties":{"message":"email must be at least 5 chars","type":"minlength","minlength":5,"path":"email","value":"f"},"kind":"minlength","path":"email","value":"f"},"name":{"name":"ValidatorError","message":"name must be at least 2 chars","properties":{"message":"name must be at least 2 chars","type":"minlength","minlength":3,"path":"name","value":"s"},"kind":"minlength","path":"name","value":"s"}}}

for(let key in err.errors) {
    console.log(err.errors[key].message);
}
let errorOutput = "";
for (let key in err.errors) {
    errorOutput += `${key}: ${err.errors[key].message} \n`
}
console.log(errorOutput);