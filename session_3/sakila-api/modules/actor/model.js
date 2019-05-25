
const save = data => {
  return new Promise( ( resolve, reject) => {
      setTimeout( () => {
        console.log("la op con la bd para estos datos ha terminado: " + JSON.stringify(data));
        if (Math.random() > 0.2)
          resolve({
            "first_name":"Pepe", "last_name": "Viyuela"
          })
        else
          reject("simulando fallo de bd")
      }, 1000)
  })
}


module.exports = {
  save
}