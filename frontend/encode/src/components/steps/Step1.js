import React, { Component } from 'react'

export default class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}


  render() {
    return (
      <div className="flex-container">
      <div className="flex-item">
          <form id="Form">
            {/* <h2>Encode Talent</h2> */}
            <h2>Candidate Profile Form</h2>

            <p>
              Hi there, your information is protected by our privacy policy.
              If you consent to Encode Talent collecting your information for the sole purposes of our recruitment process, click "Next".
            </p>
          </form>
        </div>
      </div>
    )
  }
}
