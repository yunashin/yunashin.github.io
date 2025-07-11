import { Component, PropsWithChildren } from "react";
import EmptyState from "./EmptyState";

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<PropsWithChildren, State> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <EmptyState title="Oops! Something went wrong." />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
