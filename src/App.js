import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import kitchen from './assets/kitchen.jpg'
import deck from './assets/deck.jpg'
import exterior from './assets/exterior.jpg'
import dinning from './assets/dinning.jpg'


var projectTypes = [
  {
    id: 0,
    title: "Kitchen",
    photo: kitchen,
    active: false,
    startingAt: '419',
    summary: 'Regaurded as one of the top things to remodel in a house the kitchen is something you want done right, the first time. We finish walls and cabinets to your exact specifications.'
  },
  {
    id: 1,
    title: "Deck",
    photo: deck,
    active: false,
    startingAt: '449',
    summary: `Finisning a deck can increase its longevity while also providing a great look. We can help you pick stain colors or talk to you about other types of finishes you have to choose from.`
  },
  {
    id: 2,
    title: "Exterior",
    photo: exterior,
    active: true,
    startingAt: '589',
    summary: 'Providing over 100 types of exterior finish options we are leaders in our space based on variety.'
  },
  {
    id: 3,
    title: "Dinning",
    photo: dinning,
    active: false,
    startingAt: '299',
    summary: 'Ready to have dinner in that special place you always dreamed of? Having the right finish on your walls will make the experience the top level atomosphere you desire.'
  },
  {
    id: 4,
    title: "Master Bedroom",
    photo: kitchen,
    active: false,
    startingAt: '299',
    summary: 'We are here to help you have a stunning master bedroom design. High quality and accurately applied paint can be significant to getting that feel you want.'
  },
  {
    id: 5,
    title: "Bathroom",
    photo: kitchen,
    active: false,
    startingAt: '299',
    summary: 'Some bathrooms are small but the choice of paint you use can either make them smaller or feel larger than life itself. Let us help you make a confortable, usable and inviting environment.'
  },
  {
    id: 6,
    title: "Floors",
    photo: kitchen,
    active: false,
    startingAt: '299',
    summary: 'Floors can range from rustic to modern with a large array of finishes to be implemented. We can do anytype of stain, polymer or protectant there is.'
  },
  {
    id: 7,
    title: "Garage",
    photo: kitchen,
    active: false,
    startingAt: '299',
    summary: 'Often considered but also overlooked - the garage. This space can be a place for junk or another usable atheistically pleasing part of your home'
  },
  {
    id: 8,
    title: "+ many more!",
    photo: kitchen,
    active: false,
    startingAt: '299',
    summary: 'We do a lot of different paint jobs and we love custom work. If you need something done but your not sure who you can trust to do it then call us. '
  }
]

class App extends Component {

  constructor(){
    super()
    this.state = {
      projectTypes: projectTypes
    }
  }

  handleProjectTypeClick = (id) => {
    for (var i = 0; i < projectTypes.length; i++) {
      if(projectTypes[i].id === id){
        projectTypes[i].active = true
      } else{
        projectTypes[i].active = false
      }
    }

    this.setState({
      projectTypes: projectTypes
    })

  }
componentDidMount(){

}


  render() {

    var displayProjectTypes = this.state.projectTypes.map((eachItem, index) =>
        <div key={index}>

          {eachItem.active === false &&
            <div className="uk-animation-toggle">
              <div className="uk-inline uk-animation-fade" onClick={() => this.handleProjectTypeClick(eachItem.id)}>
                  <img src={eachItem.photo} alt="" />
                  <div className="uk-overlay uk-overlay-primary uk-position-cover">
                      <p>{eachItem.title}</p>
                  </div>
              </div>
            </div>
          }

          {eachItem.active === true &&
              <div className="uk-inline uk-animation-fade">
                  <img src={eachItem.photo} alt="" />
              </div>
          }
        </div>
    )


    var displayProjectTypesInfo = this.state.projectTypes.map((eachItem, index) =>
		  <div key={index}>
          {eachItem.active === true &&
            <div>
              <h1>{eachItem.title}</h1>
              <p className="starting-at">$<span className="starting-at-price">{eachItem.startingAt}</span> and up</p>
              <h2>{eachItem.summary}</h2>
            </div>
          }
        </div>
    )

    return (
      <div className="App">


       

           


                          <img src={logo} alt="Branson Mo Painterss" className="logo"/>
                          <h3 style={{marginTop: 25}}>(417) 598-8094</h3>
                          
        


            <div className="second-row">
              <div className="project-types" uk-scrollspy="cls: uk-animation-fade; target: > div; delay: 500; repeat: true">
                {displayProjectTypes}
              </div>
            <div className="project-types-info">
              {displayProjectTypesInfo}
            </div>

            </div>

            {/* <div className="second-row">
              <div className="project-types-info">
                <h1>Areas We Serve</h1>
              </div>
              <div id="map"></div>
			</div> */}

			
			<div className="second-row">
			<h1>Areas We Serve in Missouri and Arkansas</h1>
           
			
			<p>Branson | Hollister | Kirbyville | Forsyth | Harrison</p>
			</div>

            <div className="fourth-row">

              <p>Our success as a painting company is due to our service, care and attention to detail we put in every job. We believe communication is the key to both happy customers and professional painting crews. Throughout the house painting process, it is important to us to set clear expectations for our customers and ensure they are being met with integrity and honesty.</p>
            </div>


      </div>
    );
  }
}

export default App;
