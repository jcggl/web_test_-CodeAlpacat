import { SNSType } from './SNSIcon.types';

const SNSIcon = ({
  href = "#",
  alt = "#",
  imgSrc = "https://www.linkedin.com/company/77745265/admin/",
}: SNSType) => {
  return (
    <a
      href={href}
      target={href === "#" ? "" : "_blank"}
      rel="noopener noreferrer"
    >
      <img src={imgSrc} alt={alt} loading="lazy" className="w-full h-full hover:opacity-70 transition-all ease-in-out duration-[250ms]" />
    </a>
  );
};

export default SNSIcon