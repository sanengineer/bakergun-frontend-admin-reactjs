import React from "react";

const CreateUser = ({ onChangeForm, createUser }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h2>Create User</h2>
          <form onSubmit={createUser}>
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputUsername">Username</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="username"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="username"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputEmail">Email</label>
                <input
                  type="email"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="email@email.com"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputPassword">Password</label>
                <input
                  type="password"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="password"
                  id="password"
                  aria-describedby="passwordHelp"
                  placeholder="********"
                />
              </div>
            </div>
            <button
              // type="button"
              // onClick={(e) => createUser()}
              type="submit"
              className="btn btn-success"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
