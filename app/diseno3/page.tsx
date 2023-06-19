import Image from "next/image"
import Link from "next/link"

export default function Page(){

    return (
        <div>
<section className="flex flex-col gap-20 font-poppins tracking-wider bg-[url('/filete.jpg')] bg-[rgba(0,0,0,.25)] bg-blend-multiply text-white py-2 px-3 bg-cover h-screen sm:gap-28">
       
        <header className="flex justify-center sm:justify-between">
            <p className="font-bold text-xl">URBANDINE</p>
            <div className="hidden sm:flex gap-3">                
                <button className="text-[9px] py-1 px-3 font-semibold tracking-wider border-transparent hover:border-white hover:border-[1px]">HOME</button>
                <button className="text-[9px] py-1 px-3 font-semibold tracking-wider border-transparent hover:border-white hover:border-[1px]">MENU</button>
                <button className="text-[9px] py-1 px-3 font-semibold tracking-wider border-transparent hover:border-white hover:border-[1px]">LOCAL</button>
                <button className="text-[9px] py-1 px-3 font-semibold tracking-wider border-transparent hover:border-white hover:border-[1px]">RESERVE</button>
                <button className="text-[9px] py-1 px-3 font-semibold tracking-wider border-transparent hover:border-white hover:border-[1px]">CATERING</button>
            </div>
        </header>
       
        <div className="grid gap-2 justify-center sm:ml-36 sm:justify-start">
            <p className="text-[10px]">MENU</p>
            <p className="font-extralight text-5xl sm:text-6xl">TABLE 4 TWO</p>
            <div className="flex gap-x-3 items-center">
                <button className="bg-white text-black py-1 px-3 font-bold text-[8px] hover:shadow-md hover:shadow-black">RESERVE TABLE</button>
                <a className="text-[8px] font-bold  underline hover:cursor-pointer">BROWSE MENU</a>
            </div>
        </div>

    </section>

        <div className="flex justify-center gap-x-5 my-3">
            <Link href={"/"}>Inicio</Link> 
            <Link href={"/diseno1"}>Diseño 1</Link>
        </div>
        

    </div>    
    )
}