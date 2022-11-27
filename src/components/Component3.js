import React from 'react';

export default function Component3() {
  return (
    <>
      <section className="comp-3 comp">
        <section className="sidebar">
          <div className="bar-container">
            <div className="home">Home</div>
            <div className="profile">Profile</div>
            <div className="logOut">Log Out</div>
          </div>
        </section>

        <section className="main">
          <div className="main-container">
            <div className="main-header">Question</div>
            <div className="qst">Question and Options</div>
            <div className="solution">Solution</div>
          </div>
        </section>
      </section>
    </>
  );
}
