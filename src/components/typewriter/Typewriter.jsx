import React, { Component } from "react";

class Typewriter extends Component {
  sentences = ["Web Developer", "Software Engineer"];

  state = {
    currentSentenceIndex: 0,
    displayedText: "",
    isDeleting: false,
  };

  typingSpeed = 100;
  deletingSpeed = 50;
  delayBetweenSentences = 1500;

  componentDidMount() {
    this.handleTyping();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleTyping = () => {
    const { currentSentenceIndex, displayedText, isDeleting } = this.state;
    const currentSentence = this.sentences[currentSentenceIndex];

    if (isDeleting) {
      if (displayedText.length > 0) {
        this.timeout = setTimeout(() => {
          this.setState(
            {
              displayedText: displayedText.slice(0, -1),
            },
            this.handleTyping
          );
        }, this.deletingSpeed);
      } else {
        this.setState(
          {
            isDeleting: false,
            currentSentenceIndex:
              (currentSentenceIndex + 1) % this.sentences.length,
          },
          this.handleTyping
        );
      }
    } else {
      if (displayedText.length < currentSentence.length) {
        this.timeout = setTimeout(() => {
          this.setState(
            {
              displayedText: currentSentence.slice(0, displayedText.length + 1),
            },
            this.handleTyping
          );
        }, this.typingSpeed);
      } else {
        this.timeout = setTimeout(() => {
          this.setState({ isDeleting: true }, this.handleTyping);
        }, this.delayBetweenSentences);
      }
    }
  };

  render() {
    const { displayedText } = this.state;

    return (
      <div>
        <h3 className="typewrite">
          {displayedText}
          <span className="cursor">|</span>
        </h3>
      </div>
    );
  }
}

export default Typewriter;
