import React, { Component } from 'react';
import { Container } from 'gestalt';
import { Mutation, withApollo } from 'react-apollo';
import { withRouter } from 'react-router';
import gql from 'graphql-tag';
import Header from '../components/Header';
import './AddActivity.scss';

const GET_SUGGESTIONS = gql `
    {suggestion {
      name
      participantCapacity
      accessibility
      price
      imageUrl
      type {
        id
        name
      }
    }
    }
  `;
    
  const CREATE_ACTIVITY = gql`
  mutation CreateActivity(
    $accessibility: Float!, 
    $price: Float!, 
    $creatorId: Int!, 
    $description: String!, 
    $name:String!, 
    $startTime: Int, 
    $endTime: Int, 
    $type: String!, 
    $locationId: Int, 
    $participantCapacity: Int) {
  createActivity(
    accessibility: $accessibility, 
    price: $price, 
    creatorId: $creatorId, 
    description: $description, 
    name:$name, 
    startTime: $startTime, 
    endTime: $endTime, 
    type: $type, 
    locationId: $locationId, 
    participantCapacity: $participantCapacity) {    
      participantCapacity
      startTime
      endTime
      type {
        id
        name
      }
      location {
        name
        address1
      }
  }
}
`;
 
class AddActivity extends Component {
  state = {
    name: '',
    type: '',
    participantCapacity: '',
    price: '',
    accessibility: .1
  }

  onFieldChange = data => {
    this.setState({ ...this.state, ...data });
  }

  componentDidMount() {
    const { newActivity } = this.props;
    this.setState(newActivity);
  }

  validateFields = () => {
    const { price } = this.state;
    if (typeof price === 'undefined' || price === '' || price > 1) {
      alert('Please enter a price between 0 and 1');
      return false;
    }
    return true;
  }

  render() {
    const { accessibility, name, type, participantCapacity, price } = this.state;
    const { client, newActivity, updateNewActivity, history } = this.props;
    return (
    <>
    <Header/>
    <Container>
      <div className="activityForm">
        <section id="contact-form" className="activityForm">
          <h2 className="formTitle">Add Activity</h2>
          <form id="contact" name="contact">
          <label><span>Title</span>
          <input
            id="newName"
            key="newName"
            onChange={e => this.onFieldChange({ name: e.target.value })}
            placeholder="Title"
            value={name}
            type="text"
          />
          </label>
          <label><span>Type</span>
          <input
            id="newType"
            key="newType"
            onChange={e => this.onFieldChange({ type: e.target.value })}
            placeholder="Type"
            value={type}
            type="text"
          />
          </label>

          <label><span>Participation Capacity</span>
          <input
            id="newPc"
            key="newPc"
            onChange={e => this.onFieldChange({ participantCapacity: e.target.value })}
            placeholder="How many people can participate"
            value={participantCapacity}
            type="text"
          />
          </label>

          <label><span>Price</span>
          <input
            id="newPrice"
            required={true}
            key="newPrice"
            onChange={e => this.onFieldChange({ price: e.target.value })}
            placeholder="Price"
            value={price}
            type="text"
          />
          </label>

          <Mutation mutation={CREATE_ACTIVITY}>
              {
                (createActivity) => (
                  <input type="submit" value="Create" onClick={e => {
                    e.preventDefault();
                    const valid = this.validateFields()
                    if (!valid) {
                      return;
                    }
                    createActivity(
                      { variables: 
                        { accessibility: parseFloat(accessibility),
                          creatorId: 1,
                          description: name,
                          name,
                          type,
                          price: parseFloat(price), 
                          participantCapacity: parseInt(participantCapacity)
                        }
                      }
                    ).then(() => {
                      updateNewActivity({
                        name: '',
                        type: '',
                        participantCapacity: '0',
                        description: '',
                        accessibility: '.1',
                        price: ''
                      });
                      history.push("/home")
                    })
                  }
                }
                inline="true"
                color="blue"
                size="lg"
                className="submitter"/>
                )
              }
            </Mutation>

          </form>
          <aside>
          <p>
            <button
              text="Suggest Me Something"
              className="unsure"
              onClick={
                () => (
                  client.query({ query: GET_SUGGESTIONS, fetchPolicy: "network-only" }).then(({ data: { suggestion } }) => {
                    window.suggestion = suggestion;
                    updateNewActivity(Object.assign({}, suggestion, { type: suggestion.type.name }))
                  })
                )
              }            
            >Unsure? Get a Suggestion</button>
          </p>
          </aside>
        </section>
      </div>
    </Container>
  </>
    );
  }
}

export default withRouter(withApollo(AddActivity));