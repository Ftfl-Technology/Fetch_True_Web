


export default function TeamBuild() {

    return (
        <>
            <div className="lg:w-[1480px] mx-auto mt-4 mb-6">
                <div className="lg:w-[1430px] md:w-[750px] relative">
                    <img src="/image/teambuildcardbg.jpg" alt="refercardbackground" className="w-full h-[234px] md:h-[230px] lg:h-[400px] object-fit rounded-lg" />
                    <h2 className="absolute bottom-40 left-10 md:bottom-42 md:left-30 lg:bottom-70 lg:left-35 lg:text-[32px] text-[#1D4699] md:text-[20px] text-[14px] font-bold">Team Build</h2>
                    <p className="absolute text-[12px] md:text-[14px] lg:text-[20px] leading-tight bottom-27 left-10 md:bottom-28 md:left-30 lg:bottom-50 lg:left-35 w-[150px] md:w-[180px] lg:w-[370px] whitespace-normal break-words">
                        Build, grow your team & earn
                        through performance rewards
                    </p>

                    <div className="absolute bottom-13 left-10 md:bottom-13 md:left-30 lg:bottom-30 lg:left-35 leading-tight">
                        <p className="text-[12px] md:text-[12px] lg:text-[16px]">Up to</p>

                        <div className="flex gap-1">
                            <span className="text-[#2164F4] text-[20px] md:text-[24px] lg:text-[32px] font-semibold">
                                1,00,000/
                            </span>
                            <span className="text-[14px] lg:text-[16px] mt-1 md:mt-2 lg:mt-4">
                                month
                            </span>
                        </div>
                    </div>


                    <div className="absolute bottom-3 left-10 md:bottom-5 md:left-30 lg:bottom-15 lg:left-35">
                        <button className="bg-[#2164F4] text-white text-[14px] md:text-[14px] lg:text-[20px] rounded-lg p-1 md:p-1 lg:p-2">Build Team</button>
                    </div>

                </div>
            </div >
        </>
    )
}