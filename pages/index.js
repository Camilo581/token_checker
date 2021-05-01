import styles from '../estilos.module.css'
import Contenedor from '../components/Contenedor';
const Index = () => {
    return (
        <Contenedor>
                  <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="https://img.icons8.com/plasticine/2x/discord-logo.png" width={30} height={30} className="d-inline-block align-top" alt="" />
            Discord Token Checker
        </a>
      </nav>
      <div className={styles.texto}>
          <h1>Ingresa un token para chequearlo</h1>
      </div>
      <div>
      <input style={{width: '50%', margin: '-80px auto'}}type="text" id="primer_input" className="form-control" aria-describedby="passwordHelpBlock" placeholder="<-- Token aquí -->" />
      <center>
          <button onClick={async () => {
              const fetched = await fetch('https://discord.com/api/v9/users/@me', {
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': document.getElementById("primer_input").value
                  }
              })
              if(fetched.status != 200) {
                  window.alert('Token invalido!')
              }
              else {
                  window.alert('El token es valido!')
              }
          }} style={{margin: '0px auto', width: '50%', position: 'relative', top: '90px'}} type="button" class="btn btn-primary btn-lg btn-block">Chequear Token</button>
      </center>
      </div>
        </Contenedor>
    )
}
export default Index