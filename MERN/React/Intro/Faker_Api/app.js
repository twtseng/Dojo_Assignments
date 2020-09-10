const express = require('express')
const faker = require('faker');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

var currentUserId = 0;
const new_user = () => {
    return {
        _id : ++currentUserId,
        firstName : faker.name.firstName(),
        lastName : faker.name.lastName(),
        phoneNumber : faker.phone.phoneNumber(),
        email : faker.internet.email(),
        password : faker.internet.password()
    }
}
app.get('/api/users/new', (req, res) => {
    res.send(new_user())
  })
var currentCompanyId = 0;
const new_company = () => {
    return {
        _id : ++currentCompanyId,
        name : faker.company.companyName(),
        address : {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country(),
        }
    }
}
app.get('/api/companies/new', (req, res) => {
    res.send(new_company())
  })
app.get('/api/user/company', (req, res) => {
    res.send({ user: new_user(), company: new_company()})
  })  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})