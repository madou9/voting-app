import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import { BsFillArrowUpCircleFill } from "react-icons/bs";



export default class Element extends Component {

  render() {

    return (

      <div className='container'>
        <div className="row">
          <div className='col-md-12'>
            <div className='Card' style={{ width: '18rem' }} >
              <div className='row'>
                <Card.Img src={this.props.productImageUrl} />
                <Card.Body>
                  <Card.Title>{this.props.title}</Card.Title>
                  <h2>{this.props.count}</h2>
                  <Card.Text>
                    {this.props.description}
                  </Card.Text>
                  <a onClick={() => this.props.handleClik(this.props.index)}>
                    <BsFillArrowUpCircleFill/>
                  </a>
                  <i class="fas fa-caret-up"></i>
                </Card.Body>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}
