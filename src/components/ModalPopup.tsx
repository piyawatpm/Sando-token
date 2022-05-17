type ModalPopupProps={
    closePopup:()=>void
}
const ModalPopup = ({closePopup}:ModalPopupProps) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}

          <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-[#171717] py-2 px-10 outline-none focus:outline-none">
            {/*header*/}

            <button
              className="p-1 ml-auto bg-red border-0 text-red float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closePopup}
            >
              <span className="bg-transparent text-gray-500  h-6 w-6 text-3xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
            <div className="flex px-10 py-5">
              <h3 className="text-xl font-semibold text-white text-center ml-8 ">
                Connect your wallet
              </h3>
            </div>

            {/*body*/}

            <div className="flex items-center justify-center mt-5 px-10">
              <a
                href="/metamask"
                className="bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-11 rounded-xl"
              >
                <div className="flex">
                  <img
                    src="/images/wallets/metamask.svg"
                    className="w-12 "
                    alt="metamask"
                  />
                  <h1 className="ml-3 pt-2">Metamask</h1>
                </div>
              </a>
            </div>
{/* 
            <div className="flex items-center justify-center mt-5">
              <a
                href="/metamask"
                className="bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-5 rounded-xl"
              >
                <div className="flex">
                  <img
                    src="/images/wallets/walletconnect.png"
                    className="w-12 "
                    alt="wallet-connect"
                  />
                  <h1 className="ml-2 pt-2">WalletConnect</h1>
                </div>
              </a>
            </div>
            <div className="flex items-center justify-center mt-5 px-10">
              <a
                href="/"
                className="bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-9 rounded-xl"
              >
                <div className="flex">
                  <img
                    src="/images/wallet/trust-wallet-icon.svg"
                    className="w-11 "
                    alt="trust wallet icon"
                  />
                  <h1 className="ml-3 pt-2">Trust Wallet</h1>
                </div>
              </a>
            </div>
            <div className="flex items-center justify-center mt-5 mb-5 px-10">
              <a
                href="/"
                className="bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-12 rounded-xl"
              >
                <div className="flex">
                  <img
                    src="/images/wallet/phantom-icon.svg"
                    className="w-12 "
                    alt="phantom icon"
                  />
                  <h1 className="ml-5 pt-2">Phantom</h1>
                </div>
              </a>
            </div> */}
            <p className="flex items-center justify-center mt-8">What’s a Wallet?</p>
            <div className="flex items-center justify-center px-10">
              <a
                href="/wallet"
                className="mt-2 mb-5 w-48 inline-block text-center px-6 py-1 bg-[#FF0090] hover:bg-[#cc0274] text-white text-xl font-bold font-bold leading-normal rounded-full shadow-md hover:shadow-lg focus:bg-[#cc0274] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#cc0274] active:shadow-lg transition duration-150 ease-in-out"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="backdrop-blur-lg fixed inset-0 z-40"></div>
    </>
  );
};

export default ModalPopup