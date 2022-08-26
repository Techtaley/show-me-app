
export default function Menu({id, title, active, setSelected}) {

  return (
      <div 
        className={ active ? "project_menu_item active" : "project_menu_item" }
        onClick={()=>  setSelected(id)}>
        {title}
      </div> 
  )
}
