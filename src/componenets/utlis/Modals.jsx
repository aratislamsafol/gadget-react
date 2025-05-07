import paymentImg from '../../assets/Group.png';

export default function Modals({removeAll, total}) {
    // console.log(total)
  return (
    <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col items-center gap-2">
            <img src={paymentImg} alt="payment Image" className='w-[70.22px] h-[67.53px]' />

            <h3 className="font-bold text-2xl p-2 border-b border-gray-400 ">Payment Successfully</h3>
            {/* product Price  */}
            <div className='text-gray-500 text-center'>
                <p className='text-lg'>Thanks for purchasing.</p>
                <p className='my-1'>Total: {total} tk</p>
            </div>
            
            <button type="button"onClick={() => {removeAll();document.getElementById("my_modal_1").close()}} className="btn w-full rounded-4xl">Close</button>
        </div>
    </dialog>
  )
}
