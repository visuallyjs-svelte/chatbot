<script lang="ts">
  import { isNode, isPort, Base } from "@visuallyjs/browser-ui";
  import { InspectorComponent } from "@visuallyjs/browser-ui-svelte";
  import {
    ACTION_TEST, ACTION_MESSAGE, ACTION_CHOICE, ACTION_INPUT, ACTION_AI, START, END
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
	{:else if currentType === ACTION_AI}
		<div class="vjs-chatbot-inspector">
			<span>Node Label:</span>
			<input type="text" vjs-att="label" placeholder="Analyze & Respond"/>
			<span>Model Selection:</span>
			<select vjs-att="model">
				<option value="gpt-4o">gpt-4o</option>
				<option value="gpt-4o-mini">gpt-4o-mini</option>
				<option value="claude-3-5-sonnet">claude-3-5-sonnet</option>
				<option value="custom-llm-api">custom-llm-api</option>
			</select>
			<span>System Prompt:</span>
			<textarea vjs-att="systemPrompt" rows="3"></textarea>
			<span>User Prompt / Input Binding:</span>
			<textarea vjs-att="userPrompt" rows="3"></textarea>
			<span>Temperature:</span>
			<input type="range" vjs-att="temperature" min="0" max="1" step="0.1"/>
			<span>Max Tokens:</span>
			<input type="number" vjs-att="maxTokens"/>
			<span>Output Variable:</span>
			<input type="text" vjs-att="outputVariable"/>
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
