import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2026 My Website. All rights reserved.</p>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    marginTop: "50px",
  },
};

export default Footer;