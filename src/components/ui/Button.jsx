import clsx from 'clsx'

const Button = ({text, icon, isHiddenOnPhones, width}) => {

    return(
        <>
        <button className={clsx("py-2 px-5 rounded-3xl bg-blue-800 text-white hover:bg-blue-700 active:bg-blue-600 md:block", isHiddenOnPhones && "hidden", width)}>
            {text}{" "}{icon}
            </button>
        
        </>
    )
}

export default Button