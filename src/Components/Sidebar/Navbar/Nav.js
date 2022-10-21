function Nav() {
  return (
    <div style ={{
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem'
    }}>
      <button>Updates</button>
      <button>General</button>
      <button>Explore</button>

      <h3>Workstation</h3>

      <button>Storefront</button>
      <button>Marketing</button>
      <button>Supply Dock</button>
      <button>Docs</button>
    </div>
  );
}

export default Nav;
