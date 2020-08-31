import React, {Component} from 'react'
import styled from 'styled-components'

const WarningDiv = styled.div`
background-color: red;
text-align: center;
width: 100%;
padding: 10px;
font-size: 14pt;
color: white;
`;

const WarningButton = styled.button`
height: 40px;
  width: 200px;
`;

function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <WarningDiv>
        Warning!
      </WarningDiv>
    );
  }
  
  class Page extends Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true}
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(prevState => ({
        showWarning: !prevState.showWarning
      }));
    }
    
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <WarningButton onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </WarningButton>
        </div>
      );
    }
  }

  export default Page;