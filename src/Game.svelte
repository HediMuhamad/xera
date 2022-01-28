<script lang="ts">
	import Input from "./Input.svelte"
	import Results from "./Results.svelte"
	import { getRandomContent, areEqual } from "./utils"

	export let contents: string[]

	function newContent() {
		let toReturn = []

		for (let i = 0; i < 4; i++) {
			const content = getRandomContent(contents)
			contents = contents.filter(c => c != content)
			toReturn.push(content)
		}

		return toReturn.join(" ")
	}

	let time = 1
	let index = 0
	let content = newContent()

	let started = false
	let finished = false

	let written = 0
	let mistakes = 0

	$: char = content[index]
	$: wpm = Math.floor(Math.round(written / 5) / time)
	$: accuracy = Math.round(((written - mistakes) / written) * 100)

	window.onkeypress = function (e: any) {
		if (finished) return
		const input = String.fromCharCode(e.charCode)
		if (!started && Number(input) > 0 && Number(input) <= 10) {
			time = Number(input)
		}
		if (areEqual(input, char)) {
			if (!started) {
				setTimeout(() => (finished = true), 60 * time * 1000)
				started = true
			}
			if (content.length == index + 1) {
				index = 0
				content = newContent()
			} else {
				index++
				written++
			}
		} else {
			mistakes++
		}
	}
</script>

{#if finished}
	<Results {wpm} {accuracy} {mistakes} />
{:else}
	<Input {index} {char} {content} />
{/if}
