import React from 'react';
import storeProvider from './storeProvider';

class Timestamp extends React.PureComponent {
	timeDisplay = timestamp => 
			this.props.tiemstamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
	shouldComponentUpdate(nextProps, nextSTate) {
		
		const currentTimeDisplay = this.props.tiemstamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
		const nextTimeDisplay = next.tiemstamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    return currentTimeDisplay !== next timeDisplay;
  }

	componentWillUpdate(nextProps, nextSTate) {
		console.log("Updating timestamp");
	}
	
  render() {
    return <div>{this.props.timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</div>;
  }
}

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp
  };
}

export default storeProvider(extraProps)(Timestamp);
