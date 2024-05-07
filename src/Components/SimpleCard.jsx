
import React, { Component } from 'react';
import Title from './Title';
import Image from './Image';
import Description from './Description';
import Koba1 from '../assets/koba1.jpeg';
class SimpleCard extends Component {
  render() {
    return (
      <>

        <div className='card'>
          <div className='img'>
            <Image image={Koba1}/>
          </div>
          <div className="details">
            <Title className='title' title='ANDREW NIMAKO-BOATENG'/>
            <div className="description">
              <Description description='With a unique combination of skills and qualifications in architecture, project management, and software development, I am a multifaceted professional who can adapt to different sectors and challenges.'/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SimpleCard
