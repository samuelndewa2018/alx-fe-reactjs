import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrors("Username is required!");
      return;
    }
    if (!email) {
      setErrors("Email is required!");
      return;
    }
    if (!password) {
      setErrors("Password is required!");
      return;
    }

    setErrors("");
    console.log("Form Submitted:", { username, email, password });

    // Simulate API call
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log("User registered:", data));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors && <p style={{ color: "red" }}>{errors}</p>}
      <button type="submit">Register</button>
    </form>
  );
}
