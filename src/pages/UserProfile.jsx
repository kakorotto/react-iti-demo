import React from "react";
import NavbarComp from "../components/Navbar";
import Footer from "../components/Footer";

function UserProfile(props) {
  const { id,username, address, name, email, phone ,website } = props.user;
  return (
    <>
       <NavbarComp />
      <div className="container">
        <div className="main-body">
          <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a cocohre="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a coco="javascript:void(0)">User</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                User Profile
              </li>
            </ol>
          </nav>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={`https://i.pravatar.cc/150?img=${id}`}
                      alt=""
                      className="rounded-circle"
                    />
                    <div className="mt-3">
                      <h4>{username}</h4>
                      <p className="text-secondary mb-1">
                      {name}
                      </p>
                      <p className="text-muted font-size-sm"></p>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{name}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{email}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{phone}</div>
                  </div>
                  <hr />
                  <div className="row">
                  <div className="col-sm-3">
                      <h6 className="mb-0">Website</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{website}</div>
                  </div>
                  <hr />
                 
                </div>
              </div>
          </div>
        </div>
      <Footer />

    </>
  );
}

export default UserProfile;
