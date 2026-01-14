import { forwardRef } from "react";

const MyInput = function (props, ref) {
  return (
    <>
      <input {...props} ref={ref} />
    </>
  );
};

const forwardedMyInput = forwardRef(MyInput);

export default forwardedMyInput;
