import React from 'react'

import ToyCard from './ToyCard'

class ToysContainer extends React.Component{

  state = { toys: [] }

  componentDidMount(){
    console.log("COMPONENT DID MOUNT");
    fetch("http://localhost:3000/toys")
      .then(res => res.json())
      .then(toysObj => this.setState({toys: toysObj}))
  }

  componentDidUpdate(){
    console.log("COMPONENT DID UPDATE");
  }

  renderToys(){
    if (this.props.search !== ''){
      return this.state.toys.filter(toyObj => toyObj.name.includes(this.props.search)).map(toyObj => <ToyCard key={toyObj.name + "-card"} name={toyObj.name} image={toyObj.image}/>)
    } else {
      return this.state.toys.map(toyObj => <ToyCard key={toyObj.name + "-card"} name={toyObj.name} image={toyObj.image}/>)
    }
  }

  render(){
    console.log("RENDERING");
    return (
      <div id="toys-container">
        {this.renderToys()}
      </div>
    )
  }
}

export default ToysContainer
