AFRAME.registerComponent("cursor-listener", {
  schema: {
    selecedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },
  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const placesId = [
      "taj-mahal",
      "budapest",
      "eiffel-tower",
      "new-york-city",
      "tokyo",
    ];
    if (placesId.includes(id)) {
      const placesContainer = document.querySelector("#places-container");
      placesContainer.setAttribute("cursor-listener", {
        selecedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#FFB347",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    this.el.addEventListener("mouseleave", () => {
      const { selecedItemId } = this.data;
      if (selecedItemId) {
        const el = document.querySelector(`#${selecedItemId}`);
        const id = el.getAttribute("id");
        if (id == selecedItemId) {
          this.el.setAttribute("material", {
            color: "#0077CC",
            opacity: 1,
          });
        }
      }
    });
  },
});
