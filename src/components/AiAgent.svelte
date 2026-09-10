<script lang="ts">
  import { Node } from "@visuallyjs/browser-ui"
  import { type SvelteWrapperProps } from "@visuallyjs/browser-ui-svelte"

  const {
      data, model, vertex
  }:SvelteWrapperProps = $props()

  function inspectChoice(id:string) {
    model.setSelection((vertex as Node).getPort(id))
  }
</script>

<div class="vjs-chatbot-ai" data-vjs-target="true">
  <div class="vjs-delete" onclick={() => model.removeNode(vertex)}></div>
  <div class="vjs-chatbot-ai-header">
    <span class="vjs-chatbot-ai-icon">✨</span>
    <span class="vjs-chatbot-ai-title">{data.label || 'AI Prompt / Agent'}</span>
  </div>
  <div class="vjs-chatbot-ai-body">
    {#each data.choices as c (c.id)}
      <div class="vjs-chatbot-choice-option" data-vjs-source="true" data-vjs-port-type="choice" data-vjs-port={c.id} onclick={() => inspectChoice(c.id)}>
        {c.label}
      </div>
    {/each}
  </div>
</div>
