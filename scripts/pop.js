document.addEventListener("DOMContentLoaded", function() {
	const filterBtn = document.getElementById("filter-toggle-btn");
	const tagsContainer = document.getElementById("categories-tags-container");

	if (filterBtn && tagsContainer) {
		filterBtn.addEventListener("click", function() {
			// Hace toggle de la clase que muestra los filtros en mobile
			tagsContainer.classList.toggle("active-mobile");
			
			// Cambia el aspecto estético del botón cuando está activo
			filterBtn.classList.toggle("active");
		});
	}
});