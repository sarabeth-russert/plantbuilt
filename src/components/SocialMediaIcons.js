import React from "react";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import { IconContext } from "react-icons";
import { FaTiktok } from "react-icons/fa";

const tikTokIcon = ({ link }) => {
  return (
    <IconContext.Provider
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      value={{ color: "#709425", size: ".85em" }}
    >
      <div style={{ margin: "5px 0 0 3px" }}>
        <FaTiktok />
      </div>
    </IconContext.Provider>
  );
};

const SocialMediaIcons = ({ socialLink }) => {
  const selectIcon = () => {
    if (socialLink.key === "Facebook") {
      return <FacebookIcon />;
    } else if (socialLink.key === "Instagram") {
      return <InstagramIcon />;
    } else if (socialLink.key === "YouTube") {
      return <YouTubeIcon />;
    } else if (socialLink.key === "LinkedIn") {
      return <LinkedInIcon />;
    } else if (socialLink.key === "Twitter") {
      return <TwitterIcon />;
    } else if (socialLink.key === "Website") {
      return <LanguageIcon />;
    } else if (socialLink.key === "Podcast") {
      return <PodcastsIcon />;
    } else if (socialLink.key === "TikTok") {
      return tikTokIcon(socialLink.value);
    }
  };

  return (
    <>
      <IconButton
        color="success"
        href={socialLink.value}
        target="_blank"
        rel="noopener noreferrer"
      >
        {selectIcon()}
      </IconButton>
    </>
  );
};

export default SocialMediaIcons;
