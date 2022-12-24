import React from 'react'
import { SNSType } from './SNSIcon.types';

const SNSIcon = ({
  href = "#",
  alt = "#",
  imgSrc = "https://www.linkedin.com/company/77745265/admin/",
  w="36",
  h="36"
}: SNSType) => {
  return (
    <a
      href={href}
      target={href === "#" ? "" : "_blank"}
      rel="noopener noreferrer"
    >
      <img src={imgSrc} alt={alt} width={w} height={h} />
    </a>
  );
};

export default SNSIcon