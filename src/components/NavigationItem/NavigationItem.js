import { MegaMenu } from '..'
import './NavigationItem.css'

const NavigationItem = (props) => {
  return (
    <li className='navigation-item'><a href={`#${props.target}`}>{props.children}</a></li>
  )
}
const NavigationItemMM = (props) => {
  return (
    <li className='navigation-item'>
      <a href='#'>{props.children}</a>
      <MegaMenu/>
    </li>
  )
}

export default NavigationItem
export { NavigationItemMM }