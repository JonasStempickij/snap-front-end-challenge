import React from 'react';
import clients from '../assets/mock_data';
import Wrapper from '../assets/wrappers/Content';

const Content = () => {
  return (
    <Wrapper>
      <h1>Make remote work</h1>
      <p>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button className='btn'>Learn more</button>
      <div className='clients'>
        {clients.map((client, index) => {
          return (
            <div className='client'>
              <img key={index} src={client.img} alt={client.name}></img>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Content;
