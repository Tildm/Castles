const APIURL = "/furniturs/";

export async function getFurniturs() {
  return fetch(APIURL)
  .then(resp=> {
    if(!resp.ok) {
      if(resp.status >=400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: "Please try again later!"}
        throw err;
      }
    }

  return resp.json();
  })
}


export async function createFurnitur(name, image, text){
  return fetch(APIURL, {method:"post",
                 headers: new Headers({
                   "Content-Type": "application/json",
                 }),
                 body: JSON.stringify({name: name, image: image, text: text})
  })
  .then(resp=> {
    if(!resp.ok) {
      if(resp.status >=400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: "Please try again later!"}
        throw err;
      }
    }
  return resp.json();
  })
}


export async function removeFurnitur(id){
  const deleteUrl = APIURL + id;
  fetch(deleteUrl, {
    method:"delete",
  })
  .then(resp=> {
    if(!resp.ok) {
      if(resp.status >=400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: "Please try again later!"}
        throw err;
      }
    }
  return resp.json();
  })
}


export async function updateFurnitur(furnitur){
  const updateUrl = APIURL + furnitur._id;
  return fetch(updateUrl, {
    method:"put",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({completed: !furnitur.completed}),
  })
  .then(resp=> {
    if(!resp.ok) {
      if(resp.status >=400 && resp.status < 500) {
        return resp.json().then(data => {
          let err = {errorMessage: data.message};
          throw err;
        })
      } else {
        let err = {errorMessage: "Please try again later!"}
        throw err;
      }
    }
  return resp.json();
  })
}
