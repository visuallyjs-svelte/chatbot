<script lang="ts">
  import { uuid, Node } from "@visuallyjs/browser-ui"
  import { type SvelteWrapperProps } from "@visuallyjs/browser-ui-svelte"

  const {
      data, model, vertex
  }:SvelteWrapperProps = $props()

  function addChoice() {
    const p = model.addPort(vertex.id, {
      id: uuid()
    })
    setTimeout(() => model.setSelection(p))
  }

  function removeChoice(id:string) {
    model.removePort(vertex.id, id)
  }

  function inspectChoice(id:string) {
    model.setSelection((vertex as Node).getPort(id))
  }
</script>

<div class="vjs-chatbot-choice" data-vjs-target="true">
  <div class="vjs-delete" onclick={() => model.removeNode(vertex)}></div>
  <span style="padding:0.5rem">{data.message}</span>
  <div class="vjs-choice-add" onclick={addChoice}></div>
  {#each data.choices as c (c.id)}
    <div class="vjs-chatbot-choice-option" data-vjs-source="true" data-vjs-port-type="choice" data-vjs-port={c.id} onclick={() => inspectChoice(c.id)}>
      {c.label}
      <div class="vjs-choice-delete" onclick={() => removeChoice(c.id)}></div>
    </div>
  {/each}
</div>
