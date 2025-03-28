import { useEffect, useState } from "react";
import classes from './ThemeLayout.module.css';
import LightSun from "@/src/components/ui/LightSun";
import LightRound from "@/src/components/ui/LightRound";


function ThemeLayout() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)

  }, [])

  if (!mounted) {
    return null
  }
  const setTheme = () => {
    if (mounted) {
      if (document.body.classList.contains('dark_mode')) {
        document.body.classList.remove('dark_mode');
        document.body.classList.add('light_mode')
        localStorage.setItem('theme', JSON.stringify({ theme: 'light_mode' }));
      } else {
        document.body.classList.add('dark_mode');
        document.body.classList.remove('light_mode');
        localStorage.setItem('theme', JSON.stringify({ theme: 'dark_mode' }));
      }
    }
  }

  const lsTheme: { theme?: string } = JSON.parse(localStorage.getItem('theme') as string);
  if (lsTheme?.theme) {
    document.body.classList.add(lsTheme.theme)
  }
  return (
    <div className={classes.container}>
      <button className="theme" onClick={() => setTheme()}>
        <LightSun />
        <LightRound />
      </button>
    </div>
  )
}

export default ThemeLayout