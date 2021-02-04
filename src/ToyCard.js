import React from 'react'

class ToyCard extends React.PureComponent{

  //A PureComponent in React will automatically ask if the state or props changed and automatically save us re-renders if they don't change

  // state = {interval: null}

  // componentDidMount(){
  //   let interval = setInterval(() => console.log("Hi!"), 1000)
  //   this.setState({interval: interval})
  // }
  //
  // componentWillUnmount(){
  //   clearInterval(this.state.interval)
  //   console.log(this.props.name, "This component is unmounting from the DOM");
  // }

  componentDidUpdate(){
    console.log("Toy Card is UPDATING");
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log("Checking to see if this component should update");
  //   if (this.props.name === nextProps.name && this.props.image === nextProps.image){
  //     console.log("Neither the name prop nor the image prop changed, so re-rendering this component is a useless waste of energy");
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  render(){
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img alt={"photo of " + this.props.name} src={this.props.image} className="toy-avatar"/>
        <p>5 Likes </p>
        <button className="like-btn">Like &lt;3</button>
      </div>
    )
  }

}

export default ToyCard
