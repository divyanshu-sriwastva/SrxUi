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
