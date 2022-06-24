import axios from "axios";
import url from 'url';

async function updateTwitterFollowers (){

let username = url.parse(`https://twitter.com/savukku?t=Yys8Abm4FhC96SGBGF_-6g&s=08`).pathname;
console.log(username);

    // const options = {
    //   method: 'GET',
    //   url: `https://twitter-followers.p.rapidapi.com${username}/profile`,
    //   headers: {
    //     'X-RapidAPI-Key': 'cc73b01c92msh46398dcb32a6a67p15523fjsn3d825ac3e5d8',
    //     'X-RapidAPI-Host': 'twitter-followers.p.rapidapi.com'
    //   }
    // };
    
    // await axios.request(options).then(function (response) {
    //     console.log(response.data.followers);
    // }).catch(function (error) {
    //     console.error(error);
    // });

}

async function instagramFollowers(){
    let username = url.parse(`https://www.instagram.com/rashiith/`).pathname.replace(/\//g,'');


    console.log(username,"  ", typeof(username));
    
// const options = {
//     method: 'GET',
//     url: 'https://instagram-data1.p.rapidapi.com/user/info',
//     params: {username: username2},
//     headers: {
//       'X-RapidAPI-Key': 'cc73b01c92msh46398dcb32a6a67p15523fjsn3d825ac3e5d8',
//       'X-RapidAPI-Host': 'instagram-data1.p.rapidapi.com'
//     }
//   };
  
//   await axios.request(options).then(function (response) {

//       console.log(response.data.edge_followed_by.count);
//   }).catch(function (error) {
//       console.error(error);
//   });

}


export default updateTwitterFollowers;
export {
    instagramFollowers
}