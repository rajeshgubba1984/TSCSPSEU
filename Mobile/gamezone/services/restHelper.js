import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';


export const userSearch=(payload)=>{

  try {
    console.log('received input payload:')
    console.log(payload);
    //const response = await axios.get(`${BASE_URL}/todos?_limit=5`);

    //const todoItems = response.data;
    //console.log(todoItems);

    var user = {
      "user":{
         "UserId":8,
         "FirstName":" ",
         "LastName":null,
         "Surname":null,
         "FatherName":null,
         "BloodGroup":null,
         "HusbandName":null,
         "AadharNumber":null,
         "Qualification":null,
         "Specilization":null,
         "EmailId":"mohan.b.kumar@gmail.com",
         "NomineeName":null,
         "PhoneNumber":"1234",
         "WhatsAppNumber":null,
         "PRANNumber":"1122",
         "EmployeeId":null,
         "Designation":null,
         "Department":null,
         "WorkingDistrict":null,
         "WorkingMandal":null,
         "WorkingVillage":null,
         "RoleId":1,
         "NativeDistrict":null,
         "NativeMandal":null,
         "NativeAddress":null,
         "NativePINCode":null,
         "CreatedOn":"2021-04-11T11:08:24.000Z",
         "ValidateToken":"JaN7miNzJa",
         "UserActivated":true
      },
      "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTgxNDU2OTksImV4cCI6MTYxODE0NzQ5OX0.ayRtkg1Xi4mkM8eTIMZNvWHp0SH4BINT0KcvVskG5pY"
   }
    console.log('response: ', user);
    return user;
  } catch (errors) {
    console.error(errors);
  }
  
}

export const getPosts=(payload)=>{
var posts = {
  "posts":[
     {
        "PostId":1,
        "Title":"Test Title Update",
        "Message":"Test Description updated",
        "UserId":1,
        "CreatedOn":"2021-04-08T12:53:56.000Z",
        "IsActive":false
     },
     {
      "PostId":2,
      "Title":"Test Title Update 2",
      "Message":"Test Description updated 2",
      "UserId":1,
      "CreatedOn":"2021-04-08T12:53:56.000Z",
      "IsActive":false
   },
   {
    "PostId":3,
    "Title":"Test Title Update 3",
    "Message":"Test Description updated 3",
    "UserId":1,
    "CreatedOn":"2021-04-08T12:53:56.000Z",
    "IsActive":false
    }
  ]
}
return posts;

}

export const getPostsById=(payload, id)=>{
  
}

