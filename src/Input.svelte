<script lang="ts">
	export let char: string
	export let index: number
	export let content: string
</script>

<label>
	<h1>
		<span class="complete">{content.slice(0, index)}</span><span class="index"
			>{char}</span
		>{content.slice(index + 1, content.length)}
	</h1>
	<input type="text" name="" on:keydown={console.log} />
</label>

<style lang="stylus">
	@import 'styles/variables'

	h1
		text-align center
		line-height: 1.5

	input
		width 1px
		opacity 0
		height 1px
		border none
		outline none
		position absolute

	.complete
		background-color light-alt

	.index
		background-color light-alt
		animation blink 700ms infinite linear

	@keyframes blink
		50%
			background-color inherit
		
		to
			background-color light-alt
</style>
