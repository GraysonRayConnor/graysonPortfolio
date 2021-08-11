window.onload = () => {
	const tab_switchers = document.querySelectorAll("[data-switcher]");
	for (let i = 0; i < tab_switchers.length; i++) {
		const tab_switcher = tab_switchers[i];

		const page_id = tab_switcher.dataset.tab;

		tab_switcher.addEventListener("click", () => {
			document.querySelector(".tab.is-active").classList.remove("is-active");

			tab_switcher.classList.add("is-active");

			SwitchPage(page_id);
		});
	}
};

function SwitchPage(page_id) {
	const current_page = document.querySelector(".page.is-active");
	current_page.classList.remove("is-active");
	const next_page = document.querySelector(`.page[data-page="${page_id}"]`);
	next_page.classList.add("is-active");
}

function codeWars() {
	fetch("https://www.codewars.com/api/v1/users/TOOTS").then(data => {
		console.log(data.json());
	});
}

codeWars();
