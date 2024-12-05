import style from './Footer.module.css';

export default (props) => {
    return (
        <footer className={style.footer}>
            <small>Desenvolvido por Luan Lopes de Siqueira</small>
            <div  className={style.flex}>
                {props.img.map((img, key) => (
                    <div key={key} className={style.item}>
                        <img src={img.url} alt={img.title} />
                        <small>{img.title}</small>
                    </div>
                ))}
            </div>
        </footer>
    );
};
