const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive">No Comments yet!</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! ðŸ˜¡" : "Rave! ðŸ˜»"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <img src={data.place.pic} alt={data.place.name} />
        <h3>
          Located in {data.place.city}, {data.place.state}{" "}
        </h3>
        <div>unrated</div>
        <div>
          <h2>Comments</h2>
          {comments}
        </div>
        <h3> {data.place.showEstablished()} </h3>
        <h4> Serving {data.place.cuisines} </h4>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
        <form action={`/places/${data.place.id}/comment`} method="POST">
          <div className="row">
            <div className="form-group col-sm-12">
              <label htmlFor="content">Content</label>
              <textarea id="content" name="content" className="form-control"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-4">
              <label htmlFor="author">Author</label>
              <input type="author" name="author" className="form-control" />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="stars">Star Rating</label>
              <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
            </div>
            <div className="form-group col-sm-2">
              <label htmlFor="rant">Rant?</label>
              <input type="checkbox" id="rant" name="rant" className="form-control" />
            </div>
          </div>
          <div>
            <input type="submit" className="btn btn-primary" value="Add Comment" />
          </div>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
