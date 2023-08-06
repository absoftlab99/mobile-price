import React from 'react'

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img className='h-96' src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-2up-purple-220907_inline.jpg.large.jpg" alt='rendome img' />
                <div>
                    <h1 className="text-5xl font-bold">Apple iPhone 14 Pro Max</h1>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td className='text-warning text-xl'>NETWORK</td>
                                    <td className='text-info'>Technology</td>
                                    <td>GSM / CDMA / HSPA / EVDO / LTE / 5G</td>
                                </tr>
                                {/* row 2 */}
                                <tr className="hover">
                                    <td className='text-warning text-xl'>LAUNCH</td>
                                    <td className='text-info'>Announced<br></br> Status</td>
                                    <td>2022, September 07<br></br> Available. Released 2022, September 16</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td className='text-warning text-xl'>BODY</td>
                                    <td className='text-info'>Dimensions<br></br>
                                        Weight<br></br>
                                        Build<br></br>
                                        SIM
                                    </td>
                                    <td>160.7 x 77.6 x 7.9 mm (6.33 x 3.06 x 0.31 in)<br></br>

                                        240 g (8.47 oz)<br></br>

                                        Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame<br></br>

                                        Nano-SIM and eSIM - International
                                        Dual eSIM with multiple numbers - USA
                                        Dual SIM (Nano-SIM, dual stand-by) - China
                                        IP68 dust/water resistant (up to 6m for 30 min)
                                        Apple Pay (Visa, MasterCard, AMEX certified)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero