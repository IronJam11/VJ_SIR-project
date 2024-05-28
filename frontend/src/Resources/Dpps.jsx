import "./Dpps.css";
import Navbar from "../Mentorship/Navbar";
import React, { useState } from "react"
import data from "./data.json";

export default function DPP() {

  const[searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Navbar />

      <section id="DPPs">
        <div className="Dpp">
          <div className="searchbar">
            <h1>Find the DPPs :</h1>

            <div className="searchInput_container">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input
                id="searchInput"
                type="text"
                placeholder="Search"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="Dpp_Container">
            {data
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.chapter.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <>
                    <div className="DppData-container">
                      <div className="DppData" key={val.id}>
                        <img src={val.image} alt="" />
                        <div className="DppData-text">
                          <h6>{val.date}</h6>
                          <h3>{val.chapter}</h3>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
