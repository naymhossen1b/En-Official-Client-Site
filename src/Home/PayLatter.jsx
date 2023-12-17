import { FaPaypal, FaApplePay, FaCcVisa } from "react-icons/fa";
const PayLatter = () => {
    return (
        <div className="py-8">
            <div className="flex items-center justify-center gap-8 md:w-11/12 mx-auto bg-red-600 text-white py-1">
                    <h2 className="font-bold md:text-xl italic">Shop now, pay later with</h2>
                    <h2 className="md:text-5xl text-[#A2AAAD]"><FaApplePay /></h2>
                    <h2 className="md:text-5xl"><FaCcVisa /></h2>
                    <h3 className="md:text-5xl text-[#0079C1]"><FaPaypal /></h3>
            </div>
        </div>
    );
};

export default PayLatter;