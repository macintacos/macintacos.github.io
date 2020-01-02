import React from "react";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  return (
    <svg width="220" height="69" style={{ fontSize: 16 + "px" }}>
      <text
        fill="rgb(0, 0, 0)"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
        fontSize=""
        x="0"
        y="-7"
        id="logo-title"
      >
        <tspan x="0" y="36">
          macintacos (👨🏽‍💻&amp;🌮)
        </tspan>
      </text>
    </svg>
  );
}
