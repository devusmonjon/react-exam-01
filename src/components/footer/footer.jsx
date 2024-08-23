import appstore from "@/assets/images/appstore.png";
import playstore from "@/assets/images/playstore.png";
import paymentMethods from "@/assets/images/payment-method.png";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import {Link} from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  PhoneIcon,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon
} from "@/assets/icons/index.js";
const Footer = () => {
  return (
      <footer className="container mt-10">
        <Link to={"/"} className={`w-min mb-[10px] inline-block`}>
          <Logo />
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mb-8">
          <div className="flex flex-col gap-5">
            <p className="text-[14px] text-start text-[#253D4E]">
              Awesome grocery store websitetemplate
            </p>
            <div className="flex items-start md:flex lg:flex gap-[8px] ">
              <button className="pt-[5px]">
                <IoLocationOutline />
              </button>
              <p className="text-[#253D4E] text-[14px] text-start">
                Address: 5171 W Campbell Ave
              </p>
            </div>
            <div className="flex items-start md:flex lg:flex gap-[8px] ">
              <button className="pt-[5px]">
                <FaHeadphonesAlt />
              </button>
              <p className="text-[#253D4E] text-[14px] text-start">
                undefined Kent, Utah 53127 United State
              </p>
            </div>
            <div className="flex items-start md:flex lg:flex gap-[8px] ">
              <button className="pt-[5px]">
                <FaTelegramPlane />
              </button>
              <p className="text-[#253D4E] text-[14px] text-start">
                Email:sale@Nest.com
              </p>
            </div>
            <div className="flex items-start md:flex lg:flex gap-[8px] ">
              <button className="pt-[5px]">
                <CiClock1 />
              </button>
              <p className="text-[#253D4E] text-[14px] text-start">
                Hours:10:00 - 18:00, Mon - Sat
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <b className="text-[22px] text-[#253D4E] font-[700] text-start">
              About Us
            </b>
            <p className="text-[14px] text-[#253D4E] text-start">
              Delivery Information
            </p>
            <p className="text-[14px] text-[#253D4E] text-start">
              Privacy Policy
            </p>
            <p className="text-[14px] text-[#253D4E] text-start">
              Terms & Conditions
            </p>
            <p className="text-[14px] text-[#253D4E] text-start">Contact Us</p>
            <p className="text-[14px] text-[#253D4E] text-start">
              Support Center
            </p>
            <p className="text-[14px] text-[#253D4E] text-start">Careers</p>
          </div>
          <div className="lg:flex flex-col hidden gap-5">
            <b className="text-[22px] text-[#253D4E] font-[700] text-start">
              Account
            </b>
            <p className="text-[14px] text-[#253D4E] text-start">Sign In</p>
            <p className="text-[14px] text-[#253D4E] text-start">My Wishlist</p>
            <p className="text-[14px] text-[#253D4E] text-start">
              Track My Order
            </p>
            <p className="text-[14px] text-[#253D4E] text-start">Help Ticket</p>
            <p className="text-[14px] text-[#253D4E] text-start">
              Shipping Details
            </p>
            <p className="text-[14px] text-[#253D4E] text-start">
              Compare products
            </p>
          </div>
          <div className="md:flex lg:flex  hidden flex-col gap-5">
            <b className="text-[22px] text-[#253D4E] font-[700] text-start">
              Corporate
            </b>
            <p className="text-[14px] text-[#253D4E] text-start">
              Become a Vendor
            </p>
            <p className="text-[14px] text-[#253D4E] text-start">
              Affiliate Program
            </p>
            <p className="text-[14px] text-[#253D4E] text-start">Farm Business</p>
            <p className="text-[14px] text-[#253D4E] text-start">Help Ticket</p>
            <p className="text-[14px] text-[#253D4E] text-start">Farm Careers</p>
            <p className="text-[14px] text-[#253D4E] text-start">Our Suppliers</p>
          </div>
          <div className="md:flex lg:flex  hidden flex-col gap-5">
            <b className="text-[22px] text-[#253D4E] font-[700] text-start">
              Popular
            </b>
            <p className="text-[14px] text-[#253D4E] text-start">
              Become a Vendor
            </p>
            <p className="text-[14px] text-[#253D4E] text-start">
              Affiliate Program
            </p>
            <p className="text-[14px] text-[#253D4E] text-start">Farm Business</p>
            <p className="text-[14px] text-[#253D4E] text-start">Help Ticket</p>
            <p className="text-[14px] text-[#253D4E] text-start">Farm Careers</p>
            <p className="text-[14px] text-[#253D4E] text-start">Cheese</p>
          </div>
          <div className="flex flex-col gap-5">
            <b className="text-[22px] text-[#253D4E] font-[700] text-start">
              Install App
            </b>
            <p className="text-[14px] text-[#253D4E] text-start">
              From App Store or Google Play
            </p>
            <div className="flex gap-2">
              <img className="w-[90px]" src={appstore} alt="" />
              <img className="w-[90px]" src={playstore} alt="" />
            </div>
            <p className="text-[14px] text-[#253D4E] text-start">
              Secured Payment Gateways
            </p>
            <div>
              <img src={paymentMethods} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 items-start mt-[20px] pb-[50px]">
          <div className="flex flex-col gap-1">
            <p className="text-[15px] text-[#0009] text-start">
              © 2022, Nest - HTML Ecommerce Template
            </p>
            <p className="text-[12px] text-start text-[#0009]">
              All rights reserved
            </p>
          </div>
          <div className="flex gap-3">
            <div className="flex gap-2 items-center text-[#ADADAD]">
              <PhoneIcon />
              <div className="flex flex-col ">
                <p className="text-[16px]  sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#3BB77E] font-[700]">
                  1900 - 6666
                </p>
                <p className="text-[12px] text-[#7E7E7E] font-[500]">
                  Working 8:00 - 22:00
                </p>
              </div>
            </div>
            <div className="flex gap-2 text-[#ADADAD] items-center lg:mb-2 mb-2">
              <PhoneIcon />
              <div className="flex flex-col ">
                <p className="text-[16px]  sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#3BB77E] font-[700]">
                  1900 - 8888
                </p>
                <p className="text-[12px] text-[#7E7E7E] font-[500]">
                  24/7 Support Center
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2 items-starttext-[16px]  sm:text-[18px] md:text-[20px] lg: md:items-end lg:items-end">
              <div className="flex gap-2 items-center">
                <p className="text-[14px] font-[500] text-[#253D4E]">Follow Us</p>
                <button className="w-[30px] h-[30px] bg-[#3BB77E] rounded-full text-white flex items-center justify-center">
                  <FacebookIcon />
                </button>
                <button className="w-[30px] h-[30px] bg-[#3BB77E] rounded-full text-white flex items-center justify-center">
                  <TwitterIcon />
                </button>
                <button className="w-[30px] h-[30px] bg-[#3BB77E] rounded-full text-white flex items-center justify-center">
                  <InstagramIcon />
                </button>
                <button className="w-[30px] h-[30px] bg-[#3BB77E] rounded-full text-white flex items-center justify-center">
                  <PinterestIcon />
                </button>
                <button className="w-[30px] h-[30px] bg-[#3BB77E] rounded-full text-white flex items-center justify-center">
                  <YoutubeIcon />
                </button>
              </div>
              <p className="text-[14px] font-[400] text-[#7E7E7E] lg:text-end text-start">
                Up to 15% discount on your first subscribe
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;