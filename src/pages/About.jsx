import React from "react";
import { Link } from "react-router-dom";
import useLastVisitedPage from "../hooks/useLastVisitedPage.js";
import "./css/Textblock.css";

function About() {
  useLastVisitedPage();

  return (
    <div className="textblock-container">
      <h1>ABOUT</h1>
      <p>
        Beacon is a project created by{" "}
        <a
          href="https://github.com/pepperrostami"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pepper Rostamizadeh
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/KonTheCat"
          target="blank"
          rel="noopener noreferrer"
        >
          Konstantin Kaminskiy
        </a>{" "}
        and is based in Brooklyn, New York.
      </p>
      <br></br>
      <h3>SUSTAINABILITY AND FUNDING</h3>
      <p>
        This project is self-funded and managed through the nonprofit
        organization Beacon Safe Incorporated, established by Pepper
        Rostamizadeh.
      </p>
      <br></br>
      <h3>CONCEPT</h3>
      <p>
        Inspired by lived experience, this application seeks to support crime
        victims in large, densely-populated cities.
        <br></br>
        <br></br>The intention is to provide tools, documentation and resources
        to empower victims, and to allow the user to decide if, when and how
        they seek intervention and recourse and from whom, with the ability to
        prioritize community and personal contact intervention over police and
        law enforcement, if they so choose.
        <br></br>
        <br></br>This project was inspired by many existing platforms, namely:
        <br></br>
        <br></br>1.{" "}
        <a
          href="https://www.aclu.org/issues/criminal-law-reform/reforming-police/mobile-justice"
          target="_blank"
          rel="noopener noreferrer"
        >
          The ACLU's Mobile Justice/Police Encounter
        </a>{" "}
        app which allows users to record interactions with law enforcement,
        report civil rights violations, and receive information on legal rights
        and resources
        <br></br>
        <br></br>2.{" "}
        <a
          href="https://righttobe.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brooklyn-based Hollaback!/Right To Be
        </a>
        : an app designed to help users document and report harassment, provide
        resources for addressing and preventing harassment, and connect users
        with support networks
        <br></br>
        <br></br>3.{" "}
        <a
          href="https://appsagainstabuse.devpost.com/submissions/4900-circle-of-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tech 4 Good's 'Circle of 6'
        </a>{" "}
        app which focuses on preventing violence and promoting safety by
        allowing users to quickly alert their trusted contacts in case of an
        emergency
        <br></br>
        <br></br>4.{" "}
        <a
          href="https://www.knowyourrightscamp.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Colin Kaepernick's 'Know Your Rights Camp'
        </a>{" "}
        organization and app that provides users with information on their legal
        rights, resources for various situations, and tools to assist with
        navigating interactions with law enforcement
      </p>
      <br></br>
      <h3>CONTACT</h3>
      <p>
        To get in touch, please contact Pepper directly:
        pepper.rostami@gmail.com
      </p>
      <div className="return-to-login">
        <Link to={"/map"} className="return-link">
          ← RETURN
        </Link>
      </div>
    </div>
  );
}

export default About;
