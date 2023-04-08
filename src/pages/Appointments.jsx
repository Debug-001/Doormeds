import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Appointments = () => {

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    telephone: "",
    date: "",
    time: "",
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
    const { firstName, lastName, telephone, date, time, message } = userData
    if (firstName && lastName && telephone && date && time && message) {

      const res = fetch(
        'https://dappon-77d33-default-rtdb.firebaseio.com/cnData.json',
        {
          method: "POST",
          Headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: "",
            lastName: "",
            telephone: "",
            date: "",
            time: "",
            message: ""
          })
        }
      )
      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          telephone: "",
          date: "",
          time: "",
          message: ""
        })
        alert("Your response has been saved. Expect a reply soon!")
      }
      else {
        alert("please fill the data")
        // navigate(/)
      }
    }
  }


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="shadow"
              style={{
                width: "100%",
                minHeight: 800,
                marginTop: 119,
                backgroundColor: "rgba(255, 255, 255, 0.79)"
              }}
            >
              <form style={{ paddingTop: 70, marginTop: "-125px" }}>
                <div className="form-group mb-3">
                  <h1 className="text-center">Book an Appointment</h1>
                </div>

                {/* first name input  */}
                <div className="form-group mb-3">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name='firstName'
                    style={{ width: "50%", marginLeft: "25%", marginTop: 39 }}
                    required=""
                    placeholder="First Name"
                    value={userData.firstName}
                    onChange={postUserData}
                  />
                </div>

                {/* last name input  */}
                <div className="form-group mb-3">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name='lastName'
                    style={{ width: "50%", marginLeft: "25%" }}
                    required=""
                    placeholder="Last Name"
                    value={userData.lastName}
                    onChange={postUserData}
                  />
                </div>

                {/* tel input  */}
                <div className=" form-group mb-3">
                  <input
                    className="form-control form-control-lg"
                    type="tel"
                    name="telephone"
                    required=""
                    style={{ width: "50%", marginLeft: "25%" }}
                    placeholder="Contact Number"
                    value={userData.telephone}
                    onChange={postUserData}
                  />
                </div>

                {/* date input  */}
                <div className=" form-group mb-3">
                  <input
                    className="form-control form-control-lg"
                    type="date"
                    name="date"
                    style={{ width: "50%", marginLeft: "25%" }}
                    value={userData.date}
                    onChange={postUserData}
                  />
                </div>

                {/* time input  */}
                <div className=" form-group mb-3">
                  <input
                    className="form-control form-control-lg"
                    type="time"
                    name="time"
                    style={{ width: "50%", marginLeft: "25%" }}
                    value={userData.time}
                    onChange={postUserData}
                  />
                </div>

                {/* msg input  */}
                <div className="form-group mb-3">
                  <textarea
                    className="form-control form-control-lg"
                    name='message'
                    style={{ width: "50%", marginLeft: "25%", minHeight: 200 }}
                    placeholder="Additional Medical notes"
                    value={userData.message}
                    onChange={postUserData}
                  />
                </div>
                <div className="form-group mb-3">
                  <button
                    className="btn btn-dark btn-lg"
                    style={{ width: "50%", marginLeft: "25%" }}
                    type="submit"
                    onClick={submitData}>
                    Send {""}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Appointments
