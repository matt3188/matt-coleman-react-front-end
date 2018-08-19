import React from 'react';
import './Hero.css';

const Hero = props => (
  <div className="hero">
    <h1>{props.name}</h1>
    <p>{props.strapline}</p>
    <p>
      {props.description}{' '}
      <a href={props.employer_website}>{props.current_employer}</a>.{' '}
      {props.current_job_role}
    </p>
    <p>
      You can <a href={props.link_to_cv}>view my CV here</a> if you like.
    </p>
    <a href="mailto:{props.email}?Subject=Hello%20there">Get in touch</a>
  </div>
);

export default Hero;
