import clsx from 'clsx'

const Button = ({text, icon, isHiddenOnPhones, width}) => {

    return(
        <>
        <button className={clsx("py-2 px-5 rounded-3xl bg-blue-900 text-white hover:bg-blue-800/70 active:bg-blue-300 transition all ease duration-400 hover:scale-101 active:scale-99 md:block text-xs font-light shadow shadow-blue-900/40 whitespace-nowrap", isHiddenOnPhones && "hidden", width)}>
            {text}{" "}{icon}
        </button>
        
        </>
    )
}

export default Button