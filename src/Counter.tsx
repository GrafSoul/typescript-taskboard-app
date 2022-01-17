import React from 'react';

type CounterState = {
	count: number;
};

export class Counter extends React.Component<{}, CounterState> {
	state: CounterState = {
		count: 0,
	};

	increment = () => {
		this.setState({ count: this.state.count + 1 });
	};

	decrement = () => {
		this.setState({ count: this.state.count - 1 });
	};

	render() {
		return (
			<>
				<p>Count: {this.state.count}</p>
				<button onClick={this.increment}>Increment</button>
				<button onClick={this.decrement}>Decrement</button>
			</>
		);
	}
}
