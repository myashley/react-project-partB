import React, { Component } from 'react'

export default class Step5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.getData()
    }
  }

  render() {

    const { 
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      location,
      techStack,
      currentJobTitle,
      currentEmployer,
      roleType,
      responsibilities,
      priority,
      expectedJobTitle,
      expectedCompany,
      minSalary,
      expectedRoleType,
      contactSource,
    } = this.state


    const myTechStack = techStack.map((tech) => 
        <li className="list">{tech}</li>
    )

    const myPriority = priority.map((priorityItem) => 
        <li className="list">{priorityItem.content}</li>
    )

    const myExpectedCompany = expectedCompany.map((company) => 
        <li className="list">{company}</li>
    )
    

    return (

      <div className="step step5">

        <h2>Review</h2>
        <div className="flex-container">

          <div className="flex-item displayBlock">
                <div className="displayField">
                  <p className="labelField">First Name</p>
                  <p className="resultField">{firstName}</p>
                </div>

                <div className="displayField">
                  <p className="labelField">Last Name</p>
                  <p className="resultField">{lastName}</p>
                </div>

                <div className="displayField">
                  <p className="labelField">Mobile Number</p>
                  <p className="resultField">{phoneNumber}</p>
                </div>

                <div className="displayField">
                  <p className="labelField">Email</p>
                  <p className="resultField">{emailAddress}</p>
                </div>

                <div className="displayField">
                  <p className="labelField">Location</p>
                  <p className="resultField">{location}</p>
                </div>
          </div>
          <div className="flex-item displayBlock">
                <div className="displayField">
                  <p className="labelField">Current Job Title</p>
                  <p className="resultField">{currentJobTitle}</p>
                </div>

                <div className="displayField">
                  <p className="labelField">Current Employer</p>
                  <p className="resultField">{currentEmployer}</p>
                </div>

                <div className="displayField">
                  <p className="labelField">Currently in</p>
                  <p className="resultField">{roleType} Role</p>
                </div>

                <div className="displayField">
                  <p className="labelField">Day-to-Day Responsibilities</p>
                  <p className="resultField">{responsibilities}</p>
                </div>

                <div className="displayField">
                  <p className="labelField">Technologies</p>
                  <p className="resultField"><ul>{myTechStack}</ul></p>
                </div>

                <div className="displayField">
                  <p className="labelField">Reume (Optional)</p>
                  <p className="resultField"></p>
                </div>
          </div>

          <div className="flex-item displayBlock">
                <div className="displayField">
                  <p className="labelField">Order of Importance</p>
                  <p className="resultField"><ol>{myPriority}</ol></p>
                </div>

                <div className="displayField">
                  <p className="labelField">Type of roles like to be contacted about</p>
                  <p className="resultField">{expectedJobTitle}</p>
                </div>

                <div className="displayField">
                  <p className="labelField">Type of company like to work in next</p>
                  <p className="resultField"><ul>{myExpectedCompany}</ul></p>
                </div>

                <div className="displayField">
                  <p className="labelField">Minimum salary expectation</p>
                  <p className="resultField">${minSalary}K</p>
                </div>

                <div className="displayField">
                  <p className="labelField">You are looking for:</p>
                  <p className="resultField">{expectedRoleType} Role</p>
                </div>

                <div className="displayField">
                  <p className="labelField">How did you hear about Encode Talent Management?</p>
                  <p className="resultField">{contactSource}</p>
                </div>
          </div>
        
        </div>       
      </div>
    )
  }
}
