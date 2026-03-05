


export default function LuckyDraw() {

    return (
        <>
            <div className="lg:w-[1470px] md:w-[740px] mb-10 mx-auto">
                <div className="lg:w-[1400px] relative">
                    <img src="/image/luckydrawrectangle.png" alt="cardbackground" className="w-full h-[234px] md:w-full md:h-full lg:w-full lg:h-full object-fit" />
                    <img src="/image/thargift.png" alt="carimage" className="absolute bottom-10 right-10 md:bottom-5 md:right-30 lg:bottom-5 lg:right-30 w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[334px] lg:h-[353px] object-contain" />
                    <img src="/image/luckydrawtext.png" alt="luckydrawtext" className="absolute bottom-30 left-10 md:bottom-25 md:left-30 lg:bottom-35 lg:left-70 w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[334px] lg:h-[353px] object-contain" />
                    <p className="absolute text-[14px] md:text-[15px] lg:text-[24px] leading-tight m-0 p-0 bottom-23 left-10 md:bottom-25 md:left-30
                            lg:bottom-50 lg:left-70 w-[120px] md:w-[150px] lg:w-[370px] whitespace-normal break-words">One lucky winner from every
                        100 PGP members can win a</p>

                    <h2
                        className="
                            absolute
                            lg:bottom-35
                            lg:left-70 
                            bottom-15 left-10
                            md:bottom-15
                            md:left-30
                            md:text-[25px]
                            lg:text-[48px]
                            font-bold
                            leading-none
                        "
                        style={{
                            fontFamily: "'Franklin Gothic Heavy', sans-serif",
                            fontWeight: 400,
                            letterSpacing: "0px",
                        }}
                    >
                        “ THAR ”
                    </h2>

                    <button className="absolute bottom-5 left-10 md:bottom-5 md:left-30 lg:bottom-20 lg:left-70 text-white bg-blue-600 px-2 py-2 rounded-lg text-[14px] md:text-[12px] lg:text-[20px]">Earn Reward</button>
                </div>
            </div >
        </>
    )
}