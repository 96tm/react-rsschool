import React from 'react';
import './Message.css';

interface IMessageProps {
  text: string;
  remove: () => void;
}

interface IMessageState {
  opacity: number;
  intervalHandle: null | NodeJS.Timeout;
}

export default class Message extends React.Component<
  IMessageProps,
  IMessageState
> {
  static OPACITY_REDUCTION_INTERVAL = 400;
  static OPACITY_REDUCTION_VALUE = 0.2;
  static MESSAGE_REMOVAL_TIMEOUT = 2000;

  constructor(props: IMessageProps) {
    super(props);
    this.state = { opacity: 1, intervalHandle: null };
  }

  componentDidMount(): void {
    const handle = setInterval(() => {
      this.setState((previousState) => ({
        ...previousState,
        opacity: previousState.opacity - Message.OPACITY_REDUCTION_VALUE,
      }));
    }, Message.OPACITY_REDUCTION_INTERVAL);
    this.setState((previousState) => ({
      ...previousState,
      intervalHandle: handle,
    }));
    setTimeout(() => {
      const { intervalHandle } = this.state;
      const { remove } = this.props;
      if (intervalHandle) {
        clearInterval(intervalHandle);
      }
      remove();
    }, Message.MESSAGE_REMOVAL_TIMEOUT);
  }

  componentWillUnmount(): void {
    const { intervalHandle } = this.state;
    if (intervalHandle) {
      clearInterval(intervalHandle);
    }
  }

  render(): JSX.Element {
    const { text } = this.props;
    const { opacity } = this.state;

    return (
      <div className="Message">
        <div className="Message__content" style={{ opacity }}>
          {text}
        </div>
      </div>
    );
  }
}
