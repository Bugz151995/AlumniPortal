import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import "./Autocomplete.css";

const Autocomplete = (props) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isInvalid, setIsInvalid] = useState(props.isInvalid);
  const [industry, setIndustry] = useState([]);

  // fetch all industry
  const getIndustry = () => {
    axios
      .get("http://admin.parsuap-api.ph/industry")
      .then((response) => {
        setIndustry(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect() hook
  useEffect(() => getIndustry(), []);

  // set form validate
  const validate = (e) => {
    if (e.currentTarget.value === "") {
      setIsInvalid(props.isInvalid);
      setIsValid(false);
    } else {
      setIsInvalid(null);
      setIsValid(true);
    }
  };

  const handleChange = (e) => {
    const input = e.currentTarget.value;

    setFilteredSuggestions(
      industry.filter((industry) => {
        return (
          industry.occupation.toLowerCase().indexOf(input.toLowerCase()) > -1
        );
      })
    );
    setActiveSuggestion(0);
    setShowSuggestions(true);
    setUserInput(input);

    props.handleChange(e);
    validate(e);
  };

  const handleClick = (e) => {
    const input = e.currentTarget.innerText;

    setFilteredSuggestions([]);
    setActiveSuggestion(0);
    setShowSuggestions(false);
    setUserInput(input);
    validate(e);

    props.setFieldValue('role', input, true);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setUserInput(filteredSuggestions[activeSuggestion].occupation);
      validate(e);
      props.setFieldValue('role', filteredSuggestions[activeSuggestion].occupation, true);
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  const handleBlur = (e) => {
    // test value of autocomplete
    console.log(props.value);

    props.setFieldValue('role', userInput, true);
    if (e.currentTarget.value === "") {
      setIsInvalid("Please provide a role.");
      setIsValid(false);
    }
  };

  // suggestion list
  const SuggestionsList = () => {
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        return (
          <ul className="suggestions">
            {" "}
            {filteredSuggestions.map((industry, index) => {
              let style;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                style = "suggestion-active";
              }
              return (
                <li
                  className={style}
                  key={industry.occupation_id}
                  onClick={handleClick}
                >
                  {industry.occupation}{" "}
                </li>
              );
            })}{" "}
          </ul>
        );
      } else {
        return (
          <div className="no-suggestions">
            <em> No suggestions available. </em>{" "}
          </div>
        );
      }
    } else {
      return null;
    }
  };

  return (
    <>
      <Form.Control
        autoComplete="off"
        type={props.type}
        name={props.name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        size={props.size}
        placeholder={props.placeholder}
        isValid={isValid}
        isInvalid={props.isInvalid && !isInvalid ? props.isInvalid : isInvalid}
        value={userInput}
      />
      <div className="position-relative">
        <SuggestionsList className="position-absolute" />
      </div>
    </>
  );
};

export default Autocomplete;
