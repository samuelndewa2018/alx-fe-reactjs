function Footer() {
  return (
    <footer
      style={{ padding: "10px", backgroundColor: "#eee", textAlign: "center" }}
    >
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
