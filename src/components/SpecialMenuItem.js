function SpecialMenuItem(props) {
  return (
    <article className="menuItemCont">
      <div
        style={{ backgroundImage: `url(${props.itemInfo.imgSrc})` }}
        className="spanAll menuItemImages"
      ></div>
      <h1 className="menuItemSubTitle">{props.itemInfo.name}</h1>
      <p className="menuItemPrice">${props.itemInfo.price}</p>
      <p className="spanAll menuItemDesc">{props.itemInfo.desc}</p>
      <span className="spanAll deliveryCont">
        <a className=" menuItemLinks" href={props.itemInfo.linkToOrder}>
          Order a delivery
        </a>
        <svg
          id="orderIconTruck"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path d="M368.6 96l76.8 96H288V96h80.6zM224 80V192H64c-17.7 0-32 14.3-32 32v64c-17.7 0-32 14.3-32 32s14.3 32 32 32H65.1c-.7 5.2-1.1 10.6-1.1 16c0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16h66.3c-.7 5.2-1.1 10.6-1.1 16c0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16H608c17.7 0 32-14.3 32-32s-14.3-32-32-32V224c0-17.7-14.3-32-32-32H527.4L418.6 56c-12.1-15.2-30.5-24-50-24H272c-26.5 0-48 21.5-48 48zm0 288a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm288 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
        </svg>
      </span>
    </article>
  );
}

export default SpecialMenuItem;
