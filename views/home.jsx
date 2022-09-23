// imports react and Def function
let React = require('react')
let Def = require('./default')

function home(){
  return(
    <Def>
        <main>
            <h1>HOME</h1>
    <a href="/places">
      <button className="btn-primary">Places Page</button>
    </a>
        </main>
    </Def>
  )
}

//exports home function
module.exports = home