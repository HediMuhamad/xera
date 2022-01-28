<script lang="ts">
	import _ from "lodash"
	import Input from "./Input.svelte"
	import Results from "./Results.svelte"
	import { areEqual } from "./utils"

	export let contents: string[]

	contents = _.shuffle(contents)

	let time = 1
	let currLineIndex = 0
	let currCharIndex = 0

	let started = false
	let finished = false

	let written = 0
	let mistakes = 0

	$: currLine = contents[currLineIndex]
	$: currChar = currLine[currCharIndex]
	$: wpm = Math.floor(Math.round(written / 5) / time)
	$: accuracy = Math.round(((written - mistakes) / written) * 100)

	window.onkeypress = function (e: any) {
		if (finished) return
		const input = String.fromCharCode(e.charCode)
		if (!started && Number(input) > 0 && Number(input) <= 10) {
			time = Number(input)
		}
		if (areEqual(input, currChar)) {
			if (!started) {
				setTimeout(() => (finished = true), 60 * time * 1000)
				started = true
			}
			if (currLine[currCharIndex + 1] == undefined) {
				currLineIndex++
				currCharIndex = 0
			} else currCharIndex++
			written++
		} else {
			mistakes++
		}
	}
</script>

{#if true}
	<Results {wpm} {accuracy} {mistakes} />
{:else}
	<Input {currCharIndex} {currLineIndex} {contents} />
{/if}
