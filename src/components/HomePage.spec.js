import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import HomePage from './HomePage';
import WodAdd from './WodAdd';


describe('<HomePage />', () => {

    let initialState = [{
       id: '0',
       author: 'charles',
       date: "December 12, 2016",
       location: 'Crossfit PobleNou',
       description: "I'm headed in around 10am to do a couple hours of open box.",
       likes: 0,
       comments: [{author: "Michael", comment: "Sounds fun!"}],
       attendees: ["Michael"]
    }];

    let wrapper;
    before(() => {
      wrapper = shallow(<HomePage wods={initialState}/>);
    });

    it('should define a header tag', () =>{
      const actual = wrapper.find('h2').text();

      expect(actual).not.to.equal(undefined);
    });

    it('should display a Wod element for each item in the list of Wods', () =>{
      expect(wrapper.find(WodAdd)).to.have.length(1);
    });

    //commenting out for now as wrapper.find doesn't quite support what I need here
    xit('addWod button should toggle the addWod UI section', () =>{
      const onButtonClick = sinon.spy();

      //verify the initial state of the Wod elements
      expect(wrapper.find("section[id='wodAdd'][style='display: none;']")).to.have.length(1);

      //trigger the test case
      wrapper.find('button').simulate('click');

      expect(onButtonClick).to.have.property('callCount', 1);
      expect(wrapper.find("section[id='wodAdd'][style='display: block;']")).to.have.length(1);
    });
});
