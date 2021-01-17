import React from "react";

function jump(target, mobile) {
  if (!target) {
    return;
  }

  const jumpLinkElement = document.getElementById(target);

  if (jumpLinkElement) {
    if (mobile) {
      jumpLinkElement.scrollIntoView(true);
      const scrolledY = window.scrollY;
      const offsetFixedHeader = 75;
      if (scrolledY) {
        window.scroll(0, scrolledY - offsetFixedHeader);
      }
    } else {
      jumpLinkElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  } else {
    return console.log("ERROR - jumpLinkElement = null");
  }

}

export default function(props) {
  const { jumpTarget, icon, mobile } = props;
  return (
    <div
      onClick={() => jump(jumpTarget, mobile)}
      className="phxHeroJumpButton"
      style={{ padding: 5, margin: 'auto', cursor: 'pointer', borderRadius: 100}}
    >
      {icon && icon}
      {!icon && "JumpButton icon is missing" }
    </div>
  );
}
