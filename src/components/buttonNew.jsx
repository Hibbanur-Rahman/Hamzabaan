import BtnLine from "./buttonLine";

const Button = ({
  content,
  btnCtmBackground,
  boxShadow,
  lineBackground,
  outerBtnBorder,
  innerBtnBorder,
  lineUpperOverlayBg,
}) => {
  return (
    <>
      <div
        className="btn-ctm btn-ctm-new btn rounded-4 m-0 p-0 position-relative overflow-hidden w-auto"
        style={{
          background: btnCtmBackground,
          boxShadow: boxShadow,
        }}
      >
        <div
          className="line-upper-overlay row m-0 p-0 position-absolute w-100 "
          style={{ backgroundColor: lineUpperOverlayBg}}
        ></div>
        <div className="animation-div">
          <div className=" m-0 p-0 w-100 d-flex position-relative">
            <div className="line-group  m-0 p-0 w-100 d-flex">
              <div
                className="line-up"
                style={{ backgroundColor:  lineBackground}}
              ></div>
              <div
                className="line-up"
                style={{ backgroundColor:  lineBackground}}
              ></div>
              <div
                className="line-up"
                style={{ backgroundColor:  lineBackground}}
              ></div>
              <div
                className="line-up"
                style={{ backgroundColor:  lineBackground}}
              ></div>
              <div
                className="line-up"
                style={{ backgroundColor:  lineBackground}}
              ></div>
              <div
                className="line-up"
                style={{ backgroundColor:  lineBackground}}
              ></div>
              <div
                className="line-up"
                style={{ backgroundColor:  lineBackground}}
              ></div>
              <div
                className="line-up"
                style={{ backgroundColor:  lineBackground}}
              ></div>
              <div
                className="line-up"
                style={{ backgroundColor:  lineBackground}}
              ></div>
              <div
                className="line-up"
                style={{ backgroundColor:  lineBackground}}
              ></div>
              <div
                className="line-up"
                style={{ backgroundColor:  lineBackground}}
              ></div>
              <div
                className="line-up"
                style={{ backgroundColor:  lineBackground}}
              ></div>
              <div
                className="line-up"
                style={{ backgroundColor:  lineBackground}}
              ></div>
              <div
                className="line-up"
                style={{ backgroundColor:  lineBackground}}
              ></div>
              <div
                className="line-up"
                style={{ backgroundColor:  lineBackground}}
              ></div>
              <div
                className="line-up"
                style={{ backgroundColor:  lineBackground}}
              ></div>
              <div
                className="line-up"
                style={{ backgroundColor:  lineBackground}}
              ></div>
            </div>
          </div>
        </div>

        <div
          className="outer-btn-border rounded-4 m-0 p-1 overflow-hidden"
          style={{ border:  outerBtnBorder }}
        >
          <div
            className="inner-btn-border  px-3 py-2"
            style={{ border: innerBtnBorder }}
          >
            <h4 className="m-0 p-0 text-light">{content}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Button;
