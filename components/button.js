
const cn = 'inline-flex items-center justify-center px-5 py-2 bg-light-400 border border-transparent text-white rounded font-medium text-base  tracking-wider active:bg-light-300 transition ease-in-out duration-150'
export default function Button({type='submit', label, processing}){
    return (
        <button
        type={type}
        className={processing ? cn : cn + 'opacity-50'}
        disabled={processing}
     //   className='inline-flex items-center  px-4 py-2 bg-light-400 border border-transparent font-medium text-base  tracking-wider active:bg-light-300 transition ease-in-out duration-150'
        >
            { processing ? '...' : label }
        </button>
    )
}