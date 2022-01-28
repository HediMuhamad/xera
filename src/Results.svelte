<script lang="ts">
	export let wpm: number
	export let accuracy: number
	export let mistakes: number

	accuracy = accuracy || 0

	const twitter = `${wpm} وشە لە خولەکێکدا بەوردیی ${accuracy}% بە تەختەکلیلی کوردی دەنووسم. تۆش بزانە چەندێک خێرایت!`
	const telegram = twitter + "\n" + location.href
</script>

<h2>خێرایی: {wpm} وشە/خولەک</h2>
<h2>وردی: {accuracy}%</h2>
<h2>هەڵەکان: {mistakes}</h2>

<ul>
	<li>
		<h1>
			<a href="https://twitter.com/share?text={twitter}"
				><i class="fab fa-twitter" /></a
			>
		</h1>
	</li>
	<li>
		<h1>
			<a href="https://t.me/share?url={telegram}"
				><i class="fab fa-telegram-plane" /></a
			>
		</h1>
	</li>
</ul>

<style lang="stylus">
	@import 'styles/variables'

	*
		margin 0
		padding 0

	h2
		margin-bottom 1rem

	ul
		display flex
		list-style none
		margin-top 1rem
		align-items center
		justify-content space-evenly

	a
		&, &:visited
			color inherit
		
		&:hover
			color light-alt
</style>
