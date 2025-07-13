import React from 'react';
import { useTheme } from '../../../../contexts/ThemeContext';
import './styles/Settings.scss';

function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="settings">
      <h1>Settings</h1>

      <section className="settings-section">
        <h2>Appearance</h2>
        <label className="toggle-label">
          Dark Mode
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
        </label>
      </section>
    </div>
  );
}

export default Settings;