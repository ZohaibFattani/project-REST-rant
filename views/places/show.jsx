const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <img src={data.place.pic} alt={data.place.name} />
        <h3>
          Located in {data.place.city}, {data.place.state}{" "}
        </h3>
        <div>unrated</div>
        <div>no comments</div>
        <h3> {data.place.showEstablished()} </h3>
        <h4> Serving {data.place.cuisines} </h4>
      </main>
      <a href={`/places/${data.id}/edit`} className="btn btn-warning">
        Edit
      </a>
      <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>
    </Def>
  );
}

module.exports = show;
