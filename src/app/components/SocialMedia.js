import React from "react";

const SocialMedia = () => {
  return (
    <div className="modal-projects-wrapper">
      <div className="modal-socials">
        {/* INSTAGRAM */}
        <a
          className="modal-socials-link"
          href="https://www.instagram.com/flow_rve/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/Instagram.svg"
            alt="TikTok"
            className="modal-socials-image"
          />
        </a>

        {/* TIK TOK */}
        <a
          className="modal-socials-link"
          href="https://www.tiktok.com/@florent.rve"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/TikTok.svg"
            alt="TikTok"
            className="modal-socials-image"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
