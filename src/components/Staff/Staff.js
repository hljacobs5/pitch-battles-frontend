import React, { Component } from "react";
import NoteRow from "../NoteRow/NoteRow";

import "./Staff.css";

class Staff extends Component {
  render() {
    const helper = {
      attack: true
    };

    return (
      <div className="staff-buffer">
        <section className="staff">
          <p className={`correct-answer ${helper[this.props.correct]}`}>
            correct!
          </p>
          <p className={`incorrect-answer ${helper[this.props.incorrect]}`}>
            incorrect...
          </p>

          <div className={`clef ${this.props.clef}`} />
          <div className={`pitch ${this.props.currentPitch}`} />
        </section>
        <NoteRow submitGuess={this.props.submitGuess} />
      </div>
    );
  }
}

export default Staff;
