import './MegaMenuItem.css'

const MegaMenuItem = (props) => {
  return (
      <li className='mega-menu-item'>
          <a href={`#${props.targ}`}>{props.icon}{props.link}</a>
      </li>
  )
}

export default MegaMenuItem