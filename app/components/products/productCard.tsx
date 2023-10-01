"use client";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";

 //Client component

interface ProductCardProps {
    data: any;
}

const ProductCard:React.FC<ProductCardProps> = ({data}) => {
    return  <div className="col-span-1
        cursor-pointer
        border
        border-slate-200
        bg-slate-50
        rounded-sm
        p-2
        transition
        hover:scale-105
        text-center
        text-sm">
        <div className="flex flex-col items-center w-full gap-1">
            <div className="aspect-square overflow-hidden relative w-full">
                <Image
                fill
                src={data.images[0].image}
                alt={data.name}
                className="w-full h-full object-contain"
                />
            </div>
            <div className="flex items-center">
                <div className="w-12 h-12 bg-[#032B76] rounded-full mr-4"></div>
                <div className="flex-1">
                    <div className="flex items-center">
                        <div className="">
                            <p>{truncateText(data.name)}</p>
                        </div>
                        <div className="">
                            <p>${data.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
 
export default ProductCard;