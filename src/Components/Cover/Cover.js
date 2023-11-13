import React from "react";

export default function Cover() {
  return (
    <div
      className="hero min-h-screen mb-20 "
      style={{ backgroundImage: "url(cover.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">Project Supervision Team</h1>
          <p className="mb-5 text-xl">
            We are assembling a dedicated project supervision team to support
            students in their endeavors, fostering guidance and excellence
            throughout their projects.
          </p>
        </div>
      </div>
    </div>
  );
}
