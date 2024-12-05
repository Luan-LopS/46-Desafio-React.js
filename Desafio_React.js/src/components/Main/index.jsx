import style from './Main.module.css'
import InputMask from 'react-input-mask'

const dadosImc = [{
    min: 0,
    max: 18.4,
    title: 'Abaixo do Peso',
    description: 'Seu peso está abaixo do recomendado. Considere consultar um nutricionista.',
    imgUrl: 'https://abeso.org.br/wp-content/uploads/2019/12/imc_06.png.webp',
},
{
    min: 18.5,
    max: 24.9,
    title: 'Peso Normal',
    description: 'Parabéns! Seu peso está ideal para sua altura.',
    imgUrl: 'https://abeso.org.br/wp-content/uploads/2019/12/imc_05.png.webp',
},
{
    min: 25,
    max: 29.9,
    title: 'Sobrepeso',
    description: 'Você está acima do peso ideal. Tente adotar hábitos mais saudáveis.',
    imgUrl: 'https://abeso.org.br/wp-content/uploads/2019/12/imc_04.png.webp',
},
{
    min: 30,
    max: 34.9,
    title: 'Obesidade grau I',
    description: 'Seu peso está muito acima do recomendado. Busque orientação médica.',
    imgUrl: 'https://abeso.org.br/wp-content/uploads/2019/12/imc_03.png.webp',
},
{
    min: 35,
    max: 39.9,
    title: 'Obesidade grau II',
    description: 'Seu peso está muito acima do recomendado. Busque orientação médica.',
    imgUrl: 'https://abeso.org.br/wp-content/uploads/2019/12/imc_02.png.webp',
},
{
    min: 40,
    max: Infinity,
    title: 'Obesidade grau III',
    description: 'Seu peso está muito acima do recomendado. Busque orientação médica.',
    imgUrl: 'https://abeso.org.br/wp-content/uploads/2019/12/imc_01.png.webp',
}];

export default ({ weight, setWeight, height, setHeight, bmiCalculation }) => {

    function verificarImc(imc){
        return dadosImc.find(verif => imc >= verif.min && imc <= verif.max)
    }

    function returnoImc() {
        const imc = bmiCalculation()
        if (imc == null || imc == '') return ''
        else if (imc == Infinity) return (
            <h2 className={style.title}>Calculando...</h2>
        )

        const imcForm = verificarImc(imc.toFixed(1))

        if (imcForm) {
            return(
                <div className={style.flex}>
                    <img className={style.imgHeigth} src={imcForm.imgUrl} alt={imcForm.title}/>
                    <div className={`${style.title} ${style.width}`}>
                        <h2 className={style.title}>{imcForm.title}</h2>
                        <p>{imcForm.description}</p>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className={style.pg}>
            <h2 className={style.title}>Tabela de IMC para Adultos</h2>
            <h3>O que é o IMC?</h3>
            <p>O Índice de Massa Corporal (IMC) é um cálculo simples que usa a altura e o peso de uma pessoa para estimar a quantidade de gordura corporal. Ele é uma ferramenta útil para avaliar o peso e identificar possíveis riscos à saúde relacionados ao peso.</p>
            <main className={style.main}>
                <form className={style.forme}>
                    <div className="">
                        <div className={style.imc}>
                            <label htmlFor="peso">Peso: (Kg) </label>
                            <InputMask mask='999' maskChar="" type="text" id='peso' value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))} />
                        </div>

                        <div>
                            <label htmlFor="altura">Altura: (m)</label>
                            <InputMask mask='9.99' maskChar="0" type="text" id='altura' value={height} onChange={(e) => setHeight(parseFloat(e.target.value))} />
                        </div>
                    </div>
                </form>

                <section>
                    {returnoImc()}
                </section>
            </main>
        </div>
    )
}