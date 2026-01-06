type ContentTitleProps = {
  subTitle?: string;
  title?: string;
};

export const ContentTitle = ({ subTitle, title }: ContentTitleProps) => {
  return (
    <div
      className="title-block"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="200"
    >
      <span className="sub-title">{subTitle}</span>
      <h4 className="title">{title}</h4>
    </div>
  );
};
