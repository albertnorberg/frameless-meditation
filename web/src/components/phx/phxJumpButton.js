import React from "react";
import Icon from '@material-ui/core/Icon';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

function jump(target) {
  if (!target) {
    return;
  }

  const element = document.getElementById(target);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  } else {
    return console.log("ERROR - Element = null");
  }
}

export default function(props) {
  const { jumpTarget, icon } = props;

  return (
    <div
      onClick={() => jump(jumpTarget)}
      className="phxHeroJumpButton"
      style={{ padding: 5, margin: 'auto', cursor: 'pointer', borderRadius: 100}}
    >
      {icon && icon}
      {!icon && "JumpButton icon is missing" }
    </div>
  );
}
