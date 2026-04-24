import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        padding: "10px 20px",
        background: "#1877f2",
        color: "white",
      }}
    >
      <strong>Facebook</strong>

      <input
        placeholder="Search Facebook"
        style={{
          padding: 6,
          borderRadius: 20,
          border: "none",
          width: 200,
          textAlign: "center",
        }}
      />

      <img
        src="https://i.pravatar.cc/40"
        alt="profile"
        style={{ borderRadius: "50%" }}
      />
    </header>
  );
};

export default Header;