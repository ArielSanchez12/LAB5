const conexionSteamBD = (datosConexion) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        datosConexion ? resolve("Conexión a SteamDB exitosa") : reject("Error")
      }, 2000)
    })
  }
  
  conexionSteamBD(true) 
    .then(r => console.log(r))
    .catch(e => console.log(e))



fetch("https://steamspy.com/api.php?request=top100in2weeks")
.then(response => response.json())
.then(data =>  games = Object.values(data))
.then(games => console.log(`${games[0].name} - ${games[0].price}`))
.catch(e => console.log(e))
 
  
    

