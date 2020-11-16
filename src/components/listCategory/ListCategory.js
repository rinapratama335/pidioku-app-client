import "./ListCategory.css";

const ListCategory = () => {
  return (
    <>
      <div className="list-title">
        <h4>Category Course</h4>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body card-container">
              <img
                src="./images/temporary/category/java.png"
                className="cat-img"
              />
              <div className="title">
                <h5 className="text-center">Java Dev</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body card-container">
              <img
                src="./images/temporary/category/ruby.png"
                className="cat-img"
              />
              <div className="title">
                <h5 className="text-center">Ruby Dev</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body card-container">
              <img
                src="./images/temporary/category/frontend.png"
                className="cat-img"
              />
              <div className="title">
                <h5 className="text-center">Frontend Dev</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body card-container">
              <img
                src="./images/temporary/category/python.png"
                className="cat-img"
              />
              <div className="title">
                <h5 className="text-center">Python Dev</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCategory;
