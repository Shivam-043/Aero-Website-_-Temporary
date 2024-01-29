import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import "../admin.css";
import server from "../auth/apple";

const Admin = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const ref = useRef();
  const [expandedRows, setExpandedRows] = useState([false]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(server + "/getallteams") // Replace with your backend API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTeams(data);
        setExpandedRows(Array.from(false.repeat(5)));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleSubsidiary = (id) => {
    setExpandedRows((prevExpandedRows) => ({
      ...prevExpandedRows,
      [id]: !prevExpandedRows[id],
    }));
  };

  const toggleItem = (id) => {
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
      <div className="main-container">
        <div className={`navcontainer ${isNavOpen ? "navclose" : ""}`}>
          <nav className="nav">{/* ... (previous code) */}</nav>
        </div>
        <div className="main">
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
                <h3 className="t-op">Mobile No</h3>
                <h3 className="t-op">Email</h3>
                <h3 className="t-op">College Name</h3>
                <h3 className="t-op">Status</h3>
              </div>

              <div className="items">
                {teams.map((team, index) => (
                  <>
                    <div
                      className="item1"
                      key={team._id}
                      onClick={() => toggleItem(index)}
                    >
                      <span className="arrow absolute -left-5 invisible w-[10px]">
                        <AiFillCaretDown />
                      </span>

                      <h3 className="t-op-nextlvl">{team._id}</h3>
                      <h3 className="t-op-nextlvl">{team.team_leader_name}</h3>
                      <h3 className="t-op-nextlvl">{team.team_name}</h3>
                      <h3 className="t-op-nextlvl">{team.team_mob}</h3>
                      <h3 className="t-op-nextlvl">{team.team_email}</h3>
                      <h3 className="t-op-nextlvl">
                        {team.team_member[0].member_college}
                      </h3>
                      <h3 className="t-op-nextlvl label-tag">verify</h3>
                    </div>

                    {expandedRows[index] ? (
                      <div>
                        {team.team_member.map((member, i) => (
                          <div className={"item1" } key={member._id}>
                            <h3 className="t-op-nextlvl">
                              {member.member_name}
                            </h3>
                            <h3 className="t-op-nextlvl">
                              {member.member_role}
                            </h3>
                            <h3 className="t-op-nextlvl">
                              {member.member_mob}
                            </h3>
                            <h3 className="t-op-nextlvl">
                              {member.member_email}
                            </h3>
                            <h3 className="t-op-nextlvl">
                              {member.member_college}
                            </h3>
                            <h3 className="t-op-nextlvl">{member.status}</h3>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
