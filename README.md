# mounty


1) firt pull the code

2) inside directory run cmd   < npm i >

3)  import postman collaction for this   
https://www.getpostman.com/collections/9970d42e4d767fc070ad
  
  
  Make things easier for your teammates with a complete collection description.
  
POST

create user

http://localhost:5000/user/createuser


Make things easier for your teammates with a complete request description.
Bodyraw (json)

JSON

{
  "name": "atul",
  "email": "atuls7@gmail.com",
  "mobile": "45608977899",
  "address": {
    "street": "street",
    "locality": "locality",
    "city": "balaghat",
    "state": "mp",
    "pincode": "481556",
    "coordinatesType": "coordinatesType",
    "coordinates": [
      44,
      53
    ]
  }
}



GET

get all user

http://localhost:5000/user/getUser?pageNumber=1

Make things easier for your teammates with a complete request description.
Request Params

pageNumber

1

GET

get user by id

http://localhost:5000/user/userid/60b44a7006b3c11a03071fcf

Make things easier for your teammates with a complete request description.

PUT

update user
http://localhost:5000/user/userid/60b44a7006b3c11a03071fcf

Make things easier for your teammates with a complete request description.
Bodyraw (json)
JSON
{
  "address": {
    "coordinates": [
      447,
      537
    ],
    "street": "stre",
    "locality": "local",
    "city": "balaghat",
    "state": "mp",
    "pincode": "481556",
    "coordinatesType": "coordinatesType"
  },
  "name": "atulGautamUpdated",
  "email": "atulspl201912@gmai.com",
  "mobile": "3422344265 "
}


