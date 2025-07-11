/* style.css */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f9f9f9;
}

header {
  background: linear-gradient(90deg, #4facfe, #00f2fe);
  padding: 20px 0;
  text-align: center;
  color: white;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s;
}

nav a:hover {
  transform: scale(1.1);
}

.container {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

h1, h2 {
  margin-bottom: 20px;
}

section {
  margin-bottom: 40px;
  animation: fadeIn 1s;
}

img {
  max-width: 100%;
  border-radius: 10px;
}

footer {
  text-align: center;
  padding: 10px;
  background: #eee;
  color: #555;
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

/* Simple button style */
.btn {
  display: inline-block;
  padding: 10px 20px;
  background: #4facfe;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: background 0.3s;
}

.btn:hover {
  background: #00c6ff;
}
