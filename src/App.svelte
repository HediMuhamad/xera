<script lang="ts">
	import Game from "./Game.svelte"
	import ModeToggler from "./ModeToggler.svelte"
	import { contents } from "./contents"
	import Input from "./Input.svelte"
</script>

<header>
	<ModeToggler />
</header>

<main>
	<Game {contents} />
</main>

<footer>
	<p>
		&copy; {new Date().getFullYear()} <a href="https://roj.im">ڕۆژ</a> &middot;
		<a href="https://github.com/roj1512/xera">سەرچاوە</a>
	</p>
</footer>

<style lang="stylus" global>
	@import 'styles/variables'

	*
		margin 0
		padding 0
		box-sizing border-box
		transition-duration 250ms
		transition-timing-function linear

	html
		&, body
			height 100%

		body
			color dark
			display flex
			padding 2rem
			font-size 1rem
			font-family Estedad
			flex-direction column
			background-color light
			justify-content space-between

	main
		align-self center

	footer
		user-select none
		text-align center

		a
			text-decoration none
			border-bottom 1px solid

			&, &:visited
				color inherit

			&:hover
				background-color light-alt
</style>
