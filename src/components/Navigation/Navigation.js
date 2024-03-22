import { NavigationItem, NavigationItemMM } from '..'
import './Navigation.css'

const Navigation = () => {
  return (
      <ul className="main-nav">
          <NavigationItem target="articles">Article</NavigationItem>
          <NavigationItem target="gallery">Gallery</NavigationItem>
          <NavigationItem target="features">Features</NavigationItem>
          <NavigationItemMM>Other Links</NavigationItemMM>
      </ul>
  )
}

export default Navigation