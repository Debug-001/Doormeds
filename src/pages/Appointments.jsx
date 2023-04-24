import React, { useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Autocomplete,
  DirectionsRenderer,
  GoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";

const Appointments = () => {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyD7hpDd4P09tXsP4-f8Wwldz22hZJMwqwM",
    libraries: ["places"],
  });
  const [center, setCenter] = useState({});
  const destinationRef = useRef();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    date: "",
    time: "",
    email: "",
    telephone: "",
    message: ""
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value })
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, date, time, email, telephone, message } = userData
    if (firstName && lastName && date && time && email && telephone && message) {

      const res = fetch(
        'https://dapon-9bce9-default-rtdb.firebaseio.com/contactForm.json',
        {
          method: "POST",
          Headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            date,
            time,
            email,
            telephone,
            message
          })
        }
      )
      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          date: "",
          time: "",
          email: "",
          telephone: "",
          message: ""
        })
        alert("Your response has been saved. Expect a reply soon!")
      } else {
        alert("please fill the data")
      }
    }
  }

  return (
    <>
      <Navbar />
      <section id="contact" className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <p className="fw-bold text-success mb-2">Choose your preffered Time & Date</p>
              <h2 className="fw-bold">Book an Appointment&nbsp;</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-xl-4">
              <div>
                <form className="p-3 p-xl-4" method="POST">
                  {/* Start: Success Example */}

                  <div className="mb-3">
                  {isLoaded && (

                    <Autocomplete
                      types={["hospital"]}
                      restrictions={{ country: "IN" }}
                      bounds={{
                        north: center.lat + 0.1,
                        south: center.lat - 0.1,
                        east: center.lng + 0.1,
                        west: center.lng - 0.1,
                      }}
                    >
                      <input
                        className="form-control"
                        type="search"
                        style={{ marginTop: "20px", marginBottom: "20px" }}
                        name="destination"
                        placeholder="Search Hospitals...."
                        ref={destinationRef}
                      />
                    </Autocomplete>
                  )}
                  </div>


                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      id="name-1"
                      name="firstName"
                      placeholder="First Name"
                      value={userData.firstName}
                      onChange={postUserData}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      id="name-1"
                      name="lastName"
                      placeholder="Last Name"
                      value={userData.lastName}
                      onChange={postUserData}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="date"
                      id="name-1"
                      name="date"
                      value={userData.date}
                      onChange={postUserData}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="time"
                      id="name-1"
                      name="time"
                      value={userData.time}
                      onChange={postUserData}
                    />
                  </div>

                  {/* Start: Error Example */}
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="email"
                      id="email-1"
                      name="email"
                      placeholder="Email"
                      value={userData.email}
                      onChange={postUserData}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="tel"
                      name="telephone"
                      placeholder="Contact Number"
                      value={userData.telephone}
                      onChange={postUserData}
                    />
                  </div>
                  {/* End: Error Example */}
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={4}
                      placeholder="Add Medical/Notes such as allerygies, symtomps"
                      value={userData.message}
                      onChange={postUserData}
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary shadow d-block w-100"
                      type="submit" onClick={submitData}>
                      Send{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Appointments
