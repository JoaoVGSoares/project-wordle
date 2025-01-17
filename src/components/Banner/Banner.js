import React from "react";

function Banner({ status, children, action, actionText }) {
  return (
    <div className={`${status} banner`}>
      <p>{children}</p>
      {action && (
        <button className="btn" onClick={action}>
          {actionText}
        </button>
      )}
    </div>
  );
}

export default Banner;
