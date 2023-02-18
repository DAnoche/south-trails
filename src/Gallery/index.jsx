import Lightbox from "bs5-lightbox";

const options = {
  keyboard: true,
  size: "fullscreen",
};

document.querySelectorAll(".my-lightbox-toggle").forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const lightbox = new Lightbox(el, options);
    lightbox.show();
  })
);

function Gallery() {
  return (
    <>
      <div>
        <a
          href="https://www.youtube.com/watch?v=k6mFF3VmVAs"
          data-toggle="lightbox"
          data-gallery="mixedgallery"
          class="col-sm-4"
        >
          <img
            src="https://i1.ytimg.com/vi/yP11r5n5RNg/mqdefault.jpg"
            class="img-fluid"
          />
        </a>
        <a
          href="https://unsplash.it/1200/768.jpg?image=257"
          data-toggle="lightbox"
          data-gallery="mixedgallery"
          class="col-sm-4"
        >
          <img src="https://unsplash.it/600.jpg?image=257" class="img-fluid" />
        </a>
        <a
          href="https://vimeo.com/80629469"
          data-remote="https://player.vimeo.com/video/80629469"
          data-toggle="lightbox"
          data-gallery="mixedgallery"
          class="col-sm-4"
        >
          <img
            src="https://i.vimeocdn.com/video/80629469_640.png"
            class="img-fluid"
          />
        </a>
      </div>
    </>
  );
}

export default Gallery;
