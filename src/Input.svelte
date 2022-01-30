<script lang="ts">
	export let contents: string[]
	export let currLineIndex: number
	export let currCharIndex: number

	$: prevLine = contents[currLineIndex - 1]
	$: currLine = contents[currLineIndex]
	$: nextLine = contents[currLineIndex + 1]
	$: afterNextLine = contents[currLineIndex + 2]

	$: currChar = contents[currLineIndex][currCharIndex]
</script>

<label>
	{#if prevLine}
		<h2><span class="complete">{prevLine}</span></h2>
	{/if}
	<input type="text" name="" on:keydown={console.log} />
	<h2>
		<span class="complete">{currLine.slice(0, currCharIndex)}</span><span
			class="index">{currChar}</span
		>{currLine.slice(currCharIndex + 1, currLine.length)}
	</h2>
	{#if nextLine}
		<h2>
			{nextLine}
		</h2>
	{/if}
	{#if !prevLine}
		<h2>{afterNextLine}</h2>
	{/if}
</label>

<style lang="stylus">
	@import 'styles/variables'

	h2
		line-height: 1.5
		text-align center

	input
		width 1px
		opacity 0
		height 1px
		border none
		outline none
		position absolute

	.complete
		color light-alt

	.index
		background-color light-alt
		animation blink 700ms infinite linear

	@keyframes blink
		50%
			background-color inherit
		
		to
			background-color light-alt
</style>
