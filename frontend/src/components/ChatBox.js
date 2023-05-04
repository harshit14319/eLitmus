import React from 'react'
import { portfolio } from '../data';
import PortfolioItem from './PortfolioItem';
import '../components/ChatBox.css'
const ChatBox = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        The Saver <span>Tasks</span>
      </h2>
      <div className="text">
        <p>
          Hey , You are a warrior and protect your city by playing any one game
          and completing the tasks, As you are completing the task the energy of
          monster will decrease, At final commpletion of task , The Monster will
          die and you will protect your city.
        </p>
      </div>
      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default ChatBox