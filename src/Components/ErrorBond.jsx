import React, { Component } from "react";

export class ErrorBond extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  render() {
      if (this.state.hasError){
          return <h1>something want Wrong</h1>
      }
    return this.props.childen;
  }
}

export default ErrorBond;
