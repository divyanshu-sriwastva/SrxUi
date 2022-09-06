/*
SRX UI - MIUI PREMIUM THEMES
Copyright (C) 2022-2023 Srx Ui Team
This file is a part of < https://github.com/divyanshu-sriwastva/SrxUi.github.io >
*/

const myFunction = () => {
  if (menu.style.display == "flex") {
    menu.style.display = "none";
    foot.style.display = 'flex';
    main.style.display = 'block';
    pad.style.padding = '4rem 8rem';
  }
  else {
    menu.style.display = "flex";
    foot.style.display = 'none';
    pad.style.padding = '0';
    main.style.display = 'none';
  }
}