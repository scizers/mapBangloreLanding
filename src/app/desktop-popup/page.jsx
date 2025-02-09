"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import desktopHero from "../../../public/desktopHero.png";
import WAIMG from "../../../public/whatsapp.png";
import DesktopFormComp from "../components/DesktopFormComp";
import { useState } from "react";

export default function DesktopPopup() {
  const router = useRouter();
  const [load, setLoad] = useState(false);

  const handleClose = () => {
    document.cookie = "hasSeenPopup=true; path=/";
    router.push("/desktop");
  };

  return (
    <div className="w-full mx-auto overflow-hidden ">
      <div className="relative h-screen max-h-[1020px]">
        <Image
          alt="hero image"
          src={desktopHero}
          quality={80}
          priority={true}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          loading="eager"
        />

        <div className=" w-[70%] xl:w-[60%] rounded-[8px]  absolute z-20 flex flex-col items-center justify-center  transform -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2">
          <button
            onClick={handleClose}
            className="text-black text-left  pl-20 bg-[#E8D8CB]  w-full py-4 flex items-center mb-4 rounded-t-[8px]"
          >
            <span className="flex items-center">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.80001 25.1735L7.82651 24.2L15.5265 16.5L7.82651 8.80004L8.80001 7.82654L16.5 15.5265L24.2 7.82654L25.1735 8.80004L17.4735 16.5L25.1735 24.2L24.2 25.1735L16.5 17.4735L8.80001 25.1735Z"
                  fill="#161919"
                />
              </svg>
              <span className="ml-2">Close</span>
            </span>
          </button>

          <div className="flex justify-center gap-4 mb-3 text-center ">
            <span className="mt-2">
              <svg
                width="62"
                height="62"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_441)">
                  <path
                    d="M7.5996 46.6857H7.59885C13.0393 47.0607 18.5171 47.2482 23.9978 47.2482C29.4764 47.2482 34.9585 47.0607 40.4003 46.6857C42.0291 46.5705 43.5615 45.8714 44.7163 44.717C45.871 43.5626 46.5703 42.0302 46.6859 40.4015C47.4352 29.4804 47.4352 18.5207 46.6859 7.5996C46.5705 5.97083 45.8713 4.43839 44.7167 3.28379C43.5621 2.1292 42.0297 1.42998 40.4009 1.3146C29.4799 0.564974 18.5204 0.564974 7.59937 1.3146C5.97072 1.42986 4.43834 2.12888 3.28368 3.28325C2.12903 4.43763 1.42965 5.96985 1.314 7.59847C0.564675 18.5196 0.564675 29.4793 1.314 40.4004C1.42936 42.0293 2.12864 43.5619 3.28336 44.7165C4.43808 45.8712 5.97069 46.5704 7.5996 46.6857Z"
                    fill="#F5E8DD"
                  />
                  <path
                    d="M36.75 18.75V34.905C36.7516 35.3909 36.5608 35.8577 36.2193 36.2034C35.8778 36.5491 35.4134 36.7456 34.9275 36.75H13.0725C12.5866 36.7456 12.1222 36.5491 11.7807 36.2034C11.4392 35.8577 11.2484 35.3909 11.25 34.905V18.75H36.75Z"
                    fill="#EDF8FF"
                  />
                  <path
                    d="M14.25 34.905V20.25H11.25V34.905C11.2484 35.3909 11.4392 35.8577 11.7807 36.2034C12.1222 36.5491 12.5866 36.7456 13.0725 36.75H16.0725C15.5866 36.7456 15.1222 36.5491 14.7807 36.2034C14.4392 35.8577 14.2484 35.3909 14.25 34.905Z"
                    fill="#CCDCEB"
                  />
                  <path
                    d="M24 33.75C26.8995 33.75 29.25 31.3995 29.25 28.5C29.25 25.6005 26.8995 23.25 24 23.25C21.1005 23.25 18.75 25.6005 18.75 28.5C18.75 31.3995 21.1005 33.75 24 33.75Z"
                    fill="#FFCB07"
                  />
                  <path
                    d="M34.9275 13.5C35.4134 13.5044 35.8778 13.7009 36.2193 14.0466C36.5608 14.3923 36.7516 14.8591 36.75 15.345V20.25H11.25V15.345C11.2484 14.8591 11.4392 14.3923 11.7807 14.0466C12.1222 13.7009 12.5866 13.5044 13.0725 13.5H34.9275Z"
                    fill="#FF6461"
                  />
                  <path
                    d="M15.75 18.75C15.3522 18.75 14.9706 18.592 14.6893 18.3107C14.408 18.0294 14.25 17.6478 14.25 17.25V13.845C14.2507 13.7292 14.2623 13.6137 14.2846 13.5H13.0725C12.5866 13.5044 12.1222 13.7009 11.7807 14.0466C11.4392 14.3923 11.2484 14.8591 11.25 15.345V20.25H36.75V18.75H15.75Z"
                    fill="#F2524D"
                  />
                  <path
                    d="M18 15V11.25C18 11.0511 17.921 10.8603 17.7803 10.7197C17.6397 10.579 17.4489 10.5 17.25 10.5C17.0511 10.5 16.8603 10.579 16.7197 10.7197C16.579 10.8603 16.5 11.0511 16.5 11.25V15C16.3011 15 16.1103 15.079 15.9697 15.2197C15.829 15.3603 15.75 15.5511 15.75 15.75C15.75 15.9489 15.829 16.1397 15.9697 16.2803C16.1103 16.421 16.3011 16.5 16.5 16.5H18C18.1989 16.5 18.3897 16.421 18.5303 16.2803C18.671 16.1397 18.75 15.9489 18.75 15.75C18.75 15.5511 18.671 15.3603 18.5303 15.2197C18.3897 15.079 18.1989 15 18 15Z"
                    fill="#EDF8FF"
                  />
                  <path
                    d="M24.75 16.5C24.9489 16.5 25.1397 16.421 25.2803 16.2803C25.421 16.1397 25.5 15.9489 25.5 15.75C25.5 15.5511 25.421 15.3603 25.2803 15.2197C25.1397 15.079 24.9489 15 24.75 15V11.25C24.75 11.0511 24.671 10.8603 24.5303 10.7197C24.3897 10.579 24.1989 10.5 24 10.5C23.8011 10.5 23.6103 10.579 23.4697 10.7197C23.329 10.8603 23.25 11.0511 23.25 11.25V15C23.0511 15 22.8603 15.079 22.7197 15.2197C22.579 15.3603 22.5 15.5511 22.5 15.75C22.5 15.9489 22.579 16.1397 22.7197 16.2803C22.8603 16.421 23.0511 16.5 23.25 16.5H24.75Z"
                    fill="#EDF8FF"
                  />
                  <path
                    d="M31.5 15V11.25C31.5 11.0511 31.421 10.8603 31.2803 10.7197C31.1397 10.579 30.9489 10.5 30.75 10.5C30.5511 10.5 30.3603 10.579 30.2197 10.7197C30.079 10.8603 30 11.0511 30 11.25V15C29.8011 15 29.6103 15.079 29.4697 15.2197C29.329 15.3603 29.25 15.5511 29.25 15.75C29.25 15.9489 29.329 16.1397 29.4697 16.2803C29.6103 16.421 29.8011 16.5 30 16.5H31.5C31.6989 16.5 31.8897 16.421 32.0303 16.2803C32.171 16.1397 32.25 15.9489 32.25 15.75C32.25 15.5511 32.171 15.3603 32.0303 15.2197C31.8897 15.079 31.6989 15 31.5 15Z"
                    fill="#EDF8FF"
                  />
                  <path
                    d="M26.25 27.75H24.75V26.25C24.75 26.0511 24.671 25.8603 24.5303 25.7197C24.3897 25.579 24.1989 25.5 24 25.5C23.8011 25.5 23.6103 25.579 23.4697 25.7197C23.329 25.8603 23.25 26.0511 23.25 26.25V28.5C23.25 28.6989 23.329 28.8897 23.4697 29.0303C23.6103 29.171 23.8011 29.25 24 29.25H26.25C26.4489 29.25 26.6397 29.171 26.7803 29.0303C26.921 28.8897 27 28.6989 27 28.5C27 28.3011 26.921 28.1103 26.7803 27.9697C26.6397 27.829 26.4489 27.75 26.25 27.75Z"
                    fill="#EDF8FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_441">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div>
              <h2 className="text-[#A18D7C] text-[34px] leading-[49.13px] text-center font-bold  ">
                BOOK YOUR SPOT
              </h2>
              <p className="text-[18px] leading-[21.94px] text-center text-[#828282]  ">
                You will save 5-10% more if you’re booking <br /> on event day.
              </p>
            </div>
          </div>

          <div className=" w-[70%] pt-5 ">
            <DesktopFormComp
              formName={"popupForm"}
              setLoad={setLoad}
            />
          </div>
          <div className={"whatsAppIcon pb-4"}>
            <a
              id={"waLink"}
              href="https://wa.me/18106769485?text=Hi,%20I%20want%20to%20know%20more%20about%20Bengaluru%20Event"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <Image
                quality={100}
                src={WAIMG}
                width={170}
                height={75}
                alt="whatsapp bot"
              />
            </a>
          </div>
          <div className=" text-left  bg-[#E8D8CB] w-full py-6 rounded-b-[8px]">
            <label
              className={`block cursor-pointer btn ${load && "opacity-50 "}`}
              htmlFor="popupForm-submit"
            >
              {load ? "Submitting..." : "Submit"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
