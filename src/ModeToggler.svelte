<script lang="ts">
	function getMode() {
		return (
			(localStorage.getItem("mode") == "dark" ? "dark" : "light") || "light"
		)
	}

	function getIcon() {
		return getMode() == "dark" ? "fa-moon" : "fa-sun"
	}

	let icon = getIcon()

	function setMode(mode: "dark" | "light") {
		const dark = mode == "light" ? "#222" : "#eee"
		const darkAlt = mode == "light" ? "#333" : "#ccc"
		const light = mode == "light" ? "#eee" : "#222"
		const lightAlt = mode == "light" ? "#ccc" : "#333"
		document.documentElement.style.setProperty("--dark", dark)
		document.documentElement.style.setProperty("--dark-alt", darkAlt)
		document.documentElement.style.setProperty("--light", light)
		document.documentElement.style.setProperty("--light-alt", lightAlt)
		localStorage.setItem("mode", mode)
		icon = getIcon()
	}

	function toggleMode() {
		setMode(getMode() == "dark" ? "light" : "dark")
	}

	setMode(getMode())
</script>

<button on:click={toggleMode}><i class="fa-solid {icon}" /></button>

<style lang="stylus">
	@import './styles/variables'

	button
		width 50px
		border none
		height 50px
		color inherit
		cursor pointer
		background none
		font-size 1.2rem
		border-radius 50px

		&:hover
			background-color light-alt
</style>
