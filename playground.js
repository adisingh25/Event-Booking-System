

// const base_api = "http://localhost:4000/api/v1"
const api_base = "http://localhost:4000/api/v1";



var myname = 'aditya'
var myphoneNumber = '9204731527'
var myemail = 'adi@gmail.com'
var mypassword = '12345'


// const signme = () => {
//     const data  = fetch (base_api + '/signup', {
//         method : 'POST',
//         headers : {
//             "Content-Type" : "application/json"
//         },
//         body : JSON.stringify({
//             name : myname,
//             phoneNumber : myphoneNumber,
//             email : myemail,
//             password : mypassword
//         })
//     }).then((res) => res.json())
//     .catch((e) => {
//         console.log(e)
//     })

//     console.log(data)
// }
// signme()

const hlw = async () => {
    const data = await fetch(api_base + '/signup', {
      method : 'POST',
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
          text : newTodo
      })
    }).then((res) => res.json()).catch((e) => {
        console.log(e)
    })

    console.log(data)

  }






hlw()

