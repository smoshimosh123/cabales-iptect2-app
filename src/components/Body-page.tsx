import React from "react";

const BodyPage: React.FC = () => {
  return (
    <main style={{ maxWidth: 600, margin: "20px auto" }}>

      {/* PROFILE */}
      <div style={{ border: "1px solid #ddd", borderRadius: 10, overflow: "hidden" }}>
        
        <div style={{ height: 120, background: "#1877f2" }}></div>

        <div style={{ display: "flex", gap: 10, padding: 10 }}>
          <img
            src="https://i.pravatar.cc/100"
            alt="avatar"
            style={{ borderRadius: "50%", marginTop: -30, border: "3px solid white" }}
          />

          <div>
            <h3>Carla Mae Cabales</h3>
            <p>React Developer</p>
          </div>
        </div>
      </div>

      {/* POST BOX */}
      <div style={{ display: "flex", gap: 10, marginTop: 15 }}>
        <input
          placeholder="What's on your mind?"
          style={{ flex: 1, padding: 10, borderRadius: 20, border: "1px solid #ccc" }}
        />
        <button style={{ padding: "10px 15px" }}>Post</button>
      </div>

      {/* POSTS */}
      <div style={{ marginTop: 15 }}>
        
        <div style={{ border: "1px solid #ddd", padding: 10, marginBottom: 10 }}>
          <strong>Carla Mae </strong>
          <p>My first Facebook-style UI 😎</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: 10 }}>
          <strong>Carla Mae Cabales</strong>
          <p>Learning React step by step 🚀</p>
        </div>

      </div>

    </main>
  );
};

export default BodyPage;