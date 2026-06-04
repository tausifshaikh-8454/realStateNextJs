
import footlogo from "../assets/foot-logo.svg"
import facebook from "../assets/Symbol-1.svg"
import linkedin from "../assets/Symbol-2.svg"
import twiter from "../assets/Symbol-3.svg"
import insta from "../assets/Symbol.svg"


export default function Footer() {
  return (
    <>
      
      <div className="flex flex-row px-20 bg-[#F9F9F9] py-5 justify-between items-center">
        <div className="w-30%"><p className="">Copyright © {new Date().getFullYear()}. JustHome</p></div>
        <div className="w-30%"><img className="w-[150px]" src={footlogo.src}/></div>
        <div className="w-30% flex flex-row gap-5">
            <img src={facebook.src}/>
            <img src={linkedin.src}/>
            <img src={twiter.src}/>
            <img src={insta.src}/>
        </div>
      </div>
    </>
  );
}
