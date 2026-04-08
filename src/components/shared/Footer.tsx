import LOGO from "../../assets/icons/header/Logo.svg";
import FB from "../../assets/icons/footer/social_media/Facebook.svg";
import TWITTER from "../../assets/icons/footer/social_media/Twitter.svg";
import INSTAGRAM from "../../assets/icons/footer/social_media/Instagram.svg";
import LINKEDIN from "../../assets/icons/footer/social_media/LinkedIn.svg";
import YOUTUBE from "../../assets/icons/footer/social_media/YouTube.svg";
const Footer = () => {
  const social_media = [
    {
      id: 0,
      icon: FB,
      alt: "facebook icon",
    },
    {
      id: 1,
      icon: TWITTER,
      alt: "twitter icon",
    },
    {
      id: 2,
      icon: INSTAGRAM,
      alt: "instagram icon",
    },
    {
      id: 3,
      icon: LINKEDIN,
      alt: "linkedin icon",
    },
    {
      id: 4,
      icon: YOUTUBE,
      alt: "youtube icon",
    },
  ];
  return (
    <footer className="w-full h-[334px]">
      <div className="w-full px-[167px] h-full">
        <div className="w-full pt-[80px] h-[138px] flex flex-row justify-between">
          <div id="left">
            <div className="w-[174px] h-[45px] flex flex-row gap-[12px] items-center">
              <img src={LOGO} alt="logo" className="w-[45px] h-[45px]" />
              <h2 className="text-[#130E67] font-[500] text-[24px] leading-[100%]">
                Bootcamp
              </h2>
            </div>
            <p className="font-[500] text-[14px] leading-[100%] text-[#130E67] mt-[16px] mb-[24px]">
              Your learning journey starts here! Browse courses to get started.
            </p>
            <div className="w-[177px] h-[19px] flex flex-row gap-[22px]">
              {social_media.map((media) => (
                <img src={media.icon} key={media.id} alt={media.alt} />
              ))}
            </div>
          </div>
          <div id="right"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
