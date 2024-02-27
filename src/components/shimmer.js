const Shimmer = () => (
  <div className="shimmer-card-container">
    {Array(20)
      .fill()
      .map((_, index) => (
        <div className="shimmer-card relative">
          <div className="absolute shimmer-animation w-[90%]"></div>
          <div className="shimmer-photo"></div>
          <div>
            <div className="shimmer-heading"></div>
            <div className="shimmer-subheading"></div>
          </div>
        </div>
      ))}
  </div>
);

export default Shimmer;
