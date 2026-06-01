 <script lang="ts">
  import { uuid, Node } from "@visuallyjs/browser-ui"
  import type {SvelteWrapperProps} from "@visuallyjs/browser-ui-svelte";
  const {
      data, model, vertex
  }:SvelteWrapperProps = $props()

  function addChoice() {
    const p = model.addPort(vertex.id, {
      id: uuid(),
      label: "Result"
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

<div class="vjs-chatbot-test" data-vjs-target="true">
  <div class="vjs-delete" on:click={() => model.removeNode(vertex.id)}></div>
  <span style="padding:0.5rem">{data.message}</span>
  <div class="vjs-choice-add" on:click={addChoice}></div>
  {#each data.choices as c (c.id)}
    <div class="vjs-chatbot-choice-option" data-vjs-source="true" data-vjs-port-type="choice" data-vjs-port={c.id} on:click|stopPropagation={() => inspectChoice(c.id)}>
      {c.label}
      <div class="vjs-choice-delete" on:click|stopPropagation={() => removeChoice(c.id)}></div>
    </div>
  {/each}
</div>
