let React = require('react')
let Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
          <div>
              <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
          </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404