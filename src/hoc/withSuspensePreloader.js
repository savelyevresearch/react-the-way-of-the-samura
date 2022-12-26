import { Suspense } from "react";
import Preloader from "../components/common/Preloader/Preloader";

const withSuspensePreloader = (Component) => {
  const ComponentWithSuspensePreloaderWrapper = (props) => {
    return (
      <Suspense fallback={<Preloader />}>
        <Component {...props} />
      </Suspense>
    );
  };

  return ComponentWithSuspensePreloaderWrapper;
};

export default withSuspensePreloader;