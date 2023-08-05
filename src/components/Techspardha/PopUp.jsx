const PopUp = ({ title }) => {
  return (
    <div className="some-text">
      <div className={`popup `} id="popup">
        <div className="popup__content">
          <h2 className="heading-secondary">{title}</h2>
          <h3 className="heading-tertiary">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            Godard health goth green juice +1, helvetica taxidermy synth.
            Brooklyn wayfarers hoodie twee, keffiyeh XOXO microdosing fashion
            axe iPhone bespoke vape. Affogato brooklyn offal meditation raclette
            aesthetic heirloom post-ironic iPhone venmo leggings.
          </p>
          <a href="#" className="button">
            Close Popup
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
