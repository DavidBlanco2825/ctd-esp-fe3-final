import PropTypes from 'prop-types';

const ThemeToggleButton = ({ theme, changeTheme }) => {
  const themeAlt = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
  const buttonClass = `theme-button ${theme}`;

  return (
    <button
      onClick={changeTheme}
      className={buttonClass}
      aria-label={themeAlt}
      style={{
        position: "relative",
        width: "60px",
        height: "30px",
        background: theme === 'light' ? '#ccc' : '#333',
        borderRadius: "15px",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s ease"
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "3px",
          left: theme === 'light' ? "3px" : "calc(100% - 33px)",
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          background: theme === 'light' ? "#f1c40f" : "#ffff",
          transition: "left 0.3s ease"
        }}
      />
    </button>
  );
};

ThemeToggleButton.propTypes = {
  theme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired
};

export default ThemeToggleButton;
