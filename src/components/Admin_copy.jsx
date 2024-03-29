import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import "../admin.css";
import server from "../auth/apple";
// import { exp } from "maath/dist/declarations/src/easing";
const Admin = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const ref = useRef();
  //   const [expandedRows, setExpandedRows] = useState({});
  const [expandedRows, setExpandedRows] = useState([false, false, false]);
  const [data,setData]=useState();
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch the team data when the component mounts
    fetch(server+'/getallteams') // Replace with your backend API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTeams(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const toggleSubsidiary = (id) => {
    setExpandedRows((prevExpandedRows) => ({
      ...prevExpandedRows,
      [id]: !prevExpandedRows[id],
    }));
  };
  const toggleItem = (id) => {
    // expandedRows=!expandedRows
    console.log(expandedRows);
    // setExpandedRows(expandedRows)
    setExpandedRows((prevExpandedRows) => {
      const updatedRows = [...prevExpandedRows];
      updatedRows[id] = !updatedRows[id];
      return updatedRows;
    });
  };
  const handleMenuClick = () => {
    setNavOpen((prevState) => !prevState);
  };
  return (
    <div>
      {/* <header>
        <div className="logosec">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
            className="icn menuicn"
            id="menuicn"
            alt="menu-icon"
            onClick={handleMenuClick}
          />
        </div>

        <div className="message">
          <div className="circle"></div>
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
            className="icn"
            alt=""
          />
          <div className="dp">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
              className="dpicn"
              alt="dp"
            />
          </div>
        </div>
      </header> */}

      <div className="main-container">
        <div className={`navcontainer ${isNavOpen ? "navclose" : ""}`}>
          <nav className="nav">
            <div className="nav-upper-options">
              <div className="nav-option ">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
                  className="nav-img"
                  id="menuicn"
                  alt="menu-icon"
                  onClick={handleMenuClick}
                />
                <h3> </h3>
              </div>

              <div className="nav-option option1">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                  className="nav-img"
                  alt="dashboard"
                />
                <h3> Dashboard</h3>
              </div>

              <div className="option2 nav-option">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                  className="nav-img"
                  alt="articles"
                />
                <h3> Articles</h3>
              </div>

              <div className="nav-option option3">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                  className="nav-img"
                  alt="report"
                />
                <h3> Report</h3>
              </div>

              <div className="nav-option option4">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                  className="nav-img"
                  alt="institution"
                />
                <h3> Institution</h3>
              </div>

              <div className="nav-option option5">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                  className="nav-img"
                  alt="blog"
                />
                <h3> Profile</h3>
              </div>

              <div className="nav-option option6">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                  className="nav-img"
                  alt="settings"
                />
                <h3> Settings</h3>
              </div>

              <div className="nav-option logout">
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                  className="nav-img"
                  alt="logout"
                />
                <h3>Logout</h3>
              </div>
            </div>
          </nav>
        </div>
        <div className="main">
          <div className="box-container">
            <div className="box box1">
              <div className="text">
                <h2 className="topic-heading">60.5k</h2>
                <h2 className="topic">Total Registration</h2>
              </div>

              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
                alt="Views"
              />
            </div>

            <div className="box box2">
              <div className="text">
                <h2 className="topic-heading">150</h2>
                <h2 className="topic">RC Plane</h2>
              </div>

              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png"
                alt="likes"
              />
            </div>

            <div className="box box3">
              <div className="text">
                <h2 className="topic-heading">320</h2>
                <h2 className="topic">Drone</h2>
              </div>

              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
                alt="comments"
              />
            </div>

            <div className="box box4">
              <div className="text">
                <h2 className="topic-heading">70</h2>
                <h2 className="topic">Hover</h2>
              </div>

              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png"
                alt="published"
              />
            </div>
          </div>

          <div className="report-container">
            <div className="report-header">
              <h1 className="recent-Articles">Teams</h1>
              <button className="view">View All</button>
            </div>

            <div className="report-body">
              <div className="report-topic-heading">
                <h3 className="t-op">Team ID</h3>
                <h3 className="t-op">Leader</h3>
                <h3 className="t-op">Team Name</h3>
                {/* <h3 className="t-op">Member Name</h3> */}
                <h3 className="t-op">Mobile No</h3>
                {/* <h3 className="t-op">Gender</h3> */}
                <h3 className="t-op">Email</h3>
                <h3 className="t-op">College Name</h3>
                <h3 className="t-op">Status</h3>
              </div>

              <div className="items">
                <div
                  className="item1 cursor-pointer"
                  onClick={() => toggleItem(0)}
                >
                  <span className="arrow absolute -left-5 invisible w-[10px]">
                    <AiFillCaretDown />
                  </span>

                  <h3 className="t-op-nextlvl">73</h3>
                  <h3 className="t-op-nextlvl">Govind ji</h3>
                  <h3 className="t-op-nextlvl">The ERRORs</h3>
                  {/* <h3 className="t-op-nextlvl"></h3> */}

                  <h3 className="t-op-nextlvl">1234567890</h3>
                  {/* <h3 className="t-op-nextlvl">male</h3> */}
                  <h3 className="t-op-nextlvl">abc@cglk.com</h3>
                  <h3 className="t-op-nextlvl">Nit Kkr</h3>
                  <h3 className="t-op-nextlvl label-tag">verify</h3>
                </div>

                {expandedRows[0] ? (
                  <div>
                    <div className="item1">
                      <h3 className="t-op-nextlvl">Article 72</h3>
                      <h3 className="t-op-nextlvl">1.5k</h3>
                      <h3 className="t-op-nextlvl">360</h3>
                      <h3 className="t-op-nextlvl label-tag">Published</h3>
                    </div>

                    <div className="item1">
                      <h3 className="t-op-nextlvl">Article 71</h3>
                      <h3 className="t-op-nextlvl">1.1k</h3>
                      <h3 className="t-op-nextlvl">150</h3>
                      <h3 className="t-op-nextlvl label-tag">Published</h3>
                    </div>

                    <div className="item1">
                      <h3 className="t-op-nextlvl">Article 70</h3>
                      <h3 className="t-op-nextlvl">1.2k</h3>
                      <h3 className="t-op-nextlvl">420</h3>
                      <h3 className="t-op-nextlvl label-tag">Published</h3>
                    </div>

                    <div className="item1">
                      <h3 className="t-op-nextlvl">Article 69</h3>
                      <h3 className="t-op-nextlvl">2.6k</h3>
                      <h3 className="t-op-nextlvl">190</h3>
                      <h3 className="t-op-nextlvl label-tag">Published</h3>
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                {/* <div className="item1" onClick={() => toggleItem(1)}>
                  <h3 className="t-op-nextlvl">Article 68</h3>
                  <h3 className="t-op-nextlvl">1.9k</h3>
                  <h3 className="t-op-nextlvl">390</h3>
                  <h3 className="t-op-nextlvl label-tag">Published</h3>
                </div>
                {expandedRows[1] ? (
                  <>
                    <div className="item1">
                      <h3 className="t-op-nextlvl">Article 67</h3>
                      <h3 className="t-op-nextlvl">1.2k</h3>
                      <h3 className="t-op-nextlvl">580</h3>
                      <h3 className="t-op-nextlvl label-tag">Published</h3>
                    </div>

                    <div className="item1">
                      <h3 className="t-op-nextlvl">Article 66</h3>
                      <h3 className="t-op-nextlvl">3.6k</h3>
                      <h3 className="t-op-nextlvl">160</h3>
                      <h3 className="t-op-nextlvl label-tag">Published</h3>
                    </div>

                    <div className="item1">
                      <h3 className="t-op-nextlvl">Article 65</h3>
                      <h3 className="t-op-nextlvl">1.3k</h3>
                      <h3 className="t-op-nextlvl">220</h3>
                      <h3 className="t-op-nextlvl label-tag">Published</h3>
                    </div>
                  </>
                ) : (
                  <></>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
