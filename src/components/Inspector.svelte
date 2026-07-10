<script lang="ts">
  import { isNode, isPort, Base } from "@visuallyjs/browser-ui";
  import { InspectorComponent } from "@visuallyjs/browser-ui-svelte";
  import {
    ACTION_TEST, ACTION_MESSAGE, ACTION_CHOICE, ACTION_INPUT, START, END
  } from "../constants";

  const CHOICE_PORT = "choicePort";
  const EDGE = "edge";

  // 2-way prop to share with inspector
  let current:Base|null = $state(null)
  // we derive an internal type to use based on whether the current object is a node, port or edge
  let currentType = $derived(current == null ? null : isNode(current) ? current.data.type as string : isPort(current) ? CHOICE_PORT : EDGE)

</script>

<!-- create inspector component and pass the two-way `current` prop -->
<InspectorComponent bind:current={current}>
	{#if currentType == null}
		<div></div>
	{:else if currentType === START}
		<div></div>
	{:else if currentType === END}
		<div></div>
	{:else if currentType === ACTION_MESSAGE}
		<div class="vjs-chatbot-inspector">
			<span>Message:</span>
			<input type="text" vjs-att="message" placeholder="message" vjs-focus="true" />
		</div>
	{:else if currentType === ACTION_CHOICE}
		<div class="vjs-chatbot-inspector">
			<span>Message:</span>
			<input type="text" vjs-att="message" placeholder="message" vjs-focus="true" />
		</div>
	{:else if currentType === ACTION_TEST}
		<div class="vjs-chatbot-inspector">
			<span>Message:</span>
			<input type="text" vjs-att="message" placeholder="message" vjs-focus="true" />
		</div>
	{:else if currentType === ACTION_INPUT}
		<div class="vjs-chatbot-inspector">
			<span>Message:</span>
			<input type="text" vjs-att="message" placeholder="message" />
			<span>Prompt:</span>
			<input type="text" vjs-att="prompt" placeholder="prompt" />
		</div>
	{:else if currentType === CHOICE_PORT}
		<div class="vjs-chatbot-inspector">
			<span>Label:</span>
			<input type="text" vjs-att="label" vjs-focus="true" placeholder="enter label..." />
		</div>
	{:else if currentType === EDGE}
		<div class="vjs-chatbot-inspector">
			<div>Label</div>
			<input type="text" vjs-att="label" vjs-focus="true" />
		</div>
	{/if}
</InspectorComponent>
