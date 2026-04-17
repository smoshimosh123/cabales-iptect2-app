// src/Home.tsx
import React from "react";

type HomeProps = {
  name: string;
  age: number;
  bio: string;
};

const Home: React.FC<HomeProps> = ({ name, age, bio }) => {
  return (
    <div style={styles.container}>
      <h1>Profile Page</h1>

      <div style={styles.card}>
        <h2>{name}</h2>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Bio:</strong> {bio}</p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  card: {
    display: "inline-block",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    marginTop: "20px",
    minWidth: "250px",
  },
};

export default Home;