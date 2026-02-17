import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <div className="bg-blue-600 text-white py-2 px-4 text-center relative z-50">
            <div className="container mx-auto flex items-center justify-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest">
                <span className="hidden md:inline">Lagos Creator Pathway:</span>
                <span>Build Africa on Roblox Application Now Open</span>
                <Link
                    to="/gamr-lab"
                    className="inline-flex items-center ml-2 underline hover:text-black transition-colors"
                >
                    Apply Now <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
            </div>
        </div>
    );
};

export default TopBar;
