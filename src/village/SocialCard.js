import React from 'react';
import ReactDOM from 'react-dom';
import '../style/socialcard.css';
import Title from './neighborhood/Title';
import Body from './neighborhood/Body';
import Footer from './neighborhood/Footer';
import { Container, Row} from 'reactstrap';

class SocialCard extends React.Component{
  render() {
    return (
        <div className="frame">
            <Title icon="android-icon.png" username="The Practical Dev" id="@ThePracticalDev"
              date="Sep 10" content="Learning React? Start Small" authorId="@dceddia"/>
            <Body imgName="bodyImage.png" title="Learning React? Start Small."
              content="Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps" link="dev.to"/>
            <Footer share="55" like="180" message="2"/>
        </div>


    );
  }
}

export default SocialCard;
