import style from './Header.module.css'

const menu = [
    {   
        name: 'home',
        href: 'home'
    },
    {
        name: 'imc',
        href: 'imc'
    },
    { 
        name: 'footer',
        href: 'footer'
    }]

export default () =>{
    return(
        <header className={style.header}>
            <div className={style.header_title}>
                <h1 className={style.header_titleH1}>IMC</h1>
            </div>
            <nav>
                <ul className={style.nave}>
                    {menu.map((item, key)=>(
                        <li className={style.item} key={key}>
                            <a className={style.item_link} href={item.href}>{item.name}</a>
                        </li>
                    ))}
                    
                </ul>
            </nav>
        </header>
    )

}