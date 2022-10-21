const Footer = () => {
  const today = new Date();
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        justifyContent: "center",
        borderTop: "solid 2px lightGray",
      }}
    >
      <div style ={{
          display: 'flex',
          gap: '1rem',
      }}>
        <p>Privacy</p>
        <p>Terms of Service</p>
        <p>Support</p>
      </div>
      <div>
        <p>&copy; {today.getFullYear()} Ateker</p>
      </div>
    </footer>
  );
};

export default Footer;
